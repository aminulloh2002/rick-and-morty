// sidenote: snippet rfc for create new component
import { useEffect, useState } from "react";
import { useQuery } from "react-query"
import Character from "./Character"


export default function Characters() {
  const [page, setPage] = useState(1);

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, [page]);

  const fetchCharacter = async ({ queryKey }) => {
    // this query key is the key on useQuery (["characters", page])
    const response = await fetch(`https://rickandmortyapi.com/api/character?page=${queryKey[1]}`)
    return response.json()
  }

  const { data, isLoading, isError } = useQuery(["characters", page], fetchCharacter, {
    keepPreviousData:true
  })

  if (isLoading) {
    return <div>Loading...</div>
  }
  
  if (isError) {
    return <div>Loading</div>
  }

  const changePageHandler = (isNext) => {
    setPage((currentState) => {
      return isNext ? currentState + 1 : currentState - 1;
    })
  }

  return (
    <div className="characters">
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
