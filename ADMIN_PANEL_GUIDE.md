# Admin Panel API Integration Guide

Welcome to the Admin Panel API Integration Guide. This document outlines how the React Admin Panel connects to and interacts with the newly restructured backend API.

## 1. Environment Configuration

All API requests from the Admin Panel must be prefixed with the base API URL provided by the backend.

**Base URL:**
```text
NEXT_PUBLIC_API_BASE_URL=http://localhost:<PORT>/api/v1
```

---

## 2. Authentication Flow

The Admin Panel relies on JWT authentication. The token received upon login must be stored securely and attached to all subsequent protected API requests.

### Admin Login
- **Endpoint:** `POST /auth/login`
- **Request Format:** `application/json`
- **Payload Example:**
    ```json
    {
      "username": "admin123",
      "password": "mysecurepassword"
    }
    ```
- **Action:** On success (`200 OK`), the API responds with a token. Extract this token and store it (e.g., in `localStorage` or cookies) to authorize session actions.

### Admin Registration (Initial Setup)
- **Endpoint:** `POST /auth/register`
- **Request Format:** `application/json`
- **Payload Example:**
    ```json
    {
      "username": "admin123",
      "password": "mysecurepassword",
      "role": "admin"
    }
    ```
- **Description:** Used to create new administrators. This endpoint should be protected, hidden, or removed in a production environment after the initial setup.

---

## 3. Managing Faculties

The Faculty API supports JSON for reading data and **requires** `multipart/form-data` when writing data to support direct image uploads. 

### Fetching Faculties
- **Endpoint:** `GET /faculties`
- **Filtering:** Filter faculties by appending a query string for the department: `?departmentId=2`.
- **Response Handling:** The endpoint returns `{ success: true, count: number, data: [...] }`. Note that the `image` URL is now a fully resolved Cloudinary URL.

### Fetching a Single Faculty
- **Endpoint:** `GET /faculties/:id`
- **Response:** Returns the specific faculty details within the `data` object.

### Creating a New Faculty 
- **Endpoint:** `POST /faculties`
- **Request Format:** `multipart/form-data`
- **Critical Implementation Detail:** When submitting images, you cannot use an `application/json` body. Use the browser's `FormData` API instead:
    ```javascript
    const formData = new FormData();
    formData.append('departmentId', '2'); // Required
    formData.append('name', 'Dr. Durbha Srinivas'); // Required
    formData.append('designation', 'Professor & Head');
    formData.append('qualification', 'B.E, M.Tech, Ph.D');
    formData.append('email', 'drdurbha@gmail.com');
    
    // Attach the file if an image was selected
    if (fileInput.files[0]) {
      formData.append('image', fileInput.files[0]); 
    }

    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/faculties`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}` 
        // Do NOT manually set the 'Content-Type' header here. 
        // The browser will automatically set it to multipart/form-data with the correct boundaries.
      },
      body: formData
    });
    ```

### Updating an Existing Faculty
- **Endpoint:** `PUT /faculties/:id`
- **Request Format:** `multipart/form-data`
- **Behavior:** Submit `FormData` containing the fields you wish to update. If a new `image` file is included, the backend will automatically upload it to Cloudinary and **replace/delete** the old image to ensure no orphaned files remain.

### Deleting a Faculty
- **Endpoint:** `DELETE /faculties/:id`
- **Behavior:** This removes the specific faculty record from the database and synchronously triggers the removal of their attached image from Cloudinary to preserve storage space.

---

## 4. Security & Deployment Safeguards

The backend has been enhanced for production readiness. Keep these safeguards in mind when adjusting the Admin Panel UI/UX:

- **Rate Limiting:** The API strictly enforces a maximum of **100 requests per 15 minutes** per IP Address.
  - **Action Item:** Ensure the Admin Panel implements global Axios/Fetch interceptor-level error handling that catches `429 Too Many Requests` responses and gracefully alerts the user instead of failing silently.
- **CORS Availability:** Cross-Origin Resource Sharing is enabled natively. Make sure your production Admin Panel frontend URL is explicitly added to the backend CORS whitelist if the backend isn't set to wildcard (`*`) access.
- **Helmet Headers:** The backend returns enhanced HTTP security headers to ensure safe transport. While this requires no frontend code changes, it mandates that your requests operate seamlessly under modern web standards.
