"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button"; // Ensure this exists or replace with native button
import { Input } from "@/components/ui/input"; // Ensure this exists or replace with native input
import { Menu, Search, Bell, MessageSquare } from "lucide-react"; // Import icons from lucide

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200 ml-36">
      <div className="container mx-auto flex items-center justify-between px-4 py-2 ml-40">
        {/* Left Side: Search Bar */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center border rounded-full overflow-hidden">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-gray-200 p-2"
            >
              <Search className="w-4 h-4" />
            </Button>
            <Input
              type="text"
              placeholder="What do you want?"
              className="w-64 border-none focus:ring-0 px-4 py-2"
            />
          </div>
        </div>

        {/* Centered Navigation Links and Icons */}
        <div className="flex items-center space-x-8 text-gray-700">
          {" "}
          {/* Increased space-x-6 to space-x-8 */}
          <Link href="/about" className="hover:text-gray-900">
            About
          </Link>
          <Link href="/tool" className="hover:text-gray-900">
            Tool
          </Link>
          <Link href="/help" className="hover:text-gray-900">
            Help
          </Link>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Bell className="w-5 h-5 text-gray-700" />
            </Button>
            <Button variant="ghost" size="icon">
              <MessageSquare className="w-5 h-5 text-gray-700" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="sm:hidden"
          onClick={toggleMenu}
        >
          <Menu />
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden flex flex-col items-center space-y-4 py-4 bg-white border-t border-gray-200">
          <Link
            href="/about"
            className="hover:text-gray-900"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/tool"
            className="hover:text-gray-900"
            onClick={() => setMenuOpen(false)}
          >
            Tool
          </Link>
          <Link
            href="/help"
            className="hover:text-gray-900"
            onClick={() => setMenuOpen(false)}
          >
            Help
          </Link>

          {/* Mobile Search Bar */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center border rounded-full overflow-hidden w-full">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-gray-200 p-2"
              >
                <Search className="w-4 h-4" />
              </Button>
              <Input
                type="text"
                placeholder="What do you want?"
                className="w-full border-none focus:ring-0 px-4 py-2"
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
