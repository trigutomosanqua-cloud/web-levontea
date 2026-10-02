const activities = [
  { icon: "01", title: "Mabar", text: "Main bareng, seru bareng." },
  { icon: "02", title: "Nongkrong", text: "Ngobrol makin seru kalau ada teman segar." },
  { icon: "03", title: "Jalan-Jalan", text: "Keluar sebentar, bawa yang segar." },
  { icon: "04", title: "Santai", text: "Nikmati waktu santai dengan segarnya Le Vontea." },
];

export default function Activities() {
  return (
    <section id="aktivitas" className="section activities-section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">TEMAN AKTIVITAS</span>
          <h2>Mau Ngapain Hari Ini?</h2>
          <p>Apapun aktivitasnya, selalu ada momen buat seru-seruan bareng Le Vontea.</p>
        </div>

        <div className="activity-grid">
          {activities.map((item) => (
            <article className="activity-card" key={item.title}>
              <span>{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}