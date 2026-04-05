# Next.js Full Implementation Guide for Admin Panel

This guide takes you step-by-step through implementing the new Admin API within your Next.js application, from fixing the base fetcher to writing the actual React components.

## Step 1: Set up Environment Variables

Open your `.env.local` (or `.env`) file in your project root and add your backend API endpoint URL:

```env
NEXT_PUBLIC_BACKEND_API=http://localhost:<PORT>/api/v1
```
*(Replace `<PORT>` with your backend's actual port, like `5000` or `8080`)*

## Step 2: Fix the API Utility (`src/lib/api.js`)

Your current API wrapper hardcodes `Content-Type: application/json` and `JSON.stringify(body)`. This completely breaks when we try to upload images using `FormData`. 

We must update it so that if the `body` is an instance of `FormData`, it allows the browser to handle the Content-Type automatically.

**Replace the code in `src/lib/api.js` with this:**

```javascript
const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_API;

export async function api(endpoint, options = {}) {
    const { method = "GET", headers = {}, body, ...rest } = options;

    let token = null;
    if (typeof window !== "undefined") {
        token = localStorage.getItem("token");
    }

    // Determine if the body is FormData (used for image uploads)
    const isFormData = typeof window !== "undefined" && body instanceof FormData;

    // Set up default headers
    const defaultHeaders = {
        ...(token ? { "Authorization": `Bearer ${token}` } : {}),
        ...headers,
    };

    // ONLY set application/json if it's not FormData
    if (!isFormData) {
        defaultHeaders["Content-Type"] = "application/json";
    }

    const res = await fetch(`${BASE_URL}/${endpoint}`, {
        method,
        headers: defaultHeaders,
        // If it's FormData, pass it directly; otherwise stringify if body exists
        body: isFormData ? body : (body ? JSON.stringify(body) : null),
        ...rest
    });

    if (res.status === 401 && typeof window !== "undefined") {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.location.href = "/admin/login";
    }

    if (!res.ok) {
        const error = await res.json().catch(() => ({}));
        throw new Error(error.message || "Something went wrong");
    }

    return res.json();
}
```

## Step 3: Admin Login Component

You need a page where the admin logs in to receive the JWT token. 
This file would be something like `src/app/admin/login/page.js`.

```jsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/lib/api"; // Adjust the import path if needed

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // Makes a POST /auth/login request with JSON
      const res = await api("auth/login", {
        method: "POST",
        body: { username, password },
      });

      // Store the token and redirect
      localStorage.setItem("token", res.token);
      
      // Redirect to the dashboard
      router.push("/admin"); 
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex bg-gray-100 min-h-screen items-center justify-center">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl mb-4 font-bold">Admin Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        
        <input 
          type="text" 
          placeholder="Username" 
          value={username} onChange={(e) => setUsername(e.target.value)} 
          className="border p-2 w-full mb-4 rounded" 
          required 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} onChange={(e) => setPassword(e.target.value)} 
          className="border p-2 w-full mb-4 rounded" 
          required 
        />
        
        <button type="submit" className="bg-blue-600 text-white w-full p-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
}
```

## Step 4: Creating a New Faculty Member (With Image Upload)

This requires a form capable of selecting a file. Let's create a simplified example for `src/app/admin/faculty/add/page.js` (or you can use this structure in a Modal component).

```jsx
"use client";

import { useState } from "react";
import { api } from "@/lib/api";
import { useRouter } from "next/navigation";

export default function AddFacultyForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // 1. Gather data from the form
    const formElement = e.target;
    // FormData automatically reads inputs with 'name' attributes
    const formData = new FormData(formElement); 
    
    // We can also manually append or override things if needed:
    // formData.append('departmentId', 'SomeID');

    try {
      // 2. Send request to the fixed api() wrapper
      // Notice we pass formData directly into body!
      await api("faculties", {
        method: "POST",
        body: formData,
      });

      alert("Faculty created successfully!");
      router.push("/admin/faculty"); // Go back to the table
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Add New Faculty</h1>
      {error && <div className="text-red-500 mb-4">{error}</div>}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-lg">
        {/* Name matches the backend API fields exactly! */}
        <input 
          type="text" name="departmentId" placeholder="Department ID (e.g. 2)" 
          className="border p-2" required 
        />
        <input 
          type="text" name="name" placeholder="Full Name" 
          className="border p-2" required 
        />
        <input 
          type="text" name="designation" placeholder="Designation (e.g. Professor)" 
          className="border p-2" 
        />
        <input 
          type="text" name="qualification" placeholder="Qualification (e.g. Ph.D)" 
          className="border p-2" 
        />
        <input 
          type="email" name="email" placeholder="Email Address" 
          className="border p-2" 
        />
        
        {/* Image File Input */}
        <input 
          type="file" name="image" accept="image/*" 
          className="border p-2" 
        />

        <button 
          type="submit" 
          disabled={loading}
          className="bg-green-600 text-white p-2 rounded w-32 disabled:bg-gray-400"
        >
          {loading ? "Uploading..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
```

## Step 5: Displaying the Faculty List

To fetch the data, we continue using the `api` utility. Here's a stripped-down example for `src/app/admin/faculty/page.js`:

```jsx
"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";

export default function FacultyList() {
  const [faculties, setFaculties] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadFaculties = async () => {
    try {
      const response = await api("faculties"); // defaults to GET
      setFaculties(response.data || []);
    } catch (err) {
      console.error("Failed to load faculties", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadFaculties();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Are you sure?")) return;
    
    try {
      await api(`faculties/${id}`, { method: "DELETE" });
      setFaculties(faculties.filter(f => f._id !== id));
    } catch (err) {
      alert(err.message);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Faculty Directory</h1>
      
      <div className="grid grid-cols-3 gap-4">
        {faculties.map((faculty) => (
          <div key={faculty._id} className="border rounded p-4 flex flex-col items-center">
            {faculty.image ? (
              <img src={faculty.image} alt={faculty.name} className="w-24 h-24 rounded-full object-cover mb-4" />
            ) : (
              <div className="w-24 h-24 bg-gray-300 rounded-full mb-4"></div>
            )}
            
            <h3 className="font-bold text-lg">{faculty.name}</h3>
            <p className="text-gray-600 mb-4">{faculty.designation}</p>
            
            <button 
              onClick={() => handleDelete(faculty._id)} 
              className="mt-auto bg-red-500 text-white px-4 py-1 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
```

### Wrapping Up

If you follow the patterns seen above (especially skipping manual JSON/headers for images and using `api()` consistently), the frontend logic cleanly detaches from all the structural changes made in the new backend integration!
