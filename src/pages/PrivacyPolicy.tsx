import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="space-y-3">
    <h2 className="text-2xl font-heading font-semibold text-foreground">{title}</h2>
    <div className="text-muted-foreground leading-relaxed space-y-3">{children}</div>
  </section>
);

const PrivacyPolicy = () => {
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
            Privacy <span className="text-gradient">Policy</span>
          </h1>
          <p className="text-sm text-muted-foreground">Last updated: {lastUpdated}</p>
        </header>

        <div className="space-y-10">
          <Section title="1. Introduction">
            <p>
              Orbit AI ("we," "us," or "our") respects your privacy and is committed to protecting
              your personal information. This Privacy Policy explains what we collect, how we use it,
              and the rights you have regarding your data when you interact with our website,
              services, calls, or messages.
            </p>
          </Section>

          <Section title="2. Information We Collect">
            <p>We may collect the following information:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Name</li>
              <li>Phone number</li>
              <li>Email address</li>
              <li>Any information you submit through forms, calls, or messages on our website</li>
            </ul>
          </Section>

          <Section title="3. How We Use Information">
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Respond to inquiries and questions</li>
              <li>Provide our services</li>
              <li>Send updates, follow-ups, and relevant communications</li>
              <li>Improve and refine our services</li>
            </ul>
          </Section>

          <Section title="4. SMS / Text Messaging Compliance">
            <p>
              By providing your phone number, you consent to receive text messages from Orbit AI
              related to our services.
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Message frequency may vary.</li>
              <li>Message and data rates may apply.</li>
              <li>Reply <span className="font-semibold text-foreground">STOP</span> to opt out at any time.</li>
              <li>Reply <span className="font-semibold text-foreground">HELP</span> for assistance.</li>
            </ul>
            <p className="mt-4 p-4 rounded-lg border border-border bg-muted/30 text-foreground">
              We do not share, sell, or rent SMS opt-in data or consent with third parties for
              marketing purposes.
            </p>
          </Section>

          <Section title="5. Data Sharing">
            <p>
              We do not sell your personal information. We only share data when it is necessary to
              provide our services (such as with trusted service providers who help us operate) or
              when required to comply with legal obligations.
            </p>
          </Section>

          <Section title="6. Data Security">
            <p>
              We take reasonable technical and organizational measures to protect your personal
              information from unauthorized access, disclosure, alteration, or destruction. However,
              no method of transmission or storage is 100% secure.
            </p>
          </Section>

          <Section title="7. Cookies and Tracking">
            <p>
              Our website may use basic cookies and tracking technologies to improve user
              experience, analyze site usage, and remember preferences. You can disable cookies
              through your browser settings.
            </p>
          </Section>

          <Section title="8. Your Rights">
            <p>
              You have the right to request access to, correction of, or deletion of your personal
              data. To make such a request, please contact us using the details below.
            </p>
          </Section>

          <Section title="9. Contact Information">
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

          <Section title="10. Updates to This Policy">
            <p>
              We may update this Privacy Policy from time to time. Any changes will be reflected on
              this page with an updated "Last updated" date. We encourage you to review this policy
              periodically.
            </p>
          </Section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
