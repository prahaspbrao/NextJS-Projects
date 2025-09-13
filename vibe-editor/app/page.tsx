import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";

export default async function Home() {

  return (

    <div className="flex flex-col items-center justify-center h-screen bg-grey">
      <Button >
      Get started!!
    </Button>
    </div>
    
  );
}
