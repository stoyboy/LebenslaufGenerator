import { Resume } from '@/components/resume/Resume';
import { RESUME_DATA } from '@/data/ResumeData';
import { Button } from '@/components/ui/button';
import { PrinterIcon } from 'lucide-react';
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

export default function Home() {
  const componentRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    removeAfterPrint: true,
  });

  return (
    // Max width is A4 (210mm)
    <div className='max-w-[210mm] p-[15mm] mx-auto'>
      <Button onClick={handlePrint} className='space-x-2 mb-10'>
        <PrinterIcon className='w-5 h-5' />
        <span>Lebenslauf als PDF drucken</span>
      </Button>
      <Resume ref={componentRef} {...RESUME_DATA} />
    </div>
  );
}
