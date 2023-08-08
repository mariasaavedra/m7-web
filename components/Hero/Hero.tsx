import Image from 'next/image';

import styles from './Hero.module.css';

import AnimatedText from '@/components/AnimatedText/AnimatedText';
import Button from '@/components/Button/Button';

export default function Hero() {
  return (
    <div
      className={
        styles.HeroComponent +
        ' ' +
        styles.bg +
        ' relative  h-[85vh] w-screen overflow-hidden bg-black text-black md:flex  md:h-[75vh] '
      }
    >
      <div className=' absolute bottom-0 bottom-0 left-0 right-0 top-0 flex h-full items-center justify-center text-black'>
        <div className='flex flex-col tracking-tight'>
          <h3 className='font-primary relative z-[9999] mx-auto max-w-7xl  p-8 text-center text-3xl font-black uppercase  tracking-widest md:text-7xl'>
            Streamlined Digital & Ecommerce Solutions
          </h3>
          <p className='font-primary  font-regular relative z-[9999] mx-auto mt-0 max-w-4xl p-8  pt-0 text-center text-xl  tracking-wide'>
            We work with you to create solutions that make the complex simple.
          </p>
          <a
            target='_blank'
            href='https://2frgctxs18u.typeform.com/to/b9j9IZQQ?'
            className='mx-auto w-fit text-center '
          >
            <Button variant='outline'>SUBMIT A PROJECT</Button>
          </a>
        </div>
      </div>
      <Image
        className='absolute bottom-[60px] right-3 z-10  invert'
        src='/images/logo.svg'
        width={60}
        height={60}
        alt='Logo'
      />
      <AnimatedText position='bottom' />
    </div>
  );
}
