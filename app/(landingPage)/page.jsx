import Hero from "./custom-components/hero/Hero";
import About from "./custom-components/about/About";
import Suppliers from "./custom-components/suppliers/Suppliers";
import Contractors from "./custom-components/contractors/Contractors";

export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
      <Suppliers/>
      <Contractors/>
    </main>
  );
}
