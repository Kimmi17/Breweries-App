import React from "react";
import { Link, useParams } from "react-router-dom";
import useFetchDetail from "../hooks/useFetchDetail";
import { Brewery } from "../miscs/types";

const BreweryDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const url = `https://api.openbrewerydb.org/v1/breweries/${id}`;
  const { data: brewery, loading, error } = useFetchDetail<Brewery>(url);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !brewery) {
    return <div>{error || "Brewery not found."}</div>;
  }

  return (
    <div>
      <h1>{brewery.name}</h1>
      <p>Type: {brewery.brewery_type}</p>
      <p>Address: {brewery.address_1}</p>
      <p>City: {brewery.city}</p>
      <p>State/Province: {brewery.state_province}</p>
      <p>Country: {brewery.country}</p>
      <p>
        Website: <a href={brewery.website_url}>{brewery.website_url}</a>
      </p>
    </div>
  );
};

export default BreweryDetailPage;
