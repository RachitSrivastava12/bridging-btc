import Image from "next/image"
import { BridgelessLogo } from "../components/bridgeless-logo"

export default function Page() {
  return (
    <main className="min-h-[100svh] relative isolate flex flex-col items-center justify-center p-6 text-center hero-vignette">
      <Image
        src="/images/reference-bridgeless.png"
        alt=""
        width={1042}
        height={635}
        className="hidden"
        aria-hidden="true"
        priority
      />

      <header className="flex flex-col items-center gap-4">
        <BridgelessLogo />
   
      </header>

      <div className="mt-6 animate-in fade-in-0 duration-700 delay-300">
        <button
          type="button"
          className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium
                     text-[var(--color-brand)] border border-[var(--color-brand)]
                     hover:bg-[var(--color-brand)] hover:text-[var(--color-brand-foreground)]
                     transition-colors"
          aria-label="Coming Soon"
        >
          {"Coming Soon"}
        </button>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in oklab, var(--color-background) 95%, transparent), var(--color-background))",
        }}
      />
    </main>
  )
}
