
import Cards from "../Cards/Cards";
import Table from "../Table/Table";
import "./MainDash.css";
const MainDash = () => {
  return (
    <div className="MainDash">
      <h2>DASHBOARD</h2>
      <Cards />
      <br></br>
      <br />
      <br />
      <Table />
    </div>
  );
};

export default MainDash;
