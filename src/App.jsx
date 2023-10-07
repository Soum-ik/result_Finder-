import Billing from "./components/Billing";
import Busnicess from "./components/Busnicess";
import Card from "./components/Card";
import Feedback from "./components/Feedback";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Status from "./components/Status";
import styles from "./style/style";

const App = () => (
  <div className=" w-full overflow-hidden bg-primary scroll-smooth">
    <div className={` bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={` bg-primary ${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={` bg-primary ${styles.flexStart}`}>
      <div className={` bg-primary ${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <div className={` bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={` bg-primary ${styles.boxWidth}`}>
        <Status />
        <Busnicess />
        <Billing />
        <Card />
        <Feedback/>
      </div>
    </div>
  </div>
);
export default App;
