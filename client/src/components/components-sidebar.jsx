"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Cloud,
  Home,
  ShoppingCart,
  UtensilsCrossed,
  Users,
  BarChart2,
  Settings,
} from "lucide-react";

const menuItems = [
  { href: "/admin/dashboard", icon: Home, label: "Dashboard" },
  { href: "/admin/orders", icon: ShoppingCart, label: "Orders" },
  { href: "/admin/menu", icon: UtensilsCrossed, label: "Menu" },
  { href: "/admin/customers", icon: Users, label: "Customers" },
  { href: "/admin/analytics", icon: BarChart2, label: "Analytics" },
  { href: "/admin/settings", icon: Settings, label: "Settings" },
];

export function SidebarComponent({ className }) {
  const pathname = usePathname();

  return (
    <div
      className={cn("flex flex-col h-screen bg-background border-r", className)}
    >
      <div className="flex items-center h-16 px-4 border-b">
        <Cloud className="w-6 h-6 mr-2 text-primary" />
        {/* <h1 className="text-lg font-semibold">Mitho Sewa</h1> */}
        <Link href="/admin/dashboard/">
          <h1 className="text-lg font-semibold">Mitho Sewa</h1>
        </Link>
      </div>
      <ScrollArea className="flex-1 px-2">
        <nav className="flex flex-col gap-1 py-2">
          {menuItems.map(({ href, icon: Icon, label }) => (
            <Button
              key={href}
              asChild
              variant={pathname === href ? "secondary" : "ghost"}
              className="w-full justify-start"
            >
              <Link href={href} className="flex items-center">
                <Icon className="w-4 h-4 mr-3" />
                <span>{label}</span>
              </Link>
            </Button>
          ))}
        </nav>
      </ScrollArea>
    </div>
  );
}
