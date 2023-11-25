<script setup>
import { getTokyoStationNames } from "~/trainMaps/tokyo";

const stationNames = getTokyoStationNames();

const lang = useLang();
const departureStation = useDepartureStation();
const arrivalStation = useArrivalStation();

const isDepartureStationValid = ref(true);
const isArrivalStationValid = ref(true);

const emit = defineEmits(["submit"]);

const submitHandler = () => {
  const isSameStation =
    stationNames.get(departureStation.value.toLowerCase()) ===
    stationNames.get(arrivalStation.value.toLowerCase());

  if (
    stationNames.has(departureStation.value.toLowerCase()) &&
    stationNames.has(arrivalStation.value.toLowerCase()) &&
    !isSameStation
  ) {
    emit("submit", departureStation.value, arrivalStation.value);
  } else {
    isDepartureStationValid.value =
      stationNames.has(departureStation.value.toLowerCase()) && !isSameStation;
    isArrivalStationValid.value =
      stationNames.has(arrivalStation.value.toLowerCase()) && !isSameStation;
  }
};
</script>

<template>
  <div class="userinput">
    <input
      maxlength="20"
      v-model="departureStation"
      :placeholder="lang === 'jpn' ? '出発' : 'From'"
      :class="{ invalidinput: !isDepartureStationValid }"
    />
    <input
      maxlength="20"
      v-model="arrivalStation"
      :placeholder="lang === 'jpn' ? '到着' : 'To'"
      :class="{ invalidinput: !isArrivalStationValid }"
    />
    <button @click="submitHandler">
      {{ lang === "jpn" ? "検索" : "Search" }}
    </button>
  </div>
</template>

<style scoped>
input {
  padding: 4px;
  margin: 4px 0px;
  text-align: center;
  font-size: large;
}

button {
  padding: 4px;
  height: 38px;
  margin: 8px 0px 20px 0px;
  cursor: pointer;
  font-size: larger;
  border: 2px solid darkslategray;
  border-radius: 4px;
  color: azure;
  background-color: darkslategray;
}

button:hover {
  background-color: black;
}

button:active {
  transform: translate(0px, 2px);
}

.userinput {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.invalidinput {
  border: 2px solid darkred;
  color: darkred;
}
</style>
