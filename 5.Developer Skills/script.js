const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    value: prompt("Degress celsius:")
  };

  debugger;

  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);
  // console.table(measurement);

  const kelvin = measurement.value + 273;
  return kelvin;
};

// console.log(measureKelvin());

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(`...${data1[0]}°C ... ${data1[1]}°C ... ${data1[2]}°C ...`);

const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += str + `${arr[i]}°C in ${i + 1} days ... `;
    // debugger;
  }
  console.log("..." + str);
};

printForecast(data1);
