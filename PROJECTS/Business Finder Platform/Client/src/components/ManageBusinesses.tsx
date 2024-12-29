import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { NewBusinessCard } from "./NewBusinessCard";

const ManageBusinesses = () => {
  return (
    <div>
      <Tabs
        defaultValue="add"
        className="w-[350px] md:w-[400] flex flex-col items-center"
      >
        <TabsList>
          <TabsTrigger value="owned">My Businesses</TabsTrigger>
          <TabsTrigger value="saved">Saved</TabsTrigger>
          <TabsTrigger value="add">Add New</TabsTrigger>
        </TabsList>
        <TabsContent value="owned">
          <h1 className="py-6 text-center">Manage your businesses here.</h1>
        </TabsContent>
        <TabsContent value="add">
          <h1 className="py-6 text-center">Add your businesses here.</h1>
          <NewBusinessCard></NewBusinessCard>
        </TabsContent>
        <TabsContent value="saved">
          <h1 className="py-6 text-center">Watch your saved Jobs here.</h1>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ManageBusinesses;
