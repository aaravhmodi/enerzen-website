"use client";

import { useEffect, useRef, useState, type FormEvent, type KeyboardEvent } from "react";
import { Architecture, Assembly } from "./Architecture";
import { Arrow, Brand } from "./Primitives";

export function Navigation() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const close = (event: globalThis.KeyboardEvent) => { if (event.key === "Escape") { setOpen(false); toggle.current?.focus(); } };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);
  return <header className="site-header"><div className="header-inner container"><Brand /><nav className={`main-nav ${open ? "is-open" : ""}`} id="main-navigation" aria-label="Main navigation"><a href="#approach" onClick={() => setOpen(false)}>Our approach</a><a href="#homes" onClick={() => setOpen(false)}>Our homes</a><a href="#about" onClick={() => setOpen(false)}>About us</a><a href="#contact" className="mobile-contact" onClick={() => setOpen(false)}>Let’s talk <Arrow direction="diagonal" /></a></nav><a className="header-cta" href="#contact">Let’s talk <Arrow direction="diagonal" /></a><button ref={toggle} className="menu-toggle" aria-controls="main-navigation" aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}><span/><span/></button></div></header>;
}

const systems = [
  { title: "Performance starts with the envelope.", text: "Continuous insulation, careful airtightness, and well-considered glazing help reduce heat loss and create a more stable, comfortable indoor environment.", label: "COMFORT BY DESIGN" },
  { title: "Made with precision. Assembled with care.", text: "Factory-made wall panels, floor cassettes, and roof cassettes bring repeatable quality to the building process, with less work left to weather and on-site conditions.", label: "PRECISION IN EVERY PART" },
  { title: "One system. A longer view.", text: "We consider materials, energy use, durability, and constructability together — connecting decisions made today with the way a home performs tomorrow.", label: "DESIGNED TO WORK TOGETHER" },
];

export function SystemExplorer() {
  const [active, setActive] = useState(0);
  return <div className="system-explorer"><div className="system-list">{systems.map((item, i) => <div className={`system-item ${active === i ? "is-active" : ""}`} key={item.title}><h3><button id={`system-button-${i}`} aria-expanded={active === i} aria-controls={`system-panel-${i}`} onClick={() => setActive(i)}><span className="system-number">0{i + 1}</span><span>{item.title}</span><span className="expand-mark" aria-hidden="true">{active === i ? "−" : "+"}</span></button></h3><div id={`system-panel-${i}`} role="region" aria-labelledby={`system-button-${i}`} hidden={active !== i}><p>{item.text}</p></div></div>)}</div><figure className="system-figure"><div className="art-topline"><span>INTELLIGENCE IN EVERY LAYER</span><span>02 — THE SYSTEM</span></div><Assembly active={active}/><figcaption><span className="system-caption-label">{systems[active].label}</span><span>Illustrative assembly · not a technical specification</span></figcaption></figure></div>;
}

const homes = [
  { name: "Single-family", variant: "single", eyebrow: "A PLACE OF YOUR OWN", title: "Room to live. Space to grow.", text: "A thoughtful home starts with everyday life. Comfortable spaces, an efficient envelope, and a considered material palette bring high performance down to a human scale.", uses: ["Individual homes", "Infill opportunities", "Low-rise living"], footer: "Considered for individual sites and everyday wellbeing." },
  { name: "Townhomes", variant: "townhomes", eyebrow: "CLOSER TOGETHER", title: "Good neighbours. Better places.", text: "Connected homes make more of the land we share. A repeatable building system supports walkable neighbourhoods while leaving room for identity, privacy, and a sense of belonging.", uses: ["Townhome communities", "Missing middle housing", "Gentle density"], footer: "A connected approach to neighbourhood-scale housing." },
  { name: "Multi-unit", variant: "multi", eyebrow: "A SHARED FUTURE", title: "More homes. Lasting value.", text: "Bring the benefits of high-performance building to more people. Coordinated assemblies and a whole-life perspective support resilient rental housing and growing communities.", uses: ["Purpose-built rental", "Workforce housing", "Community development"], footer: "Designed around long-term comfort, value, and resilience." },
] as const;

export function HomeExplorer() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const home = homes[active];
  function onKey(event: KeyboardEvent<HTMLButtonElement>, i: number) {
    let next = i;
    if (event.key === "ArrowRight") next = (i + 1) % homes.length;
    else if (event.key === "ArrowLeft") next = (i + homes.length - 1) % homes.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = homes.length - 1;
    else return;
    event.preventDefault(); setActive(next); tabs.current[next]?.focus();
  }
  return <div className="home-explorer"><div className="home-tabs" role="tablist" aria-label="Explore housing types">{homes.map((item, i) => <button ref={el => { tabs.current[i] = el; }} id={`home-tab-${i}`} key={item.name} role="tab" aria-selected={active === i} aria-controls={`home-panel-${i}`} tabIndex={active === i ? 0 : -1} onClick={() => setActive(i)} onKeyDown={event => onKey(event, i)}><span className="tab-number">0{i + 1}</span>{item.name}<Arrow direction="diagonal"/></button>)}</div><div className="home-panel" id={`home-panel-${active}`} role="tabpanel" aria-labelledby={`home-tab-${active}`} tabIndex={0}><div className="home-details" key={home.name}><p className="eyebrow">{home.eyebrow}</p><h3>{home.title}</h3><p>{home.text}</p><ul>{home.uses.map(use => <li key={use}><span aria-hidden="true">↗</span>{use}</li>)}</ul><a className="text-link" href="#contact">Let’s explore your project <Arrow /></a></div><figure className="home-figure" key={home.variant}><Architecture variant={home.variant}/><figcaption>Architectural concept · {home.name} housing</figcaption></figure><div className="home-panel-footer"><span><i />{home.footer}</span><span>THE ENERZEN PHILOSOPHY, AT EVERY SCALE</span></div></div></div>;
}

export function Enquiry({ email }: { email: string }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [saved, setSaved] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = `Hello EnerZen,\n\nMy name is ${data.get("name")}.\nEmail: ${data.get("email")}\nProject type: ${data.get("type")}\n\n${data.get("message")}\n`;
    if (email) window.location.href = `mailto:${email}?subject=${encodeURIComponent("EnerZen project enquiry")}&body=${encodeURIComponent(body)}`;
    else {
      const url = URL.createObjectURL(new Blob([body], { type: "text/plain;charset=utf-8" }));
      const link = document.createElement("a"); link.href = url; link.download = "enerzen-project-enquiry.txt"; link.click();
      window.setTimeout(() => URL.revokeObjectURL(url), 1000); setSaved(true);
    }
  }
  return <><button className="button light" onClick={() => { setSaved(false); dialog.current?.showModal(); }}>Start a conversation <Arrow direction="diagonal"/></button><dialog ref={dialog} className="enquiry-dialog" aria-labelledby="enquiry-title" onClick={event => { if (event.target === dialog.current) dialog.current?.close(); }}><div className="dialog-inner"><button className="dialog-close" aria-label="Close enquiry" onClick={() => dialog.current?.close()}><span aria-hidden="true">×</span></button><p className="eyebrow">YOUR NEXT CHAPTER</p><h2 id="enquiry-title">What do you<br /><span className="muted-title">have in mind?</span></h2><p className="dialog-description">{email ? "Tell us a little about your project. We’ll prepare an email for you to review and send." : "Put your ideas into a project brief to share with your EnerZen contact."}</p><form onSubmit={submit}><div className="form-row"><label>Your name<input name="name" autoComplete="name" required maxLength={100}/></label><label>Email address<input type="email" name="email" autoComplete="email" required maxLength={254}/></label></div><label>What are you planning?<select name="type" defaultValue=""><option value="" disabled>Select a project type</option><option>Single-family home</option><option>Townhomes or multiplex</option><option>Multi-unit housing</option><option>Partnership opportunity</option><option>Exploring the possibilities</option></select></label><label>A little about your project<textarea name="message" rows={3} required maxLength={2000} placeholder="Your location, your ideas, what matters to you…"/></label><button className="button primary" type="submit">{email ? "Prepare email" : "Save project brief"}<Arrow /></button><p className="form-note" role="status">{saved ? "Your brief has been downloaded. Share it with your EnerZen contact when you’re ready." : email ? "Opens your email app. Nothing is sent until you choose to send it." : "Downloads a brief to your device. Your details aren’t sent or stored."}</p></form></div></dialog></>;
}
