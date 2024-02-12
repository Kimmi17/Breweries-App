import React, { useEffect, useState } from "react";

import useFetch from "../hooks/useFetch";
import { HomePageProps } from "../miscs/types";
import BreweryList from "../components/ BreweryList";
import ContactForm from "../components/ContactForm";

interface Brewery {
  brewery_type: string;
}

const HomePage: React.FC<HomePageProps> = ({ searchTerm }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const [filterByType, setFilterByType] = useState("");

  const [breweryTypes, setBreweryTypes] = useState<string[]>([]); // State for brewery types
  const [url, setUrl] = useState("");

  useEffect(() => {
    let newUrl = `https://api.openbrewerydb.org/v1/breweries?per_page=10&page=${currentPage}`;

    if (searchTerm) {
      newUrl += `&by_name=${searchTerm}`;
    }

    if (filterByType) {
      newUrl += `&by_type=${filterByType}`;
    }

    setUrl(newUrl);
  }, [currentPage, searchTerm, filterByType]);

  useEffect(() => {
    fetch("https://api.openbrewerydb.org/v1/breweries")
      .then((response) => response.json())
      .then((data: Brewery[]) => {
        const uniqueTypes = Array.from(
          new Set(data.map((brewery) => brewery.brewery_type))
        );
        setBreweryTypes(uniqueTypes);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const { data: breweries, loading, error } = useFetch(url);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <div>
        Filter by Type:
        <select
          value={filterByType}
          onChange={(e) => setFilterByType(e.target.value)}
        >
          {breweryTypes.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      <BreweryList breweries={breweries} />
      <div>
        <button
          onClick={() => setCurrentPage((prev) => (prev === 1 ? 1 : prev - 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button onClick={() => setCurrentPage((prev) => prev + 1)}>Next</button>
      </div>
      <ContactForm />
    </div>
  );
};

export default HomePage;
