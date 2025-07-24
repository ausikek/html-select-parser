import List from "@/components/main/List";
import Table from "@/components/main/Table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <>
      <main>
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
          <Tabs defaultValue="select" className="w-[800px]">
            <TabsList>
              <TabsTrigger value="select">Select</TabsTrigger>
              <TabsTrigger value="table">Table</TabsTrigger>
            </TabsList>
            <TabsContent value="select">
              <List />
            </TabsContent>
            <TabsContent value="table">
              <Table />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </>
  );
}
