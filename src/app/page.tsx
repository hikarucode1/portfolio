import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Writing } from "@/components/sections/writing";
import { Contact } from "@/components/sections/contact";

// Writing セクションが Zenn を1時間ごとに再取得する（lib/zenn.ts に追従）
export const revalidate = 3600;

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Writing />
      <Contact />
    </>
  );
}
