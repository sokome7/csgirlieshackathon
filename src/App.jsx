// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
import { useState, useEffect } from 'react'
import './App.css'

function App() {
  
  const compliments = [
    "You're like a human glitter bomb 💥✨",
    "Your code runs smoother than butter on a bald monkey 🐒",
    "You radiate chaotic good energy 💫",
    "You're the WiFi signal in a world of dead zones 📶",
    "Your brain? 100% CPU, no thermal throttling 🧠🔥"
  ];

  const [compliment, setCompliment] = useState('');

  const generateCompliment = () => {
    const randomIndex = Math.floor(Math.random() * compliments.length);
    setCompliment(compliments[randomIndex]);
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
      <section id= "home" className = "section">
        <h1>✨ Glitchy Compliment Generator ✨</h1>
        <p>Click below to generate a compliment</p>
        <button onClick={generateCompliment}>Generate Compliment</button>
        <p>{compliment}</p>
        
      </section>

      <section id= "features" className = "section">
        <h2>Features</h2>
        <p>Stuff goes here</p>
      </section>

      <section id= "about" className = "section">
        <h2>About</h2>
        <p>Our purpose is to spread joy through unhinged compliments</p>
      </section>

      <section id= "contact" className = "section">
        <h2>Contact</h2>

        <p>Stuff goes here</p>
     </section>

      {/*Footer*/}
      <footer className="footer">
        <a href="https://github.com/sokome7/csgirlieshackathon" target="_blank" rel="noopener noreferrer">
          <img src="/src/assets/github.png" alt="GitHub" className="footer-icon" />
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
          <img src="/src/assets/tiktok.jpg" alt="TikTok" className="footer-icon" />
        </a>
    </footer>

    </div>
     
  );
}

export default App;
