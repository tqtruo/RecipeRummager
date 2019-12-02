import React, {useState, useEffect} from 'react';


const App = () =>{
    const APP_ID = "8ac29d4b";
    const APP_KEY = "6e2cd4bcf132e11ab01a06f895fee585";
    const SEARCH_QUERY = "chicken";

    const [recipes, setRecipes] = useState([]);

    const [caloriesLow, setCalorieMin] = useState("");
    const [caloriesHigh, setCalorieMax] = useState("");

    const request = `https://api.edamam.com/search?q=${SEARCH_QUERY}&app_id=${APP_ID}&app_key=${APP_KEY}`;

    async function fetchRecipes(){
        const response = await fetch(request);
        const data = await response.json();
        console.log(data);
    }

    useEffect(() =>{
        fetchRecipes();
    })

    //const request = `https://api.edamam.com/search?q=${SEARCH_QUERY}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`

    return (
        <div className = "App">
            <h1>Test React</h1>
        </div>
    )

}

export default App;