/* eslint-disable react/no-unescaped-entities */
import Logos from "@/components/Logos/Logos";

export default function About() {
  return (
    <div className="relative flex w-screen flex-col overflow-hidden bg-black p-8 text-center text-white md:flex-col md:pt-16">
      <div className="relative z-10 mx-auto md:w-2/3">
        <h1 className="font-secondary max-w-8xl  my-8 px-0 text-sm  font-normal uppercase tracking-widest  text-white">
          WHO WE ARE
        </h1>
        <p className="font-regular my-2 mb-10 text-xl leading-loose tracking-wide  ">
          At M7, we're doing something a bit special. Headquartered in Kansas
          City and helmed by Maria Saavedra, we're a one-person powerhouse with
          a twist. We've built a strong network of some of the finest engineers
          and designers in the field. So while it may be a solo venture on
          paper, our reach and impact are anything but limited. Just take a look
          at our portfolio, and you'll see collaborations with some truly
          remarkable brands.
        </p>
      </div>
      <div className="md:max-w-8xl relative z-10 mx-auto md:px-16">
        <Logos />
      </div>
    </div>
  );
}
