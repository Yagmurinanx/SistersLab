"use client"
import Axios from "axios";
import { useState } from "react";

const GetJoke = () => {
  const [joke, setJoke] = useState("");

  const getJokes = () => {
    Axios.get("https://official-joke-api.appspot.com/random_joke")
      .then((response) => {
        setJoke(response.data.setup + " " + response.data.punchline);
      })
      .catch((error) => {
        console.error("Hata:", error);
      });
  };

  return (
    <div>
      <div>{joke}</div>
      <button onClick={getJokes} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Get Joke</button>
    </div>
  );
};

export default GetJoke;








// import Axios from "axios";

// function getJoke(){
// const getJokes = () => {
//     Axios.get('https://official-joke-api.appspot.com/random_ten'.then((response)=>{
//         console.log(response)
//     })

// }
// return <div>Hello
//     <button onClick={getJokes}>Get Joke</button>
// </div> 
// }

// export default getJoke;