import { IoIosRemoveCircleOutline } from "react-icons/io";

export const DocumentEntry = () => {
  return (
    <div className="flex justify-center">
      <input type="text" placeholder="URL del documento" />
      <button>
        <IoIosRemoveCircleOutline className=" icons-crud text-sky-500 mb-3" />
      </button>
    </div>
  );
};
