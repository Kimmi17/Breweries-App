import useFetch from "../hooks/useFetch";
import BreweryList from "../components/ BreweryList";

const url = "https://api.openbrewerydb.org/v1/breweries"; // Define the URL

const HomePage = () => {
  const { data: breweries, loading, error } = useFetch(url);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Welcome to the Brewery Directory</h1>
      <p>Explore a wide range of breweries from around the world!</p>
      <BreweryList breweries={breweries} />
    </div>
  );
};

export default HomePage;
