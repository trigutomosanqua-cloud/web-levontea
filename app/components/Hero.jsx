import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-decor hero-decor-one" />
      <div className="hero-decor hero-decor-two" />

      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">LE VONTEA</span>
          <h1>Segarnya<br /><em>Bikin Seru</em></h1>
          <p>
            Teman segar untuk nemenin berbagai aktivitas dan momen seru kamu.
          </p>
          <a className="button button-light" href="#sosial">
            Ikuti Keseruan Le Vontea
          </a>
        </div>

        <div className="hero-product">
          <div className="product-glow" />
          <Image
            src="/images/product/levontea-product.png"
            alt="Le Vontea 220 ml"
            width={650}
            height={650}
            priority
          />
        </div>
      </div>
    </section>
  );
}