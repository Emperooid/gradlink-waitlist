import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join Waitlist - Gradlink",
  description: "Join the Gradlink waitlist and be the first to experience the future of student networking.",
};

export default function WaitlistLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  );
}
