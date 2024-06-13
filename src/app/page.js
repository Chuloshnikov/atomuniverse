import HeroSection from "@/components/main/HeroSection";
import InfoSection from "@/components/main/InfoSection";
import Image from "next/image";

export default function Home() {
  return (
   <section className="mt-8">
      <HeroSection/>
      <InfoSection/>
   </section>
  );
}
