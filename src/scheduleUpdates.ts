import { catDataWithID } from "./cat";
import { scheduleDeviceUpdate } from "./scheduler";

function scheduleACat() {
  return catDataWithID(1).then((catData) => {
    for (const datapoint of catData.trackingData) {
      const timestamp = new Date(datapoint.timestamp);
      let triggerTime = new Date();
      triggerTime.setHours(
        timestamp.getHours(),
        timestamp.getMinutes(),
        timestamp.getSeconds(),
        timestamp.getMilliseconds()
      );
      scheduleDeviceUpdate(triggerTime, datapoint.body);
      console.log(`POST scheduled for ${triggerTime}`);
    }
    console.log(`Finished scheduling`);
  });
}

function loop() {
  return new Promise(() => {
    return loop();
  });
}

scheduleACat();

loop();