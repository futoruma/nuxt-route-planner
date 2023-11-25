export const useLang = () => useState<string>("lang", () => "jpn");

export const useDepartureStation = () =>
  useState<string>("departureStation", () => "");

export const useArrivalStation = () =>
  useState<string>("arrivalStation", () => "");

export const useOptimalRoutesFound = () =>
  useState<boolean>("optimalRoutesFound", () => false);
