const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_API || 'https://nbkrist-api.onrender.com/api/v1';

export async function api(endpoint, options = {}) {
    const { method = "GET", headers = {}, body, ...rest } = options;

    let token = null;
    if (typeof window !== "undefined") {
        token = localStorage.getItem("token");
    }

    // Check if the body is explicitly FormData
    const isFormData = typeof window !== "undefined" && body instanceof FormData;

    // Dynamically build headers
    const defaultHeaders = {
        ...(token ? { "Authorization": `Bearer ${token}` } : {}),
        ...headers,
    };

    // If it's NOT FormData, strictly pass as JSON and stringify body
    if (!isFormData) {
        defaultHeaders["Content-Type"] = "application/json";
    }

    const res = await fetch(`${BASE_URL}/${endpoint}`, {
        method,
        headers: defaultHeaders,
        body: isFormData ? body : (body ? JSON.stringify(body) : null),
        ...rest
    });

    // Handle Unauthorized or Expired Tokens safely without causing a routing loop
    if (res.status === 401 && typeof window !== "undefined") {
        localStorage.removeItem("token");
        localStorage.removeItem("userRole");
        // Use an absolute path to prevent redirect bugs when deep in nested routes
        window.location.href = "/admin/login"; 
    }

    if (!res.ok) {
        let error;
        try {
            error = await res.json();
        } catch(e) {
            error = { message: "Something went wrong" };
        }
        throw new Error(error.message || "Failed to fetch data.");
    }

    return res.json();
}
