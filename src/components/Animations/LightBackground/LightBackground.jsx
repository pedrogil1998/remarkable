import "./LightBackground.css";

export const LightBackground = ({ children, zIndex, ...rest }) => {
  return (
    <div className="light-container">
      {children}
      <div className="light x1" style={{ zIndex: zIndex }}></div>
      <div className="light x2" style={{ zIndex: zIndex }}></div>
      <div className="light x3" style={{ zIndex: zIndex }}></div>
      <div className="light x4" style={{ zIndex: zIndex }}></div>
      <div className="light x5" style={{ zIndex: zIndex }}></div>
      <div className="light x6" style={{ zIndex: zIndex }}></div>
      <div className="light x7" style={{ zIndex: zIndex }}></div>
      <div className="light x8" style={{ zIndex: zIndex }}></div>
      <div className="light x9" style={{ zIndex: zIndex }}></div>
    </div>
  );
};
LightBackground.proptypes = {};

export default LightBackground;
