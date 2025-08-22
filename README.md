# Kafka Coffee Shop

A simple coffee shop web application built with **Next.js 15 (App Router)** and **NextAuth.js** for authentication. Users can view coffees, see details, and, after logging in, add new coffees via a protected dashboard.

**Live Site:** [https://kafka-client.vercel.app/](https://kafka-client.vercel.app/)

---

## Features

### Public Pages
- **Landing Page (`/`)**: Hero section, featured coffee highlights, and navigation.
- **Coffee List (`/coffees`)**: Displays all available coffees with name, roast, price, and image.
- **Coffee Details (`/coffees/[id]`)**: Detailed view of a single coffee.

### Authentication
- **Login (`/login`)**: Google OAuth login via NextAuth.
- Protected pages redirect unauthenticated users to login.

### Protected Pages
- **Add Coffee (`/dashboard/add-coffee`)**: Form to add a new coffee (requires login).  
- Stores data in memory for the MVP (resets on server restart).

---

## Technologies Used

- **Next.js 15 (App Router)**  
- **NextAuth.js** (Google OAuth authentication)  
- **React & Tailwind CSS**  
- **React Icons** (FaEye, FaArrowLeft, PiCoffee, etc.)  
- Mock backend using in-memory data and API Routes  

---

## Project Structure

```

app/
├─ layout.js
├─ page.js                     # Landing page
├─ login/page.js               # Login page
├─ coffees/page.js             # Coffee list
├─ coffees/\[id]/page.js        # Coffee details
├─ dashboard/add-coffee/page.js # Protected add coffee page
├─ api/
│   ├─ auth/\[...nextauth]/route.js  # NextAuth routes
│   └─ coffees/route.js             # Coffee GET/POST API
components/
├─ Navbar.js
├─ Footer.js
├─ CoffeeCard.js
├─ CoffeeForm.js
lib/
├─ coffees.js                  # Mock coffee data
├─ authOptions.js              # NextAuth config

````

---

## Setup & Installation

1. Clone the repository:

```bash
git clone <your-repo-link>
cd kafka
````

2. Install dependencies:

```bash
npm install
```

3. Create `.env.local` file in the project root:

```
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=<your-secret-key>
GOOGLE_CLIENT_ID=<your-google-client-id>
GOOGLE_CLIENT_SECRET=<your-google-client-secret>
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Routes Summary

| Route                   | Description                       | Access                       |
| ----------------------- | --------------------------------- | ---------------------------- |
| `/`                     | Landing page                      | Public                       |
| `/login`                | Login page                        | Public                       |
| `/coffees`              | Coffee list                       | Public                       |
| `/coffees/[id]`         | Coffee details                    | Public                       |
| `/dashboard/add-coffee` | Add new coffee                    | Protected (login required)   |
| `/api/coffees`          | GET all coffees / POST add coffee | GET: Public, POST: Protected |
| `/api/auth/...`         | NextAuth endpoints                | Public                       |

---

## Notes

* Coffee data is currently stored in memory (resets on server restart). For production, integrate a database like MongoDB.
* Google OAuth must be configured with correct **Authorized Redirect URI**:
  `https://kafka-client.vercel.app/api/auth/callback/google`
* Styling is built with Tailwind CSS for rapid MVP development.

---

## Author

**Maksudur Rahman**

```