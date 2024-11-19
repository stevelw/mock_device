import * as fs from "fs/promises";

export interface CatDatapoint {
  timestamp: string;
  body: {
    id: number;
    lat: number;
    lon: number;
    accuracy: string;
    sat: string;
    batt: number;
  };
}

export interface CatData {
  catID: number;
  trackingData: [CatDatapoint];
}

export function catDataWithID(catID: number): Promise<CatData> {
  return fs
    .readFile(`${__dirname}/testData/cat_${catID}.json`, "utf-8")
    .then((rawData: any) => {
      const catData: CatData = JSON.parse(rawData);
      return catData;
    });
}
