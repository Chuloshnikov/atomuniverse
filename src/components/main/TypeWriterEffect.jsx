"use client"
import { TypeAnimation } from 'react-type-animation';

const TypewriterEffect = ({ text }) => {
  return (
    <TypeAnimation
      sequence={[text]}
      wrapper="span"
      cursor={true}
      repeat={1}
      style={{ fontSize: '20px', display: 'inline-block' }}
    />
  )
};

export default TypewriterEffect;
