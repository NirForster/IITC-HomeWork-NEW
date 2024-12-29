import BusinessCard from "../components/BusinessCard";
import NavBar from "../components/NavBar";
import SearchCard from "../components/SearchCard";

const Businesses = () => {
  return (
    <div className="flex flex-col justify-between">
      <NavBar />
      <div className="flex flex-col pt-6">
        <SearchCard />
      </div>
      <div className="pt-6 self-center">
        <BusinessCard />
      </div>
    </div>
  );
};

export default Businesses;
