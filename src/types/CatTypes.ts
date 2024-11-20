import { DeviceUpdateBody } from "./DeviceTypes";

export interface CatDatapoint {
  timestamp: string;
  body: DeviceUpdateBody;
}

export interface CatData {
  catID: number;
  trackingData: [CatDatapoint];
}
