import Image from 'next/image';

import styles from './Logos.module.css';

export default function Logos() {
  return (
    <div
      className={
        styles.LogosComponent +
        ' grid grid-cols-2 items-center justify-items-center md:grid-cols-4'
      }
    >
      <Image
        width={125}
        height={125}
        alt='logo'
        className='m-6 inline max-w-[125px] md:m-8 md:max-w-[200px]'
        src='/images/logos/bs.png'
      />

      <Image
        width={125}
        height={125}
        alt='logo'
        className='m-6 inline max-w-[125px] md:m-8 md:max-w-[200px]'
        src='/images/logos/firestone.png'
      />
      <Image
        width={125}
        height={125}
        alt='logo'
        className='m-6 inline max-w-[90px] md:m-8 md:max-w-[200px]'
        src='/images/logos/nissan.png'
      />
      <Image
        width={125}
        height={125}
        alt='logo'
        className='m-6 inline max-w-[90px] md:m-8 md:max-w-[200px]'
        src='/images/logos/toyota.png'
      />
      <Image
        width={80}
        height={125}
        alt='logo'
        className='m-6 inline max-w-[70px] md:m-8 md:max-w-[200px]'
        src='/images/logos/lag.png'
      />
      <Image
        width={80}
        height={125}
        alt='logo'
        className='m-6 inline max-w-[60px] md:m-8 md:max-w-[200px]'
        src='/images/logos/mls.png'
      />
      <Image
        width={80}
        height={125}
        alt='logo'
        className='m-6 inline max-w-[60px] md:m-8 md:max-w-[200px]'
        src='/images/logos/skc.png'
      />
      <Image
        width={125}
        height={125}
        alt='logo'
        className='m-6 inline max-w-[125px] md:m-8 md:max-w-[200px]'
        src='/images/logos/harvard.png'
      />
    </div>
  );
}
