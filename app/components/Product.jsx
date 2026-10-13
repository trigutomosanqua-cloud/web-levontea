import Image from 'next/image'

export default function Product() {
  return (
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
                    width="48"
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
  )
}
