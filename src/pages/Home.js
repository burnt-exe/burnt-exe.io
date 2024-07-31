import React from 'react';
import './Home.css';
import CookieLover from '../assets/images/Cookie_loveer.png';
import PlayfulCat from '../assets/images/Playful_cat.png';
import Woman from '../assets/images/woman.png';
import StabilityBall from '../assets/images/stability_ball.png';
import Fatherhood from '../assets/images/fatherhood.png';
import Drawing from '../assets/images/drawing.png';
import Party from '../assets/images/party.png';
import MessagingFun from '../assets/images/Messaging_fun.png';

const Home = () => {
  return (
    <div className="container">
      <div className="letter">
        <h2>To Make You Smile and Cry</h2>
        <p>
          The sky is painted in hues of dawn, <br />
          A canvas where the stars have just withdrawn. <br />
          In the stillness, your strength emerges bright, <br />
          A beacon of hope in the soft morning light.
        </p>
        <p>
          Your journey, Miss Stewart, is a tale of grace, <br />
          With every step, a new dawn you embrace. <br />
          In Juke's eyes, your reflection does gleam, <br />
          A hero's heart in a young child's dream.
        </p>
        <p>
          Through the storms, your spirit remains bold, <br />
          A story of love and courage to be told. <br />
          In your unwavering love, a world does unfold, <br />
          Where dreams take flight and hearts are consoled.
        </p>
        <p>
          You are the melody in a symphony's rise, <br />
          A testament to the strength in your eyes. <br />
          Your love, a river that endlessly flows, <br />
          In Juke's life, your legacy grows.
        </p>
        <p>
          So when the nights are long, and the road seems tough, <br />
          Remember, dear heart, you are enough. <br />
          With every dawn, a new hope will arise, <br />
          In the love that you share, in the light of your eyes.
        </p>
        <p>
          With love and appreciation, <br />
          <strong>Mr. Matthee</strong>
        </p>
      </div>
      <div className="animated-images">
        <img src={CookieLover} alt="Cookie Lover" />
        <img src={PlayfulCat} alt="Playful Cat" />
        <img src={Woman} alt="Woman" />
        <img src={StabilityBall} alt="Stability Ball" />
        <img src={Fatherhood} alt="Fatherhood" />
        <img src={Drawing} alt="Drawing" />
        <img src={Party} alt="Party" />
        <img src={MessagingFun} alt="Messaging Fun" />
      </div>
    </div>
  );
};

export default Home;
