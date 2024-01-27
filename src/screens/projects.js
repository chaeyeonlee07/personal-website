import { useNavigate } from "react-router-dom";
import React from 'react';
import Collapsible from 'react-collapsible';
import hp1 from '../images/hp1.png';
import hp2 from '../images/hp2.jpg';
import bm from '../images/bookmark.png';

function Projects() {
    const navigate = useNavigate();
    return (
        <body>
            <div className="project-container">
                <h1>Projects</h1>
                <p className="project-intro">
                    I love learning new languages and frameworks, and making new inventions that can address problems that I face on a daily-basis.
                    The sense of urgency that I feel to act and respond to my needs, curiosity, and problems are where many of my creations are motivated from.
                    <br></br>
                    <u> Hover over the project title to see its example and click on it to go to its github link!</u>
                </p>
                <div className="project-box">
                    <div class="hover_img">
                        <a href="https://github.com/chaeyeonlee07/happy-moment">Happy Moments: Chrome Extension<span><img src={hp1} alt="image" height="100" /></span></a>
                    </div>
                    <div className="project-inner-box">


                        <div className="project-content">

                            <ul className="project-points">
                                <li>Javascript, CSS, HTML</li>
                                <li>A simple chrome extension where you can log your happy memory, today's quote, and a photo memory to appreciate the present.</li>
                                <li>Motivation: I spend a lot of time on my computer, so I wished I had a place where I can go back to remind myself of a happy memory of the day. Also,
                                    I want to have more active recall and appreciation of my happy moments.  </li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className="project-box">
                    <div class="hover_img">
                        <a href="https://github.com/chaeyeonlee07/bookmark-generator">Bookmark-Generator<span><img src={bm} alt="image" height="100" /></span></a>
                    </div>

                    <div className="project-inner-box">

                        <div className="project-content">

                            <ul className="project-points">
                                <li>Javascript, CSS, HTML</li>
                                <li>Motivation: Whenever I read, I like to journal about my experience with reading a book -- whether that is my reflections, favorite quote, or where and when I read this book. I thought that if there could be a tool that makes this process of remembering a book easier, then I would use it myself. So, I created a simple bookmark generator which automatically creates a pretty bookmark for you!!</li>
                            </ul>
                        </div>

                    </div>
                </div>




                <button className='Button' onClick={() => { navigate("/index") }}>Home</button>

            </div>
        </body>

    )
}


export default Projects;
