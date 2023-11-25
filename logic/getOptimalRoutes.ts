import { StationQueue } from "../classes/StationQueue";
import { getTokyoMap, getTokyoStationNames } from "~/trainMaps/tokyo";

const currentMap = getTokyoMap();
const stationNames = getTokyoStationNames();

const maxRoutesFound = 7;
const maxTransfers = 2;
const transferTime = 5;
const transferFare = 100;
const initialFare = 120;

export const getOptimalRoutes = (
  departureStationName: string,
  arrivalStationName: string,
  departureTimeInMinutes: number
): Array<Array<Number>> => {
  const departureStationId = stationNames.get(
    departureStationName.toLowerCase()
  );
  const arrivalStationId = stationNames.get(arrivalStationName.toLowerCase());

  const optimalRoutes = [];

  const stationQueue = new StationQueue();

  stationQueue.enqueue([
    departureStationId, // currentStationId
    -1, // previousStationId
    "none", // currentLine
    0, // totalTime
    initialFare, // totalCost
    0, // transfers
    [departureStationId], // route
  ]);

  while (stationQueue.getLength() && optimalRoutes.length < maxRoutesFound) {
    let queueLength = stationQueue.getLength();
    for (let i = 0; i < queueLength; i++) {
      const [
        currentStationId,
        previousStationId,
        currentLine,
        totalTime,
        totalCost,
        transfers,
        route,
      ] = stationQueue.dequeue();

      if (currentStationId === arrivalStationId) {
        optimalRoutes.push([totalTime, transfers, totalCost, route]);
        continue;
      }

      if (transfers > maxTransfers) continue;

      const nextStations = currentMap[currentStationId].nextStations;

      nextStations.forEach((nextStation) => {
        if (nextStation !== null && nextStation.id !== previousStationId) {
          let needTransfer = previousStationId !== -1;
          if (currentLine === nextStation.line) {
            needTransfer = false;
          }
          stationQueue.enqueue([
            nextStation.id,
            currentStationId,
            nextStation.line,
            needTransfer
              ? totalTime + nextStation.minutesToTravel + transferTime
              : totalTime + nextStation.minutesToTravel,
            needTransfer
              ? totalCost + nextStation.addFare + transferFare
              : totalCost + nextStation.addFare,
            needTransfer ? transfers + 1 : transfers,
            [...route, nextStation.id],
          ]);
        }
      });
    }
  }

  // sort by total time, number of transfers, total fare
  optimalRoutes.sort((a, b) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2]);

  // return three most optimal routes
  return optimalRoutes.slice(0, 3);
};
