import ReactSvg from "./svg/ReactSvg";
import NextJs from "./svg/NextJs";
import Angular from "./svg/Angular";
import ExpressSvg from "./svg/ExpressSvg";
import Rust from "./svg/Rust";
import Rails from "./svg/Rails";

const Icons = () => {
  return (
    <div className="icons">
      <div className="language-container">
        <ReactSvg />
      </div>
      <div className="language-container">
        <NextJs />
      </div>
      <div className="language-container">
        <Angular />
      </div>
      <div className="language-container">
        <ExpressSvg />
      </div>
      <div className="language-container">
        <Rust />
      </div>
      <div className="language-container">
        <Rails />
      </div>
    </div>
  );
};

export default Icons;
