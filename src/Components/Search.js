import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Planets from './Planets';
import ErrorBoundary from './ErrorBoundary';
const Search = () => {
  const history = useHistory();
  const [planet, setPlanet] = useState("");
  const [search, setSearch] = useState("");
  const [loader,setLoader]=useState(true)
  useEffect(() => {
    axios.get("https://swapi.dev/api/planets/").then(res => {
      setPlanet(res.data.results)
      // setLoader(false)
    })
  }, [])
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }
  const dispResult = () => {
    let filtered = {}
    if (planet) {
      planet.filter(p => p.name === search)
      filtered = planet.filter(entry => entry.name.toLowerCase().includes(search.toLowerCase())
      )
      // Object.values(entry.name).some(val => val && val.includes(search)));

    }
    return filtered;
  }
  const handleLogout = () => {
    localStorage.removeItem("token")
    history.push("/")
  }


  return <>
    <header>
      <div className="userTitle" ><i className="fa fa-user" aria-hidden="true"></i>
    &nbsp;&nbsp;{localStorage.getItem("token").toLocaleUpperCase()}</div>
      <button className="logout" onClick={handleLogout}>log out</button>
    </header>
    <div className="search">
      Search Here  <input type="text" value={search} onChange={handleSearch} />
    </div>
    
    
    <ErrorBoundary >
      <Planets name={dispResult()} />
      </ErrorBoundary>
  
 
  </>
}
export default Search;
