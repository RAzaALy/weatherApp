import React, { useState, useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";
const App = () => {
  const [city, setCity] = useState();
  const [search, setSearch] = useState("Lahore");
  useEffect(() => {
    const fetchData = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=yourapikey`;
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data);
      setCity(data.main);       
    };
    fetchData();
  }, [search]);
  return (
    <>
      <div className="wrap">
        <div class="search">
          <input
            type="text"
            value={search}
            className="searchTerm"
            placeholder="Search City..."
            onChange={(e) => {
              // console.log(e.target.value);
              setSearch(e.target.value);
            }}
          />
          <button type="submit" className="searchButton">
            <SearchIcon />
          </button>
        </div>
      </div>
      <div className="card">
        {!city ? (
          <p>No Data Found!!!</p>
        ) : (
          <div>
            <h2>{search}</h2>
            {/* <h5>{city.sys.country}</h5> */}
            <h3>
              {/* {city.weather[0].main} */}
              <span>
                Min : {city.temp_min}°Cel Max : {city.temp_max}°Cel
              </span>
            </h3>
            <h1>{city.temp}°Cel</h1>
            <div className="sky">
              <div className="sun"></div>
              <div className="cloud">
                <div className="circle-small"></div>
                <div className="circle-tall"></div>
                <div className="circle-medium"></div>
              </div>
            </div>
            <table>
              <tr>
                <td>TUE</td>
                <td>WED</td>
                <td>THU</td>
                <td>FRI</td>
                <td>SAT</td>
              </tr>
              <tr>
                <td>30°</td>
                <td>34°</td>
                <td>36°</td>
                <td>34°</td>
                <td>37°</td>
              </tr>
              <tr>
                <td>17°</td>
                <td>22°</td>
                <td>19°</td>
                <td>23°</td>
                <td>19°</td>
              </tr>
            </table>
          </div>
        )}
      </div>
    </>
  );
};
export default App;
