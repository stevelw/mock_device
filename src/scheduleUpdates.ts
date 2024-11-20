import { catDataWithID } from "./cat";
import { scheduleDeviceUpdate } from "./scheduler";
import { CatData, CatDatapoint } from "./types/CatTypes";

function scheduleACat() {
  return catDataWithID(1).then((catData) => {
    for (const dataPoint of catData.trackingData) {
      const triggerTime = new Date(
        new Date(dataPoint.timestamp).toTimeString()
      );
      scheduleDeviceUpdate(triggerTime, dataPoint.body);
      console.log(`POST scheduled for ${triggerTime}`);
    }
  });
}

function loop() {
  return new Promise(() => {
    return loop();
  });
}

scheduleACat();
