import { useEffect } from "react";
import { useLocation } from "react-router";
import Hero from "../../components/common/Hero";
import About from "../../components/common/About";
import Highlights from "../../components/common/Highlights";
import NearbyLandmarks from "../../components/common/NearbyLandmarks";
import PreviousProjects from "../../components/common/PreviousProjects";
import Amenities from "../../components/common/Amenities";
import LocationMap from "../../components/common/LocationMap";
import LeadForm from "../../components/common/LeadForm";

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const el = document.querySelector(hash);
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 80);
    }
  }, [hash]);

  return (
    <>
      <Hero />
      <About />
      <Highlights />
      <NearbyLandmarks />
      <PreviousProjects />
      <Amenities />
      <LocationMap />
      <LeadForm />
    </>
  );
}