import { useDispatch, useSelector } from "react-redux";

//Actions
import { setMarkdown, setExpandedEditor } from "../reducers/toggle/toggleSlice";

//Logos
import { MdCloseFullscreen, MdOpenInFull } from "react-icons/md";

export const Editor = () => {
  const dispatch = useDispatch();
  const { markdownText, expandedEditor, expandedPreviewer } = useSelector(
    (state) => state.toggle
  );

  return (
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
          onClick={() => {
            dispatch(setExpandedEditor());
          }}
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
        className="w-full h-[80%] text-lg bg-white resize-none p-1.5 border-none outline-none shadow-2xl text-[#1c1b1b] overflow-auto"
        value={markdownText}
        onChange={(e) => {
          dispatch(setMarkdown(e.target.value));
        }}
      ></textarea>
    </div>
  );
};
