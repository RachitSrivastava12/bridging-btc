export function BridgelessLogo() {
  return (
    <div
      className="flex items-center gap-3 md:gap-4 select-none"
      role="img"
      aria-label="BridgeLess logo with Bitcoin symbol"
    >
      <div
        className="relative h-12 w-12 md:h-14 md:w-14 rounded-full flex items-center justify-center
                   bg-[var(--color-brand)] text-[var(--color-brand-foreground)] shadow-[0_0_40px_color-mix(in_oklab,var(--color-brand)_35%,transparent)]
                   animate-[float_3s_ease-in-out_infinite]"
        aria-hidden="true"
      >
        <span className="text-2xl md:text-3xl font-bold inline-block animate-[spin_8s_linear_infinite]">{"₿"}</span>
      </div>

      <span
        className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight
                   text-[var(--color-brand)] text-balance
                   animate-in fade-in-0 slide-in-from-bottom-2 duration-700"
      >
        {"BridgeLess"}
      </span>
    </div>
  )
}
