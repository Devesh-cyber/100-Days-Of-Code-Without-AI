function Landing_page({ flag }) {
  return (
    <div className="landing-page">
      <div className="landing-glow landing-glow-a" />
      <div className="landing-glow landing-glow-b" />

      {/* decorative floating emoji cards */}
      <div className="floaty floaty-1" style={{ "--r": "-8deg" }}><span>🎬</span></div>
      <div className="floaty floaty-2" style={{ "--r": "6deg" }}><span>🍿</span></div>
      <div className="floaty floaty-3" style={{ "--r": "-5deg" }}><span>📹</span></div>
      <div className="floaty floaty-4" style={{ "--r": "7deg" }}><span>🤔</span></div>
      <span className="mark mark-1">?</span>
      <span className="mark mark-2">?</span>
      <span className="dash dash-1" />
      <span className="dash dash-2" />
      <span className="dash dash-3" />
      <span className="dot dot-1" />
      <span className="dot dot-2" />
      <span className="dot dot-3" />

      <section className="quiz-card">
        <div className="quiz-badge">?</div>

        <h1 className="title-line title-white">EMOJI</h1>
        <h1 className="title-line title-accent">TRANSLATION</h1>

        <h3 className="subtitle-line subtitle-white">Can you guess the name</h3>
        <h3 className="subtitle-line subtitle-accent">from the emoji?</h3>

        <div className="quiz-stats">
          <span className="stat">
            <span className="stat-icon">📝</span> 5 Questions
          </span>
          <span className="stat-divider" />
          <span className="stat">
            <span className="stat-icon">📊</span> Medium - Hard
          </span>
        </div>

        <button className="start-btn" onClick={() => { flag(true) }}>
          Start Quiz <span className="start-arrow">→</span>
        </button>
      </section>
    </div>
  )
}

export default Landing_page;