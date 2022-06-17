const DateNow = new Date();

const getTimeData = () => {
  let timeArr = [];
  for (let i = 0; i < 24; i++) {
    for (let j = 0; j < 2; j++) {
      timeArr.push({
        time: i + ':' + (j === 0 ? '00' : 30 * j),
        status: 1,
      });
    }
  }
  return timeArr;
};

const getTimeCurrent = () => `${DateNow.getHours()}:${DateNow.getMinutes()}`;

const getPassedTime = () => {
  return getTimeData().map((item) => {
    return {
      ...item,
      status:
        item.time.split(':').join('.') * 10 <
        getTimeCurrent().split(':').join('.') * 10
          ? 0
          : 1,
    };
  });
};

const getHorizontalData = (arr1DTime, x) => {
  let result = [];
  let blockTimes = [];
  // let arr1DTime = Array.from({length: n}).map((item, i) => item);

  let colIndex = 0,
    rowIndex = 0,
    maxRow = x,
    maxCollInARow = Math.ceil(arr1DTime.length / maxRow),
    isBreak = true;

  function getTimeIndex() {
    return colIndex + rowIndex * maxCollInARow;
  }

  arr1DTime.map((n, i) => {
    let timeIndex = getTimeIndex();
    isBreak = blockTimes.length >= maxRow || i === arr1DTime.length - 1;

    if (timeIndex > arr1DTime.length - 1) {
      colIndex++;
      rowIndex = 0;
      timeIndex = getTimeIndex();
      result.push(blockTimes);
      blockTimes = [];
      isBreak = false;
    }
    rowIndex++;
    blockTimes.push(arr1DTime[timeIndex]);
    if (isBreak) {
      colIndex++;
      rowIndex = 0;
      result.push(blockTimes);
      blockTimes = [];
    }
  });

  return result;
};

export {getTimeCurrent, getPassedTime, getHorizontalData};
