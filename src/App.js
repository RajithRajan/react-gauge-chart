import "./styles.css";
import { Chart } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
// import "chartjs-plugin-labels";
import * as Gauge from "chartjs-gauge";
import { useEffect } from "react";
import { useState } from "react";

// Chart.js gauge

// const value = useRef();
// const [inputValue, setInputValue] = useState(600);

export default function App() {
  const [inputValue, setInputValue] = useState(600);
  const [indexA, setindexA] = useState(700);
  const [indexB, setindexB] = useState(1400);
  const [indexC, setindexC] = useState(2100);
  const [indexD, setindexD] = useState(2800);
  const [gtitle, setgtitle] = useState("Q4 Result");
  var data = [indexA, indexB, indexC, indexD];
  // var value = 900;
  var config = {
    type: "gauge",
    data: {
      labels: ["", "", "", ""],
      datasets: [
        {
          label: "test data",
          data: data,
          value: inputValue,
          minValue: 0,
          backgroundColor: ["red", "yellow", "lightgreen", "green"],
          borderWidth: 2
        }
      ]
    },
    options: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          generateLabels: {}
        }
      },
      responsive: true,
      title: {
        display: true,
        text: gtitle
      },
      layout: {
        padding: {
          bottom: 20
        }
      },
      needle: {
        radiusPercentage: 1,
        widthPercentage: 2,
        lengthPercentage: 45,
        color: "rgba(0, 0, 0, 1)"
      },
      valueLabel: {
        fontSize: 12,
        formatter: function (value, context) {
          // debugger;
          return value + "X";
          // return '< ' + Math.round(value);
        }
      },
      plugins: {
        datalabels: {
          display: "auto",
          formatter: function (value, context) {
            // debugger;
            return context.chart.data.labels[context.dataIndex];
            // return context.dataIndex===0?'Normal':context.dataIndex===1?'Warning':'Critical';
            // return '< ' + Math.round(value);
          },
          color: function (context) {
            return "white";
          },
          //color: 'rgba(255, 255, 255, 1.0)',
          // backgroundColor: 'rgba(0, 0, 0, 1.0)',
          // borderWidth: 0,
          // borderRadius: 5,
          font: function (context) {
            var width = context.chart.width;
            var size = Math.round(width / 36);

            return {
              weight: "normal",
              size: size
            };
          }
          // font: {
          //   weight: 'normal',
          //   size:16
          // }
        }
      }
    }
  };
  useEffect(() => {
    // Chart.register(ChartDataLabels);
    var ctx = document.getElementById("myChart").getContext("2d");
    const myGauge = new Chart(ctx, config);
    myGauge.update();
  }, [config]);

  // function handleChange(event, index) {
  //   switch (event.target.id) {
  //     case "value":
  //       data.value = event.target.value;
  //       break;
  //     default:
  //       break;
  //   }
  // }

  return (
    <div className="App">
      {/* <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2> */}
      <canvas id="myChart"></canvas>
      <div className="Input">
        <br />
        <br />
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          id="title"
          required
          value={gtitle}
          onChange={(e) => setgtitle(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="value">Value: </label>
        <input
          type="text"
          id="value"
          size={4}
          required
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="Index">Index:</label>
        <input
          type="text"
          size={4}
          value={indexA}
          onChange={(e) => setindexA(e.target.value)}
        />
        {"  "}
        <input
          type="text"
          size={4}
          value={indexB}
          onChange={(e) => setindexB(e.target.value)}
        />
        {"  "}
        <input
          type="text"
          size={4}
          value={indexC}
          onChange={(e) => setindexC(e.target.value)}
        />
        {"  "}
        <input
          type="text"
          size={4}
          value={indexD}
          onChange={(e) => setindexD(e.target.value)}
        />
      </div>
    </div>
  );
}
