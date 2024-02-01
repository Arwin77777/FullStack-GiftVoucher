
import CustomerReview from "../CustomerReview/CustomerReview";
import SoldHourly from "../CustomerReview/SalesHourly";
import Updates from "../Updates/Updates";
import "./RightSide.css";

const RightSide = () => {
  return (
    <div className="RightSide">
      <div className="rs-l">
        <Updates />
      </div>
      <br />
      <div className="rs-r" >
        <CustomerReview />
        <SoldHourly></SoldHourly>
      </div>
    </div>
  );
};

export default RightSide;
