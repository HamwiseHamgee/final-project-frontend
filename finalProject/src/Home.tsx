import { useState } from "react";
import { ResultList } from "./Results";
import SearchForm from "./SearchForm";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <SearchForm setSearchTerm={setSearchTerm} />
      <ResultList searchTerm={searchTerm} />
    </>
  );
}

export default Home;
