"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const isHome = pathname === "/";
  const hasOverlayHeader = isHome || pathname === "/contact";

  const links = [
    { href: "/#services", label: "Services" },
    { href: "/#why-ems", label: "Why Us" },
    { href: "/#faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 z-50 flex h-[120px] w-full items-end px-4 md:px-6 ${
          hasOverlayHeader
            ? ""
            : "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
        }`}
      >
        <motion.div
          initial={reduceMotion ? false : { y: -36 }}
          animate={{ y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto flex h-[80px] w-full max-w-[1280px] items-center justify-between rounded-[16px] border border-slate-100 bg-white/50 px-5 backdrop-blur-xl md:px-8"
        >
        <div className="flex items-center gap-8">
          <Link href="/" className="flex h-[40px] w-[92px] items-center">
            <Image
              src="/ems-main-logo.png"
              alt="EMS Logo"
              width={92}
              height={40}
              priority={isHome}
              className="h-[40px] w-[92px] object-contain"
            />
          </Link>

          <nav className="hidden items-center gap-5 text-base font-semibold leading-6 text-neutral-600 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`inline-flex h-[24px] w-fit items-center gap-2 whitespace-nowrap transition-colors duration-200 hover:text-[#88c700] ${
                  pathname === link.href ? "text-neutral-950" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="/contact"
            className="group inline-flex h-[44px] w-[166px] items-center justify-center overflow-hidden whitespace-nowrap rounded-[8px] bg-[#88c700] px-[18px] text-base font-semibold text-white shadow-sm transition-all duration-200 hover:w-[190px] hover:bg-[#7bb500] hover:shadow-md focus-visible:w-[190px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#88c700]/60"
          >
            Talk to an Expert
            <Image
              src="/figma-home/arrow-right.svg"
              alt=""
              width={20}
              height={20}
              className="h-5 w-0 -translate-x-1 opacity-0 transition-all duration-200 group-hover:ml-2 group-hover:w-5 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:ml-2 group-focus-visible:w-5 group-focus-visible:translate-x-0 group-focus-visible:opacity-100"
              aria-hidden
            />
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
                  className={`text-lg font-medium transition-colors duration-200 hover:text-[#88c700] ${pathname === link.href ? "text-foreground" : "text-foreground/60"
                    }`}
                >
                  <span className="flex items-center gap-2">
                    {link.label}
                  </span>
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="group mt-4 inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
              >
                Talk to an Expert
                <Image
                  src="/figma-home/arrow-right.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="ml-2"
                  aria-hidden
                />
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        </motion.div>
      </header>
      {hasOverlayHeader ? null : <div className="h-[120px]" aria-hidden="true" />}
    </>
  );
}
