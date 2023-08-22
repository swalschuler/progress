import "./ProgressBar.css";

const ProgressBar = () => (
  <div className="progress-item">
    <div className="progress-title">
      <div className="progress-title-left">❤️ Love</div>
      <div className="progress-title-right">12 seconds</div>
    </div>
    <div className="progress-outer">
      <div className="progress-inner"></div>
    </div>
  </div>
);

export default ProgressBar;
