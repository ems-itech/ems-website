"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isHome = pathname === "/";
  const hasOverlayHeader = isHome || pathname === "/contact";

  const links = [
    { href: "/services", label: "Services" },
    { href: "/services#products", label: "Products", expandable: true },
    { href: "/about", label: "Resources", expandable: true },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`top-0 z-50 flex h-[120px] w-full items-end px-4 md:px-6 ${
        hasOverlayHeader
          ? "absolute"
          : "sticky bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      }`}
    >
      <div className="mx-auto flex h-[80px] w-full max-w-[1280px] items-center justify-between rounded-[16px] border border-slate-100 bg-white/50 px-5 backdrop-blur-xl md:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex h-[32px] w-[73px] items-center">
            <Image
              src="/ems-main-logo.png"
              alt="EMS Logo"
              width={73}
              height={32}
              priority={isHome}
              className="h-[32px] w-[73px] object-contain"
            />
          </Link>

          <nav className="hidden items-center gap-5 text-base font-semibold leading-6 text-neutral-600 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`inline-flex h-[24px] w-fit items-center gap-2 whitespace-nowrap transition-colors hover:text-neutral-950 ${
                  pathname === link.href ? "text-neutral-950" : ""
                }`}
              >
                {link.label}
                {link.expandable ? <ChevronDown className="h-5 w-5" aria-hidden="true" /> : null}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="/contact"
            className="inline-flex h-[44px] w-[166px] items-center justify-center whitespace-nowrap rounded-[8px] bg-[#88c700] px-[18px] text-base font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#7bb500] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#88c700]/60"
          >
            Talk to an Expert
          </Link>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Open navigation menu">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetTitle className="sr-only">Navigation menu</SheetTitle>
            <nav className="flex flex-col gap-4 mt-8">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`text-lg font-medium transition-colors hover:text-foreground/80 ${pathname === link.href ? "text-foreground" : "text-foreground/60"
                    }`}
                >
                  <span className="flex items-center gap-2">
                    {link.label}
                    {link.expandable ? <ChevronDown className="h-4 w-4" aria-hidden="true" /> : null}
                  </span>
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
              >
                Talk to an Expert
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
