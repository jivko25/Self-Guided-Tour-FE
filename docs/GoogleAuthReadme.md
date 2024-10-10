# Google Authentication Integration Documentation

This project integrates **Google OAuth** for user authentication, using both the **frontend** (Next.js) and **backend** (ASP.NET) to handle login with Google.

---

## Initial Setup

1. **Create a Google Cloud Project:**  
   Go to the [Google Cloud Console](https://console.cloud.google.com/) and create a new project.

2. **Enable OAuth and API Services:**  
   After creating the project, enable the necessary **OAuth** and **API services**.

3. **Create OAuth Credentials:**  
   Generate **OAuth Credentials** and make sure to specify your redirect URIs, including the URL of your deployed application.

4. **Obtain Client ID and Client Secret:**  
   After creating the credentials, you will be provided with a **Client ID** and **Client Secret**. These will be used for the OAuth setup.

---

## Frontend Setup (Next.js)

### Environment Variables

To work with Google OAuth on the client side, we store the following key in the `.env.local` file:

- `NEXT_PUBLIC_GOOGLE_CLIENT_ID`: Holds the Google OAuth Client ID.

### Installation

Install the required Google OAuth package:

```bash
npm install @react-oauth/google
```

### Google OAuth Integration

1. **GoogleOAuthProvider:**  
   This provider is imported from the `@react-oauth/google` library. It wraps your application or components that use Google login. The provider enables Google OAuth by using the **Client ID** from the environment variable (`NEXT_PUBLIC_GOOGLE_CLIENT_ID`).

2. **useGoogleLogin Hook:**  
   This hook is also provided by the `@react-oauth/google` library and simplifies the process of implementing Google OAuth in React applications.

   Key features:

   - **Trigger Login:** The hook returns a function that, when called (e.g., on a button click), initiates the Google OAuth login process.
   - **Response Handling:** It provides two callbacks:
     - `onSuccess`: Called when the login is successful, receiving a response object containing user information and tokens.
     - `onError`: Called when the login fails, allowing you to handle errors gracefully.

3. **Integration with Google OAuth:**  
   The `useGoogleLogin` hook abstracts away the details of the OAuth flow, making it easier to integrate Google login into your app without managing the complexities of authentication.

4. **Successful Login:**  
   After a successful login, you receive a **response object** with user information. This information is then sent to the backend for further processing.

---

## Backend Setup (ASP.NET)

### Endpoint: `api/Auth/google-signin`

1. **idToken Handling:**  
   This endpoint accepts an **idToken** from the response object that was generated by the Google API on the frontend.

2. **Token Validation:**  
   The backend validates the `idToken` using the **Google API** endpoint:  
   `https://www.googleapis.com/oauth2/v2/userinfo`

3. **Successful Validation:**  
   Upon successful validation, Google returns the user's credentials. At this point:

   - The backend checks if an account already exists for the provided email.
   - If an account exists, the user is logged in.
   - If no account exists, a new account is created. The **hasPassword** and **isExternalUser** fields are set accordingly on the `ApplicationUser` entity.

4. **Authentication Flow:**  
   After successful validation and account creation (if needed), the authentication process continues the same way as with a regular account.

---

## Summary of Key Concepts

- **GoogleOAuthProvider:** Provides the client-side environment for Google OAuth login.
- **useGoogleLogin Hook:** Simplifies Google login integration with response handling for success and error.
- **idToken Validation:** The backend verifies the token received from Google using Google's API, ensuring the authentication is legitimate.
- **Account Management:** The backend either logs in the user or creates a new account based on the email provided by Google.