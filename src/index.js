import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import "./index.css";
// import App from "./App";
import StartRating from "./StarRating";
import App from "./App";
// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StartRating color="blue" maxRating={10} onSetRating={setMovieRating} />
//       <p>This movie was rated {movieRating} stars</p>
//     </div>
//   );
// }
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <StartRating
      maxRating={5}
      messages={["terrible", "bad", "okay", "good", "awesome"]}
    />
    <StartRating maxRating={10} />
    <StartRating maxRating={5} color="red" />
    <Test /> */}
    <App />
  </React.StrictMode>
);
