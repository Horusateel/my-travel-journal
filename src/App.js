import './App.css';
import Header from "./components/Header";
import Section from "./components/Section";
import sites from "./components/separate";


function App() {
  const jsx = sites.map(site => <Section 
    name={site.title}
    location={site.location}
    maps={site.googleMapsUrl}
    begin={site.startDate}
    end={site.endDate}
    dscrb={site.description}
    img={site.imageUrl}
    />)
  return (
    <div className="App">
      <Header />
      <main>
        {jsx}
      </main>
    </div>
  );
}

export default App;
