# Stripe Integration Documentation

This project integrates **Stripe** for payment processing, using both the **frontend** (Next.js) and **backend** (ASP.NET) to manage payments.

---

## Initial Stripe Setup

1. **Create a Stripe Account:**  
   Start by creating a Stripe account at [stripe.com](https://stripe.com).  
   Currently, we are using a **Test profile**. For production, Stripe requires documentation about your corporation.

2. **Obtain API Keys:**  
   In the Stripe **Dashboard**, navigate to the **Developers** section (on the right side). Here, you’ll find:
   - **Publishable Key** (starts with `pk*`)
   - **Secret Key** (starts with `sk*`)

These keys are essential for setting up Stripe on both the client and server sides.

---

## Frontend Setup (Next.js)

### Environment Variables

To work with Stripe on the client side, we store the following keys in the `.env.local` file:

- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`: Holds the Stripe Publishable Key.
- `NEXT_PUBLIC_NEXT_VERCEL_URL`: Stores the URL of the page users are redirected to after a successful payment.

**Note:** Client-side environment variables must start with `NEXT_PUBLIC_` to be accessible in Next.js.

### Installation

We need to install the necessary Stripe packages:

```bash
npm install @stripe/react-stripe-js @stripe/stripe-js stripe
```

### Stripe Integration

1. **Initializing Stripe in React:**  
   In the `PaymentPage` component, we create a `stripePromise` using the `loadStripe()` function from `@stripe/stripe-js`. This takes in the **Publishable Key** and is required for Stripe to function on the frontend.

2. **Using Elements Provider:**  
   Stripe provides pre-built components to handle sensitive credit card information securely. To use these components:

   - Wrap the root of your React app with the **`Elements`** provider.
   - The `Elements` provider must receive a **client secret**, which comes from the backend’s creation of a **Payment Intent**.

3. **Payment Flow Overview:**

   - Stripe’s **Elements** provider allows the secure handling of payment information through its components.
   - The **Payment Element** is rendered to accept and validate various payment methods (credit cards, Google Pay, Apple Pay, etc.). In development (HTTP), only credit card payments are available, but in production (HTTPS), additional methods like Google Pay are enabled.

4. **Secure Payment Handling:**  
   All payment data is securely processed by Stripe’s APIs. The backend listens for payment events through webhooks and updates the payment status accordingly.

---

## Backend Setup (ASP.NET)

### Environment Variables

The backend requires the following environment variables:

- **STRIPE_SECRET_KEY**: Your Stripe Secret Key, used for authenticating requests.
- **STRIPE_ENDPOINT_SECRET**: A secret used to validate webhook events from Stripe.

### Stripe SDK Setup

1. Install the **Stripe.net** NuGet package to integrate Stripe in the backend.
2. Register **StripeClient** in the Dependency Injection (DI) container as a singleton. This client uses the `STRIPE_SECRET_KEY` for Stripe interactions.

Additionally, register the following services in the DI container:

- **StripeCustomerService**
- **StripePaymentIntentService** (registered as scoped services)

---

## Payment Endpoints

The backend includes three endpoints related to Stripe payment processing:

### 1. `api/Payment/{tourId}` – Creating Payment Intents

This endpoint:

- **Creates a Payment Intent**: Initializes the payment process and creates a corresponding **Payment** entity with a "Pending" status.
- **Customer Management**: Checks if the user already has a Stripe customer account. If they do, the existing account is used; otherwise, a new customer is created and saved in the database.
- **Tracking Payments**: The Stripe `customerId` is stored in the Payment Intent for future reference, allowing us to track all user transactions.

### 2. `api/Payment/webhook` – Handling Stripe Webhooks

This endpoint is triggered by Stripe's webhook events. To enable this:

1. Go to **Developers > Webhooks** in the Stripe Dashboard.
2. Create a new endpoint by specifying the URL for the webhook in our backend, and select the event to listen for (`payment_intent.succeeded`).

#### Webhook Validation

The webhook sends a secret (`STRIPE_ENDPOINT_SECRET`) to verify the authenticity of the request. When the event is triggered, the backend:

- Verifies the event using the secret.
- Updates the corresponding **Payment** entity’s status to "Succeeded".
- Creates a **UserTours** entity to finalize the booking.

### 3. `api/Payment/free` – Handling Free Tours

For free tours:

- This endpoint validates whether the selected tour is free.
- If confirmed, it bypasses the payment process and directly creates both the **Payment** and **UserTours** entities.

---

## Summary of Key Concepts

- **Stripe Elements:** Secure UI components provided by Stripe to handle payment details.
- **Payment Intents API:** A backend service that manages the payment process and lifecycle.
- **Webhooks:** A method for the backend to listen for payment events and handle logic upon completion.

---

## Deployment Considerations

- On the production environment (HTTPS), additional payment methods like Google Pay and Apple Pay are available with slight configuration changes.
- Ensure both the frontend and backend are set up with proper environment variables for smooth Stripe integration.
