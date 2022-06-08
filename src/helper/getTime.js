const DateNow = new Date();

const getTimeData = () => {
  let timeArr = [];
  for (let i = 0; i < 24; i++) {
    for (let j = 0; j < 2; j++) {
      timeArr.push({
        time: i + ':' + (j === 0 ? '00' : 30 * j),
        status: 1
      });
    }
  }
  return timeArr;
}

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
}

export {getTimeData, getTimeCurrent, getPassedTime}
