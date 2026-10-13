import Image from 'next/image'

export default function Header() {
  return (
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
  )
}
