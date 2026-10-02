import Image from "next/image";

export default function Product() {
  return (
    <section id="produk" className="section product-section">
      <div className="container product-grid">
        <div className="product-visual">
          <div className="product-circle" />
          <Image
            src="/images/product/levontea-product.png"
            alt="Le Vontea Minuman Teh 220 ml"
            width={560}
            height={560}
          />
        </div>

        <div className="product-copy">
          <span className="eyebrow green">KENALAN DENGAN PRODUK</span>
          <h2>Segar dalam Setiap Tegukan</h2>
          <p>
            Kenalan lebih dekat dengan Le Vontea 220 ml, minuman teh dalam
            kemasan cup yang siap menemani aktivitasmu.
          </p>

          <div className="product-specs">
            <div><strong>220 ml</strong><span>Isi Bersih</span></div>
            <div><strong>Teh</strong><span>Jenis Minuman</span></div>
            <div><strong>Cup</strong><span>Kemasan</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}