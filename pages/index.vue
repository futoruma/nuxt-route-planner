<script setup>
import { getOptimalRoutes } from "~/logic/getOptimalRoutes";
import {
  getTokyoStationNamesMappingEngJpn,
  getTokyoStationNamesMappingJpnEng,
} from "~/trainMaps/tokyo";

const stationNamesMappingEngJpn = getTokyoStationNamesMappingEngJpn();
const stationNamesMappingJpnEng = getTokyoStationNamesMappingJpnEng();

const lang = useLang();
const departureStation = useDepartureStation();
const arrivalStation = useArrivalStation();
const optimalRoutesFound = useOptimalRoutesFound();

const toDisplayResult = ref(false);
const optimalRoutes = ref([]);
const selectedRoute = ref(-1);

onMounted(() => {
  optimalRoutesFound.value = false;
});

const submitHandler = (departureStation, arrivalStation) => {
  const departureTime = new Date();
  optimalRoutes.value = getOptimalRoutes(
    departureStation,
    arrivalStation,
    departureTime.getMinutes()
  );
  optimalRoutesFound.value = true;
  toDisplayResult.value = true;
};

const closeOptimalRoutesDisplayHandler = () => {
  optimalRoutesFound.value = false;
  toDisplayResult.value = false;
  optimalRoutes.value = [];
  selectedRoute.value = -1;
  departureStation.value = "";
  arrivalStation.value = "";
};

const routeSelectHandler = (index) => {
  selectedRoute.value = index;
};

watch(lang, () => {
  if (lang.value === "eng") {
    if (stationNamesMappingJpnEng.has(departureStation.value)) {
      departureStation.value = stationNamesMappingJpnEng.get(
        departureStation.value
      );
    }
    if (stationNamesMappingJpnEng.has(arrivalStation.value)) {
      arrivalStation.value = stationNamesMappingJpnEng.get(
        arrivalStation.value
      );
    }
  }

  if (lang.value === "jpn") {
    if (stationNamesMappingEngJpn.has(departureStation.value.toLowerCase())) {
      departureStation.value = stationNamesMappingEngJpn.get(
        departureStation.value.toLowerCase()
      );
    }
    if (stationNamesMappingEngJpn.has(arrivalStation.value.toLowerCase())) {
      arrivalStation.value = stationNamesMappingEngJpn.get(
        arrivalStation.value.toLowerCase()
      );
    }
  }
});
</script>

<template>
  <div class="userinput">
    <OptimalRoutesDisplay
      v-if="toDisplayResult"
      :optimalRoutes="optimalRoutes"
      @routeSelect="routeSelectHandler"
      @closeOptimalRoutesDisplay="closeOptimalRoutesDisplayHandler"
    />
    <UserInput v-else @submit="submitHandler" />
  </div>
  <div class="trainmap">
    <TrainMap :optimalRoutes="optimalRoutes" :selectedRoute="selectedRoute" />
  </div>
</template>

<style scoped>
.userinput {
  display: flex;
  justify-content: center;
  height: 168px;
  width: 256px;
  padding: 16px 0px;
}
.trainmap {
  padding: 16px 0px 24px 0px;
}

@media only screen and (max-width: 880px), screen and (max-height: 880px) {
  .userinput {
    margin: -8px 0px;
  }
  .trainmap {
    scale: 88%;
    margin: -32px;
  }
}

@media only screen and (max-width: 800px), screen and (max-height: 800px) {
  .userinput {
    margin: -16px 0px;
  }
  .trainmap {
    scale: 0.77;
    margin: -72px;
  }
}

@media only screen and (max-width: 680px), screen and (max-height: 720px) {
  .userinput {
    margin: -16px 0px;
  }
  .trainmap {
    scale: 0.66;
    margin: -96px;
  }
}

@media only screen and (max-width: 560px), screen and (max-height: 560px) {
  .userinput {
    margin: -16px 0px;
  }
  .trainmap {
    scale: 0.55;
    margin: -120px;
  }
}
</style>
