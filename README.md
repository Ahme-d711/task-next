# Next.js Authentication Application

A production-ready Next.js application implementing a complete authentication flow with API integration, responsive UI design, and secure token management.

## Overview

This application fulfills all requirements for the Frontend Task, including user registration, login, email verification, and a protected dashboard. The implementation follows Next.js best practices with proper API integration, form validation, and responsive design.

## Task Requirements Implementation

### Authentication Flow

✅ **Register Page**
- Full Name field with validation
- Email field with email format validation
- Password field with requirements (minimum 8 characters, must contain letter and @ symbol)
- Phone Number with integrated Country Code selector
- Country Code dropdown with 17+ countries (default: UAE +971)
- Form validation using Zod schema
- API integration with error handling

✅ **Login Page**
- Email and Password authentication
- Form validation and error handling
- API integration with proper error messages
- Token storage in localStorage upon successful login
- Automatic redirect to dashboard after authentication

✅ **Verify Account Page**
- 6-digit verification code input
- OTP input boxes with auto-focus navigation
- Test verification code: `123456`
- Resend verification code functionality
- API integration for email verification

✅ **Dashboard**
- Protected route requiring authentication
- Displays personalized welcome message: "Welcome, [User Name]"
- Token-based authentication using localStorage
- Automatic redirect to login if not authenticated

### User Interface

✅ **Responsive Design**
- Fully responsive layout for desktop and mobile devices
- Pixel-perfect implementation matching provided UI mockups
- Mobile-first approach with breakpoint optimization
- Consistent design system using shadcn/ui components

✅ **UI Components**
- Modern, clean interface
- Accessible form components
- Loading states and error handling
- Smooth transitions and animations

### API Integration

✅ **Endpoints Implemented**
- `POST /auth/register` - User registration
- `POST /auth/login` - User authentication
- `POST /auth/verify-email` - Email verification
- `POST /auth/verify-email/resend-code` - Resend verification code
- `GET /auth/user-data` - Fetch authenticated user data

✅ **API Features**
- Axios HTTP client with interceptors
- Proper error handling and user feedback
- Token management and automatic token injection
- Request/response interceptors for authentication

## Tech Stack

- **Framework**: Next.js 16.1.1 (App Router)
- **UI Library**: shadcn/ui components
- **Form Management**: React Hook Form with Zod validation
- **State Management**: Zustand with localStorage persistence
- **HTTP Client**: Axios
- **Styling**: Tailwind CSS
- **Type Safety**: TypeScript

## Prerequisites

- Node.js 18 or higher
- npm, yarn, pnpm, or bun package manager

## Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd task-next
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_API_URL=your_api_base_url
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Access the application**
   
   Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
app/
├── (dashboard)/          # Authentication routes (login, register, verify, dashboard)
│   ├── login/
│   ├── register/
│   ├── verify/
│   └── dashboard/
├── (main)/              # Public routes with navigation
│   └── layout.tsx       # Layout with Navbar & Footer
├── layout.tsx           # Root layout with providers
└── providers.tsx        # Global context providers

features/
├── auth/                # Authentication feature module
│   ├── components/      # LoginForm, RegisterForm, VerifyForm
│   ├── hooks/          # useLogin, useRegister, useVerify
│   ├── actions/        # API service functions
│   ├── schemas/        # Zod validation schemas
│   ├── stores/         # Zustand auth store
│   └── types/          # TypeScript type definitions
└── dashboard/          # Dashboard feature module

components/
├── shared/             # Navbar, Footer components
└── ui/                 # shadcn/ui component library
```

## Authentication Flow

1. **Registration**: User fills out registration form with all required fields
2. **Email Verification**: User enters 6-digit verification code (test code: `123456`)
3. **Login**: User authenticates with email and password
4. **Token Storage**: Authentication token is saved to localStorage
5. **Dashboard Access**: User is redirected to dashboard showing personalized welcome message

## Testing

- **Verification Code**: Use `123456` for testing email verification flow
- **Test Credentials**: Use any valid credentials from your API backend

## Build & Deployment

### Production Build

```bash
npm run build
npm start
```

### Deploy to Vercel

1. Push your code to a GitHub repository
2. Import the repository in Vercel dashboard
3. Configure the `NEXT_PUBLIC_API_URL` environment variable
4. Deploy the application

The application will be available at your Vercel deployment URL.

## Key Features

- **Secure Authentication**: Token-based authentication with localStorage persistence
- **Form Validation**: Comprehensive client-side validation using Zod schemas
- **Error Handling**: User-friendly error messages and loading states
- **Responsive Design**: Mobile and desktop optimized layouts
- **Type Safety**: Full TypeScript implementation
- **Code Organization**: Feature-based architecture with separation of concerns
- **API Integration**: Complete integration with backend authentication APIs

## License

This project is private and proprietary.
