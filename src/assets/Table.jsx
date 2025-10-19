import { MdOutlineSpaceBar } from "react-icons/md";


const Table = ({onLetterClick}) => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div className="grid grid-cols-5 gap-2">
      {alphabet.map((letra) => (
        <button
          key={letra}
          className="w-10 h-10 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded flex items-center justify-center transition-transform hover:scale-110"
          onClick={() => onLetterClick(letra.toLowerCase())}
        >
          {letra}
        </button>
      ))}
        <button
        key="space"
        className="col-span-2 h-10 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded flex items-center justify-center transition-transform hover:scale-110"
        onClick={() => onLetterClick(" ")}
      >
        <MdOutlineSpaceBar size={24} />
      </button>
    </div>
  );
};
export default Table