import React, { useEffect, useState } from 'react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import '../styles/global.css';

const categories = {
  drinks: ['matcha latte 🍵', 'strawberry boba 🧋', 'iced americano 🧊☕️', 'corn tea 🫖'],
  hobbies: ['working out 🏋🏼', 'reading 📖', 'cafe tours', 'crafting 🎨', 'meditating 🧘'],
};

function Home() {
  const navigate = useNavigate();
  const [drinkIndex, setDrinkIndex] = useState(0);
  const [hobbyIndex, setHobbyIndex] = useState(0);

  useEffect(() => {
    const randomDrinkIndex = Math.floor(Math.random() * categories.drinks.length);
    const randomHobbyIndex = Math.floor(Math.random() * categories.hobbies.length);
    setDrinkIndex(randomDrinkIndex);
    setHobbyIndex(randomHobbyIndex);
  }, []);

  const updateDrink = () => {
    setDrinkIndex((prevIndex) => (prevIndex + 1) % categories.drinks.length);
  };

  const updateHobby = () => {
    setHobbyIndex((prevIndex) => (prevIndex + 1) % categories.hobbies.length);
  };

 
  return (
    <div className="index_container">
      <h1 class="wave-text">Welcome to my website</h1>
      <p>
        Hello! Nice to meet you!! I would love to welcome you to my 𓆝 𓆟 space 𓆝 𓆟 by taking your 
        order of my ‧₊˚ ⋅specialty drinks𓐐𓎩 ‧₊˚ ⋅ — would you like some{' '}
        <span id="drinkButton" className="link play" onClick={updateDrink}>
          {categories.drinks[drinkIndex]}
        </span>
        ?
        <br />
        <br />
        Now that you are comfortable at my virtual space, I would love to tell a little about myself! ˶ᵔ ᵕ ᵔ˶ 
        
        <br />
        I currently live in Berkeley𓇢𓆸, where I study Pure Mathematics and Computer Science! 
        I take immense joy in crafting things that reflect my unique taste and passion `♡´. 
        <br />

        <br />
      
        When I am free, I love {' '}
        <span id="hobbyButton" className="link play" onClick={updateHobby}>
          {categories.hobbies[hobbyIndex]}
        </span>
        . These hobbies are my sources of vitality🌿, creativity🌟, and wellness🕊 — I endeavor to nurture them, even amidst bustling schedules, to sustain my happiness.
        <br />
        <br />
        Now that you have learnt little about me, I would love to know you as well! I always love meeting new people and talking about many different subjects!
        <br />
        <br />
        You are always welcomed to reach me out by lcylsy0725 at berkeley dot edu!
      </p>
 
      <div class="ButtonContainer">
  <button class="Button" onClick={() => navigate('/about')}>About</button>
  <button class="Button" onClick={() => navigate('/memory')}>Memories</button>
</div>


        <a href="https://www.linkedin.com/in/chae-yeon-lee-299b87143/" target="_blank" rel="noreferrer">
          <AiFillLinkedin class="clear-left inline icon-link larger-icon" alt="linkedin" />
        </a>
        <a href="https://github.com/chaeyeonlee07" target="_blank" rel="noreferrer">
          <AiFillGithub class="clear-left inline icon-link larger-icon" alt="github" />
        </a>

    </div>
  );
}

export default Home;