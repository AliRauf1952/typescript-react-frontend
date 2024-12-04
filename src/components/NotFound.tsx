import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    return navigate("/");
  };

  return (
    <div>
      <h1>Not found</h1>
      <button onClick={handleClick}>Return Home</button>
    </div>
  );
};
