import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import SearchBar from "./SearchBar";
import { ComboboxDemo } from "./Combobox";

const SearchCard = () => {
  return (
    <div className="w-6/12 self-center">
      <Tabs defaultValue="freeSearch" className="">
        <TabsList>
          <TabsTrigger value="freeSearch">Free Search</TabsTrigger>
          <TabsTrigger value="category">Category</TabsTrigger>
        </TabsList>
        <TabsContent value="freeSearch">
          <SearchBar />
        </TabsContent>
        <TabsContent value="category">
          <ComboboxDemo />{" "}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SearchCard;
