import StopWatch from './StopWatch';

export default function MapsExercise({exercise, setMenuScreen}) {
    let {name} = exercise
    return <div>
        <p>{name}</p>
        <StopWatch/>
        <p>Maps</p>
        <button style={{fontsize:"14px"}} onClick={setMenuScreen}>Back to Menu</button>
    </div>
}
