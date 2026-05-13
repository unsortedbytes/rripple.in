import { useState, type FormEvent } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      // In a real app, this would send to an API
      setTimeout(() => {
        setEmail('')
        setSubmitted(false)
      }, 3000)
    }
  }

  return (
    <div className="landing-container">
      <div className="background-effects">
        <div className="ripple-effect">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
        <div className="gradient-glow"></div>
      </div>
      
      <header className="header">
        <div className="logo-container">
          <img src="/logo.svg" className="logo" alt="rripple logo" />
          <span className="logo-text">rripple</span>
        </div>
      </header>

      <main className="main-content">
        <div className="hero-section">
          <div className="text-content">
            <div className="badge">Coming Soon</div>
            <h1>Make waves with your next big idea.</h1>
            <p className="subtitle">
              We're building something that will completely change how you interact. 
              Stay tuned as we prepare to launch <strong>rripple</strong>.
            </p>
            
            <form className="waitlist-form" onSubmit={handleSubmit}>
              <div className="input-group">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={submitted}
                />
                <button type="submit" disabled={submitted} className={submitted ? 'submitted' : ''}>
                  {submitted ? 'Joined!' : 'Join Waitlist'}
                </button>
              </div>
              {submitted && <p className="success-message">Thanks for joining! We'll be in touch.</p>}
            </form>
          </div>
          
          <div className="image-content">
            <div className="image-wrapper">
              <img src="/src/assets/hero.png" alt="rripple platform preview" className="hero-image" onError={(e) => e.currentTarget.style.display = 'none'} />
              <div className="image-glow"></div>
            </div>
          </div>
        </div>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} rripple. All rights reserved.</p>
        <div className="social-links">
          <a href="#" aria-label="X (Twitter)">
            <svg width="20" height="20"><use href="/icons.svg#x-icon" fill="currentColor" /></svg>
          </a>
          <a href="#" aria-label="GitHub">
            <svg width="20" height="20"><use href="/icons.svg#github-icon" fill="currentColor" /></svg>
          </a>
          <a href="#" aria-label="Discord">
            <svg width="20" height="20"><use href="/icons.svg#discord-icon" fill="currentColor" /></svg>
          </a>
          <a href="#" aria-label="Bluesky">
            <svg width="20" height="20"><use href="/icons.svg#bluesky-icon" fill="currentColor" /></svg>
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
