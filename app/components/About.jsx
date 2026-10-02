export default function About() {
  const items = [
    ["Segar", "Nikmati kesegaran teh di setiap momen."],
    ["Praktis", "Kemasan cup yang mudah dibawa ke mana saja."],
    ["Seru", "Teman yang pas untuk berbagai aktivitas kamu."],
  ];

  return (
    <section id="tentang" className="section section-white">
      <div className="container">
        <div className="section-heading narrow">
          <span className="eyebrow green">KENALAN DULU</span>
          <h2>Kenalan dengan Le Vontea</h2>
          <p>
            Minuman teh yang siap menemani berbagai momen. Dari waktu santai,
            kumpul bareng teman, sampai aktivitas yang bikin hari kamu makin seru.
          </p>
        </div>

        <div className="feature-grid">
          {items.map(([title, text]) => (
            <article className="feature-card" key={title}>
              <div className="feature-number">0{items.indexOf([title, text]) + 1}</div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}