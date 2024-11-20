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
