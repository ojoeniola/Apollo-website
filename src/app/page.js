import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Platform from "@/components/Platform";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
     <Platform />
    </div>
  );
}

