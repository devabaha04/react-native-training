const DateNow = new Date();

const getTimeData = () => {
  let timeArr = [];
  for (let i = 0; i < 24; i++) {
    for (let j = 0; j < 2; j++) {
      timeArr.push(i + ':' + (j === 0 ? '00' : 30 * j));
    }
  }
  return timeArr;
}

const getTimeCurrent = () => {
  return `${DateNow.getHours()}:${DateNow.getMinutes()}`;
}

const getPassedTime = () => {
  return getTimeData().filter(
    (item) =>
      item.split(':').join('.') * 10 <
        getTimeCurrent().split(':').join('.') * 10 && item,
  );
}

export {getTimeData, getTimeCurrent, getPassedTime}
