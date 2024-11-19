import axios from "axios";
import { catDataWithID, type CatDatapoint } from "./cat";
import "dotenv/config";

const network = axios.create({
  baseURL: process.env.BACKEND_HOST,
});

function sendCatLocation(catID: number, index: number): Promise<void> {
  return catDataWithID(catID).then((catData) => {
    const catLocation: CatDatapoint = catData.trackingData[index];
    network.post("/cats/location", catLocation.body);
  });
}
