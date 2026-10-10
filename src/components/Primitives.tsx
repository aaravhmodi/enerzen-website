export function Arrow({ direction = "right" }: { direction?: "right" | "up" | "down" | "diagonal" }) {
  const rotations = { right: 0, down: 90, up: -90, diagonal: -45 };
  return <svg className="arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ transform: `rotate(${rotations[direction]}deg)` }}><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export function Brand() {
  return <a className="wordmark" href="#top" aria-label="EnerZen home"><span className="brand-symbol" aria-hidden="true">e</span>enerzen<span className="brand-dot" aria-hidden="true">●</span></a>;
}

export function Icon({ name }: { name: "comfort" | "leaf" | "layers" | "sun" | "home" }) {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{name === "comfort" ? <path d="M3 8h12a3 3 0 1 0-3-3M3 12h16a2 2 0 1 1-2 2M3 16h7a3 3 0 1 1-3 3" /> : name === "leaf" ? <><path d="M20 3C9 2 3 7 5 14s14 6 15-11Z"/><path d="m4 21 11-12"/></> : name === "layers" ? <path d="m3 7 9-5 9 5-9 5-9-5Zm0 5 9 5 9-5M3 17l9 5 9-5"/> : name === "sun" ? <><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/></> : <path d="m3 11 9-8 9 8M5 10v11h14V10M10 21v-7h4v7"/>}</svg>;
}
