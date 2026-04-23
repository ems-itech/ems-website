"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);

  // Auto-dismiss success message after 3 seconds
  useEffect(() => {
    if (status === "success") {
      const timer = setTimeout(() => setStatus(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      console.log("📧 Submitting contact form...", data);
      
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      console.log("Response status:", res.status, "OK:", res.ok);
      
      const responseData = await res.json();
      console.log("Response data:", responseData);

      // ✅ Check both status and response
      if (!res.ok) {
        console.error("❌ API returned error:", responseData.error);
        setStatus("error");
        return;
      }

      console.log("✅ Email sent successfully!");
      setStatus("success");
      (e.target as HTMLFormElement).reset();

    } catch (error: any) {
      console.error("❌ Fetch error:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 pb-32">
      <div className="container mx-auto px-4">

        {/* Header */}
        <FadeIn>
          <div className="max-w-2xl mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground">
              Reach out to EMS for tailored IT solutions and support.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-16">

          {/* FORM */}
          <FadeIn delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-card border border-border/50 p-8 rounded-xl shadow-sm"
            >
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" required placeholder="Your Name" className="bg-background" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required placeholder="Your Email" className="bg-background" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Describe your requirements..."
                  className="min-h-[150px] bg-background"
                />
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Submit"}
              </Button>

              {/* STATUS MESSAGE */}
              {status === "success" && (
                <p className="text-green-600 text-sm mt-2">
                  Message sent successfully ✔
                </p>
              )}

              {status === "error" && (
                <p className="text-red-500 text-sm mt-2">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </FadeIn>

          {/* CONTACT INFO */}
          <FadeIn delay={0.2} className="space-y-12">
            <div>
              <h3 className="text-lg font-bold mb-6">Global Headquarters</h3>

              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-4 text-primary mt-0.5" />
                  <span>Amman, Jordan</span>
                </div>

                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-4 text-primary" />
                  <span>+962790077730</span>
                </div>

                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-4 text-primary" />
                  <span>info@ems-itech.com</span>
                </div>
              </div>
            </div>

            {/* MAP */}
            <div className="aspect-video w-full rounded-xl border border-border/50 overflow-hidden">
              <iframe
                src="https://www.google.com/maps?q=31.9785278,35.9026111&z=16&output=embed"
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </FadeIn>

        </div>
      </div>
    </div>
  );
}