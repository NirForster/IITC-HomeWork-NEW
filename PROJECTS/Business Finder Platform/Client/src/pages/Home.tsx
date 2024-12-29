import NavBar from "../components/NavBar";
import { HeroSection } from "../components/HeroSection.tsx";
import { BusinessCarosel } from "../components/BusinessCarosel";
import PageStatistics from "../components/PageStatistics.tsx";
import arrow from "../assets/Untitled design.svg";
import Footer from "../components/CustomFooter.tsx";

const Home = () => {
  return (
    <div>
      <NavBar />
      <main className="flex flex-col items-center">
        <HeroSection
          title="Your Dream Career Starts Here"
          subtitle="Explore top businesses and find your perfect fit."
          imageUrl="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
        />
        <PageStatistics />
        <div className="relative flex flex-col items-center py-8 w-full drop-shadow-lg">
          <h1 className="text-4xl font-extrabold text-primary drop-shadow-lg text-center px-4">
            Browse through hundreds of options!
          </h1>

          {/* Arrow Image - Visible only on desktop */}
          <img
            src={arrow}
            alt="arrow"
            className="hidden md:block md:absolute md:w-1/4 md:top-16 md:right-12"
          />

          {/* Carousel */}
          <div className="w-full my-8 sm:px-4 flex sm:justify-evenly drop-shadow-lg">
            <BusinessCarosel />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
