import { useDispatch, useSelector } from "react-redux";
import { marked } from "marked";

//Actions
import { setExpandedPreviewer } from "../reducers/toggle/toggleSlice";

//Logos
import { MdCloseFullscreen, MdOpenInFull } from "react-icons/md";

export const Previewer = () => {
  const dispatch = useDispatch();
  const { markdownText, expandedEditor, expandedPreviewer } = useSelector(
    (state) => state.toggle
  );

  return (
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
        <button
          className="flex items-center bg-none border-none outline-none shadow-none cursor-pointer"
          onClick={() => {
            dispatch(setExpandedPreviewer());
          }}
        >
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
  );
};
