import { FC } from 'react';

export interface SkillsProps {
  categories: {
    title: string;
    skills: string[];
  }[];
}

const Skills: FC<SkillsProps> = ({ categories }) => {
  return (
    <section className='mb-6'>
      <h2 className='text-2xl font-bold mb-4'>Fähigkeiten</h2>
      <div className='grid grid-cols-2 gap-4'>
        {categories.map((category, index) => (
          <div key={index}>
            <h3 className='text-lg font-medium mb-2'>{category.title}</h3>
            <ul className='list-disc pl-4 text-muted-foreground font-mono'>
              {category.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
