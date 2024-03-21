import { useNavigate } from "react-router-dom";
import React from 'react';
import Collapsible from 'react-collapsible';
import '../styles/global.css';
import beuni1 from '../images/beuni1.png';
import beuni2 from '../images/beuni2.png';
import beuni3 from '../images/beuni3.png';
import beuni4 from '../images/beuni4.png';
import beuni5 from '../images/beuni5.png';
import beuni6 from '../images/beuni6.png';
// import beuni7 from '../images/beuni7.png';
import beuni8 from '../images/beuni8.png';
import beuni9 from '../images/beuni9.png';
// import beuni10 from '../images/beuni10.png';



const imagePaths = [beuni1, beuni2, beuni3, beuni4, beuni5, beuni6, beuni8, beuni9];
function Memory() {
    const navigate = useNavigate();

    return (
        <body>
            <div className="memory-container">
                <p className="memory-intro">
                    Memories fade, and feelings dissipate with the passage of time.
                    Yet, I hope to hold on to my cherished memories, allowing them to endure through the ages, serving as a wellspring of courage, happiness, and strength as I journey through life.
                    {/* These memories constitute the very essence of my being today, shaping who I have become. I yearn to express gratitude, to hold them close in remembrance, and to let my love for them transcend distance, reaching wherever they may reside. */}
                </p>
                <h1 className="memory-title">In memory of my Bestfriend, Beuni˚🐾˖°</h1>
                <p>
                    {/* Beuni, my best friend, had been by my side since I was 11 years old. */}
                    I made this page in memory of him on December 24, 2023.</p>
                <div className="image-gallery">
                    {imagePaths.map((path, index) => (
                        <img key={index} src={path} className="gallery-image" alt={`Image ${index + 1}`} />
                    ))}
                </div>

                {/* <Collapsible trigger="What Beuni Liked ૮₍´｡ᵔ ꈊ ᵔ｡`₎ა">

                    <p>

                        <ul>
                            <li>Going out on a walk: Even when you were sick after getting bit by a mite and would refuse to eat and drink water,
                                you were super excited to go out on a walk and be outside with us inside a tent!•ﻌ•</li>
                            <li>You loved our socks: When I got back home from school or work, you would wait for us to take off our socks so that you could chew on them.
                                My grandma would yell at you for taking our socks, which led to having no socks with their pairs.</li>
                            <li>You loved eating human food as well as your snacks! You would wait under the table for food to drop, and you immediately snatched it! You loved ANY snack,
                                but you had hardtack, chicken + gum 🦴, and dried sweet potato every 6:30 am and 7:30pm.ᐡ ᐧ ﻌ ᐧ ᐡ</li>
                            <li>You used to love sleeping on my lap when I was studying!✧੯•́໒꒱ My legs would go numb after I had you on my lap for 15 minutes because you were 10kg or 22lbs.</li>
                        </ul>
                    </p>
                </Collapsible> */}

                <Collapsible trigger="What I Wish I Had Done for You ૮ ◞ ﻌ ◟ ა">
                    <p>
                        <ul>
                            <li>You used to bark   ૮ ˙Ⱉ˙ ა   at every single dog, which prevented us from spending more time outside than I wanted. I wish I had given you more opportunities to meet other dogs when you were young. I regret not making more friends for you.</li>
                            {/* <li>I wish I had been with you when you left this earth. I can't fathom how much you missed us in your last moment. I'm sorry.</li> */}
                            <li>I sometimes wish I hadn't left you to study abroad. I can't forget your eyes full of sadness when you realized both Sally and I were leaving and that you wouldn't see us for a year.</li>
                            {/* <li>I wish I had traveled more with you.</li> */}
                        </ul>
                    </p>
                </Collapsible>

                <Collapsible trigger="My favorite moments with Beuni ૮ • ﻌ - ა">
                    <p>
                        <ul>
                            <li>Going on a cafe date. Since you bark at any dogs you see, I had to find a cafe that is not on the first floor!! We
                                finally found one together and we would go there once every three days to drink lavender latte! The cafe owner was so
                                kind to always give you sweet potato sticks!!
                            </li>
                            <li>You were up exactly at 6 am ૮ – ﻌ–ა , scratch on our door to get your snack in the morning.</li>
                            <li>When the weather is good, Sally and I would set up a tent outside and all three of us would dive into the tent and read books / watch youtube together! </li>

                            {/* <li>I loved just going on a walk with you. Sometimes, being at home is not the happiest moment. You gave me a company in any weather to go on a walk together.</li> */}
                        </ul>
                    </p></Collapsible>

                <Collapsible trigger="My last word for you ૮꒰˵• ﻌ •˵꒱ა">

                    <p>
                        There are numerous reasons to thank you – for teaching me the essence of unconditional love, the weight of responsibility, the boundless affection another being can provide.
                        Thank you for consistently being by my side, my unwavering companion through every high and low. I can tell you with all confidence that every moment with you had been the happiest highlight in my life. I hope you feel the same! Words can't express how much strength, hope, and love you've instilled in me. You're irreplaceable. I hope you grace my dreams occasionally, embracing me warmly, joining me to a cafe, and taking a nap together.
                        <br></br>
                        ૮ฅ・ﻌ・აฅ
                    </p>
                </Collapsible>


                <button className='Button' onClick={() => { navigate("/index") }}>Home</button>

            </div>

        </body>
    )
}


export default Memory;
