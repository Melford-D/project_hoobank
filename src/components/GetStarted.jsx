import styles from "../style";
import { arrowUp } from "../assets";
import { Link, useHistory } from "react-router-dom";

const GetStarted = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/registration");
  };
  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
      >
        <Link to="/registration">
          <div className={`${styles.flexStart} flex-row`} onClick={handleClick}>
            <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
              <span className="text-gradient">Get</span>
            </p>
            <img
              src={arrowUp}
              alt="arrow-up"
              className="w-[23px] h-[23px] object-contain"
            />
          </div>

          <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
            <span className="text-gradient">Started</span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default GetStarted;
