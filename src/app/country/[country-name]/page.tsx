"use client"; // Mark this as a client component

import { useParams } from "next/navigation";

export default function CountryName() {
  const params = useParams(); // Get the dynamic route parameters
  const country_name = params?.["country-name"]; // Access the route segment
  
  const countries = {
    pakistan: {
      name: "Pakistan",
      population: "234.23 million",
      capital: "Islamabad",
    },
    iran: {
      name: "Iran",
      population: "88.55 million",
      capital: "Tehran",
    },
    china: {
      name: "China",
      population: "141.9 million",
      capital: "Beijing",
    },
    india: {
      name: "India",
      population: "1.417 billion",
      capital: "New Delhi",
    },
    bangladesh: {
      name: "Bangladesh",
      population: "172.2 million",
      capital: "Dhaka",
    },
  };

  // Ensure the country_name is lowercase and defined before accessing the countries object
  const countryKey = country_name?.toString().toLowerCase();

  // Retrieve the country details using the countryKey, or return a default value if not found
  const country = countryKey && countries[countryKey as keyof typeof countries];

  const countryDetails = country
    ? {
        name: country.name,
        population: country.population,
        capital: country.capital,
      }
    : {
        name: "Country not found",
        population: "Country not found",
        capital: "Country not found",
      };

  return (
    <div>
      <h1>
        <b>Country Details</b>
      </h1>
      <p>Country name: {countryDetails.name}</p>
      <p>
        Population: <span style={{ color: "red" }}>{countryDetails.population}</span>
      </p>
      <p>
        Capital city: <span style={{ color: "red" }}>{countryDetails.capital}</span>
      </p>
    </div>
  );
}
