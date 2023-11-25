export interface NextStation {
  id: number;
  line: string;
  addFare: number;
  minutesToTravel: number;
  departures: Array<Number>;
}
