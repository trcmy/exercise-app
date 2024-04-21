import StopWatch from "./StopWatch"

export default function DurationExercise({exercise, setMenuScreen}) {
    let {name} = exercise
    return <div>
      <p>{name}</p>
      <StopWatch/>
      <button onClick={setMenuScreen}>Back to Menu</button>
    </div>
}