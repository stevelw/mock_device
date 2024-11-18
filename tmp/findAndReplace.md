Find:

^(\d+\.\d+),(\d+\.\d+),(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})$

Replace:

{
  "timestamp": "$3",
  "body": {
    "id": 99999901,
    "lat": $1,
    "lon": $2,
    "accuracy": "TBD",
    "sat": "TBD",
    "batt": 100
  }
},

Add to start:

{
  "catID": ,
  "trackingData": [

Add to end:

  ]
}