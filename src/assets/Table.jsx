import { MdOutlineSpaceBar } from "react-icons/md";


const Table = ({onLetterClick}) => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div className="table-grid">
      {alphabet.map((letra) => (
        <button
          key={letra}
          className="table-button"
          onClick={() => onLetterClick(letra.toLowerCase())}
        >
          {letra}
        </button>
      ))}
        <button
        key="space"
        className="table-button space-button"
        onClick={() => onLetterClick(" ")}
      >
        <MdOutlineSpaceBar size={24} />
      </button>
    </div>
  );
};
export default Table