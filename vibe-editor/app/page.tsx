import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import UserButton from "@/modules/auth/components/user-button";

export default async function Home() {

  return (

    <div className="flex flex-col items-center justify-center h-screen bg-grey">
      <Button >
      Get started!!
    </Button>

    <UserButton/>
    </div>
    
  );
}
