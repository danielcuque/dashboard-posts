import { IoIosRemoveCircleOutline } from "react-icons/io";

export const ParagraphEntry = () => {
  return (
    <div className="flex justify-center">
      <input type="text" placeholder="Ingresar texto" />
      <button>
        <IoIosRemoveCircleOutline className=" icons-crud text-sky-500 mb-3" />
      </button>
    </div>
  );
};
