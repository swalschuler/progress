import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import ProgressBar from "./components/ProgressBar";
import {
  getNumDaysInCurrentMonth,
  daysInYearToDate,
  getNumDaysInCurrentYear,
  getDaysUntilNextThanksgiving,
} from "./utilities/dateUtils";

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 10);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="container">
      <div className="app-title-container">
        <div className="app-title">Progress</div>
        <div className="app-sub-title">
          A recreation of <a href="https://neal.fun/progress/">neal.fun</a>
        </div>
      </div>
      <div className="progress-bars">
        <ProgressBar
          title={"🕑 Next minute"}
          time={time}
          getPercentage={(time: Date) => (time.getSeconds() / 60) * 100}
          getTimeLeft={(time: Date) => 60 - time.getSeconds()}
          singularSuffix={"second"}
        />
        <ProgressBar
          title={"🕑 Next hour"}
          time={time}
          getPercentage={(time: Date) => (time.getMinutes() / 60) * 100}
          getTimeLeft={(time: Date) => 60 - time.getMinutes()}
          singularSuffix={"minute"}
        />
        <ProgressBar
          title={"🌅 Next day"}
          time={time}
          getPercentage={(time: Date) => (time.getHours() / 24) * 100}
          getTimeLeft={(time: Date) => 24 - time.getHours()}
          singularSuffix={"hour"}
        />
        <ProgressBar
          title={"📅 Next month"}
          time={time}
          getPercentage={(time: Date) =>
            (time.getDate() / getNumDaysInCurrentMonth()) * 100
          }
          getTimeLeft={(time: Date) =>
            getNumDaysInCurrentMonth() - time.getDate()
          }
          singularSuffix={"day"}
        />
        <ProgressBar
          title={"🎆 Next year"}
          time={time}
          getPercentage={(time: Date) =>
            (daysInYearToDate() / getNumDaysInCurrentYear()) * 100
          }
          getTimeLeft={(time: Date) =>
            getNumDaysInCurrentYear() - daysInYearToDate()
          }
          singularSuffix={"day"}
        />
        <ProgressBar
          title={"🦃 Next Thanksgiving"}
          time={time}
          getPercentage={(time: Date) =>
            (getDaysUntilNextThanksgiving() / getNumDaysInCurrentYear()) * 100
          }
          getTimeLeft={(time: Date) => getDaysUntilNextThanksgiving()}
          singularSuffix={"day"}
        />
      </div>
    </div>
  );
}

export default App;
