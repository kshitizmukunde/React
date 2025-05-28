// import NetflixSeries from "./components/NetflixSeries";
// import "./components/Netflix.css";
// import { EventProps } from "./components/EventProps";
// import "./components/Netflix.module.css";
// import { EventHandling } from "./components/EventHandling";
// import { EventPropagation } from "./components/EventPropagation";

import "./components/EV.css";

import { State } from "./components/hooks/State"

export const App = () => {
  return  (
    <section className="container">
      {/* <h1 className="card-heading">List of Best Netflix Series</h1> */}
      {/* <NetflixSeries /> */}
      {/* <EventHandling /> */}
      {/* <EventProps /> */}
      {/* {<EventPropagation />} */}
      {<State />}
    </section>
  )
}


