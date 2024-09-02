import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Greeting from "./Greeting.jsx";
import { Numbers } from "./Numbers.jsx";
import { Test } from "./Test.jsx";
import Animals from "./Animals.jsx";
import Animals2 from "./Animals2.jsx";
import Animals3 from "./Animals3.jsx";
import Button from "./Button.jsx";
import Gallery from "./State.jsx";
import State2 from "./State2.jsx";
import "./index.css";
import Person from "./Person.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Greeting />
    <Numbers />
    <Test />
    <Animals />
    <Animals2 />
    <Animals3 />
    <Button />
    <Gallery />
    <State2 />
    <Person />
  </StrictMode>
);
