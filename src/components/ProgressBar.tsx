import "./ProgressBar.css";

type props = {
  title: String;
  time: Date;
  getPercentage: (time: Date) => number;
  getTimeLeft: (time: Date) => number;
  singularSuffix: String;
  allSingular?: Boolean;
  noDelay?: Boolean;
};

const ProgressBar = ({
  title,
  time,
  getPercentage,
  getTimeLeft,
  singularSuffix,
  allSingular,
  noDelay,
}: props) => {
  const getSuffix = () => {
    if (!!allSingular) {
      return singularSuffix;
    }
    return `${singularSuffix}${getTimeLeft(time) === 1 ? "" : "s"}`;
  };

  return (
    <div className="progress-item">
      <div className="progress-title">
        <div className="progress-title-left">{title}</div>
        <div className="progress-title-right">
          {`${getTimeLeft(time)} ${getSuffix()}`}
        </div>
      </div>
      <div className="progress-outer">
        <div
          className={`progress-inner ${!!noDelay ? "noDelay" : ""}`}
          style={{ width: `${getPercentage(time)}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
