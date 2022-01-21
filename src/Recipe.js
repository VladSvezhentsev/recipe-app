import React from "react";

function Recipe({ title, ingredients, calories, image }) {
   return (
      <div className="recipe">
         <h1>{title}</h1>
         <ul>
            <h2>Ingredients: </h2>
            {ingredients.map((ing) => (
               <li key={ing.id}>{ing.text}</li>
            ))}
         </ul>
         <p>Calories: {calories.toFixed(2)}</p>
         <img src={image} alt="" />
      </div>
   );
}

export default Recipe;
