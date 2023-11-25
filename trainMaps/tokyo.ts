import type { Station } from "~/interfaces/Station";

export const getTokyoMap = (): Array<Station> => {
  return TokyoMap;
};

export const getTokyoStationNames = (): Map<String, Number> => {
  const tokyoStationNames = new Map();
  TokyoMap.forEach((station, index) => {
    tokyoStationNames.set(station.engName.toLowerCase(), index);
    tokyoStationNames.set(station.jpnName, index);
  });
  tokyoStationNames.delete("");
  return tokyoStationNames;
};

export const getTokyoStationNamesMappingEngJpn = (): Map<String, String> => {
  const tokyoStationNamesMappingEngJpn = new Map();
  TokyoMap.forEach((station) => {
    tokyoStationNamesMappingEngJpn.set(station.engName, station.jpnName);
    tokyoStationNamesMappingEngJpn.set(
      station.engName.toLowerCase(),
      station.jpnName
    );
  });
  tokyoStationNamesMappingEngJpn.delete("");
  return tokyoStationNamesMappingEngJpn;
};

export const getTokyoStationNamesMappingJpnEng = (): Map<String, String> => {
  const tokyoStationNamesMappingJpnEng = new Map();
  TokyoMap.forEach((station) => {
    tokyoStationNamesMappingJpnEng.set(station.jpnName, station.engName);
  });
  tokyoStationNamesMappingJpnEng.delete("");
  return tokyoStationNamesMappingJpnEng;
};

const TokyoMap: Array<Station> = [
  {
    id: 0,
    engName: "Ikebukuro",
    jpnName: "池袋",
    nextStations: [
      {
        id: 1,
        line: "yamanote",
        addFare: 10,
        minutesToTravel: 2,
        departures: [2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 58],
      },
      {
        id: 8,
        line: "yamanote",
        addFare: 10,
        minutesToTravel: 2,
        departures: [2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 58],
      },
      {
        id: 9,
        line: "marunouchi",
        addFare: 8,
        minutesToTravel: 3,
        departures: [3, 7, 11, 15, 19, 23, 27, 31, 35, 39, 43, 47, 51, 55, 59],
      },
    ],
  },
  {
    id: 1,
    engName: "Otsuka",
    jpnName: "大塚",
    nextStations: [
      {
        id: 0,
        line: "yamanote",
        addFare: 10,
        minutesToTravel: 2,
        departures: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56],
      },
      {
        id: 2,
        line: "yamanote",
        addFare: 10,
        minutesToTravel: 2,
        departures: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56],
      },
    ],
  },
  {
    id: 2,
    engName: "Sugamo",
    jpnName: "巣鴨",
    nextStations: [
      {
        id: 1,
        line: "yamanote",
        addFare: 10,
        minutesToTravel: 2,
        departures: [2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 58],
      },
      {
        id: 3,
        line: "yamanote",
        addFare: 10,
        minutesToTravel: 2,
        departures: [2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 58],
      },
    ],
  },
  {
    id: 3,
    engName: "Komagome",
    jpnName: "駒込",
    nextStations: [
      {
        id: 2,
        line: "yamanote",
        addFare: 10,
        minutesToTravel: 2,
        departures: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56],
      },
      {
        id: 4,
        line: "yamanote",
        addFare: 10,
        minutesToTravel: 2,
        departures: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56],
      },
    ],
  },
  {
    id: 4,
    engName: "Tabata",
    jpnName: "田端",
    nextStations: [
      {
        id: 3,
        line: "yamanote",
        addFare: 10,
        minutesToTravel: 2,
        departures: [2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 58],
      },
      {
        id: 5,
        line: "yamanote",
        addFare: 10,
        minutesToTravel: 2,
        departures: [2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 58],
      },
    ],
  },
  {
    id: 5,
    engName: "Nishi-nippori",
    jpnName: "西日暮里",
    nextStations: [
      {
        id: 4,
        line: "yamanote",
        addFare: 10,
        minutesToTravel: 2,
        departures: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56],
      },
      {
        id: 6,
        line: "yamanote",
        addFare: 10,
        minutesToTravel: 2,
        departures: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56],
      },
    ],
  },
  {
    id: 6,
    engName: "Nippori",
    jpnName: "日暮里",
    nextStations: [
      {
        id: 5,
        line: "yamanote",
        addFare: 10,
        minutesToTravel: 2,
        departures: [2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 58],
      },
      {
        id: 7,
        line: "yamanote",
        addFare: 10,
        minutesToTravel: 2,
        departures: [2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 58],
      },
    ],
  },
  {
    id: 7,
    engName: "Uguisudani",
    jpnName: "鶯谷",
    nextStations: [
      {
        id: 6,
        line: "yamanote",
        addFare: 10,
        minutesToTravel: 2,
        departures: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56],
      },
      {
        id: 15,
        line: "yamanote",
        addFare: 10,
        minutesToTravel: 2,
        departures: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56],
      },
    ],
  },
  {
    id: 8,
    engName: "Mejiro",
    jpnName: "目白",
    nextStations: [
      {
        id: 0,
        line: "yamanote",
        addFare: 10,
        minutesToTravel: 2,
        departures: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56],
      },
      {
        id: 16,
        line: "yamanote",
        addFare: 10,
        minutesToTravel: 2,
        departures: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56],
      },
    ],
  },
  {
    id: 9,
    engName: "Shin-otsuka",
    jpnName: "新大塚",
    nextStations: [
      {
        id: 0,
        line: "marunouchi",
        addFare: 8,
        minutesToTravel: 3,
        departures: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56],
      },
      {
        id: 18,
        line: "marunouchi",
        addFare: 8,
        minutesToTravel: 3,
        departures: [2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 58],
      },
    ],
  },
  {
    id: null,
    engName: "",
    jpnName: "",
    nextStations: [],
  },
  {
    id: null,
    engName: "",
    jpnName: "",
    nextStations: [],
  },
  {
    id: null,
    engName: "",
    jpnName: "",
    nextStations: [],
  },
  {
    id: null,
    engName: "",
    jpnName: "",
    nextStations: [],
  },
  {
    id: null,
    engName: "",
    jpnName: "",
    nextStations: [],
  },
  {
    id: 15,
    engName: "Ueno",
    jpnName: "上野",
    nextStations: [
      {
        id: 7,
        line: "yamanote",
        addFare: 10,
        minutesToTravel: 2,
        departures: [2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 58],
      },
      {
        id: 23,
        line: "yamanote",
        addFare: 10,
        minutesToTravel: 2,
        departures: [2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 58],
      },
    ],
  },
  {
    id: 16,
    engName: "Takadanobaba",
    jpnName: "高田馬場",
    nextStations: [
      {
        id: 8,
        line: "yamanote",
        addFare: 10,
        minutesToTravel: 2,
        departures: [2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 58],
      },
      {
        id: 24,
        line: "yamanote",
        addFare: 10,
        minutesToTravel: 2,
        departures: [2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 58],
      },
    ],
  },
  {
    id: null,
    engName: "",
    jpnName: "",
    nextStations: [],
  },
  {
    id: 18,
    engName: "Myogadani",
    jpnName: "茗荷谷",
    nextStations: [
      {
        id: 9,
        line: "marunouchi",
        addFare: 8,
        minutesToTravel: 3,
        departures: [1, 5, 9, 13, 17, 21, 25, 29, 33, 37, 41, 45, 49, 53, 57],
      },
      {
        id: 19,
        line: "marunouchi",
        addFare: 8,
        minutesToTravel: 3,
        departures: [1, 5, 9, 13, 17, 21, 25, 29, 33, 37, 41, 45, 49, 53, 57],
      },
    ],
  },
  {
    id: 19,
    engName: "Korakuen",
    jpnName: "後楽園",
    nextStations: [
      {
        id: 18,
        line: "marunouchi",
        addFare: 8,
        minutesToTravel: 3,
        departures: [2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 58],
      },
      {
        id: 20,
        line: "marunouchi",
        addFare: 8,
        minutesToTravel: 3,
        departures: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56],
      },
    ],
  },
  {
    id: 20,
    engName: "Hongo-sanchome",
    jpnName: "本郷三丁目",
    nextStations: [
      {
        id: 19,
        line: "marunouchi",
        addFare: 8,
        minutesToTravel: 3,
        departures: [3, 7, 11, 15, 19, 23, 27, 31, 35, 39, 43, 47, 51, 55, 59],
      },
      {
        id: 29,
        line: "marunouchi",
        addFare: 8,
        minutesToTravel: 3,
        departures: [3, 7, 11, 15, 19, 23, 27, 31, 35, 39, 43, 47, 51, 55, 59],
      },
    ],
  },
  {
    id: null,
    engName: "",
    jpnName: "",
    nextStations: [],
  },
  {
    id: null,
    engName: "",
    jpnName: "",
    nextStations: [],
  },
  {
    id: 23,
    engName: "Okachimachi",
    jpnName: "御徒町",
    nextStations: [
      {
        id: 15,
        line: "yamanote",
        addFare: 10,
        minutesToTravel: 2,
        departures: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56],
      },
      {
        id: 31,
        line: "yamanote",
        addFare: 10,
        minutesToTravel: 2,
        departures: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56],
      },
    ],
  },
  {
    id: 24,
    engName: "Shin-okubo",
    jpnName: "新大久保",
    nextStations: [
      {
        id: 16,
        line: "yamanote",
        addFare: 10,
        minutesToTravel: 2,
        departures: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56],
      },
      {
        id: 32,
        line: "yamanote",
        addFare: 10,
        minutesToTravel: 2,
        departures: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56],
      },
    ],
  },
  {
    id: null,
    engName: "",
    jpnName: "",
    nextStations: [],
  },
  {
    id: null,
    engName: "",
    jpnName: "",
    nextStations: [],
  },
  {
    id: null,
    engName: "",
    jpnName: "",
    nextStations: [],
  },
  {
    id: 28,
    engName: "Iidabashi",
    jpnName: "飯田橋",
    nextStations: [
      {
        id: 29,
        line: "sobu",
        addFare: 15,
        minutesToTravel: 3,
        departures: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56],
      },
      {
        id: 36,
        line: "sobu",
        addFare: 15,
        minutesToTravel: 3,
        departures: [1, 5, 9, 13, 17, 21, 25, 29, 33, 37, 41, 45, 49, 53, 57],
      },
    ],
  },
  {
    id: 29,
    engName: "Ochanomizu",
    jpnName: "御茶ノ水",
    nextStations: [
      {
        id: 20,
        line: "marunouchi",
        addFare: 8,
        minutesToTravel: 3,
        departures: [3, 7, 11, 15, 19, 23, 27, 31, 35, 39, 43, 47, 51, 55, 59],
      },
      {
        id: 28,
        line: "sobu",
        addFare: 15,
        minutesToTravel: 3,
        departures: [2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 58],
      },
      {
        id: 31,
        line: "sobu",
        addFare: 15,
        minutesToTravel: 3,
        departures: [3, 7, 11, 15, 19, 23, 27, 31, 35, 39, 43, 47, 51, 55, 59],
      },
      {
        id: 38,
        line: "marunouchi",
        addFare: 8,
        minutesToTravel: 3,
        departures: [2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 58],
      },
      {
        id: 39,
        line: "chuo",
        addFare: 30,
        minutesToTravel: 5,
        departures: [1, 6, 11, 16, 21, 26, 31, 36, 41, 46, 51, 56],
      },
      {
        id: 43,
        line: "chuo",
        addFare: 30,
        minutesToTravel: 5,
        departures: [1, 6, 11, 16, 21, 26, 31, 36, 41, 46, 51, 56],
      },
    ],
  },
  {
    id: null,
    engName: "",
    jpnName: "",
    nextStations: [],
  },
  {
    id: 31,
    engName: "Akihabara",
    jpnName: "秋葉原",
    nextStations: [
      {
        id: 23,
        line: "yamanote",
        addFare: 10,
        minutesToTravel: 2,
        departures: [2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 58],
      },
      {
        id: 29,
        line: "sobu",
        addFare: 15,
        minutesToTravel: 3,
        departures: [3, 7, 11, 15, 19, 23, 27, 31, 35, 39, 43, 47, 51, 55, 59],
      },
      {
        id: 39,
        line: "yamanote",
        addFare: 10,
        minutesToTravel: 2,
        departures: [2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 58],
      },
    ],
  },
  {
    id: 32,
    engName: "Shinjuku",
    jpnName: "新宿",
    nextStations: [
      {
        id: 24,
        line: "yamanote",
        addFare: 10,
        minutesToTravel: 2,
        departures: [2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 58],
      },
      {
        id: 33,
        line: "marunouchi",
        addFare: 8,
        minutesToTravel: 2,
        departures: [3, 7, 11, 15, 19, 23, 27, 31, 35, 39, 43, 47, 51, 55, 59],
      },
      {
        id: 40,
        line: "yamanote",
        addFare: 10,
        minutesToTravel: 2,
        departures: [2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 58],
      },
      {
        id: 40,
        line: "sobu",
        addFare: 10,
        minutesToTravel: 2,
        departures: [2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 58],
      },
      {
        id: 43,
        line: "chuo",
        addFare: 30,
        minutesToTravel: 5,
        departures: [1, 6, 11, 16, 21, 26, 31, 36, 41, 46, 51, 56],
      },
    ],
  },
  {
    id: 33,
    engName: "Shinjuku-sanchome",
    jpnName: "新宿三丁目",
    nextStations: [
      {
        id: 32,
        line: "marunouchi",
        addFare: 8,
        minutesToTravel: 2,
        departures: [2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 58],
      },
      {
        id: 34,
        line: "marunouchi",
        addFare: 8,
        minutesToTravel: 2,
        departures: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56],
      },
    ],
  },
  {
    id: 34,
    engName: "Shinjuku-gyoemmae",
    jpnName: "新宿御苑前",
    nextStations: [
      {
        id: 33,
        line: "marunouchi",
        addFare: 8,
        minutesToTravel: 2,
        departures: [1, 5, 9, 13, 17, 21, 25, 29, 33, 37, 41, 45, 49, 53, 57],
      },
      {
        id: 35,
        line: "marunouchi",
        addFare: 8,
        minutesToTravel: 2,
        departures: [1, 5, 9, 13, 17, 21, 25, 29, 33, 37, 41, 45, 49, 53, 57],
      },
    ],
  },
  {
    id: 35,
    engName: "Yotsuya-sanchome",
    jpnName: "四谷三丁目",
    nextStations: [
      {
        id: 34,
        line: "marunouchi",
        addFare: 8,
        minutesToTravel: 2,
        departures: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56],
      },
      {
        id: 43,
        line: "marunouchi",
        addFare: 8,
        minutesToTravel: 2,
        departures: [2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 58],
      },
    ],
  },
  {
    id: 36,
    engName: "Ichigaya",
    jpnName: "市ヶ谷",
    nextStations: [
      {
        id: 28,
        line: "sobu",
        addFare: 15,
        minutesToTravel: 3,
        departures: [1, 5, 9, 13, 17, 21, 25, 29, 33, 37, 41, 45, 49, 53, 57],
      },
      {
        id: 43,
        line: "sobu",
        addFare: 15,
        minutesToTravel: 3,
        departures: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56],
      },
    ],
  },
  {
    id: null,
    engName: "",
    jpnName: "",
    nextStations: [],
  },
  {
    id: 38,
    engName: "Awajicho",
    jpnName: "淡路町",
    nextStations: [
      {
        id: 29,
        line: "marunouchi",
        addFare: 8,
        minutesToTravel: 3,
        departures: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56],
      },
      {
        id: 46,
        line: "marunouchi",
        addFare: 8,
        minutesToTravel: 3,
        departures: [2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 58],
      },
    ],
  },
  {
    id: 39,
    engName: "Kanda",
    jpnName: "神田",
    nextStations: [
      {
        id: 29,
        line: "chuo",
        addFare: 30,
        minutesToTravel: 5,
        departures: [1, 6, 11, 16, 21, 26, 31, 36, 41, 46, 51, 56],
      },
      {
        id: 31,
        line: "yamanote",
        addFare: 10,
        minutesToTravel: 2,
        departures: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56],
      },
      {
        id: 47,
        line: "yamanote",
        addFare: 10,
        minutesToTravel: 2,
        departures: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56],
      },
      {
        id: 47,
        line: "chuo",
        addFare: 10,
        minutesToTravel: 2,
        departures: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56],
      },
    ],
  },
  {
    id: 40,
    engName: "Yoyogi",
    jpnName: "代々木",
    nextStations: [
      {
        id: 32,
        line: "yamanote",
        addFare: 10,
        minutesToTravel: 2,
        departures: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56],
      },
      {
        id: 32,
        line: "sobu",
        addFare: 10,
        minutesToTravel: 2,
        departures: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56],
      },
      {
        id: 48,
        line: "yamanote",
        addFare: 10,
        minutesToTravel: 2,
        departures: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56],
      },
      {
        id: 49,
        line: "sobu",
        addFare: 15,
        minutesToTravel: 3,
        departures: [1, 5, 9, 13, 17, 21, 25, 29, 33, 37, 41, 45, 49, 53, 57],
      },
    ],
  },
  {
    id: null,
    engName: "",
    jpnName: "",
    nextStations: [],
  },
  {
    id: null,
    engName: "",
    jpnName: "",
    nextStations: [],
  },
  {
    id: 43,
    engName: "Yotsuya",
    jpnName: "四谷",
    nextStations: [
      {
        id: 29,
        line: "chuo",
        addFare: 30,
        minutesToTravel: 5,
        departures: [1, 6, 11, 16, 21, 26, 31, 36, 41, 46, 51, 56],
      },
      {
        id: 32,
        line: "chuo",
        addFare: 30,
        minutesToTravel: 5,
        departures: [1, 6, 11, 16, 21, 26, 31, 36, 41, 46, 51, 56],
      },
      {
        id: 35,
        line: "marunouchi",
        addFare: 8,
        minutesToTravel: 2,
        departures: [3, 7, 11, 15, 19, 23, 27, 31, 35, 39, 43, 47, 51, 55, 59],
      },
      {
        id: 36,
        line: "sobu",
        addFare: 15,
        minutesToTravel: 3,
        departures: [2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 58],
      },
      {
        id: 50,
        line: "sobu",
        addFare: 15,
        minutesToTravel: 3,
        departures: [3, 7, 11, 15, 19, 23, 27, 31, 35, 39, 43, 47, 51, 55, 59],
      },
      {
        id: 52,
        line: "marunouchi",
        addFare: 8,
        minutesToTravel: 3,
        departures: [3, 7, 11, 15, 19, 23, 27, 31, 35, 39, 43, 47, 51, 55, 59],
      },
    ],
  },
  {
    id: null,
    engName: "",
    jpnName: "",
    nextStations: [],
  },
  {
    id: null,
    engName: "",
    jpnName: "",
    nextStations: [],
  },
  {
    id: 46,
    engName: "Otemachi",
    jpnName: "大手町",
    nextStations: [
      {
        id: 38,
        line: "marunouchi",
        addFare: 8,
        minutesToTravel: 3,
        departures: [1, 5, 9, 13, 17, 21, 25, 29, 33, 37, 41, 45, 49, 53, 57],
      },
      {
        id: 47,
        line: "marunouchi",
        addFare: 8,
        minutesToTravel: 3,
        departures: [1, 5, 9, 13, 17, 21, 25, 29, 33, 37, 41, 45, 49, 53, 57],
      },
    ],
  },
  {
    id: 47,
    engName: "Tokyo",
    jpnName: "東京",
    nextStations: [
      {
        id: 39,
        line: "yamanote",
        addFare: 10,
        minutesToTravel: 2,
        departures: [2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 58],
      },
      {
        id: 39,
        line: "chuo",
        addFare: 10,
        minutesToTravel: 2,
        departures: [2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 58],
      },
      {
        id: 46,
        line: "marunouchi",
        addFare: 8,
        minutesToTravel: 3,
        departures: [2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 58],
      },
      {
        id: 54,
        line: "yamanote",
        addFare: 10,
        minutesToTravel: 2,
        departures: [2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 58],
      },
      {
        id: 55,
        line: "marunouchi",
        addFare: 8,
        minutesToTravel: 3,
        departures: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56],
      },
    ],
  },
  {
    id: 48,
    engName: "Harajuku",
    jpnName: "原宿",
    nextStations: [
      {
        id: 40,
        line: "yamanote",
        addFare: 10,
        minutesToTravel: 2,
        departures: [2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 58],
      },
      {
        id: 56,
        line: "yamanote",
        addFare: 10,
        minutesToTravel: 2,
        departures: [2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 58],
      },
    ],
  },
  {
    id: 49,
    engName: "Sendagaya",
    jpnName: "千駄ヶ谷",
    nextStations: [
      {
        id: 40,
        line: "sobu",
        addFare: 15,
        minutesToTravel: 3,
        departures: [1, 5, 9, 13, 17, 21, 25, 29, 33, 37, 41, 45, 49, 53, 57],
      },
      {
        id: 50,
        line: "sobu",
        addFare: 15,
        minutesToTravel: 3,
        departures: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56],
      },
    ],
  },
  {
    id: 50,
    engName: "Shinanomachi",
    jpnName: "信濃町",
    nextStations: [
      {
        id: 43,
        line: "sobu",
        addFare: 15,
        minutesToTravel: 3,
        departures: [3, 7, 11, 15, 19, 23, 27, 31, 35, 39, 43, 47, 51, 55, 59],
      },
      {
        id: 49,
        line: "sobu",
        addFare: 15,
        minutesToTravel: 3,
        departures: [2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 58],
      },
    ],
  },
  {
    id: null,
    engName: "",
    jpnName: "",
    nextStations: [],
  },
  {
    id: 52,
    engName: "Akasaka-mitsuke",
    jpnName: "赤坂見附",
    nextStations: [
      {
        id: 43,
        line: "marunouchi",
        addFare: 8,
        minutesToTravel: 3,
        departures: [2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 58],
      },
      {
        id: 61,
        line: "marunouchi",
        addFare: 8,
        minutesToTravel: 3,
        departures: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56],
      },
    ],
  },
  {
    id: null,
    engName: "",
    jpnName: "",
    nextStations: [],
  },
  {
    id: 54,
    engName: "Yurakucho",
    jpnName: "有楽町",
    nextStations: [
      {
        id: 47,
        line: "yamanote",
        addFare: 10,
        minutesToTravel: 2,
        departures: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56],
      },
      {
        id: 63,
        line: "yamanote",
        addFare: 10,
        minutesToTravel: 2,
        departures: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56],
      },
    ],
  },
  {
    id: 55,
    engName: "Ginza",
    jpnName: "銀座",
    nextStations: [
      {
        id: 47,
        line: "marunouchi",
        addFare: 8,
        minutesToTravel: 3,
        departures: [3, 7, 11, 15, 19, 23, 27, 31, 35, 39, 43, 47, 51, 55, 59],
      },
      {
        id: 62,
        line: "marunouchi",
        addFare: 8,
        minutesToTravel: 3,
        departures: [3, 7, 11, 15, 19, 23, 27, 31, 35, 39, 43, 47, 51, 55, 59],
      },
    ],
  },
  {
    id: 56,
    engName: "Shibuya",
    jpnName: "渋谷",
    nextStations: [
      {
        id: 48,
        line: "yamanote",
        addFare: 10,
        minutesToTravel: 2,
        departures: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56],
      },
      {
        id: 64,
        line: "yamanote",
        addFare: 10,
        minutesToTravel: 2,
        departures: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56],
      },
    ],
  },
  {
    id: null,
    engName: "",
    jpnName: "",
    nextStations: [],
  },
  {
    id: null,
    engName: "",
    jpnName: "",
    nextStations: [],
  },
  {
    id: null,
    engName: "",
    jpnName: "",
    nextStations: [],
  },
  {
    id: null,
    engName: "",
    jpnName: "",
    nextStations: [],
  },
  {
    id: 61,
    engName: "Kokkai-gijidomae",
    jpnName: "国会議事堂前",
    nextStations: [
      {
        id: 52,
        line: "marunouchi",
        addFare: 8,
        minutesToTravel: 3,
        departures: [1, 5, 9, 13, 17, 21, 25, 29, 33, 37, 41, 45, 49, 53, 57],
      },
      {
        id: 62,
        line: "marunouchi",
        addFare: 8,
        minutesToTravel: 3,
        departures: [1, 5, 9, 13, 17, 21, 25, 29, 33, 37, 41, 45, 49, 53, 57],
      },
    ],
  },
  {
    id: 62,
    engName: "Kasumigaseki",
    jpnName: "霞ケ関",
    nextStations: [
      {
        id: 55,
        line: "marunouchi",
        addFare: 8,
        minutesToTravel: 3,
        departures: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56],
      },
      {
        id: 61,
        line: "marunouchi",
        addFare: 8,
        minutesToTravel: 3,
        departures: [2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 58],
      },
    ],
  },
  {
    id: 63,
    engName: "Shimbashi",
    jpnName: "新橋",
    nextStations: [
      {
        id: 54,
        line: "yamanote",
        addFare: 10,
        minutesToTravel: 2,
        departures: [2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 58],
      },
      {
        id: 71,
        line: "yamanote",
        addFare: 10,
        minutesToTravel: 2,
        departures: [2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 58],
      },
    ],
  },
  {
    id: 64,
    engName: "Ebisu",
    jpnName: "恵比寿",
    nextStations: [
      {
        id: 56,
        line: "yamanote",
        addFare: 10,
        minutesToTravel: 2,
        departures: [2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 58],
      },
      {
        id: 65,
        line: "yamanote",
        addFare: 10,
        minutesToTravel: 2,
        departures: [2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 58],
      },
    ],
  },
  {
    id: 65,
    engName: "Meguro",
    jpnName: "目黒",
    nextStations: [
      {
        id: 64,
        line: "yamanote",
        addFare: 10,
        minutesToTravel: 2,
        departures: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56],
      },
      {
        id: 66,
        line: "yamanote",
        addFare: 10,
        minutesToTravel: 2,
        departures: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56],
      },
    ],
  },
  {
    id: 66,
    engName: "Gotanda",
    jpnName: "五反田",
    nextStations: [
      {
        id: 65,
        line: "yamanote",
        addFare: 10,
        minutesToTravel: 2,
        departures: [2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 58],
      },
      {
        id: 67,
        line: "yamanote",
        addFare: 10,
        minutesToTravel: 2,
        departures: [2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 58],
      },
    ],
  },
  {
    id: 67,
    engName: "Osaki",
    jpnName: "大崎",
    nextStations: [
      {
        id: 66,
        line: "yamanote",
        addFare: 10,
        minutesToTravel: 2,
        departures: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56],
      },
      {
        id: 68,
        line: "yamanote",
        addFare: 10,
        minutesToTravel: 2,
        departures: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56],
      },
    ],
  },
  {
    id: 68,
    engName: "Shinagawa",
    jpnName: "品川",
    nextStations: [
      {
        id: 67,
        line: "yamanote",
        addFare: 10,
        minutesToTravel: 2,
        departures: [2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 58],
      },
      {
        id: 69,
        line: "yamanote",
        addFare: 10,
        minutesToTravel: 2,
        departures: [2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 58],
      },
    ],
  },
  {
    id: 69,
    engName: "Takanawa Gateway",
    jpnName: "高輪GW",
    nextStations: [
      {
        id: 68,
        line: "yamanote",
        addFare: 10,
        minutesToTravel: 2,
        departures: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56],
      },
      {
        id: 70,
        line: "yamanote",
        addFare: 10,
        minutesToTravel: 2,
        departures: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56],
      },
    ],
  },
  {
    id: 70,
    engName: "Tamachi",
    jpnName: "田町",
    nextStations: [
      {
        id: 69,
        line: "yamanote",
        addFare: 10,
        minutesToTravel: 2,
        departures: [2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 58],
      },
      {
        id: 71,
        line: "yamanote",
        addFare: 10,
        minutesToTravel: 2,
        departures: [2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 58],
      },
    ],
  },
  {
    id: 71,
    engName: "Hamamatsucho",
    jpnName: "浜松町",
    nextStations: [
      {
        id: 63,
        line: "yamanote",
        addFare: 10,
        minutesToTravel: 2,
        departures: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56],
      },
      {
        id: 70,
        line: "yamanote",
        addFare: 10,
        minutesToTravel: 2,
        departures: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56],
      },
    ],
  },
];
