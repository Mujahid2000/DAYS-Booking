import AvailabilitySection from "@/component/AvailabilitySection";
import ExploreArea from "@/component/Explore-Area";
import Footer from "@/component/Footer";
import HeroSection from "@/component/Hero";
import YouMayAlsoLike from "@/component/HotelCard";
import Navbar from "@/component/Navbar";
import PoliciesSection from "@/component/Policies-Section";
import PropertyDetails from "@/component/Property-Details";
import TestimonialsSlider from "@/component/TestMonialSlider";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection/>
      <PropertyDetails/>
      <AvailabilitySection/>
      <ExploreArea />
      <TestimonialsSlider/>
      <PoliciesSection/>
      <YouMayAlsoLike/>
      <Footer/>
    </div>
  );
}
