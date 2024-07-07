import React from 'react';
import AboutMe, { AboutMeProps } from './AboutMe';
import ContactInfo, { ContactInfoProps } from './ContactInfo';
import Education, { EducationProps } from './Education';
import Experiences, { ExperiencesProps } from './Experience';
import Skills, { SkillsProps } from './Skills';

export type ResumeProps = {
  contactInfo: ContactInfoProps;
  aboutMe: AboutMeProps;
  skills: SkillsProps;
  experiences: ExperiencesProps;
  education: EducationProps;
};

export const Resume = React.forwardRef<HTMLDivElement, ResumeProps>(
  ({ contactInfo, aboutMe, skills, experiences, education }, ref) => {
    return (
      <div className='flex flex-col bg-background text-foreground' ref={ref}>
        <ContactInfo {...contactInfo} />
        <AboutMe {...aboutMe} />
        <Experiences {...experiences} />
        <Education {...education} />
        <Skills {...skills} />
      </div>
    );
  }
);
