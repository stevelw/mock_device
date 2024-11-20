import axios from "axios";
import "dotenv/config";
import { DeviceUpdateBody } from "./types/DeviceTypes";

const network = axios.create({
  baseURL: process.env.BACKEND_HOST,
});

export function sendCatLocation(body: DeviceUpdateBody) {
  return network.post("/cats/location", body);
}
