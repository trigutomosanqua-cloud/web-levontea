import Image from 'next/image'

const moments = [
  {
    emoji: '🎮',
    title: 'Lagi mabar',
    text: 'Biar serunya makin panjang.',
  },
  {
    emoji: '📚',
    title: 'Lagi belajar',
    text: 'Teman segar buat nemenin fokus.',
  },
  {
    emoji: '🛵',
    title: 'Lagi jalan',
    text: 'Bawa satu, lanjut gas.',
  },
  {
    emoji: '🍿',
    title: 'Lagi nongkrong',
    text: 'Ngobrol seru, minumnya Le Vontea.',
  },
]

export default function Home() {
  return (
    <main>

      {/* HEADER */}
      <header className="site-header">
        <a href="#home" className="mini-brand">
          <Image
            src="/images/brand/logo-levontea.png"
            alt="Le Vontea"
            width={86}
            height={86}
            priority
          />
        </a>

        <nav>
          <a href="#tentang">Tentang</a>
          <a href="#produk">Produk</a>
          <a href="#momen">Momen</a>

          <a
            className="nav-social"
            href="https://www.instagram.com/levontea.id/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </nav>
      </header>


      {/* HERO */}
      <section id="home" className="hero">

        <div className="hero-copy">

          <span className="eyebrow">
            MINUMAN TEH 220 ML
          </span>

          <h1>
            Segarnya
            <br />
            <em>Bikin Seru</em>
          </h1>

          <p>
            Teman segar buat belajar, mabar,
            nongkrong, sampai jalan-jalan.
          </p>

          <div className="hero-actions">

            <a
              className="button button-dark"
              href="#produk"
            >
              Kenalan sama Le Vontea
            </a>

            <a
              className="text-link"
              href="https://www.tiktok.com/@levontea.id"
              target="_blank"
              rel="noreferrer"
            >
              Lihat keseruannya →
            </a>

          </div>

        </div>


        <div className="hero-product">

          <div className="hero-product-stage">

            <div className="hero-sun" />

            <div className="hero-product-image">
              <Image
                src="/images/product/levontea-product.png"
                alt="Produk Le Vontea 220 ml"
                width={620}
                height={1100}
                priority
              />
            </div>

            <div className="hero-product-badges">

              <div className="product-badge badge-volume">
                220 ml
              </div>

              <div className="product-badge badge-fun">
                teman
                <br />
                seru
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* TENTANG */}
      <section
        id="tentang"
        className="intro section"
      >

        <div className="section-inner">

          <div className="section-tag">
            KENALAN YUK
          </div>

          <h2>
            Teh yang <span>nggak ribet</span>
            <br />
            buat nemenin harimu
          </h2>

          <p className="lead">
            Le Vontea hadir buat kamu yang suka
            menikmati momen sederhana dengan rasa
            teh yang segar. Buka, minum, lanjut
            seru-seruan.
          </p>

        </div>

      </section>


      {/* PRODUK */}
      <section
        id="produk"
        className="product-section section"
      >

        <div className="product-card">

          {/* VISUAL PRODUK */}
          <div className="product-visual">

            <div className="product-visual-background" />

            <div className="product-image-wrapper">
              <Image
                src="/images/product/levontea-product.png"
                alt="Le Vontea Minuman Teh 220 ml"
                width={520}
                height={925}
              />
            </div>

            {/* STICKER */}
            <div className="product-sticker sticker-volume">
              220 ml
            </div>

            <div className="product-sticker sticker-fun">
              teman
              <br />
              seru
            </div>

          </div>


          {/* INFORMASI PRODUK */}
          <div className="product-copy">

            <h2>
              Le Vontea
              <br />
              <span>220 ml</span>
            </h2>

            <p>
              Ukuran pas untuk dibawa ke mana-mana.
              Teman yang gampang diajak seru-seruan
              kapan saja.
            </p>


            {/* FEATURE PRODUK */}
            <div className="feature-row">

              {/* PAS */}
              <div className="feature-item feature-pass">

                <div className="feature-icon">

                  <div className="feature-shape" />

                  <svg
                    className="feature-svg"
                    viewBox="0 0 80 80"
                    aria-hidden="true"
                  >
                    <rect
                      x="24"
                      y="13"
                      width="32"
                      height="54"
                      rx="9"
                      fill="#fffdf5"
                      stroke="#12352a"
                      strokeWidth="3"
                    />

                    <path
                      d="M24 29H56"
                      stroke="#ef241c"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />

                    <path
                      d="M32 42H48"
                      stroke="#007b45"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />

                    <path
                      d="M32 50H44"
                      stroke="#007b45"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />

                  </svg>

                </div>

                <strong>
                  Pas
                </strong>

                <span>
                  Buat Nemenin
                  <br />
                  Kamu
                </span>

              </div>


              {/* SEGAR */}
              <div className="feature-item feature-fresh">

                <div className="feature-icon">

                  <div className="feature-shape" />

                  <svg
                    className="feature-svg"
                    viewBox="0 0 80 80"
                    aria-hidden="true"
                  >
                    <path
                      d="M40 68C40 68 17 53 17 33C17 21 27 13 40 13C53 13 63 21 63 33C63 53 40 68 40 68Z"
                      fill="#007b45"
                    />

                    <path
                      d="M40 62C40 62 40 35 54 20"
                      stroke="#d9ff3f"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />

                    <path
                      d="M40 49C34 43 28 35 25 27"
                      stroke="#d9ff3f"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />

                  </svg>

                </div>

                <strong>
                  Segar
                </strong>

                <span>
                  Rasa yang
                  <br />
                  Nyegerin
                </span>

              </div>


              {/* PRAKTIS */}
              <div className="feature-item feature-practical">

                <div className="feature-icon">

                  <div className="feature-shape" />

                  <svg
                    className="feature-svg"
                    viewBox="0 0 80 80"
                    aria-hidden="true"
                  >
                    <path
                      d="M17 27L40 14L63 27V54L40 67L17 54V27Z"
                      fill="#fffdf5"
                      stroke="#12352a"
                      strokeWidth="3"
                      strokeLinejoin="round"
                    />

                    <path
                      d="M17 27L40 40L63 27"
                      stroke="#12352a"
                      strokeWidth="3"
                      strokeLinejoin="round"
                    />

                    <path
                      d="M40 40V67"
                      stroke="#12352a"
                      strokeWidth="3"
                    />

                    <path
                      d="M30 21L40 27L50 21"
                      stroke="#ef241c"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />

                  </svg>

                </div>

                <strong>
                  Praktis
                </strong>

                <span>
                  Siap Dibawa Ke
                  <br />
                  Mana Aja
                </span>

              </div>

            </div>


            <a
              className="button button-red"
              href="https://www.instagram.com/levontea.id/"
              target="_blank"
              rel="noreferrer"
            >
              Ikuti @levontea.id
            </a>

          </div>

        </div>

      </section>


      {/* MOMEN */}
      <section
        id="momen"
        className="moments section"
      >

        <div className="moments-heading">

          <div>

            <div className="section-tag">
              LE VONTEA + KAMU
            </div>

            <h2>
              Teman di
              <br />
              <span>setiap momen.</span>
            </h2>

          </div>

          <p>
            Nggak harus momen besar.
            Yang penting ada cerita dan ada
            yang bikin segar.
          </p>

        </div>


        <div className="moment-grid">

          {moments.map((moment) => (
            <article
              className="moment-card"
              key={moment.title}
            >

              <div className="moment-icon">
                {moment.emoji}
              </div>

              <h3>
                {moment.title}
              </h3>

              <p>
                {moment.text}
              </p>

              <span>
                Le Vontea →
              </span>

            </article>
          ))}

        </div>

      </section>


      {/* SOCIAL */}
      <section className="social-section section">

        <div className="social-panel">

          <div className="social-copy">

            <div className="section-tag">
              AYO MAIN BARENG
            </div>

            <h2>
              Seru-seruan
              <br />
              <span>bareng Le Vontea.</span>
            </h2>

            <p>
              Follow akun kami untuk lihat konten,
              aktivitas, dan momen seru lainnya.
            </p>

          </div>


          <div className="social-buttons">

            <a
              href="https://www.instagram.com/levontea.id/"
              target="_blank"
              rel="noreferrer"
            >
              <span>Instagram</span>
              <b>↗</b>
            </a>

            <a
              href="https://www.tiktok.com/@levontea.id"
              target="_blank"
              rel="noreferrer"
            >
              <span>TikTok</span>
              <b>↗</b>
            </a>

          </div>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="footer">

        <Image
          src="/images/brand/logo-levontea.png"
          alt="Le Vontea"
          width={110}
          height={110}
        />

        <p>
          Segarnya Bikin Seru
        </p>

        <div>

          <a
            href="https://www.instagram.com/levontea.id/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>

          <a
            href="https://www.tiktok.com/@levontea.id"
            target="_blank"
            rel="noreferrer"
          >
            TikTok
          </a>

        </div>

        <small>
          © {new Date().getFullYear()} Le Vontea.
          All rights reserved.
        </small>

      </footer>

    </main>
  )
}