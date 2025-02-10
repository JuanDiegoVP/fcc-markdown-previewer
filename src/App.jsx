import { useState } from "react";
import { marked } from "marked";
import { MdCloseFullscreen, MdOpenInFull } from "react-icons/md";

const defaultMarkdown = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`;

function App() {
  const [markdownText, setMarkdownText] = useState(defaultMarkdown);
  const [expandedEditor, setExpandedEditor] = useState(false);
  const [expandedPreviewer, setExpandedPreviewer] = useState(false);

  const handleChange = (e) => {
    console.log(e.target.value);
    setMarkdownText(e.target.value);
  };
  const toggleEditor = () => {
    setExpandedEditor((prev) => !prev);
  };
  const togglePreviewer = () => {
    setExpandedPreviewer((prev) => !prev);
  };

  return (
    <div className="w-full bg-[#578c8c] p-2">
      <h1 className="text-center text-white text-4xl font-montserrat font-bold">
        Markdown Previewer
      </h1>
      <div className="flex flex-col items-center mt-10 w-[80%] m-auto">
        <div
          className={`${
            expandedEditor
              ? "w-full h-screen"
              : expandedPreviewer
              ? "hidden"
              : "w-[90%] h-[50vh] mb-3.5"
          }`}
        >
          <div className="flex items-center justify-between w-full h-5 p-1.5 bg-[#4c4a4a] font-bold text-[#a5eed3]">
            <span>Editor</span>
            <button
              className="flex items-center bg-none border-none outline-none shadow-none cursor-pointer"
              onClick={toggleEditor}
            >
              {expandedEditor ? (
                <MdCloseFullscreen className="text-lg font-bold text-[#a5eed3]" />
              ) : (
                <MdOpenInFull className="text-lg font-bold text-[#a5eed3]" />
              )}
            </button>
          </div>
          <textarea
            name="editor"
            className="w-full h-[80%] text-lg bg-white resize-none p-1.5 border-none shadow-2xl text-[#1c1b1b] overflow-auto"
            value={markdownText}
            onChange={handleChange}
          ></textarea>
        </div>
        <div
          className={`${
            expandedPreviewer
              ? "w-full h-screen"
              : expandedEditor
              ? "hidden"
              : "w-[100%] h-[100vh] mb-3.5"
          }`}
        >
          <div className="flex items-center justify-between w-full h-5 p-1.5 bg-[#4c4a4a] font-bold text-[#a5eed3]">
            <span>Previewer</span>
            <button className="flex items-center bg-none border-none outline-none shadow-none cursor-pointer" onClick={togglePreviewer}>
              {expandedPreviewer ? (
                <MdCloseFullscreen className="text-lg font-bold text-[#a5eed3]" />
              ) : (
                <MdOpenInFull className="text-lg font-bold text-[#a5eed3]" />
              )}
            </button>
          </div>
          <div
          className="w-full h-[80%] text-lg bg-white resize-none p-1.5 border-none shadow-2xl text-[#1c1b1b] overflow-auto"
            dangerouslySetInnerHTML={{
              __html: marked(markdownText, { breaks: true }),
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default App;
