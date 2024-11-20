import axios from "axios";
import "dotenv/config";
import { CatDatapoint } from "./types/CatTypes";
import { catDataWithID } from "./cat";

const network = axios.create({
  baseURL: process.env.BACKEND_HOST,
});

function sendCatLocation(catID: number, index: number): Promise<void> {
  return catDataWithID(catID).then((catData) => {
    const catLocation: CatDatapoint = catData.trackingData[index];
    network.post("/cats/location", catLocation.body);
  });
}
