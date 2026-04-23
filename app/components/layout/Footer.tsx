import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/20">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-xl font-bold tracking-tight">
                EMS
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              EMS is a trusted IT partner providing software engineering production support and enterprise technology solutions. We focus on reliability, quality, and long-term client success.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm">Services</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/services">IT Consulting</Link></li>
              <li><Link href="/services">Software Development</Link></li>
              <li><Link href="/services">Production Support</Link></li>
              <li><Link href="/services">Software Testing</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm">Company</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
              <li><Link href="/clients">Clients</Link></li>

            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm">Contact</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>info@ems-itech.com</li>
              <li>+962790077730</li>
              <li>
                📍 Amman, Jordan
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Emerging Management Services. All rights reserved.</p>
          <div className="flex gap-4">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
