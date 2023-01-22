const About = () => {
  const toggleAbout = () => {
    document.getElementById("about_container").style.display === "none" ? document.getElementById("about_container").style.display = "block" : document.getElementById("about_container").style.display = "none"
  }

  const toggleSources = () => {
    document.getElementById("sources_container").style.display === "none" ? document.getElementById("sources_container").style.display = "block" : document.getElementById("sources_container").style.display = "none"
  }

  const toggleNotes = () => {
    document.getElementById("notes_container").style.display === "none" ? document.getElementById("notes_container").style.display = "block" : document.getElementById("notes_container").style.display = "none"
  }

  const update = (event) => {
    const elem = event.target
    elem.classList.remove("active")
    for (let i = 0; i < elem.parentElement.children.length; i++) {
      elem.parentElement.children.item(i).classList.remove("active")
    }
    elem.classList.add("active")

    updateComponent(elem)
    //elem.className !== "active" ? active : elem.classList.remove 
  }

  function updateComponent(elem) {
    const updateComp = document.querySelector("#information_comp")

    const type = elem.innerText

    let text = ""
    updateComp.innerText = text
    switch (type) {
      case "County":
        text = "The particular county for which the statistic(s) reference in New York State. Some statistics may not be computed for some counties, and some counties may not be referenced in the data."
        break;
      case "Case Fatality Ratio":
        text = "<span class=\"fw-bold\">Case Fatality Ratio</span> also known as <span class=\"fw-bold\">Case Fatality Rate/Risk</span> in epidemiology \"refers to the proportion of people who die from a specified disease among all individuals diagnosed with the disease over a certain period of time\". It is typically used to measure disease severity and used for making predictions about the potential outcomes from a disease\" (Harrington). The statistic is rounded to the <span class=\"fw-bold\">nearest hundredths</span>."
        break;
      case "Confirmed Cases":
        text = "The number of confirmed cases of COVID-19 recorded for the respective county."
        break;
      case "Deaths":
        text = "The number of deaths resulting from COVID-19 for the respective county."
        break;
      case "Incident Rate":
        text = "<span class=\"fw-bold\">Incidence Rate or person-time rate</span> is the ratio of the number of cases to the total time the population is endangered by the disease (\"Principles of Epidemiology\"). Similar to the <span class=\"fw-bold\">Case Fatality Ratio</span>, this statistic is rounded to the <span class=\"fw-bold\">nearest hundredths</span>."
        break;
      case "Last Updated":
        text = "The date for which the information was most recently updated."
        break;
      default:
        text = "Sample text"
        break;
    }
    updateComp.innerHTML = text;
  }


  return (
    <div className="m-3">
      <h4 className="display-6">About: </h4>
      <button className="btn btn-primary mb-2" onClick={toggleAbout}>Toggle</button>

      <div style={{ display: "none" }} className="container m-0 p-3 bloc" id="about_container">
        <blockquote className="blockquote">
          <p>
            This application tracks pertinent statistics regarding the virulence of COVID-19 on the state of New York, as well as some statistics regarding the global impact of the pandemic.
          </p>
          <p>
            Here you can find the individual statistics for each county located in New York State, such as the number of confirmed cases, the number of deaths, the incident rate, and the case fatality ratio. You can also search for a specific county using the input field under the "Search" section.
          </p>
        </blockquote>
      </div>


      <div>
        <h4 className="display-6">Notes: </h4>
        <button className="btn btn-primary mb-2" onClick={toggleNotes}>Toggle</button>
        <div className="container m-0 bloc p-3" id="notes_container" style={{ display: "none" }}>
          <blockquote className="blockquote">
            <p className="mb-5"> This section will provide an overview of the statistics involved in this project and some specific aspects of the application.</p>
          </blockquote>
          <div className="row mb-4">
            <div className="col">
              <ul className="list-group term_list" >
                <li onClick={update} className="list-group-item pe-auto">County</li>
                <li onClick={update} className="list-group-item pe-auto">Case Fatality Ratio</li>
                <li onClick={update} className="list-group-item">Confirmed Cases</li>
                <li onClick={update} className="list-group-item">Deaths</li>
                <li onClick={update} className="list-group-item pe-auto">Incident Rate</li>
                <li onClick={update} className="list-group-item">Last Updated</li>
              </ul>
            </div>

            <div className="col" >
              <p className="h5 fw-normal lh-lg" id="information_comp"></p>
            </div>
          </div>

          <hr />
          <div className="bg-light my-4 p-2 general_notes_bloc">
            <h4 className="p-3">General notes</h4>
            <ul className="list-group list-group-flush mx-4 mb-4" >
              <li className="list-group-item bg-light ">Values for some statistics may be missing for some countries. In such an event, this will be reflected by the value "N/A".</li>
              <li className="list-group-item bg-light ">There may not exist any recorded data for some counties.</li>
              <li className="list-group-item bg-light ">There may be instances where the data fails to load, which will be reflected by the appearance of a red error alert message in the place where the data should be. A simple page refresh should address this, but if the error persists, contact: <span className="text-info fw-bold">TS28Dev@gmail.com</span></li>
              <li className="list-group-item bg-light ">An empty search field query will collectively display all of the records at once.</li>
              <li className="list-group-item bg-transparent ">The dataset, as well as the tools used in the implementation of the application and my respective social links can be located in the footer.</li>
            </ul>
          </div>
        </div>

      </div>

      <div>
        <h4 className="display-6">Sources:</h4>
        <button className="btn btn-primary mb-2" onClick={toggleSources}>Toggle</button>
        <div className="bloc p-3 container m-0" id="sources_container" style={{ display: "none" }}>
          <p className="h5 fw-normal mb-3">
            This section contains all the sources consulted to compile the definitions for each term in the <span className="text-success fw-bold">Notes</span> section. Each source is cited in <span className="text-success fw-bold">MLA Format</span> (See <a href="https://owl.purdue.edu/owl/research_and_citation/mla_style/mla_formatting_and_style_guide/mla_formatting_and_style_guide.html" target="_blank">this</a> for more information on the MLA format)
          </p>
          <hr />
          <h3 className="text-center text-lg">Sources Used:</h3>
          <div className="overflow-auto">
            <ol className="h6 lh-lg">
              <li>Harrington, Rebecca A.. "case fatality rate". Encyclopedia Britannica, 5 May. 2020, https://www.britannica.com/science/case-fatality-rate. Accessed 13 January 2023.</li>
              <li>“Principles of Epidemiology.” Centers for Disease Control and Prevention, Centers for Disease Control and Prevention, 18 May 2012, https://www.cdc.gov/csels/dsepd/ss1978/lesson3/section2.html#:~:text=Thus%2C%20the%20incidence%20rate%20is,is%20at%20risk%20of%20disease. </li>
            </ol>
          </div>
        </div>
      </div>
      <hr />
    </div >

  )
}
export default About