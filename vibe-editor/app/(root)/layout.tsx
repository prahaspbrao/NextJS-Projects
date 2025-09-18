import { Metadata } from "next";
import { Header } from "@/modules/home/header";
import Footer from "@/modules/home/footer";

export const metadata: Metadata = {
  title: {
    template: "VibeCode - Editor",
    default: "Code Editor for VibeCoders - VibeCode",
  },
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />

      <div
  className="
    min-h-screen 
    bg-white dark:bg-black 
    [background-image:linear-gradient(to_right,rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.08)_1px,transparent_1px)] 
    dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)]
    [background-size:40px_40px]
  "
>
  <h1 className="p-10 text-4xl font-bold text-black dark:text-white">
    Tailwind Grid Background
  </h1>
</div>


      <main className="z-20 relative w-full pt-0 ">{children}</main>

      <Footer />
    </>
  );
}
