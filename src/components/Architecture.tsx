import { useId } from "react";

function Building({ x, y, scale = 1, floors = 2 }: { x: number; y: number; scale?: number; floors?: number }) {
  const h = floors * 32;
  return <g transform={`translate(${x} ${y}) scale(${scale})`} stroke="#aca3b8" strokeWidth=".8" strokeLinejoin="round">
    <path d="m5 3 63 36 63-36-63-36Z" fill="#c8c0d1" opacity=".18" stroke="none" transform="translate(8 7)" />
    <path d={`M0 0v${-h}l64 37V37Z`} fill="#e2dce9" />
    <path d={`M64 37v${-h}l60-35v${h}Z`} fill="#f7f5fa" />
    <path d={`M0 ${-h}l60-35 64 37-60 35Z`} fill="#fbfafc" />
    <path d={`m8 ${-h} 52-30 47 27-52 30Z`} fill="#ece7f1" stroke="#ccc4d5" />
    <path d={`m22 ${-h - 1} 29-17 24 14-29 17Z`} fill="#b8b0c6" stroke="#a49aae" />
    <path d={`m31 ${-h + 4} 29-17m-19 23 29-17m-31-1 24 14`} stroke="#e4deeb" strokeWidth=".7" />
    {Array.from({ length: floors }, (_, i) => <g key={i}>
      <path d={`m12 ${-h + 18 + i * 30} 37 21v17L12 ${-h + 35 + i * 30}Z`} fill="#bbb3c9" stroke="#aaa0bc"/>
      <path d={`m75 ${-h + 52 + i * 30} 36-21v17l-36 21Z`} fill="#d4cede" stroke="#bdb3cd"/>
      <path d={`m28 ${-h + 27 + i * 30}v17m65 ${-h + 42 + i * 30}v17`} stroke="#efebf4" strokeWidth="2"/>
    </g>)}
    <path d="m75 31v-22l12-7v22" fill="#a69ab9" stroke="#9e91b0"/>
    <path d="m0 0 64 37 60-35" fill="none" stroke="#aaa0b6" />
  </g>;
}

function Tree({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  return <g transform={`translate(${x} ${y}) scale(${scale})`}><ellipse cx="5" cy="1" rx="17" ry="7" fill="#aeb6a7" opacity=".15"/><path d="M0 0v-37" stroke="#99a98d" strokeWidth="1.8"/><ellipse cx="0" cy="-29" rx="12" ry="20" fill="#dce3d5" stroke="#bac8ae" strokeWidth=".8"/><path d="M0-10v-32m0 16 5-7m-5 11-5-6" fill="none" stroke="#bdcab2" strokeWidth=".8"/></g>;
}

export function Architecture({ variant = "community" }: { variant?: "community" | "single" | "townhomes" | "multi" }) {
  const id = useId().replace(/:/g, "");
  return <svg className="architecture" viewBox="0 0 600 470" fill="none" role="img" aria-label={variant === "community" ? "Isometric concept of four homes around a landscaped courtyard" : `${variant} housing, isometric architectural concept`}>
    <defs><linearGradient id={`${id}-ground`} x1="100" y1="140" x2="480" y2="430" gradientUnits="userSpaceOnUse"><stop stopColor="#eeeaf3"/><stop offset="1" stopColor="#f7f5f1"/></linearGradient><radialGradient id={`${id}-shadow`}><stop stopColor="#bdb2cb" stopOpacity=".23"/><stop offset="1" stopColor="#bdb2cb" stopOpacity="0"/></radialGradient><radialGradient id={`${id}-sun`}><stop stopColor="#f2e3b3" stopOpacity=".55"/><stop offset="1" stopColor="#f2e3b3" stopOpacity="0"/></radialGradient></defs>
    <ellipse cx="306" cy="352" rx="264" ry="101" fill={`url(#${id}-shadow)`}/>
    <g className="sun-path"><path d="M88 138C165 10 425-6 528 112" stroke="#c9bdd8" strokeWidth=".8" strokeDasharray="2 6"/><g className="sun"><circle r="30" fill={`url(#${id}-sun)`}/><circle r="6.5" fill="#f6ecc9" stroke="#d9c690" strokeWidth=".8"/></g></g>
    <g className="architecture-scene">
      <path d="m49 280 249-144 253 146-249 145Z" fill={`url(#${id}-ground)`} stroke="#cfc8d8"/>
      <path d="m49 280 253 147v9L49 289Zm253 147 249-145v9L302 436Z" fill="#e5dfec" stroke="#d0c8db"/>
      <g stroke="#d9d2e2" strokeWidth=".6">{[1,2,3,4,5,6,7].map(n => <path key={n} d={`M${49+n*31.6} ${280+n*18.4}l249-144 M${49+n*31.1} ${280-n*18}l253 146`}/>)}</g>
      {variant === "community" ? <>
        <path d="m157 279 144-83 142 84-142 83Z" fill="#dfe5d8" stroke="#c4ceb9" strokeWidth=".8"/>
        <path d="m186 281 114-65 115 65-114 66Z" fill="#f7f5f0" stroke="#d5cfdc" strokeWidth=".8"/>
        <path d="m214 281 87-50 86 50-86 50Z" fill="#d9e1d1"/>
        <path d="m269 294 35-20 34 20-35 20Z" fill="#f2f0e9" stroke="#bdc6b5"/>
        <Tree x={303} y={245} scale={.8}/>
        <Building x={207} y={211}/><Building x={365} y={282}/>
        <Tree x={422} y={209} scale={.65}/><Tree x={464} y={298} scale={.85}/>
        <path d="m278 278 27 16m-27-20 27 16m-24-8v6m20 5v6" stroke="#b4a897" strokeWidth="2"/>
        <Building x={111} y={270}/><Tree x={241} y={304} scale={.7}/>
        <Building x={268} y={352}/>
        <Tree x={100} y={316} scale={.9}/><Tree x={389} y={367} scale={.9}/><Tree x={235} y={387} scale={.7}/>
      </> : variant === "single" ? <>
        <path d="m94 286 205-117 204 118-202 117Z" fill="#e0e6d9" stroke="#c6cfbe"/>
        <path d="m188 340 80-46 88 51-79 46Z" fill="#f8f6f1" stroke="#d6cfde"/>
        <Building x={174} y={277} scale={1.65}/><Tree x={376} y={215} scale={1}/><Tree x={141} y={322} scale={1.1}/><Tree x={421} y={305} scale={1}/><Tree x={334} y={371} scale={.75}/>
      </> : variant === "townhomes" ? <>
        <path d="m99 292 200-115 204 117-202 115Z" fill="#e2e7dd" stroke="#cad3c2"/>
        <path d="m108 318 123-71 191 110-123 71Z" fill="#f8f5f0" stroke="#d7d0df"/>
        <Building x={243} y={247} scale={.95}/><Building x={181} y={283} scale={.95}/><Building x={119} y={319} scale={.95}/>
        <Tree x={403} y={278} scale={.85}/><Tree x={351} y={313} scale={.7}/><Tree x={281} y={353} scale={.7}/><Tree x={216} y={389} scale={.75}/>
      </> : <>
        <path d="m99 292 200-115 204 117-202 115Z" fill="#e0e6d9" stroke="#c6cfbe"/>
        <path d="m141 330 129-75 145 83-129 75Z" fill="#f8f5f0" stroke="#d7d0df"/>
        <Building x={247} y={291} scale={1.25} floors={3}/><Building x={160} y={341} scale={1.25} floors={3}/>
        <Tree x={417} y={310} scale={1}/><Tree x={330} y={370} scale={.85}/><Tree x={133} y={345} scale={.8}/>
      </>}
    </g>
    <g stroke="#ada3bb" strokeWidth=".8"><path d="M45 178v-25h25M528 378h25v-25"/><path d="M489 116h18m-9-9v18"/></g>
  </svg>;
}

export function Assembly({ active }: { active: number }) {
  return <svg className="assembly" viewBox="0 0 560 530" fill="none" role="img" aria-label={`Exploded building assembly highlighting ${["the building envelope", "factory-made panels", "coordinated assembly"][active]}`}>
    <g stroke="#ded7e6" strokeWidth=".8" strokeDasharray="4 6"><path d="M113 168v230M278 72v230M443 168v230M278 264v230"/></g>
    <g className={`assembly-layer ${active === 2 ? "layer-active" : ""}`}>
      <path d="m104 392 174-100 174 100-174 101Z" fill="#f8f6fa" stroke="#b6a8c6"/><path d="m104 392 174 101v12L104 404Zm174 101 174-101v12L278 505Z" fill="#d9cfe4" stroke="#b6a8c6"/>
      {[0,1,2,3,4,5].map(n=><path key={n} d={`m${127+n*26} ${404+n*15} 174-100`} stroke="#d2c5df"/>)}
    </g>
    <g className={`assembly-layer ${active === 0 ? "layer-active" : ""}`}>
      <path d="m114 337 164-95 164 95-164 94Z" fill="#e9e3ef" stroke="#b4a4c4"/>
      <path d="M114 337V214l164 95v122Z" fill="#e7dfee" stroke="#b4a4c4"/><path d="M278 431V309l164-95v123Z" fill="#f9f7fb" stroke="#b4a4c4"/>
      <path d="m140 251 46 27v63l-46-27Zm69 40 45 26v63l-45-26Z" fill="#b8a8c9" stroke="#a594b8"/><path d="m304 324 43-25v62l-43 25Zm66-38 45-26v62l-45 26Z" fill="#ddd3e8" stroke="#b8a6cc"/>
      <path d="m114 214 164-94 164 94-164 95Z" fill="#f1ecf7" stroke="#b4a4c4"/><path d="m127 215 151-87 151 87-151 87Z" fill="#e0d6ea" stroke="#b8a9c8"/>
      <path d="m164 266v62m68-22v62m92-56v62m68-101v62" stroke="#eee8f4" strokeWidth="2"/>
    </g>
    <g className={`assembly-layer ${active === 1 ? "layer-active" : ""}`}>
      <path d="m104 142 174-101 174 101-174 100Z" fill="#faf8fc" stroke="#b3a3c5"/><path d="m104 142 174 100v14L104 156Zm174 100 174-100v14L278 256Z" fill="#d6cae1" stroke="#b3a3c5"/>
      {[0,1,2,3,4,5].map(n=><path key={n} d={`m${128+n*25} ${143+n*14.5} 148-85`} stroke="#dfd5e9"/>)}
    </g>
    <g stroke="#ab9abc" strokeWidth=".8"><path d="M428 170h42v-28h45M416 338h99M426 422h89"/><circle cx="428" cy="170" r="3" fill="#b2a1c4"/><circle cx="416" cy="338" r="3" fill="#b2a1c4"/><circle cx="426" cy="422" r="3" fill="#b2a1c4"/></g>
    <g fill="#7c6a8e" fontSize="10" fontFamily="inherit"><text x="480" y="134">ROOF</text><text x="475" y="330">WALLS</text><text x="477" y="414">FLOOR</text></g>
  </svg>;
}
