import { Editor } from "./components/Editor";
import { Previewer } from "./components/Previewer";

function App() {
  return (
    <div className="w-full bg-[#578c8c] p-2">
      <h1 className="text-center text-white text-4xl font-montserrat font-bold">
        Markdown Previewer
      </h1>
      <div className="flex flex-col items-center mt-10 w-[80%] m-auto">
        <Editor />
        <Previewer />
      </div>
    </div>
  );
}

export default App;
