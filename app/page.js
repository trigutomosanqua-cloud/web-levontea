import Image from 'next/image'

const moments = [
  { emoji: '🎮', title: 'Lagi mabar', text: 'Biar serunya makin panjang.' },
  { emoji: '📚', title: 'Lagi belajar', text: 'Teman segar buat nemenin fokus.' },
  { emoji: '🛵', title: 'Lagi jalan', text: 'Bawa satu, lanjut gas.' },
  { emoji: '🍿', title: 'Lagi nongkrong', text: 'Ngobrol seru, minumnya Le Vontea.' },
]

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a href="#home" className="mini-brand" aria-label="Le Vontea">
          <Image src="/images/brand/logo-levontea.png" alt="Le Vontea" width={86} height={86} priority />
        </a>
        <nav>
          <a href="#tentang">Tentang</a>
          <a href="#produk">Produk</a>
          <a href="#momen">Momen</a>
          <a className="nav-social" href="https://www.instagram.com/levontea.id/" target="_blank" rel="noreferrer">Instagram</a>
        </nav>
      </header>

      <section id="home" className="hero">
        <div className="hero-bubbles bubble-one" />
        <div className="hero-bubbles bubble-two" />
        <div className="hero-copy">
          <span className="eyebrow">MINUMAN TEH 220 ML</span>
          <h1>Segarnya<br /><em>Bikin Seru</em></h1>
          <p>Teman segar buat belajar, mabar, nongkrong, sampai jalan-jalan.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#produk">Kenalan sama Le Vontea</a>
            <a className="text-link" href="https://www.tiktok.com/@levontea.id" target="_blank" rel="noreferrer">Lihat keseruannya →</a>
          </div>
        </div>
        <div className="hero-product">
          <div className="sun-shape" />
          <Image src="/images/product/levontea-product.png" alt="Produk Le Vontea 220 ml" width={620} height={1100} priority />
          <span className="sticker sticker-one">220 ml</span>
          <span className="sticker sticker-two">teman seru</span>
        </div>
        <div className="hero-wave" />
      </section>

      <section id="tentang" className="intro section">
        <div className="section-tag">KENALAN YUK</div>
        <h2>Teh yang <span>nggak ribet</span><br />buat nemenin harimu.</h2>
        <p className="lead">Le Vontea hadir buat kamu yang suka menikmati momen sederhana dengan rasa teh yang segar. Buka, minum, lanjut seru-seruan.</p>
      </section>

      <section id="produk" className="product-section section">
        <div className="product-card">
          <div className="product-visual">
            <div className="leaf-orbit orbit-one" />
            <div className="leaf-orbit orbit-two" />
            <Image src="/images/product/levontea-product.png" alt="Le Vontea Minuman Teh 220 ml" width={520} height={925} />
          </div>
          <div className="product-copy">
            <div className="section-tag">KENALAN SAMA PRODUKNYA</div>
            <h2>Le Vontea<br /><span>220 ml</span></h2>
            <p>Ukuran pas untuk dibawa ke mana-mana. Teman yang gampang diajak seru-seruan kapan saja.</p>
            <div className="feature-row">
              <div><strong>220</strong><small>ml</small><span>isi bersih</span></div>
              <div><strong>Teh</strong><small>✓</small><span>rasa yang familiar</span></div>
              <div><strong>Go</strong><small>!</small><span>siap dibawa</span></div>
            </div>
            <a className="button button-red" href="https://www.instagram.com/levontea.id/" target="_blank" rel="noreferrer">Ikuti @levontea.id</a>
          </div>
        </div>
      </section>

      <section id="momen" className="moments section">
        <div className="moments-heading">
          <div>
            <div className="section-tag">LE VONTEA + KAMU</div>
            <h2>Teman di<br /><span>setiap momen.</span></h2>
          </div>
          <p>Nggak harus momen besar. Yang penting ada cerita dan ada yang bikin segar.</p>
        </div>
        <div className="moment-grid">
          {moments.map((moment) => (
            <article className="moment-card" key={moment.title}>
              <div className="moment-icon">{moment.emoji}</div>
              <h3>{moment.title}</h3>
              <p>{moment.text}</p>
              <span>Le Vontea →</span>
            </article>
          ))}
        </div>
      </section>

      <section className="social-section section">
        <div className="social-panel">
          <div className="social-copy">
            <div className="section-tag">AYO MAIN BARENG</div>
            <h2>Seru-seruan<br /><span>bareng Le Vontea.</span></h2>
            <p>Follow akun kami untuk lihat konten, aktivitas, dan momen seru lainnya.</p>
          </div>
          <div className="social-buttons">
            <a href="https://www.instagram.com/levontea.id/" target="_blank" rel="noreferrer">Instagram <b>↗</b></a>
            <a href="https://www.tiktok.com/@levontea.id" target="_blank" rel="noreferrer">TikTok <b>↗</b></a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <Image src="/images/brand/logo-levontea.png" alt="Le Vontea" width={110} height={110} />
        <p>Segarnya Bikin Seru</p>
        <div><a href="https://www.instagram.com/levontea.id/" target="_blank" rel="noreferrer">Instagram</a><a href="https://www.tiktok.com/@levontea.id" target="_blank" rel="noreferrer">TikTok</a></div>
        <small>© {new Date().getFullYear()} Le Vontea. All rights reserved.</small>
      </footer>
    </main>
  )
}
