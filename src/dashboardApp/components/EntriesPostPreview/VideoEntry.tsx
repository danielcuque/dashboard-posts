import { IoIosRemoveCircleOutline } from "react-icons/io";

export const VideoEntry = () => {
  return (
    <div className="flex ">
      <input type="text" placeholder="URL del video" />
      <button>
        <IoIosRemoveCircleOutline className=" icons-crud text-sky-500 mb-3" />
      </button>
    </div>
  );
};
