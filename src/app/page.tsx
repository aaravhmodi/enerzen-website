import { Architecture } from "@/components/Architecture";
import { Arrow, Brand, Icon } from "@/components/Primitives";
import { Enquiry, HomeExplorer, Navigation, SystemExplorer } from "@/components/Interactions";
const principles = [
  { icon: "comfort", number: "01", title: "Feel the difference.", text: "Even temperatures. Fresh air. Quiet spaces. Building science that makes everyday life more comfortable." },
  { icon: "leaf", number: "02", title: "Leave a lighter footprint.", text: "Thoughtful material choices and an efficient building envelope, designed to use less energy over a home’s lifetime." },
  { icon: "layers", number: "03", title: "Build with more certainty.", text: "Precision-made components and a coordinated process bring clarity from the first drawing to the final assembly." },
] as const;

export default function Home() {
  return (
    <div className="site" id="top">
      <a href="#main" className="skip-link">Skip to content</a>
      <div className="ambient" aria-hidden="true"><i /><i /></div>
      <Navigation />
      <main id="main">
        <section className="hero container" aria-labelledby="hero-title">
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
            <figcaption className="art-caption"><span><i /> More possibility. Less impact.</span><span>Architectural concept</span></figcaption>
          </figure>
        </section>

        <section className="foundation container" aria-label="Our foundations">
          <span className="foundation-label">Better by design.</span>
          <span><Icon name="sun" /> Passive House–inspired</span><span><Icon name="leaf" /> Low-carbon thinking</span><span><Icon name="layers" /> Panelized construction</span><span><Icon name="home" /> Built for Canada</span>
        </section>

        <section className="section container" id="approach" aria-labelledby="approach-title">
          <div className="section-heading"><div><p className="eyebrow">01 / THE ENERZEN APPROACH</p><h2 id="approach-title">A good home does more.<br /><span className="muted-title">So should the way we build it.</span></h2></div><p className="section-description">We connect building science, thoughtful design, and modern construction. Because a home’s real value is felt long after it’s built.</p></div>
          <div className="principles">{principles.map((item) => <article className="principle" key={item.number}><div className="principle-top"><span className="icon-tile"><Icon name={item.icon} /></span><span className="small-index">{item.number}</span></div><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
        </section>

        <section className="system-section" id="system" aria-labelledby="system-title"><div className="container"><div className="system-heading"><p className="eyebrow">02 / A BETTER BUILDING SYSTEM</p><h2 id="system-title">Thought through.<br /><span className="muted-title">From the inside out.</span></h2><p className="section-description">A home works best when every part works together. Our panelized approach brings the envelope, structure, and assembly into one considered system.</p></div><SystemExplorer /></div></section>

        <section className="section container" id="homes" aria-labelledby="homes-title"><div className="section-heading"><div><p className="eyebrow">03 / ROOM FOR POSSIBILITY</p><h2 id="homes-title">One philosophy.<br /><span className="muted-title">Many ways to call it home.</span></h2></div><p className="section-description">From a single home to a connected neighbourhood, the same principles can work at different scales.</p></div><HomeExplorer /></section>

        <section className="people-section container" id="about" aria-labelledby="about-title"><div className="people-intro"><p className="eyebrow">04 / THE PEOPLE BEHIND IT</p><h2 id="about-title">Grounded in experience.<br /><span className="muted-title">Looking ahead.</span></h2><p>EnerZen brings together expertise in building science, engineering, design, and project delivery, with a shared belief that better housing should be more attainable.</p></div><div className="people-grid">{[
          { initials: "SS", name: "Shalini S-M", role: "Founder & Principal", credentials: "P.Eng · MS · Certified Passive House Designer", text: "Building science and sustainability, shaped by more than 15 years of experience." },
          { initials: "AM", name: "Anuj Modi", role: "Chief Technology Officer", credentials: "P.Eng · MS · PMP", text: "Structural engineering and product development, informed by 20+ years in project delivery." },
          { initials: "HM", name: "Hemen Modi", role: "Head of Strategic Leadership", credentials: "Design · Partnerships · Project delivery", text: "Connecting design and execution through more than 25 years of industry experience." },
        ].map((person) => <article className="person" key={person.name}><div className="person-monogram" aria-hidden="true">{person.initials}<span /></div><p className="person-role">{person.role}</p><h3>{person.name}</h3><p className="credentials">{person.credentials}</p><p className="person-description">{person.text}</p></article>)}</div></section>

        <section className="contact-section container" id="contact" aria-labelledby="contact-title"><div className="contact-card"><div className="contact-copy"><p className="eyebrow"><span className="status-dot" /> BETTER BEGINS WITH A CONVERSATION</p><h2 id="contact-title">Let’s build<br /><span>something better.</span></h2><p>Have a site, a project, or a shared ambition?<br />We’d like to hear what you have in mind.</p><Enquiry email={process.env.NEXT_PUBLIC_CONTACT_EMAIL || ""} /></div><div className="contact-art" aria-hidden="true"><div className="contact-ring ring-one"/><div className="contact-ring ring-two"/><div className="contact-ring ring-three"/><svg viewBox="0 0 300 300" fill="none"><path d="m67 175 82-48 83 48-82 48Z" fill="#e9e3f110" stroke="#a99db7"/><path d="m67 175v-70l82 48v70M149 153l83-48v70M67 105l82-48 83 48-83 48Z" stroke="#b6a9c5"/><path d="m91 121 58-34 59 34M149 153v-66M83 153l50 29v21l-50-29M169 161l44-26v21l-44 26" stroke="#b6a9c5"/><path d="M44 226h35M61 209v34M234 70h27M248 57v27" stroke="#8c7c9d"/></svg><span>FORM. PURPOSE. POSSIBILITY.</span></div></div></section>
      </main>
      <footer className="footer container"><div className="footer-top"><Brand /><p>Better homes, better lives.<br /><span>Built on a more thoughtful approach.</span></p><nav aria-label="Footer navigation"><a href="#approach">Our approach</a><a href="#homes">Our homes</a><a href="#about">About EnerZen</a></nav><a className="back-top" href="#top">Back to top <Arrow direction="up" /></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} EnerZen. All rights reserved.</span><span>Canadian expertise. Shared possibility.</span></div></footer>
    </div>
  );
}
