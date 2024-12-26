import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Search = () => {
  const [SearchWord, setSearchWord] = useState("");

  return (
    <div
      style={{
        position: "absolute",
        top: "18%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        border: "2px solid #ccc",
        borderRadius: "15px",
        width: "500px",
        height: "50px",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <input
        value={SearchWord}
        style={{
          width: "400px",
          height: "30px",
          fontSize: "18px",
          alignItems: "center",
          marginTop: "8px",
        }}
        onChange={(e) => {
          setSearchWord(e.target.value);
        }}
      />
      {setSearchWord}
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        size="2xl"
        style={{
          cursor: "pointer",
          marginTop: "9px",
        }} // hover > color red
      />
    </div>
  );
};

export default Search;
