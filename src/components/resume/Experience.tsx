import { FC } from 'react';

export interface ExperiencesProps {
  jobs: {
    jobtitle: string;
    companyname: string;
    timespan: string;
    tasks: string[];
  }[];
}

const Experiences: FC<ExperiencesProps> = ({ jobs }) => {
  return (
    <section className='mb-6'>
      <h2 className='text-2xl font-bold mb-4'>Erfahrung</h2>
      <div className='space-y-4'>
        {jobs.map((job) => {
          return (
            <div>
              <h3 className='text-lg font-semibold mb-1'>{job.jobtitle}</h3>
              <p className='text-muted-foreground'>
                {job.companyname} | {job.timespan}
              </p>
              <ul className='list-disc pl-4 text-muted-foreground font-mono mt-2'>
                {job.tasks.map((task) => (
                  <li>
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experiences;
