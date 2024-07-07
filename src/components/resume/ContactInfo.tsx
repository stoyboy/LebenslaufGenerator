import Image from 'next/image';
import { FC } from 'react';
import ResumePhoto from '@/assets/ResumePhoto.jpg';

export interface ContactInfoProps {
  name: string;
  jobtitle: string;
  email?: string;
  phone?: string;
  address?: string;
  dob?: string;
  placeOfBirth?: string;
}

const ContactInfo: FC<ContactInfoProps> = ({
  name,
  jobtitle,
  email,
  phone,
  address,
  dob,
  placeOfBirth
}) => {
  return (
    <section className='flex flex-row justify-between'>
      <div className='flex flex-col gap-2'>
        <div>
          <h1 className='text-3xl font-bold'>{name}</h1>
          <p className='text-sm font-mono'>{jobtitle}</p>
        </div>
        <div className='flex flex-col space-y-1 mt-2 text-muted-foreground font-mono'>
          <span className='text-sm hover:underline'>{address}</span>
          <span className='text-sm hover:underline'>{email}</span>
          <span className='text-sm hover:underline'>{phone}</span>
          <span className='text-sm hover:underline'>Geboren am {dob} in {placeOfBirth}</span>
        </div>
      </div>
      <Image
        src={ResumePhoto}
        alt='Bewerbungsfoto'
        className='w-[162px] h-[216px] object-cover'
      />
    </section>
  );
};

export default ContactInfo;
