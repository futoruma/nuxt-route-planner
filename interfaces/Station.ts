import type { NextStation } from "./NextStation";

export interface Station {
  id: number | null;
  engName: string;
  jpnName: string;
  nextStations: Array<NextStation | null>;
}
