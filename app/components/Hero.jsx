import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-copy">

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
  )
}
