import React, { useState } from "react";
import "./App.css";
import Switch from "./composants/Switch";

const automateTab = [
  {
    "1": 1,
    "2": 1,
    "3": 1,
    "4": 1,
    "5": 1
  },
  {
    "1": 0,
    "2": 0,
    "3": 1,
    "4": 0,
    "5": 1
  },
  {
    "1": 1,
    "2": 0,
    "3": 0,
    "4": 1,
    "5": 0
  },
  {
    "1": 0,
    "2": 0,
    "3": 1,
    "4": 0,
    "5": 0
  },
  {
    "1": 0,
    "2": 0,
    "3": 0,
    "4": 2,
    "5": 0
  }
];

const automate = (pile, switchNum) => {
  const value = automateTab[pile][switchNum];
  if (value === 2) {
    // on a gagné
    return true;
  } else if (value === 1) {
    // ok, on empile
    return true;
  } else if (value === 0) {
    // pas bon, on réinitialise
    return false;
  }
};

const App = () => {
  const [pile, setPile] = useState(0);
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);
  const [switch4, setSwitch4] = useState(false);
  const [switch5, setSwitch5] = useState(false);
  const [chemin, setchemin] = useState("");

  return (
    <div className="App">
      <h1>Automate à pile d'état, trouvez la bonne combinaison</h1>
      {pile === 5 && <h1>Gagné !</h1>}
      {pile < 5 && <h2>Pile : {pile}</h2>}
      <h2>Chemin : {chemin}</h2>
      <div className="box">
        <div className="box-line">
          <Switch
            onOff={switch1}
            color="#2196f3"
            handleClick={() => {
              const isOk = automate(pile, 1);
              if (isOk) {
                setPile(pile + 1);
                setSwitch1(true);
                if (chemin === "") {
                  setchemin("1");
                } else {
                  setchemin(chemin + " - " + "1");
                }
              } else {
                setPile(0);
                setSwitch1(false);
                setSwitch2(false);
                setSwitch3(false);
                setSwitch4(false);
                setSwitch5(false);
                setchemin("");
              }
            }}
          ></Switch>
          <h1>1</h1>
        </div>
        <div className="box-line">
          <Switch
            onOff={switch2}
            color="#ff0000"
            handleClick={() => {
              const isOk = automate(pile, 2);
              if (isOk) {
                setPile(pile + 1);
                setSwitch2(true);
                if (chemin === "") {
                  setchemin("2");
                } else {
                  setchemin(chemin + " - " + "2");
                }
              } else {
                setPile(0);
                setSwitch1(false);
                setSwitch2(false);
                setSwitch3(false);
                setSwitch4(false);
                setSwitch5(false);
                setchemin("");
              }
            }}
          ></Switch>
          <h1>2</h1>
        </div>
        <div className="box-line">
          <Switch
            onOff={switch3}
            color="#00ff00"
            handleClick={() => {
              const isOk = automate(pile, 3);
              if (isOk) {
                setPile(pile + 1);
                setSwitch3(true);
                if (chemin === "") {
                  setchemin("3");
                } else {
                  setchemin(chemin + " - " + "3");
                }
              } else {
                setPile(0);
                setSwitch1(false);
                setSwitch2(false);
                setSwitch3(false);
                setSwitch4(false);
                setSwitch5(false);
                setchemin("");
              }
            }}
          ></Switch>
          <h1>3</h1>
        </div>
        <div className="box-line">
          <Switch
            onOff={switch4}
            color="#225555"
            handleClick={() => {
              const isOk = automate(pile, 4);
              if (isOk) {
                setPile(pile + 1);
                setSwitch4(true);
                if (chemin === "") {
                  setchemin("4");
                } else {
                  setchemin(chemin + " - " + "4");
                }
              } else {
                setPile(0);
                setSwitch1(false);
                setSwitch2(false);
                setSwitch3(false);
                setSwitch4(false);
                setSwitch5(false);
                setchemin("");
              }
            }}
          ></Switch>
          <h1>4</h1>
        </div>
        <div className="box-line">
          <Switch
            onOff={switch5}
            color="#FF00FF"
            handleClick={() => {
              const isOk = automate(pile, 5);
              if (isOk) {
                setPile(pile + 1);
                setSwitch5(true);
                if (chemin === "") {
                  setchemin("5");
                } else {
                  setchemin(chemin + " - " + "5");
                }
              } else {
                setPile(0);
                setSwitch1(false);
                setSwitch2(false);
                setSwitch3(false);
                setSwitch4(false);
                setSwitch5(false);
                setchemin("");
              }
            }}
          ></Switch>
          <h1>5</h1>
        </div>
      </div>
    </div>
  );
};

export default App;
