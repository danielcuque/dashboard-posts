import { AiFillPlusCircle } from "react-icons/ai";
import { VideoEntry } from "./";
export const ParagraphCreator = () => {
  return (
    <form className="flex flex-col gap-4 w-full justify-center">
      <div className="flex justify-between">
        <p className="buttons-crud w-1/2 text-center">Párrafo</p>
        <button>
          <AiFillPlusCircle className="icons-crud text-blue-500" />
        </button>
      </div>
      <VideoEntry />
    </form>
  );
};
