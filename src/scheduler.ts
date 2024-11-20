import * as schedule from "node-schedule";
import { DeviceUpdateBody } from "./types/DeviceTypes";
import { sendCatLocation } from "./device";

export function scheduleDeviceUpdate(time: Date, data: DeviceUpdateBody) {
  schedule.scheduleJob(time, () => {
    sendCatLocation(data);
    console.log(`POSTed now: ${new Date()}`);
  });
}
