import Logos from '@/components/Logos/Logos';

export default function About() {
  return (
    <div className='relative flex w-screen flex-col overflow-hidden bg-black p-8 text-center text-white md:flex-col md:pt-16'>
      <div className='relative z-10 mx-auto md:w-2/3'>
        <h1 className='font-secondary max-w-8xl  my-8 px-0 text-sm  font-normal uppercase tracking-widest  text-white'>
          WHO WE ARE
        </h1>
        <p className='font-regular my-2 mb-10 text-xl leading-loose tracking-wide  '>
          M7 is a collective of imaginative individuals, including creatives,
          designers, and engineers, operating from our headquarters in Kansas
          City, Missouri. Together our portfolio boasts esteemed collaborations
          with renowned brands.
        </p>
      </div>
      <div className='md:max-w-8xl relative z-10 mx-auto md:px-16'>
        <Logos />
      </div>
    </div>
  );
}
