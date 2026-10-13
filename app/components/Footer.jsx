import Image from 'next/image'

export default function Footer() {
  return (
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
  )
}
