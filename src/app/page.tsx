import Bubble from "@/components/Bubble";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Video from "@/components/Video";

export default function Home() {
  
  return (
    <main className="">
      <Navbar />
      <HeroSection />
      <Video />
      <Bubble />
      <Footer />
    </main>
  );
}
