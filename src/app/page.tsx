import { Navbar } from "./Navbar";
import { Greeting } from "./Greeting";
import { Projects } from "./Projects";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Greeting></Greeting>
      <Projects></Projects>
    </>
  );
}
