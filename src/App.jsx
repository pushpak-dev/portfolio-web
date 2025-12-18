import { Dock, Navbar,Welcome } from "#components";
import gsap from "gsap";  
import { Draggable } from "gsap/Draggable";
import { Finder, Resume, Safari, Terminal, TextWindow } from "#windows";
import ImageWindow from "#windows/image";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
     
     <Terminal />
     <Safari />
     <Resume />
     <Finder />
     <TextWindow />
     <ImageWindow />
    </main>
  )
}

export default App