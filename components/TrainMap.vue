<script setup>
import { getTokyoMap } from "~/trainMaps/tokyo";

const currentMap = getTokyoMap();

const lang = useLang();
const optimalRoutesFound = useOptimalRoutesFound();
const departureStation = useDepartureStation();
const arrivalStation = useArrivalStation();

const { optimalRoutes, selectedRoute } = defineProps([
  "optimalRoutes",
  "selectedRoute",
]);

const stationClickHandler = (stationEngName, stationJpnName) => {
  if (optimalRoutesFound.value === true) return;

  let isAlreadySelected = false;
  if (
    departureStation.value === stationEngName ||
    departureStation.value === stationJpnName
  ) {
    departureStation.value = "";
    isAlreadySelected = true;
  }

  if (
    arrivalStation.value === stationEngName ||
    arrivalStation.value === stationJpnName
  ) {
    arrivalStation.value = "";
    isAlreadySelected = true;
  }

  if (isAlreadySelected) return;

  if (departureStation.value === "") {
    departureStation.value =
      lang.value === "eng" ? stationEngName : stationJpnName;
  } else if (arrivalStation.value === "") {
    arrivalStation.value =
      lang.value === "eng" ? stationEngName : stationJpnName;
  }
};
</script>

<template>
  <div id="trainmap">
    <div class="wrapper">
      <div v-for="(station, index) in currentMap">
        <Station
          :id="station.id"
          :stationName="lang === 'jpn' ? station.jpnName : station.engName"
          :color="station.color"
          :isSelected="
            (selectedRoute !== -1 &&
              optimalRoutes[selectedRoute][3].includes(index)) ||
            departureStation.toLowerCase() === station.engName.toLowerCase() ||
            arrivalStation.toLowerCase() === station.engName.toLowerCase() ||
            departureStation === station.jpnName ||
            arrivalStation === station.jpnName
          "
          @stationClicked="
            stationClickHandler(station.engName, station.jpnName)
          "
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
#trainmap {
  width: 780px;
  height: 452px;
  padding: 16px;
  background-image: url("../assets/tokyoMapBackground.png");
  border-radius: 8px;
}

.wrapper {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 16px;
  grid-auto-rows: minmax(32px, auto);
  color: black;
  font-size: small;
}
</style>
