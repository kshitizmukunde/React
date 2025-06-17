import "./components/EV.css";
import { Todo } from "./projects/Todo/Todo";
// import { ToggleSwitch } from "./projects/ToggleSwitch/ToggleSwitch";
// import { LiftingState } from "./components/LiftStateUp";


export const App = () => {
  return  (
    <section className="container">
      {<Todo />}
    </section>
  )
}


