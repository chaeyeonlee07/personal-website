import { useNavigate } from "react-router-dom";
import '../styles/global.css';
import me from '../images/profile2.png';

function About() {
  const navigate = useNavigate();
  return (
    <body>
      <div className="container">
        <h1 className = "aboutme">About Me</h1>
         
        <div class="profile-container">
          <img src={me} class="profile-image" alt="My Profile" style={{ width: '15vw', height: 'auto' }} /> <br />
          <div className="self-intro">
          Hello! My name is Chae Yeon Lee, and I am currently a third year studying Pure Mathematics and Computer Science in{' '}
          <a href="https://www.berkeley.edu/" className="link">
            UC Berkeley
          </a>{' '}
          ฅ՞•ﻌ•՞ฅ!
<<<<<<< HEAD

          My most recent collaboration has been developing a nature scavenger hunt game app using flutter with a friend I met at {' '}
=======
        <p>
          My most recent collaboration has been ios / android app development of Nature Quest, a scavenger hunt game to close the gap between 
              human living sphere with the nature, using Flutter at {' '}
>>>>>>> db3d7f087165d863a7dfa56737f46e56d0dda346
          <a href="https://www.impactlabs.io/fellowship" className="link">
            Impact Fellowship
          </a>
          !
 
           In my previous summer, I worked with the{' '}
          <a href="https://www.tensorflow.org/tfx" className="link">
            Tensorflow Extended (TFX)
          </a>{' '}
          team at Google, where I developed an end-to-end pipeline for training and evaluating finetuned large language models.

          I love meeting new people and discussing anything from mathematics, statistics, art, and philosophies!! I would love to collaborate and chat ˗ˏˋ☕ˎˊ˗ anytime!
          ~~
       
        </div>
        </div>
        <div class="ButtonContainer">
          <button className='Button AboutButton' onClick={() => { navigate("/index") }}>Home</button>
        </div>
      </div>
<<<<<<< HEAD

    </body>
  );
}

export default About;
=======
      </div>
    );
  }
  
  export default About;
  
>>>>>>> db3d7f087165d863a7dfa56737f46e56d0dda346
