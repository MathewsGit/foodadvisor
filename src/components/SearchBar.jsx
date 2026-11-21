import { useState } from 'react'

function SearchBar(props) {
  const [search, setSearch] = useState(props.initialSearch || '')

  function handleSubmit(event) {
    event.preventDefault()
    if (search.trim()) {
      props.onSearch(search.trim())
    }
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search restaurants or food"
        aria-label="Search restaurants or food"
      />
      {search && (
        <button className="search-clear" type="button" aria-label="Clear search" onClick={() => setSearch('')}>
          ×
        </button>
      )}
      <button type="submit">Search</button>
    </form>
  )
}

export default SearchBar
