import { AiFillPlusCircle } from "react-icons/ai";

export const DocumentCreator = () => {
  return (
    <div className="flex gap-4 w-full justify-center">
      <p className="buttons-crud w-1/2 text-center">Video</p>
      <button>
        <AiFillPlusCircle className="icons-crud text-blue-500" />
      </button>
    </div>
  );
};
