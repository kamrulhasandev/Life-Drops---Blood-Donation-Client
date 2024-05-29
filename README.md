# Blood Donation Website Frontend

This is the frontend documentation for the Blood Donation Website. The frontend is built using Next.js, Tailwind CSS, React Icons, and TypeScript.

## Live Demo

[Live Demo Link](https://lifedrops-delta.vercel.app) 

## Features

- **Responsive Design**: Built with Tailwind CSS for a fully responsive design.
- **Role-Based Access Control**: Different views and functionalities based on user roles.
- **Authentication**: Secure login and access to user-specific dashboard.

## Tech Stack

- **Next.js**: React framework for server-side rendering and generating static websites.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **React Icons**: Include popular icons in your React projects easily.
- **TypeScript**: TypeScript adds static typing to JavaScript to help catch errors early.

## Pages and Components

### Navbar

The Navbar includes links to the following pages:

- **Home**
- **Blogs**
- **All Donors**
- **About**
- **Contact Us**
- **Login**: Redirects to the login page for authentication.

### Home Page

The Home page includes the following sections:

- **Hero Section**: A welcoming section with a call-to-action to encourage blood donation.
- **Testimonials**: Section displaying testimonials from donors and recipients.
- **About**: Brief information about the mission and vision of the blood donation platform.
- **Donor List**: A list of available donors.
- **Blogs**: Latest blog posts related to blood donation and health.
- **Footer**: Contact information, social media links, and additional resources.

### Blogs Page

The Blogs page displays a list of all blog posts with links to read more about each one.

### All Donors Page

The All Donors page allows users to search and view a list of all registered blood donors.

### About Page

The About page provides detailed information about the platform, its mission, and its team.

### Contact Us Page

The Contact Us page includes a form for users to get in touch with the platform administrators.

### Login Page

The Login page allows users to authenticate using their credentials. Successful login redirects users to their dashboard.

### User Dashboard

Once logged in, users can access their dashboard where they can:

- **Request Blood**: Submit a request for blood donation.
- **Donate Blood**: Manage and accept/reject blood donation requests.
- **Manage Information**: Update personal information and view donation history.
- **Edit Profile**: Edit personal details like name, email, and address.
- **Change Password**: Change the account password.

## Getting Started

### Prerequisites

- Node.js (v14.x or later)
- npm or yarn

### Installation

1. **Clone the repository**:

    ```sh
    git clone https://github.com/yourusername/blood-donation-frontend.git
    cd blood-donation-frontend
    ```

2. **Install dependencies**:

    ```sh
    npm install
    ```

    or

    ```sh
    yarn install
    ```

3. **Set up environment variables**:

    Create a `.env.local` file in the root directory and add your configuration variables.

    ```env
    NEXT_PUBLIC_API_URL=http://localhost:3000/api
    ```

4. **Run the development server**:

    ```sh
    npm run dev
    ```

    or

    ```sh
    yarn dev
    ```

The development server should now be running at `http://localhost:3000`.


## Author

- **Your Name** - [Your GitHub Profile](https://github.com/kamrulhasandev)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


