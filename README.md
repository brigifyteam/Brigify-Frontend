# Bridgify - Bridging the Gap Between Learning and Earning

Bridgify is a platform designed to connect learners, mentors, and employers, facilitating professional growth and career opportunities.

## Implemented Features

### Sign-In (Registration) Flow
- **Multi-Step Onboarding**: A smooth, structured sign-up process that guides users through role selection and account setup.
- **Role-Based Profiles**: Tailored registration forms for three distinct user types:
    - **Learners**: Focused on skill acquisition and career entry.
    - **Mentors**: Share expertise and guide the next generation of talent.
    - **Employers**: Connect with vetted candidates and post opportunities.
- **Smart Validation**: Real-time form validation and error handling for a seamless user experience.
- **Security First**: Integrated password strength indicator to ensure robust account protection.

### Login Flow
- **Secure Access**: Simple and secure email/password authentication.
- **Forgot Password**: Integrated support for account recovery.

### Social Connectivity
- Support for one-click authentication via **Google** and **LinkedIn**.

---

## Reusable Components Created:

1. **Button**: A highly flexible component supporting various styles (primary, secondary), sizes, and icon integrations.
2. **Input**: A stylized input field with support for icons, labels, validation errors, and special actions (like 'Forgot Password').
3. **RoleSelector**: An interactive, card-based selection tool for choosing user personas.
4. **SocialLogin**: A dedicated section for social authentication providers, easily pluggable into any auth screen.
5. **Layout**: A master wrapper component that maintains consistent page structure and branding across the application.

---

## Endpoints Required:

The frontend is prepared to integrate with the following backend services:

- `POST /api/auth/register`: To handle the creation of new user accounts based on role-specific data.
- `POST /api/auth/login`: To authenticate users and provide access tokens.
- `POST /api/auth/social`: To process authentication callbacks from Google and LinkedIn.
- `POST /api/auth/forgot-password`: To trigger password reset procedures.

---

## Technical Stack
- **Frontend**: React.js with Vite
- **Styling**: Tailwind CSS for modern, responsive UI design
- **Icons**: Lucide React
- **Animations**: Custom CSS animations for a premium feel || framer motion
