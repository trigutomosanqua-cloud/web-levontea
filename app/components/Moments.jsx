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

export default function Moments() {
  return (
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
  )
}
