import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="space-y-3">
    <h2 className="text-2xl font-heading font-semibold text-foreground">{title}</h2>
    <div className="text-muted-foreground leading-relaxed space-y-3">{children}</div>
  </section>
);

const TermsOfService = () => {
  const lastUpdated = "May 3, 2026";

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 lg:px-8 py-16 max-w-3xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>

        <header className="mb-12 space-y-3">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
            Terms of <span className="text-gradient">Service</span>
          </h1>
          <p className="text-sm text-muted-foreground">Last updated: {lastUpdated}</p>
        </header>

        <div className="space-y-10">
          <Section title="1. Introduction">
            <p>
              These Terms of Service ("Terms") govern your use of Orbit AI's website, products, and
              services. By accessing or using our services, you agree to be bound by these Terms.
              If you do not agree, please do not use our services.
            </p>
          </Section>

          <Section title="2. Services Description">
            <p>
              Orbit AI provides AI-powered communication tools, including an AI voice receptionist,
              call handling, messaging, and related services designed to help businesses manage
              customer communications.
            </p>
          </Section>

          <Section title="3. Use of Services">
            <p>
              You agree to use our services lawfully and in accordance with these Terms. You will
              not misuse, disrupt, abuse, reverse engineer, or attempt to gain unauthorized access
              to any part of our systems or services.
            </p>
          </Section>

          <Section title="4. SMS / Text Messaging Terms">
            <p>
              By providing your phone number, you consent to receive text messages from Orbit AI
              related to services, updates, and follow-ups.
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Message frequency may vary.</li>
              <li>Message and data rates may apply.</li>
              <li>Reply <span className="font-semibold text-foreground">STOP</span> to unsubscribe at any time.</li>
              <li>Reply <span className="font-semibold text-foreground">HELP</span> for assistance.</li>
            </ul>
            <p className="mt-4 p-4 rounded-lg border border-border bg-muted/30 text-foreground">
              Carriers are not liable for delayed or undelivered messages.
            </p>
          </Section>

          <Section title="5. User Responsibilities">
            <p>
              You are responsible for providing accurate, current, and complete information when
              using our services, and for maintaining proper and lawful use of the service at all
              times.
            </p>
          </Section>

          <Section title="6. Payment & Services">
            <p>
              Certain services offered by Orbit AI may be paid. Specific pricing, billing terms, and
              service details will be agreed upon separately between you and Orbit AI where
              applicable.
            </p>
          </Section>

          <Section title="7. Limitation of Liability">
            <p>
              To the fullest extent permitted by law, Orbit AI shall not be liable for any indirect,
              incidental, consequential, or special damages arising out of or in connection with
              your use of our services.
            </p>
          </Section>

          <Section title="8. Privacy Policy">
            <p>
              Your use of our services is also governed by our{" "}
              <Link to="/privacy-policy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
              , which describes how we collect, use, and protect your information.
            </p>
          </Section>

          <Section title="9. Termination">
            <p>
              Orbit AI may suspend or terminate your access to the services, at its sole discretion,
              if you violate these Terms or engage in conduct that we determine to be harmful to
              our services or other users.
            </p>
          </Section>

          <Section title="10. Changes to Terms">
            <p>
              We may update these Terms from time to time. Any changes will be reflected on this
              page with an updated "Last updated" date. Continued use of our services after changes
              constitutes acceptance of the revised Terms.
            </p>
          </Section>

          <Section title="11. Contact Information">
            <div className="p-5 rounded-lg border border-border bg-muted/30 space-y-1 text-foreground">
              <p className="font-semibold">Orbit AI</p>
              <p>
                Email:{" "}
                <a href="mailto:ace@orbitaiautomation.com" className="text-primary hover:underline">
                  ace@orbitaiautomation.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a href="tel:9717724383" className="text-primary hover:underline">
                  971-772-4383
                </a>
              </p>
              <p>Location: Salem, Oregon, United States</p>
              <p>
                Website:{" "}
                <a
                  href="https://orbitaiautomation.com"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  orbitaiautomation.com
                </a>
              </p>
            </div>
          </Section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfService;
