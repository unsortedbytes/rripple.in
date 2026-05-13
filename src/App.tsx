import { useState, type FormEvent } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setTimeout(() => {
        setEmail('')
        setSubmitted(false)
      }, 3000)
    }
  }

  return (
    <div className="landing-container">
      <div className="background-wrapper">
        <div className="gradient-sphere sphere-1"></div>
        <div className="gradient-sphere sphere-2"></div>
        <div className="gradient-sphere sphere-3"></div>
        <div className="noise-overlay"></div>
      </div>
      
      <div className="ripple-container">
        <div className="ripple colorful-ripple"></div>
        <div className="ripple colorful-ripple"></div>
        <div className="ripple colorful-ripple"></div>
      </div>

      <header className="header">
        <div className="logo-container">
          <img src="/logo.svg" className="logo" alt="rripple logo" />
          <span className="logo-text">rripple</span>
        </div>
      </header>

      <main className="main-content">
        <div className="center-stage">
          <div className="scene-3d">
            <h1 className="title-3d" data-text="COMING SOON">
              COMING SOON
            </h1>
          </div>
          
          <div className="marketing-tagline">
            <p>Revolutionizing Digital Marketing with data-driven waves.</p>
          </div>

          <form className="waitlist-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <input 
                type="email" 
                placeholder="Join the waitlist" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={submitted}
              />
              <button type="submit" disabled={submitted} className={submitted ? 'submitted' : ''}>
                {submitted ? '✓' : 'Notify Me'}
              </button>
            </div>
          </form>
        </div>
      </main>

      <footer className="footer">
        <div className="social-links">
          <a href="#" aria-label="X"><svg width="18" height="18"><use href="/icons.svg#x-icon" fill="currentColor" /></svg></a>
          <a href="#" aria-label="GitHub"><svg width="18" height="18"><use href="/icons.svg#github-icon" fill="currentColor" /></svg></a>
          <a href="#" aria-label="Discord"><svg width="18" height="18"><use href="/icons.svg#discord-icon" fill="currentColor" /></svg></a>
        </div>
      </footer>
    </div>
  )
}

export default App
