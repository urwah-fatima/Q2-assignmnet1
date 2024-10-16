// component named country_name that takes a params object as a prop. This object contains country_name, population, and capital_city properties.
export default function country_name({
  params,
}: {
  params: {
    country_name: string;
    population: number | string;
    capital_city: string;
  };
}) {
  // countries object is defined, containing information about five countries: Pakistan, Iran, China, India, and Bangladesh. Each country has properties for name, population, and capital.
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
      capital: "New Dehli",
    },
    bangladesh: {
      name: "Bangladesh",
      population: "172.2 million",
      capital: "Dhaka",
    },
  };
  // Getting the country key from params and converting it to lowercase
  const countryKey = params.country_name.toLowerCase();

  // Attempt to retrieve the country details using the countryKey from the countries object.
  // `keyof typeof countries` is used to ensure TypeScript knows that `countryKey` is a valid key for the countries object.
  const country = countries[countryKey as keyof typeof countries]; 

  // If the country exists in the `countries` object, the `countryDetails` object is populated with the country information.
  // Otherwise, it provides a default message saying "Sorry, we do not have data for this country".
  const countryDetails = country
    ? {
        name: country.name, // If found, display the country's name.
        population: country.population, // If found, display the country's population
        capital: country.capital, // If found, display the country's capital
      }
    : {
        name: "Country not found",
        polpulation: "Country not found",
        capital: "Country not found",
      };

  return (
    <div>
      <h1>
        <b>Country Details</b>
      </h1>
      <p>Country name: {countryDetails.name}</p>
      <p>
        Population:{" "}
        <span style={{ color: "red" }}>{countryDetails.population}</span>
      </p>
      <p>
        Capital city:{" "}
        <span style={{ color: "red" }}>{countryDetails.capital}</span>
      </p>
    </div>
  );
}
