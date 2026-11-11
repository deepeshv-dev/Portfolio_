import { achievements } from '../../data/portfolio.js'

function Achievements() {
  return (
    <section
      id="achievements"
      className="section"
      aria-labelledby="achievements-heading"
    >
      <h2 id="achievements-heading" className="section__heading">Achievements</h2>
      <ul className="achievement-list">
        {achievements.map((item) => (
          <li key={item.title}>
            <article className="card achievement-card">
              <h3 className="achievement-card__title">{item.title}</h3>
              <ul className="achievement-card__details">
                {item.details.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Achievements
