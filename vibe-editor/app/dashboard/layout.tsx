import { SidebarProvider } from "@/components/ui/sidebar";
import { getAllPlaygroundForUser } from "@/modules/dashboard/actions/inedex";
import { icons } from "lucide-react";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

    const playgroundData = await getAllPlaygroundForUser();

    const technologyIconMap : Record<string , string> = {
        REACT : "Zap",
        NEXTJS : "Lightbulb",
        EXPRESS : "Database",
        VUE : "Compass",
        HONO : "FlameIcon",
        ANGULAR : "Terminal"
    }

    const formattedPlaygroundData = playgroundData?.map((item) => ({
        id : item.id,
        name : item.title,
        // todo : star
        icon : technologyIconMap[item.template]  || "Code2"
    }))

  return (
    <SidebarProvider>
    <div className="flex min-h-screen w-full overflow-x-hidden">
      {/* Dashboard sidebar */}
      <main className="flex-1">{children}</main>
    </div>
  </SidebarProvider>
  )
}
