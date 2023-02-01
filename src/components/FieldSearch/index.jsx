import { useState } from "react";
import { StyledFieldSearch } from "./style";

export function FieldSearch({setSearch}) {
  const [searchValue, setSearchValue] = useState("");
  const submit= (event) =>{
    event.preventDefault()

    setSearch(searchValue)
    
    setSearchValue('')
  }
  return (
    <StyledFieldSearch onSubmit={submit} action="">
      <input
        
        onChange={(event) => setSearchValue(event.target.value)}
        type="text"
        placeholder="Digitar Pesquisa"
      />
      <button className="button--search" type="submit">
        Pesquisar
      </button>
    </StyledFieldSearch>
  );
}
