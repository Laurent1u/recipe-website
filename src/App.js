import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import TextField from "@material-ui/core/TextField";
import Search from "@material-ui/icons/Search";
import "./App.css";

const App = () => {
  const APP_ID = "eeabe6b3";
  const APP_KEY = "7c6608d08ae22f8d82e0ec6f9c347577";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getRecipes = async () => {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await response.json();
      setRecipes(data.hits);
    };

    getRecipes();
  }, [query]);

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div id="container">
      <div id="section-search">
        <Search />
        <form onSubmit={getSearch} style={{ width: "100%" }}>
          <TextField
            id="standard-search"
            label="Search Field"
            type="search"
            style={{ background: transparent }}
            fullWidth
            margin="normal"
            value={search}
            onChange={updateSearch}
          />
        </form>
      </div>

      <div id="section-recipe">
        {recipes.map((recipe, index) => (
          <Recipe
            key={index}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
