import fs from "fs/promises";

interface CatDatapoint {
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

interface CatData {
  catID: number;
  trackingData: [CatDatapoint];
}

function catDataWithID(catID: number): Promise<CatData> {
  return fs
    .readFile(`${__dirname}/testData/cat_${catID}.json`, "utf-8")
    .then((rawData) => {
      return JSON.parse(rawData);
    });
}
