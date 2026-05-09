# Razorpay Payment Integration using ReactJS

This project demonstrates a complete Razorpay Payment Gateway Integration using ReactJS for the frontend and a backend service for secure order creation and payment verification.

The application follows the standard and secure Razorpay payment workflow used in real-world production systems.

---

# Project Architecture

```text
React Frontend
      ↓
Backend API (Node/Express or Spring Boot)
      ↓
Razorpay Server APIs
      ↓
Razorpay Checkout Popup
      ↓
Payment Verification
```

---

# Payment Flow Overview

```text
Click Pay
   ↓
Call Backend
   ↓
Create Razorpay Order
   ↓
Receive Order ID
   ↓
Open Razorpay Checkout
   ↓
User Pays
   ↓
Receive payment_id + signature
   ↓
Verify on Backend
   ↓
Payment Success
```

---

# Step-by-Step Logic Explanation

---

# 1. User Clicks “Pay Now”

The payment process starts when the user clicks the payment button.

```html
<button onClick={handlePayment}>
   Pay Now
</button>
```

This triggers the main payment function in React.

---

# 2. Frontend Calls Backend API

The frontend should NEVER directly create Razorpay orders using secret keys.

Instead, React sends a request to the backend:

```javascript
axios.post("/create-order", {
   amount: 500
})
```

## Why Backend Order Creation?

Because:

- Razorpay Secret Key must remain secure
- Prevents payment tampering
- Ensures secure transaction processing

---

# 3. Backend Creates Razorpay Order

The backend creates an order using Razorpay SDK.

```javascript
const Razorpay = require("razorpay");

const razorpay = new Razorpay({
   key_id: process.env.KEY_ID,
   key_secret: process.env.KEY_SECRET
});

const options = {
   amount: 50000,
   currency: "INR",
   receipt: "receipt_order_1"
};

const order = await razorpay.orders.create(options);
```

---

# Important Note

Razorpay accepts amount in paise.

```text
₹500 = 50000 paise
```

Backend returns:

```json
{
   "id": "order_xyz"
}
```

---

# 4. React Opens Razorpay Checkout

React receives the order details and configures Razorpay Checkout.

```javascript
const options = {
   key: "rzp_test_xxx",
   amount: order.amount,
   currency: "INR",
   name: "Your Company",
   description: "Test Transaction",
   order_id: order.id,
};
```

Then opens the Razorpay popup:

```javascript
const razor = new window.Razorpay(options);
razor.open();
```

---

# 5. User Completes Payment

Razorpay securely handles payment processing.

Supported methods:

- UPI
- Credit Card
- Debit Card
- Wallet
- Net Banking

The application never directly handles card details.

---

# 6. Razorpay Returns Payment Response

After successful payment:

```javascript
handler: function(response) {
   console.log(response);
}
```

Response contains:

```json
{
   "razorpay_payment_id": "pay_xxxxx",
   "razorpay_order_id": "order_xxxxx",
   "razorpay_signature": "signature_xxxxx"
}
```

These values are essential for verification.

---

# 7. Payment Verification (MOST IMPORTANT STEP)

This is the core security layer.

Without verification:

- Fake payment success responses could be generated
- Payment status could be manipulated

---

# Signature Verification Logic

Backend generates signature using:

```text
HMAC SHA256
```

Logic:

```javascript
generated_signature =
   HMAC_SHA256(order_id + "|" + payment_id, secret)
```

Then compare with:

```javascript
razorpay_signature
```

If signatures match:

```text
Payment is genuine
```

Else:

```text
Payment tampered
```

---

# Core Security Principle

```text
Frontend cannot be trusted
Backend verification is mandatory
```

This prevents:

- Fake payments
- Amount modification
- Replay attacks
- Forged payment IDs

---

# Important Components in Project

---

# Frontend Components

## Payment Button

```html
<button>Pay</button>
```

## Axios API Call

```javascript
axios.post()
```

## Razorpay Checkout

```javascript
new window.Razorpay(options)
```

## Success Handler

```javascript
handler(response)
```

---

# Backend Components

## Razorpay Instance

```javascript
new Razorpay({
   key_id,
   key_secret
})
```

## Order Creation API

```text
/orders
```

## Payment Verification API

```text
/verify
```

---

# Why Order ID is Important

Using Razorpay Orders API provides:

- Better security
- Prevents amount tampering
- Links payment to transaction
- Enables refunds
- Supports signature verification

Without Order ID:

```text
Payments may auto-refund
```

---

# Environment Variables

```env
RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
```

## Frontend Uses

```text
KEY_ID only
```

## Backend Uses

```text
KEY_SECRET privately
```

---

# Common Mistakes Avoided

## Never expose Secret Key in React

Unsafe practice.

---

## Never skip backend verification

Major security risk.

---

## Never trust frontend amount

Users can modify it.

---

# Possible Production Enhancements

---

# Database Storage

Store:

- order_id
- payment_id
- customer info
- payment status

---

# Razorpay Webhooks

Automatically receive events like:

```text
payment.captured
payment.failed
refund.processed
```

---

# Payment Retry

Allow retry for failed transactions.

---

# Invoice Generation

Generate PDF invoice automatically.

---

# Email Notifications

Send payment receipt to customer.

---

# Production-Level Architecture

```text
React App
   ↓
API Gateway
   ↓
Payment Service
   ↓
Razorpay
   ↓
Webhook Verification
   ↓
Database Update
   ↓
Notification Service
```

---

# Technologies Used

| Layer | Technology |
|---|---|
| Frontend | ReactJS |
| API Calls | Axios |
| Payment Gateway | Razorpay |
| Backend | Node.js / Express |
| Security | HMAC SHA256 |
| Checkout UI | Razorpay Checkout |

---

# Why Razorpay is Easy to Integrate

The biggest advantage:

```text
Razorpay handles PCI compliance
```

So the application does NOT store:

- Card numbers
- CVV
- Banking credentials

This greatly reduces security complexity.

---

# Official References

- Razorpay Node.js Integration Docs  
  https://razorpay.com/docs/payments/server-integration/nodejs/integration-steps/

- Razorpay React Integration  
  https://www.npmjs.com/package/react-razorpay

- Razorpay Official Website  
  https://razorpay.com/

---

# Summary

This project demonstrates a secure and scalable payment gateway integration using:

- ReactJS
- Razorpay Checkout
- Backend Order Creation
- Signature Verification
- Secure Payment Processing

It follows the same architecture used in modern production payment systems.

---

---
````
