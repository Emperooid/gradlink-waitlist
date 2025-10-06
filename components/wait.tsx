// app/components/Hero.tsx
import Link from 'next/link';
const Wait = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-[#effffd] px-4">
      <div className="bg-white rounded-2xl shadow-lg p-10 max-w-5xl w-full flex flex-col md:flex-row justify-between gap-10">
        <div className="flex flex-col gap-6 md:max-w-sm">
          <h1 className="text-4xl font-semibold text-black leading-tight">
            You Can't Afford To Miss Out
          </h1>
          <Link href="/waitlist">
            <button className="bg-[#8b5cf6] hover:bg-[#7c3aed] transition-all text-white px-6 py-3 rounded-lg text-base font-semibold shadow flex items-center gap-2 w-fit">
              Join the Waitlist <span>→</span>
            </button>
          </Link>
        </div>
        <div className="text-gray-700 text-lg leading-relaxed">
          <p>
            The waitlist is live. Be part of the next evolution in learning where AI meets
            gameplay, and your school experience actually feels rewarding.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Wait;

