import { useState, useEffect } from "react";
//used for homepage
export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        return response.json();
      })
      .then((data) => {
        setData(data.recipes);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(true);
        setIsLoading(false);
      });
  }, []);

  return { data, error, isLoading };
};

export const useSearch = (query) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [Results, setResults] = useState(null);
  const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=d45acc3131794a539e9320b9d66ce264&query=${query}&number=20&addRecipeInformation=true`;
  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        return response.json();
      })
      .then((data) => {
        setData(data.results);
        setIsLoading(false);
        setResults(data.totalResults);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  }, []);

  return { data, isLoading, error, Results };
};
