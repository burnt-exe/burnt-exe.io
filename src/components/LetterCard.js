import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import styled from 'styled-components';

// Importing images
import cookieLover from '../assets/images/Cookie_loveer.png';
import everywhereTogether from '../assets/images/everywhere_together.svg';
import hooked from '../assets/images/hooked.svg';
import lovingIt from '../assets/images/loving_it.svg';
import woman from '../assets/images/woman.png';
import writer from '../assets/images/writer.svg';
import writing from '../assets/images/writing.png';
import drawing from '../assets/images/drawing.png';
import signature from '../assets/images/signature.png';

// Styled components for the background and images
const Background = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #f0f4f8;
  overflow: hidden;
`;

const StyledCard = styled(Card)`
  max-width: 800px;
  margin: 2rem;
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 10;
  padding: 20px;
`;

const FloatingImage = styled.img`
  position: absolute;
  width: ${(props) => props.size || '60px'};
  animation: ${(props) => props.animationName || 'float'} ${(props) => props.duration || '8s'} infinite alternate ease-in-out;
  z-index: 1;
  opacity: 0.8;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

// Keyframe animations for floating effects
const keyframes = {
  float: `
    from {
      transform: translateY(0px) rotate(0deg);
    }
    to {
      transform: translateY(15px) rotate(10deg);
    }
  `,
  spin: `
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  `,
  pulse: `
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.1);
    }
  `
};

// Floating image components with animation and positioning
const CookieLover = styled(FloatingImage).attrs(() => ({
  src: cookieLover
}))`
  left: 10%;
  top: 10%;
  animation-name: ${keyframes.float};
`;

const EverywhereTogether = styled(FloatingImage).attrs(() => ({
  src: everywhereTogether
}))`
  right: 15%;
  top: 30%;
  animation-name: ${keyframes.spin};
`;

const Hooked = styled(FloatingImage).attrs(() => ({
  src: hooked
}))`
  left: 5%;
  bottom: 25%;
  animation-name: ${keyframes.pulse};
`;

const LovingIt = styled(FloatingImage).attrs(() => ({
  src: lovingIt
}))`
  right: 20%;
  bottom: 10%;
  animation-name: ${keyframes.float};
`;

const Woman = styled(FloatingImage).attrs(() => ({
  src: woman
}))`
  left: 70%;
  top: 70%;
  animation-name: ${keyframes.pulse};
`;

const Writer = styled(FloatingImage).attrs(() => ({
  src: writer
}))`
  left: 50%;
  bottom: 50%;
  animation-name: ${keyframes.spin};
`;

const Writing = styled(FloatingImage).attrs(() => ({
  src: writing
}))`
  right: 30%;
  top: 60%;
  animation-name: ${keyframes.float};
`;

const Drawing = styled(FloatingImage).attrs(() => ({
  src: drawing
}))`
  right: 5%;
  top: 15%;
  animation-name: ${keyframes.pulse};
`;

const Signature = styled(FloatingImage).attrs(() => ({
  src: signature
}))`
  left: 15%;
  bottom: 35%;
  animation-name: ${keyframes.spin};
`;

// Main component for the card
const LetterCard = () => {
  return (
    <Background>
      {/* Floating images for decoration */}
      <CookieLover size="70px" duration="10s" />
      <EverywhereTogether size="80px" duration="12s" />
      <Hooked size="60px" duration="8s" />
      <LovingIt size="65px" duration="11s" />
      <Woman size="70px" duration="9s" />
      <Writer size="50px" duration="14s" />
      <Writing size="80px" duration="10s" />
      <Drawing size="75px" duration="13s" />
      <Signature size="60px" duration="11s" />

      <StyledCard>
        <CardContent>
          <Typography variant="h5" gutterBottom style={{ fontFamily: 'Georgia, serif', color: '#4A90E2', textAlign: 'center' }}>
            To Make You Smile and Cry
          </Typography>
          <Typography variant="body1" paragraph style={{ fontFamily: 'Times New Roman, Times, serif', color: '#555', textAlign: 'justify' }}>
            The sky is painted in hues of dawn, <br />
            A canvas where the stars have just withdrawn. <br />
            In the stillness, your strength emerges bright, <br />
            A beacon of hope in the soft morning light.
          </Typography>
          <Typography variant="body1" paragraph style={{ fontFamily: 'Times New Roman, Times, serif', color: '#555', textAlign: 'justify' }}>
            Your journey, Miss Stewart, is a tale of grace, <br />
            With every step, a new dawn you embrace. <br />
            In Juke's eyes, your reflection does gleam, <br />
            A hero's heart in a young child's dream.
          </Typography>
          <Typography variant="body1" paragraph style={{ fontFamily: 'Times New Roman, Times, serif', color: '#555', textAlign: 'justify' }}>
            Through the storms, your spirit remains bold, <br />
            A story of love and courage to be told. <br />
            In your unwavering love, a world does unfold, <br />
            Where dreams take flight and hearts are consoled.
          </Typography>
          <Typography variant="body1" paragraph style={{ fontFamily: 'Times New Roman, Times, serif', color: '#555', textAlign: 'justify' }}>
            You are the melody in a symphony's rise, <br />
            A testament to the strength in your eyes. <br />
            Your love, a river that endlessly flows, <br />
            In Juke's life, your legacy grows.
          </Typography>
          <Typography variant="body1" paragraph style={{ fontFamily: 'Times New Roman, Times, serif', color: '#555', textAlign: 'justify' }}>
            So when the nights are long, and the road seems tough, <br />
            Remember, dear heart, you are enough. <br />
            With every dawn, a new hope will arise, <br />
            In the love that you share, in the light of your eyes.
          </Typography>
          <Typography variant="body2" align="right" style={{ fontFamily: 'Courier New, Courier, monospace', color: '#777' }}>
            With love and appreciation, <br />
            <strong>Mr. Matthee</strong>
          </Typography>
        </CardContent>
      </StyledCard>
    </Background>
  );
};

export default LetterCard;
