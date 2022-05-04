import react from "react";
import { useNavigate } from "react-router-dom";

export default function Child(props) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/ideaStats", { state: props.dataTitle });
  };

  return (
    <div className="childComponent" onClick={handleClick}>
      {props.dataTitle}
    </div>
  );
}
