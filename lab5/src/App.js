import './App.css';
import {useCallback, useState } from 'react';
import DurationExercise from './components/DurationExercise';
import MapsExercise from './components/Maps';

const MENU_SCREEN = "menu";
const EXERCISE_SCREEN = "exercise";
const DURATION_EXERISE = "duration";
const REPETITION_EXERISE = "repitition";
const MAPS_EXERCISE = "maps";

function RepetitionExercise(exercise, setMenuScreen) {
  let [count, setCount] = useState(0);
  return (
    <div>
      <p>{exercise.name}</p>
      <p style={{fontsize:"20px"}}>{count}</p>
      <button 
        style={{fontSize:"20px"}}
        onClick={() => setCount(count=>count+1)}>Increment</button>
      <button 
        style={{fontSize:"20px"}}
        onClick={() => setCount(0)}>Reset</button><br/>
      <button 
        style={{fontSize:"10px"}}
        onClick={setMenuScreen}>Return to Menu</button>
      </div>
  );
}

let exerciseList = [
  {type: DURATION_EXERISE, name: "Running"},
  {type: DURATION_EXERISE, name: "Rowing"},
  {type: DURATION_EXERISE, name: "Swimming"},
  {type: REPETITION_EXERISE, name: "Push Ups"},
  {type: MAPS_EXERCISE, name: "Maps"}
];

function App() {
  let [currentScreen, setCurrentScreen] = useState(EXERCISE_SCREEN);
  let [currentExercise, setCurrentExercise] = useState(exerciseList[3]);
  let screenComponent = undefined;
  let buttonClick = useCallback((exercise) => {
    setCurrentExercise(exercise);
    setCurrentScreen(EXERCISE_SCREEN);
  });

if (currentScreen === MENU_SCREEN) {
    screenComponent = (
    <div>
      <p>Exercise Menu</p>
      <ul> 
        {exerciseList.map((exercise)=> {
          return (
          <li>
            <button onClick={() => buttonClick(exercise)}>
              {exercise.name}
            </button>
          </li>
          )
        })}
      </ul>
    </div>
    );
  } else if (currentScreen === EXERCISE_SCREEN) {
    switch(currentExercise.type) {
      case DURATION_EXERISE:
        screenComponent = (
        <DurationExercise 
        exercise={currentExercise}
        setMenuScreen={()=>setCurrentScreen(MENU_SCREEN)}
        />
        );
      break;
      case MAPS_EXERCISE:
        screenComponent = (
          <MapsExercise
            exercise={currentExercise}
            setMenuScreen={ () => setCurrentScreen(MENU_SCREEN)}
          />
        );
      break;
      case REPETITION_EXERISE:
        screenComponent = (
        <RepetitionExercise
        exercise={currentExercise}
        setMenuScreen={()=>setCurrentScreen(MENU_SCREEN)}
        />
        );
      break;
      default: 
        screenComponent = undefined;
    }
}

  return (
    <div className="App">
      <header className="App-header">
        {screenComponent}
      </header>
    </div>
  );
}

export default App;


