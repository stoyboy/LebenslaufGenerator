import { FC } from 'react';

export interface EducationProps {
  institutes: {
    name: string;
    address: string;
    timespan: string;
    info?: string[];
  }[];
}

const Education: FC<EducationProps> = ({ institutes }) => {
  return (
    <section className='mb-6'>
      <h2 className='text-2xl font-bold mb-4'>Ausbildung</h2>
      <div className='space-y-4'>
        {institutes.map((institute, index) => (
          <div key={index}>
            <h3 className='text-lg font-semibold mb-1'>{institute.name}</h3>
            <p className='text-muted-foreground'>
              {institute.address} | {institute.timespan}
            </p>
            <ul className='list-disc pl-4 text-muted-foreground font-mono mt-2'>
              {institute.info?.map((info, index) => (
                <li key={index}>{info}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
