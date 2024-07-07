import { FC } from 'react';

export interface AboutMeProps {
    text: string
}

const AboutMe: FC<AboutMeProps> = ({ text }) => {
  return (
    <section className='mb-8 -mt-5'>
      <h2 className='text-2xl font-bold mb-4'>Über mich</h2>
      <p className='text-muted-foreground font-mono'>
        {text}
      </p>
    </section>
  );
};

export default AboutMe;
