interface ArrowProps {
  theme?: string;
}
export default function Arrow(props: ArrowProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img alt='arrow icon' className='inline' src='/images/arrow.svg'></img>
  );
}

Arrow.defaultProps = {
  theme: 'dark',
};
