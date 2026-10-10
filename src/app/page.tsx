import type { CSSProperties } from "react";
import { Architecture } from "@/components/Architecture";
import { Arrow, Brand, Icon } from "@/components/Primitives";
import { CountUp, EngineExplorer, Enquiry, HomeExplorer, Navigation, PageEffects, SystemExplorer } from "@/components/Interactions";
const principles = [
  { icon: "comfort", number: "01", title: "Feel the difference.", text: "Even temperatures. Fresh air. Quiet spaces. Building science that makes everyday life more comfortable." },
  { icon: "leaf", number: "02", title: "Leave a lighter footprint.", text: "Thoughtful material choices and an efficient building envelope, designed to use less energy over a home’s lifetime." },
  { icon: "layers", number: "03", title: "Build with more certainty.", text: "Precision-made components and a coordinated process bring clarity from the first drawing to the final assembly." },
] as const;
// One small moving figure per principle: a steady indoor line, a flatter energy curve, a build that runs to plan.
const principleArt = [
  <svg key="comfort" className="principle-art" viewBox="0 0 240 72" aria-hidden="true"><text x="0" y="7">STEADY INSIDE, WHATEVER THE WEATHER</text><rect className="art-band" x="0" y="32" width="240" height="18" rx="9"/><path className="art-faint art-wave" d={`M-80 41${"c13-30 27-30 40 0s27 30 40 0".repeat(5)}`}/><path className="art-line art-wave" d={`M-80 41${"c13-5 27-5 40 0s27 5 40 0".repeat(5)}`}/></svg>,
  <svg key="footprint" className="principle-art art-timed" viewBox="0 0 240 72" aria-hidden="true"><text x="0" y="7">ENERGY USED OVER A LIFETIME</text><path className="art-area" d="M0 66C80 56 160 36 240 16V46C160 58 80 64 0 66Z"/><path className="art-typical art-draw" pathLength={1} d="M0 66C80 56 160 36 240 16"/><path className="art-line art-draw is-sage" pathLength={1} d="M0 66C80 64 160 58 240 46"/><text x="240" y="7" textAnchor="end">TYPICAL</text><text className="is-sage" x="240" y="63" textAnchor="end">ENERZEN</text></svg>,
  <svg key="certainty" className="principle-art art-timed" viewBox="0 0 240 72" aria-hidden="true"><text x="0" y="7">FROM FIRST DRAWING TO FRONT DOOR</text><path className="art-faint" d="M6 38h228"/><path className="art-line art-draw" pathLength={1} d="M6 38h228"/>{["DESIGN", "FACTORY", "SITE", "HOME"].map((label, n) => <g key={label} style={{ "--at": n / 3 } as CSSProperties}><circle className="art-stop" cx={6 + n * 76} cy="38" r="5"/><circle className="art-stop is-lit" cx={6 + n * 76} cy="38" r="5"/><text x={n === 0 ? 1 : n === 3 ? 239 : 6 + n * 76} y="62" textAnchor={n === 0 ? "start" : n === 3 ? "end" : "middle"}>{label}</text></g>)}</svg>,
];
const engineSteps = [
  { title: "Tell it what you’re building.", text: "A site, a size, a budget, a goal. Describe your project in plain language and the engine takes it from there." },
  { title: "It builds every version.", text: "Close to 900 combinations of wall panels, floor and roof cassettes, windows, and systems. Each one modelled for your climate, right down to the local snow load." },
  { title: "You choose with clear eyes.", text: "A ranked shortlist, a site plan placed for the sun, and a 30-year view of cost and carbon. Every trade-off laid out before a single panel is cut." },
];
const stepGlyphs = [
  <svg key="ask" className="step-glyph" viewBox="0 0 96 40" aria-hidden="true"><rect x=".5" y="6.5" width="95" height="27" rx="13.5"/><path className="glyph-type" d="M16 20h44" pathLength={1}/><path className="glyph-caret is-accent" d="M67 14v12"/></svg>,
  <svg key="build" className="step-glyph glyph-dots" viewBox="0 0 96 40" aria-hidden="true">{Array.from({ length: 21 }, (_, n) => <circle key={n} cx={6 + (n % 7) * 14} cy={8 + Math.floor(n / 7) * 12} r="2.5" style={{ animationDelay: `${(n % 7) * 110 + Math.floor(n / 7) * 70}ms` }}/>)}</svg>,
  <svg key="choose" className="step-glyph glyph-bars" viewBox="0 0 96 40" aria-hidden="true"><path className="is-accent" d="M4 8h84" pathLength={1}/><path d="M4 20h58" pathLength={1}/><path d="M4 32h36" pathLength={1}/></svg>,
];
const engineFacts = [
  { value: "≈900", label: "versions of your home compared before one is chosen" },
  { value: "4", label: "priorities weighed together: cost, speed, carbon, and energy" },
  { value: "227", label: "Ontario communities with local climate, snow, and energy-rate data built in" },
  { value: "<1%", label: "from National Building Code reference R‑values in validation" },
];

export default function Home() {
  return (
    <div className="site" id="top">
      <a href="#main" className="skip-link">Skip to content</a>
      <div className="ambient" aria-hidden="true"><i /><i /></div>
      <PageEffects />
      <Navigation />
      <main id="main">
        <section className="hero container" aria-labelledby="hero-title" data-tilt=".hero-art">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> A MORE THOUGHTFUL WAY TO BUILD</p>
            <h1 id="hero-title"><span>Better homes.</span><span className="muted-title">Better lives.</span></h1>
            <p className="hero-description">High-performance homes. A lighter footprint.<br className="desktop-break" /> A better future, built one community at a time.</p>
            <div className="hero-actions"><a className="button primary" href="#approach">Discover our approach <Arrow /></a><a className="text-link" href="#homes">Explore the possibilities <Arrow direction="down" /></a></div>
            <p className="hero-note"><span /> Canadian expertise. A whole-life perspective.</p>
          </div>
          <figure className="hero-art">
            <div className="art-topline"><span>THE BIGGER PICTURE</span><span>01 — A PLACE TO BELONG</span></div>
            <Architecture variant="community" />
            <figcaption className="art-caption"><span className="art-cycle"><i /><span>More possibility. Less impact.</span><span>Oriented for the sun.</span><span>Shared green space.</span><span>An airtight, insulated envelope.</span></span><span>Architectural concept</span></figcaption>
          </figure>
        </section>

        <section className="foundation container" aria-label="Our foundations">
          <span className="foundation-label">Better by design.</span>
          <span><Icon name="sun" /> Passive House–inspired</span><span><Icon name="leaf" /> Low-carbon thinking</span><span><Icon name="layers" /> Panelized construction</span><span><Icon name="home" /> Built for Canada</span>
        </section>

        <section className="section container" id="approach" aria-labelledby="approach-title">
          <div className="section-heading"><div><p className="eyebrow">01 / THE ENERZEN APPROACH</p><h2 id="approach-title">A good home does more.<br /><span className="muted-title">So should the way we build it.</span></h2></div><p className="section-description">We connect building science, thoughtful design, and modern construction. Because a home’s real value is felt long after it’s built.</p></div>
          <div className="principles">{principles.map((item, i) => <article className="principle" key={item.number} data-glow><div className="principle-top"><span className="icon-tile"><Icon name={item.icon} /></span><span className="small-index">{item.number}</span></div>{principleArt[i]}<h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
          <p className="statement"><span>A home should be measured by how it feels to live in, how lightly it sits on the planet, and how confidently it gets built.</span></p>
        </section>

        <section className="system-section" id="system" aria-labelledby="system-title"><div className="container"><div className="system-heading"><p className="eyebrow">02 / A BETTER BUILDING SYSTEM</p><h2 id="system-title">Thought through.<br /><span className="muted-title">From the inside out.</span></h2><p className="section-description">A home works best when every part works together. Our panelized approach brings the envelope, structure, and assembly into one considered system.</p></div><SystemExplorer /></div></section>

        <section className="engine-section" id="engine" aria-labelledby="engine-title"><div className="container"><div className="system-heading"><p className="eyebrow"><span className="status-dot" /> 03 / THE ENERZEN PERFORMANCE ENGINE</p><h2 id="engine-title">Every version of your home.<br /><span className="muted-title">Tested before it’s built.</span></h2><p className="section-description">The Performance Engine is the intelligence behind our building system. It models your project on your site, weighs what matters most to you, and finds the combination of panels and systems that fits. In seconds, not weeks.</p></div><EngineExplorer /><ol className="engine-steps">{engineSteps.map((step, i) => <li key={step.title}><div className="step-top"><span className="small-index">0{i + 1}</span>{stepGlyphs[i]}</div><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol><dl className="engine-facts">{engineFacts.map((fact) => <div key={fact.label}><dt>{fact.label}</dt><dd><CountUp value={fact.value} /></dd></div>)}</dl></div></section>

        <section className="section container" id="homes" aria-labelledby="homes-title"><div className="section-heading"><div><p className="eyebrow">04 / ROOM FOR POSSIBILITY</p><h2 id="homes-title">One philosophy.<br /><span className="muted-title">Many ways to call it home.</span></h2></div><p className="section-description">From a single home to a connected neighbourhood, the same principles can work at different scales.</p></div><HomeExplorer /></section>

        <section className="people-section container" id="about" aria-labelledby="about-title"><div className="people-intro"><p className="eyebrow">05 / THE PEOPLE BEHIND IT</p><h2 id="about-title">Grounded in experience.<br /><span className="muted-title">Looking ahead.</span></h2><p>EnerZen brings together expertise in building science, engineering, design, and project delivery, with a shared belief that better housing should be more attainable.</p></div><div className="people-grid">{[
          { initials: "SS", years: 15, name: "Shalini S-M", role: "Founder & Principal", credentials: "P.Eng · MS · Certified Passive House Designer", text: "Building science and sustainability, shaped by more than 15 years of experience." },
          { initials: "AM", years: 20, name: "Anuj Modi", role: "Chief Technology Officer", credentials: "P.Eng · MS · PMP", text: "Structural engineering and product development, informed by 20+ years in project delivery." },
          { initials: "HM", years: 25, name: "Hemen Modi", role: "Head of Strategic Leadership", credentials: "Design · Partnerships · Project delivery", text: "Connecting design and execution through more than 25 years of industry experience." },
        ].map((person) => <article className="person" key={person.name} data-glow><div className="person-monogram" aria-hidden="true"><svg className="person-ring" viewBox="0 0 72 72" style={{ "--arc": person.years / 30 } as CSSProperties}><circle cx="36" cy="36" r="34"/><circle cx="36" cy="36" r="34" pathLength={1}/></svg>{person.initials}<span /></div><p className="person-years"><CountUp value={`${person.years}+`} /><small>years</small></p><p className="person-role">{person.role}</p><h3>{person.name}</h3><p className="credentials">{person.credentials}</p><p className="person-description">{person.text}</p></article>)}</div></section>

        <section className="contact-section container" id="contact" aria-labelledby="contact-title"><div className="contact-card" data-glow><div className="contact-copy"><p className="eyebrow"><span className="status-dot" /> BETTER BEGINS WITH A CONVERSATION</p><h2 id="contact-title">Let’s build<br /><span>something better.</span></h2><p>Have a site, a project, or a shared ambition?<br />We’d like to hear what you have in mind.</p><Enquiry email={process.env.NEXT_PUBLIC_CONTACT_EMAIL || ""} /></div><div className="contact-art" aria-hidden="true"><div className="contact-ring ring-one"/><div className="contact-ring ring-two"/><div className="contact-ring ring-three"/><svg viewBox="0 0 300 300" fill="none"><path pathLength={1} d="m67 175 82-48 83 48-82 48Z" fill="#e9e3f110" stroke="#a99db7"/><path pathLength={1} d="m67 175v-70l82 48v70M149 153l83-48v70M67 105l82-48 83 48-83 48Z" stroke="#b6a9c5"/><path pathLength={1} d="m91 121 58-34 59 34M149 153v-66M83 153l50 29v21l-50-29M169 161l44-26v21l-44 26" stroke="#b6a9c5"/><path pathLength={1} d="M44 226h35M61 209v34M234 70h27M248 57v27" stroke="#8c7c9d"/></svg><span>FORM. PURPOSE. POSSIBILITY.</span></div></div></section>
      </main>
      <footer className="footer container"><div className="footer-top"><Brand /><p>Better homes, better lives.<br /><span>Built on a more thoughtful approach.</span></p><nav aria-label="Footer navigation"><a href="#approach">Our approach</a><a href="#engine">The Performance Engine</a><a href="#homes">Our homes</a><a href="#about">About EnerZen</a></nav><a className="back-top" href="#top">Back to top <Arrow direction="up" /></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} EnerZen. All rights reserved.</span><span>Canadian expertise. Shared possibility.</span></div></footer>
    </div>
  );
}
