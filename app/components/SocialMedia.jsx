import { Instagram, Music2, ArrowUpRight } from "lucide-react";

export default function SocialMedia() {
  return (
    <section id="sosial" className="section social-section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow green">IKUTI KESERUANNYA</span>
          <h2>Keseruannya Ada di Sini</h2>
          <p>Ikuti Le Vontea dan jangan sampai ketinggalan keseruan berikutnya.</p>
        </div>

        <div className="social-grid">
          <a
            className="social-card"
            href="https://www.instagram.com/levontea.id/"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram size={34} />
            <div>
              <small>Instagram</small>
              <strong>@levontea.id</strong>
            </div>
            <ArrowUpRight size={22} />
          </a>

          <a
            className="social-card"
            href="https://www.tiktok.com/@levontea.id"
            target="_blank"
            rel="noreferrer"
          >
            <Music2 size={34} />
            <div>
              <small>TikTok</small>
              <strong>@levontea.id</strong>
            </div>
            <ArrowUpRight size={22} />
          </a>
        </div>
      </div>
    </section>
  );
}