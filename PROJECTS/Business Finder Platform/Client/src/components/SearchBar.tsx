import { Input } from "./ui/input";
import { Button } from "./ui/button";

const SearchBar = () => {
  return (
    <div>
      {" "}
      <div className="flex">
        <Input
          className="border-primary border-opacity-100"
          placeholder="Find the right job for you!"
        />
        <Button>
          <i className="fa fa-search text-white"></i>
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
