// export default App
import { useState, useEffect } from 'react'
import compliments from './compliments.js';
import './App.css'

function App() {


  const [compliment, setCompliment] = useState('');
  const [memePath, setMemePath] = useState(''); // NEW STATE for meme image

  const generateCompliment = () => {
  const randomIndex = Math.floor(Math.random() * compliments.length);
  setCompliment(compliments[randomIndex]);

  const memeNumber = Math.floor(Math.random() * 54) + 1;
  setMemePath(`/Memes/meme${memeNumber}.jpg`);
};

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
  }, [isDarkMode]);


  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li>
            <button onClick={toggleTheme}>
              Toggle {isDarkMode ? "Light" : "Dark"} Mode
            </button>
          </li>
        </ul>
      </nav>

      {/*Sections*/}
      {/* <section id= "home" className = "section">
        <h1>✨ iComplimentU ✨</h1>
        <p>Click below to generate a compliment</p>
        <button onClick={generateCompliment}>Generate Compliment</button>
        <p>{compliment}</p>
        
      </section> */}
      <section id="home" className="section">
      <h1>✨ iCompliment U ✨</h1>
      <p>Click below to generate a compliment</p>
      <button onClick={generateCompliment}>Generate Compliment</button>
      
      {compliment && (
        <>
          <p>{compliment}</p>
          <img
            src={memePath}
            alt="Random Meme"
            className="meme-image"
          />
        </>
      )}
    </section>

      <section id="features" className="section">
        <h2>Features</h2>
        <ul>
          <li>Generates random, glitchy compliments inspired by Gen Z and TikTok vibes</li>
          <li>Displays a matching random meme for each compliment for extra fun</li>
          <li>Dark mode and light mode toggle to suit your mood</li>
          <li>Simple, clean design with easy navigation</li>
          <li>Responsive layout that works great on phones and desktops</li>
          <li>Open source and built with love by the CS Girlies Hackathon team</li>
        </ul>
    </section>


      <section id="about" className="section">
        <h2>About</h2>
        <p>
          Our purpose is to spread joy through unhinged compliments. This website idea was created by Shruthi. This website was created for submission to the CS Girlies Hackathon.
        </p>
        <p>
          The CS Girlies Hackathon is a supportive and inclusive event that took place from July 25th to July 27th, 2025. It was designed to encourage women to collaborate, learn new skills, and build creative projects in a friendly environment.
        </p>
        <p>
          This hackathon inspired us to create a fun and lighthearted app that combines glitchy vibes with random compliments and memes — perfect for sharing smiles and good energy.
        </p>
        <p>
          We're proud to be part of this community and hope our project spreads some joy to everyone who visits!
        </p>
      </section>

     <section id="contact" className="section">
      <h2>Contact</h2>
      <p>
        Have questions, feedback, or just want to say hi? Feel free to reach out!
      </p>
      <p>
        The main contact for this project is <strong>Sarah</strong>. You can email her at <em>sarah.okome7@gmail.com</em>.
      </p>
      <p>
        We’d love to hear from you and keep spreading good vibes together!
      </p>
      <p>
        Check out my TikTok and Github repo below (click the images)!
      </p>
    </section>


      {/*Footer*/}
      <footer className="footer">
        <a href="https://github.com/sokome7/csgirlieshackathon" target="_blank" rel="noopener noreferrer">
          <img src="/src/assets/github.png" alt="GitHub" className="footer-icon" />
        </a>
        <a href="https://www.tiktok.com/t/ZT6kVyCAe/" target="_blank" rel="noopener noreferrer">
          <img src="/src/assets/tiktok.jpg" alt="TikTok" className="footer-icon" />
        </a>
    </footer>

    </div>
     
  );
}

export default App;
