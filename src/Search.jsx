import { useState, createContext} from "react"
import Stats from "./Stats"

export const SearchContext = createContext()
const Search = () => {
  const [search, setSearch] = useState("")

  const handleChange = (event) => {
    event.preventDefault()
    setSearch(event.target.value)
  }

  return (
    <SearchContext.Provider value={search}>
      <div className="m-2 bg-light">
        <div className="ms-2 p-2 mb-2">
          <p className="h2 m-0"> Search </p>
          <input id="county_search" type="text" className="form-control-lg my-3" onChange={handleChange} value={search} />
        </div>
        <Stats />
      </div>
    </SearchContext.Provider>
  )
}
export default Search
