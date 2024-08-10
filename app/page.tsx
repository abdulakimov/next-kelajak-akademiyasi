import Courses from "@/pages/courses";
import Hero from "@/pages/hero";
import Navbar from "@/pages/navbar";
import Projects from "@/pages/projects";
import Gallery from "@/pages/gallery";



export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Courses />
      <Projects />
      <Gallery />
    </main>
  );
}
