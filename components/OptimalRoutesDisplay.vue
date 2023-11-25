<script setup>
import { API_URL } from "~/consts";
import { getTokyoMap } from "~/trainMaps/tokyo";

const currentMap = getTokyoMap();

const lang = useLang();

const { optimalRoutes } = defineProps(["optimalRoutes"]);
const selectedRouteIndex = ref(-1);

const selectRouteHandler = async (index) => {
  selectedRouteIndex.value = index;
  const selectedRoute = optimalRoutes[index];
  await $fetch(`${API_URL}/selectedroutes`, {
    method: "POST",
    body: {
      timestamp: new Date(),
      departureStation: selectedRoute[3][0],
      arrivalStation: selectedRoute[3][selectedRoute[3].length - 1],
      totalMinutes: selectedRoute[0],
      transfers: selectedRoute[1],
      totalFare: selectedRoute[2],
    },
  });
};
</script>

<template>
  <div class="display">
    <div v-if="selectedRouteIndex === -1">
      <div
        class="route"
        v-for="(route, index) in optimalRoutes"
        @mouseover="$emit('routeSelect', index)"
        @mouseleave="$emit('routeSelect', -1)"
        @click="selectRouteHandler(index)"
      >
        {{ route[0] }}{{ lang === "jpn" ? "分" : "m" }}　　{{
          lang === "jpn" ? "乗り換え" : "Transfers:"
        }}{{ route[1] }}{{ lang === "jpn" ? "回" : "" }}　　{{
          lang === "jpn" ? "" : "¥"
        }}{{ route[2] }}{{ lang === "jpn" ? "円" : "" }}
      </div>
    </div>
    <div v-else>
      <div class="close">
        <div class="closemark" @click="$emit('closeOptimalRoutesDisplay')">
          &#10062;
        </div>
      </div>
      <div class="stationsnames">
        {{
          lang === "jpn"
            ? currentMap[optimalRoutes[selectedRouteIndex][3][0]].jpnName
            : currentMap[optimalRoutes[selectedRouteIndex][3][0]].engName
        }}
        <div>&dArr;</div>
        {{
          lang === "jpn"
            ? currentMap[
                optimalRoutes[selectedRouteIndex][3][
                  optimalRoutes[selectedRouteIndex][3].length - 1
                ]
              ].jpnName
            : currentMap[
                optimalRoutes[selectedRouteIndex][3][
                  optimalRoutes[selectedRouteIndex][3].length - 1
                ]
              ].engName
        }}
      </div>
      <div class="selectedRoute">
        {{ optimalRoutes[selectedRouteIndex][0]
        }}{{ lang === "jpn" ? "分" : "m" }}　　{{
          lang === "jpn" ? "乗り換え" : "Transfers:"
        }}{{ optimalRoutes[selectedRouteIndex][1]
        }}{{ lang === "jpn" ? "回" : "" }}　　{{ lang === "jpn" ? "" : "¥"
        }}{{ optimalRoutes[selectedRouteIndex][2]
        }}{{ lang === "jpn" ? "円" : "" }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.display {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  height: 172px;
  width: 324px;
  padding: 8px;
  border-radius: 8px;
}

.routes {
  padding: 16px 0 0 0;
}
.route {
  background-color: white;
  width: 240px;
  padding: 4px 16px;
  margin: 16px 24px;
  border: solid 2px;
  border-radius: 8px;
  text-align: right;
  user-select: none;
  cursor: pointer;
}

.route:hover {
  background-color: lightgray;
}

.selectedRoute {
  background-color: darkslategray;
  color: azure;
  text-align: center;
  width: 240px;
  padding: 12px 16px;
  margin: 16px 24px;
  border: solid 2px;
  border-radius: 8px;
  user-select: none;
}

.close {
  display: flex;
  flex-direction: row;
  justify-content: right;
}

.closemark {
  width: 23px;
  user-select: none;
  cursor: pointer;
}

.stationsnames {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 12px;
  color: lightgray;
  user-select: none;
}
</style>
