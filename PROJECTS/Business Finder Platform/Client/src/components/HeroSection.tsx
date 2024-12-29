import React from "react";
import SearchCard from "./SearchCard";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  imageUrl?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  imageUrl,
}) => {
  return (
    <section
      className="relative bg-cover bg-center py-24 text-white w-full shadow-lg"
      style={{ backgroundImage: `url(${imageUrl || ""})` }}
    >
      {/* Content */}
      <div className="relative z-10 container mx-auto text-center px-6 flex flex-col items-center">
        <h1 className="text-5xl font-extrabold text-primary drop-shadow-lg">
          {title}
        </h1>
        <p className="mt-4 text-xl text-muted-foreground drop-shadow-md mb-8">
          {subtitle}
        </p>
        {/* Align SearchCard */}
        <div className="w-full flex justify-center">
          <SearchCard />
        </div>
      </div>
    </section>
  );
};
