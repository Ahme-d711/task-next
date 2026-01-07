"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Bell,
  Heart,
  ChevronDown,
  UserRound,
  Home,
  HelpCircle,
  Info,
  Grid2X2,
  Handbag,
  Mail,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Fade } from "react-awesome-reveal";

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/categories", label: "Our Category", icon: Grid2X2 },
  { href: "/about", label: "About Us", icon: Info },
  { href: "/contact", label: "Contact Us", icon: Mail },
  { href: "/faqs", label: "FAQs", icon: HelpCircle },
];

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-40 flex justify-between max-w-[1440px] mx-auto w-full items-center px-5 md:px-8 lg:px-10 py-5 text-sm text-muted-foreground backdrop-blur",
        "dark:bg-background/80",
        className
      )}
    >
      {/* Left: logo */}
      <Fade triggerOnce direction="down">
        <div className="flex min-w-32 items-center gap-12">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={50}
              height={32}
              className="h-13 w-auto"
              priority
            />
          </Link>
          <nav className="flex items-center gap-6">
            {navLinks.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-1.5 text-[15px] font-medium text-text-black-200 transition-colors hover:text-primary"
              >
                {Icon && <Icon className="h-4! w-4!" />}
                <span>{label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </Fade>

      {/* Right: actions */}
      <Fade triggerOnce direction="down" cascade damping={0.12}>
        <div className="flex items-center gap-3">
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="bg-none shadow-none text-black border-none hover:bg-primary/10 hover:text-primary cursor-pointer"
          >
            <Handbag className="h-5! w-5!" />
          </Button>
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="bg-none shadow-none text-black border-none hover:bg-primary/10 hover:text-primary cursor-pointer"
          >
            <Bell className="h-5! w-5!" />
          </Button>
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="bg-none shadow-none text-black border-none hover:bg-primary/10 hover:text-primary cursor-pointer"
          >
            <Heart className="h-5! w-5!" />
          </Button>

          {/* Language selector */}
          <Button
            type="button"
            variant="outline"
            className="hidden items-center text-black border-none gap-1 rounded-full bg-none shadow-none px-3 py-1 text-xs font-medium hover:border-primary/40 hover:text-primary sm:flex cursor-pointer"
          >
            <span>EN</span>
            <ChevronDown className="h-3 w-3" />
          </Button>

          {/* Profile avatar */}
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="flex w-16 h-9 text-black items-center justify-center rounded-full bg-none shadow-none border-none cursor-pointer"
          >
            <UserRound className="h-5! w-5!" />
            <ChevronDown className="h-3 w-3" />
          </Button>
        </div>
      </Fade>
    </header>
  );
}
