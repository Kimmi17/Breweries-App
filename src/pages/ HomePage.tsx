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
  const [breweryTypes, setBreweryTypes] = useState<string[]>([]);
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
    <div className="p-4">
      <div className="mt-8 mb-8 ">
        <select
          className="block py-2 px-3 border border-black rounded-md focus:outline-none focus:border-black-500 font-serif "
          value={filterByType}
          onChange={(e) => setFilterByType(e.target.value)}
        >
          <option value="">Filter by Type</option>
          {breweryTypes.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <BreweryList breweries={breweries} />

      <div className="flex justify-center mt-4">
        <div className="flex items-center">
          <button
            className="px-3 py-2 border border-gray-300 rounded-lg text-black hover:bg-gray-100 font-bold font-serif  mr-2 w-24"
            style={{
              background: "linear-gradient(to right, #c5eff7, #96d6e0)",
            }}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            className="px-3 py-2 border border-gray-300 rounded-lg  text-black hover:bg-gray-100 font-bold font-serif ml-2 w-24"
            style={{
              background: "linear-gradient(to right, #c5eff7, #96d6e0)",
            }}
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            Next
          </button>
        </div>
      </div>

      <ContactForm />
    </div>
  );
};

export default HomePage;
