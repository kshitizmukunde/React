import { ParentComponent } from "./components/PropDrilling";

export const App = () => {
  return  (
    <section className="container">
      {<ParentComponent />}
    </section>
  );
};