import React, { useState, useEffect } from "react";
import "./App.css";
import Recipe from "./Recipe";

function App() {
   const APP_ID = "6f5e0abf";
   const APP_KEY = "3f9033485bf4c03095969125545b3442";

   const [recipes, setRecipes] = useState([]);
   const [search, setSearch] = useState("");
   const [query, setQuery] = useState("");

   useEffect(() => {
      getRecepies();
   }, [query]);

   async function getRecepies() {
      const response = await fetch(
         `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&type=public`
      );
      const data = await response.json();
      setRecipes(data.hits);
   }

   function updateSearch(e) {
      setSearch(e.target.value);
   }

   function getSearch(e) {
      e.preventDefault();
      setQuery(search);
      setSearch("");
   }

   return (
      <div className="App">
         <form onSubmit={getSearch}>
            <input
               type="text"
               placeholder="Find your favorite meals!"
               value={search}
               onChange={updateSearch}
            />
            <button type="submit">Search</button>
         </form>
         {recipes.length ? (
            <div className="recipes">
               {recipes.map(({ recipe }) => (
                  <Recipe
                     key={recipe.label}
                     title={recipe.label}
                     ingredients={recipe.ingredients}
                     calories={recipe.calories}
                     image={recipe.image}
                  />
               ))}
            </div>
         ) : (
            <p className="hello">Hello There!</p>
         )}
      </div>
   );
}

export default App;
