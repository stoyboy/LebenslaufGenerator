import { ResumeProps } from '@/components/resume/Resume';

export const RESUME_DATA = {
  contactInfo: {
    name: 'Max Mustermann',
    jobtitle: 'Software Developer',
    email: 'max.mustermann@hotmail.com',
    phone: '+43660123456789',
    address: 'Musterstraße 1, 1000 Musterstadt',
    dob: '01.01.2000',
    placeOfBirth: 'Musterort',
  },
  aboutMe: {
    text: 'Ich bin Max Mustermann',
  },
  skills: {
    categories: [
      {
        title: 'Web-Entwicklung',
        skills: ['React/Next.js', 'TypeScript/JavaScript', 'HTML/CSS'],
      },
      {
        title: 'Serverseitige Entwicklung',
        skills: ['NodeJS', 'PHP'],
      },
      {
        title: 'Datenbanken und Abfragesprachen',
        skills: ['SQL'],
      },
      {
        title: 'Versionskontrolle und Deployment',
        skills: ['Git'],
      },
    ],
  },
  experiences: {
    jobs: [
      {
        companyname: 'Musterfirma 1, Musterstadt',
        jobtitle: 'Software Developer',
        timespan: 'Jänner 2022 - heute',
        tasks: ['Dies', 'Das', 'Ananas'],
      },
      {
        companyname: 'Musterfirma 1, Musterstadt',
        jobtitle: 'Software Developer',
        timespan: 'Jänner 2020 - Dezember 2022',
        tasks: ['Dies', 'Das', 'Ananas'],
      },
    ],
  },
  education: {
    institutes: [
      {
        name: 'Musteruni',
        address: 'Musterstraße 10, 1000 Musterstadt',
        timespan: 'September 2018 - August 2021',
      },
      {
        name: 'Musterschule',
        address: 'Musterstraße 20, 1000 Musterstadt',
        timespan: 'September 2010 - Juni 2018',
        info: ['Mit ausgezeichnetem Erfolg bestanden (Notenschnitt: 1,0)'],
      },
    ],
  },
} satisfies ResumeProps;
