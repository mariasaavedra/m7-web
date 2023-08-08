import About from "@/components/About/About";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";


export default function Home() {
  return (
    <main className='font-body relative mx-auto overflow-x-hidden bg-black'>
    <section className='mx-auto'>
      <Hero />
      <About />
      <Services />
      <Footer />
    </section>
  </main>
  );
}
