import PropTypes from "prop-types";
import remarkableLogo from "./../assets/remarkable.svg";
const Home = ({}) => {
  return (
    <div>
      <a href="https://instagram.com/remarkable.mkt" target="_blank">
        <img
          src={remarkableLogo}
          className="logo remarkable"
          alt="Remarkable logo"
        />
      </a>
      <h1>TORNA-TE NOTÁVEL</h1>
    </div>
  );
};

Home.protoTypes = {

};

export default Home;