import "./Updates.css";
import { UpdatesData } from "../../Data/Data";

const Updates = () => {
  return (
    <div className="Updates">
      <h3 style={{color:'gray'}}>Updates</h3>
      {UpdatesData.map((update,index) => {
        
        return (
          <div key={index} className="update">
            <img src={update.img} alt="profile" />
            <div className="noti">
              <div  style={{marginBottom: '0.5rem'}}>
                <span>{update.name}</span>
                <span> {update.noti}</span>
              </div>
                <span>{update.time}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Updates;
