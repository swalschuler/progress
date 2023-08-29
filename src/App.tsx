import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import ProgressBar from "./components/ProgressBar";
import {
  getNumDaysInCurrentMonth,
  daysInYearToDate,
  getNumDaysInCurrentYear,
  getDaysUntilNextThanksgiving,
  getDaysUntilNextDate,
  getDaysUntilNextEaster,
  getDaysUntilNextMothersDay,
  getDaysUntilNextFathersDay,
} from "./utilities/dateUtils";
import { getPageHeight, getPixelsScrolled } from "./utilities/heightUtils";

function App() {
  const [time, setTime] = useState(new Date());
  const [scrollHeight, setScrollHeight] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 10);

    // TODO: Update on window resize
    setWindowHeight(getPageHeight());

    // TODO: Throttle scroll updates
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event
    window.addEventListener("scroll", () =>
      setScrollHeight(getPixelsScrolled())
    );
    window.addEventListener("resize", () => setWindowHeight(getPageHeight()));
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="container">
      <div className="app-title-container">
        <div className="app-title">Progress</div>
        <div className="app-sub-title">
          A recreation of{" "}
          <a href="https://neal.fun/progress/">neal.fun/progress</a>
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
        <ProgressBar
          title={"💻 End of this page"}
          time={time}
          getPercentage={(time: Date) => (scrollHeight / windowHeight) * 100}
          getTimeLeft={(time: Date) => Math.round(windowHeight - scrollHeight)}
          singularSuffix={"px to go"}
          allSingular
          noDelay
        />
        <ProgressBar
          title={"❤️ Next Valentine's Day"}
          time={time}
          getPercentage={(time: Date) =>
            (getDaysUntilNextDate(2, 14) / getNumDaysInCurrentYear()) * 100
          }
          getTimeLeft={(time: Date) => getDaysUntilNextDate(2, 14)}
          singularSuffix={"day"}
        />
        <ProgressBar
          title={"🍀 Next Saint Patrick's Day"}
          time={time}
          getPercentage={(time: Date) =>
            (getDaysUntilNextDate(3, 17) / getNumDaysInCurrentYear()) * 100
          }
          getTimeLeft={(time: Date) => getDaysUntilNextDate(3, 17)}
          singularSuffix={"day"}
        />
        <ProgressBar
          title={"🐰 Next Easter"}
          time={time}
          getPercentage={(time: Date) =>
            (getDaysUntilNextEaster() / getNumDaysInCurrentYear()) * 100
          }
          getTimeLeft={(time: Date) => getDaysUntilNextEaster()}
          singularSuffix={"day"}
        />
        <ProgressBar
          title={"👩 Next Mother's Day"}
          time={time}
          getPercentage={(time: Date) =>
            (getDaysUntilNextMothersDay() / getNumDaysInCurrentYear()) * 100
          }
          getTimeLeft={(time: Date) => getDaysUntilNextMothersDay()}
          singularSuffix={"day"}
        />
        <ProgressBar
          title={"👨 Next Father's Day"}
          time={time}
          getPercentage={(time: Date) =>
            (getDaysUntilNextFathersDay() / getNumDaysInCurrentYear()) * 100
          }
          getTimeLeft={(time: Date) => getDaysUntilNextFathersDay()}
          singularSuffix={"day"}
        />
        <ProgressBar
          title={"🎃 Next Halloween"}
          time={time}
          getPercentage={(time: Date) =>
            (getDaysUntilNextDate(10, 31) / getNumDaysInCurrentYear()) * 100
          }
          getTimeLeft={(time: Date) => getDaysUntilNextDate(10, 31)}
          singularSuffix={"day"}
        />
        <ProgressBar
          title={"🎄 Next Christmas"}
          time={time}
          getPercentage={(time: Date) =>
            (getDaysUntilNextDate(12, 25) / getNumDaysInCurrentYear()) * 100
          }
          getTimeLeft={(time: Date) => getDaysUntilNextDate(12, 25)}
          singularSuffix={"day"}
        />
      </div>
    </div>
  );
}

export default App;
