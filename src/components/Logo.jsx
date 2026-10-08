import Link from "next/link";
import { company } from "@/lib/data";

export default function Logo({ className = "" }) {
  return (
    <Link href="/" className={`flex items-center gap-2.5 ${className}`} aria-label={`${company.name} home`}>
      <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand-500 text-white shadow-lg shadow-brand-500/30">
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
          <path d="M3 11.5 12 4l9 7.5" />
          <path d="M5.5 10v9.5h13V10" />
          <path d="M10 19.5v-5h4v5" />
        </svg>
      </span>
      <span className="font-display text-lg font-bold tracking-tight">
        Eagles<span className="text-brand-400"> Construction</span>
      </span>
    </Link>
  );
}
