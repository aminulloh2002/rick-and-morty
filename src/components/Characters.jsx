// sidenote: snippet rfc for create new component
import { useEffect, useState } from "react";
import { useQuery } from "react-query"
import Character from "./Character"
import Search from "./Search";


export default function Characters() {
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [page]);

  const fetchCharacter = async ({ queryKey }) => {
    // this query key is the key on useQuery (["characters", page])
    const response = await fetch(`https://rickandmortyapi.com/api/character?page=${queryKey[1]}&name=${queryKey[2]}`)
    if (!response.ok) {
      throw new Error("Not Found..")
    }
    return response.json()
  }

  const { data, isLoading, isError } = useQuery(["characters", page, name], fetchCharacter, {
    // keepPreviousData: true,
    retry: 0
  })

  const getCharByName = (name) => {
    setName(name)
  }

  if (isLoading) {
    return <div className="characters">
      <Search getCharByName={getCharByName} />
      <div className="text">Loading...</div>
    </div>
  }

  if (isError) {
    return <div className="characters">
      <Search getCharByName={getCharByName} /> <div className="text">Character not found</div>
    </div>
  }

  const changePageHandler = (isNext) => {
    setPage((currentState) => {
      return isNext ? currentState + 1 : currentState - 1;
    })
  }

  return (
    <div className="characters">
      <Search getCharByName={getCharByName} />

      {data.results.map(character => (
        <Character key={character.id} character={character} />
      ))}

      <div className="pagination">
        <button
          disabled={page === 1}
          onClick={changePageHandler.bind(null, false)}
        >
          Previous</button>
        <button
          disabled={!data.info.next}
          onClick={changePageHandler.bind(null, true)}
        >
          Next</button>
      </div>
    </div>
  )
}
