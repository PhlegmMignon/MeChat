import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PepeChat",
  description: "Don't have friends? Chat with Pepe!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

//Login page
////Buttons: Login, Demo acc, Sign up
////Directs to home

//Signup page
////Username, password form
////Unique username check

//Home page
////Logout btn
////Sidebar with friends

//Modules
//GET message
//POST message
//GET user
//POST user
//

//Models
//Message: Users, content, time,
//User: Email, password, name,
