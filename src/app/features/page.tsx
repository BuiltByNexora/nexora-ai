import { LandingBackground } from "@/components/landing/background";
import { Navbar } from "@/components/landing/navbar";
import { Features } from "@/components/landing/features";

export default function FeaturesPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#030712] text-white">
      <LandingBackground />
      <Navbar />
      <Features />
    </main>
  );
}