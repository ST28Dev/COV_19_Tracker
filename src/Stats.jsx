import { useEffect, useState, useContext } from "react"
import './App.css'
import { SearchContext } from "./Search"

const Stats = () => {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [items, setItems] = useState([])

  const search = useContext(SearchContext)


  useEffect(() => {
    fetch("https://coronavirus.m.pipedream.net/").then(res => res.json()).then((result) => {
      setIsLoaded(true)
      setItems(result)
    },
      (error) => {
        setIsLoaded(true)
        setError(error)
      }
    )
  }, [])

  if (error)
    return <div className="alert alert-danger mx-3">
      <h2>Error Occurred</h2>
      <hr></hr>
      <p className="h4">Please reload the page to try again.</p>
    </div>
  else if (!isLoaded)
    return (
      <div className="m-3">
        <p className="h3">Retrieving info...</p>
        <div className="spinner-grow text-warning mx-2">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-warning mx-2">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-warning mx-2">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  else {
    //timeout function to remove success message
    setTimeout(() => {
      const elem = document.getElementById("success_message")
      if (elem)
        elem.remove()
    }, 3000)

    //get the global statistics for the pandemic
    let globalStats = items.summaryStats.global

    let filtered
    if (isLoaded && !error) {
      const NYItems = items.rawData.filter(
        item => item.Country_Region === "US" && item.Province_State === "New York"
      )
      if (search) {
        const regex = new RegExp("^" + search, ["i"])

        filtered = NYItems.filter((item) => item.Admin2.match(regex))
      }
      else {
        filtered = NYItems
      }
    }

    return (
      <div className="mx-2">
        <div id="success_message" className="alert alert-success">
          <h3>Data successfully loaded!</h3>
        </div>

        <table className="table table-striped stats_table ">
          <thead>
            <tr key={Math.random() * 100}>
              <td key={Math.random() * 100}>County</td>
              <td key={Math.random() * 100}>Case Fatality Ratio</td>
              <td key={Math.random() * 100}>Confirmed Cases</td>
              <td key={Math.random() * 100}>Deaths</td>
              <td key={Math.random() * 100}>Incident Rate</td>
              <td key={Math.random() * 100}>Last Updated</td>
            </tr>
          </thead>
          <tbody>
            {filtered.map((elem) => {
              return (<tr key={Math.random() * 100}>
                <td key={Math.random() * 100}>{elem.Admin2}</td>
                {!isNaN(parseFloat(elem.Case_Fatality_Ratio)) ? <td key={Math.random() * 100}>{parseFloat(elem.Case_Fatality_Ratio).toFixed(2)}</td> : <td key={Math.random() * 100}>N/A</td>}
                <td key={Math.random() * 100}>{elem.Confirmed}</td>
                <td key={Math.random() * 100}>{elem.Deaths}</td>
                {!isNaN(parseFloat(elem.Incident_Rate)) ? <td key={Math.random() * 100}>{parseFloat(elem.Incident_Rate).toFixed(2)}</td> : <td key={Math.random() * 100}>N/A</td>}
                <td key={Math.random() * 100}>{elem.Last_Update}</td>
              </tr>)
            })}
          </tbody>

        </table>

        <div className="my-5">
          <h1 className="text-warning">Global Statistics</h1>
          <table className="table table-striped stats_table">
            <thead>
              <tr>
                <td>Confirmed Cases</td>
                <td>Deaths</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{globalStats.confirmed}</td>
                <td>{globalStats.deaths}</td>
              </tr>
            </tbody>

          </table>
        </div>
      </div>

    )
  }
}

export default Stats