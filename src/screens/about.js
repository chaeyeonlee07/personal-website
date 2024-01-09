import { useNavigate } from "react-router-dom";
import '../styles/global.css';
import me from '../images/profile2.png';

function About() {
    const navigate = useNavigate();
    return ( 
      <div className="container">
        <h1>About Me</h1>
          <img src={me} class="image" alt="My Profile" style={{ width: '200px', height: 'auto' }}/> <br />
        Hello! My name is Chae Yeon Lee, and I am currently a third year studying Pure Mathematics and Computer Science in{' '}
          <a href="https://www.berkeley.edu/" className="link">
            UC Berkeley
          </a>{' '}
          ฅ՞•ﻌ•՞ฅ!
        <p>
          My most recent collaboration has been ios / android app development of Nature Quest, a scavenger hunt game to close the gap between 
              human living sphere with the nature, using Flutter at {' '}
          <a href="https://www.impactlabs.io/fellowship" className="link">
            Impact Fellowship
          </a>
          !
          <br />
          I was born and raised in South Korea and studied abroad in the United States alone since high school!
          <br />
          Nowadays, I pursue software engineering 🖥️. During the previous summer, I worked with the{' '}
          <a href="https://www.tensorflow.org/tfx" className="link">
            Tensorflow Extended (TFX)
          </a>{' '}
          team at Google, creating an end-to-end pipeline for training and evaluating finetuned large language models.
        </p>
        <p>
          I love meeting new people and discussing anything from mathematics, statistics, art, and philosophies!! I would love to collaborate and chat ˗ˏˋ☕ˎˊ˗ anytime!
          ~~
        </p>
        <div class="ButtonContainer">
      <button className='Button AboutButton' onClick={() => {navigate("/index")}}>Home</button> 
      </div>
      </div>
    );
  }
  
  export default About;
  
