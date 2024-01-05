import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState();
  const navigate = useNavigate();

  const handleSubmit = function (e) {
    e.preventDefault();
    navigate(`/order/${query}`);
    setQuery('')
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Cari order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      ></input>
    </form>
  );
}

export default SearchOrder;
