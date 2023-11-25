<script setup>
import { API_URL } from "~/consts";
import { getTokyoMap } from "~/trainMaps/tokyo";

const currentMap = getTokyoMap();

const lang = useLang();

const { data: fetchedRoutes } = await useFetch(`${API_URL}/selectedroutes`);
const selectedRoutes = ref(fetchedRoutes);

const deleteHandler = async (id) => {
  await $fetch(`${API_URL}/selectedroutes/${id}`, {
    method: "DELETE",
  });
  selectedRoutes.value = selectedRoutes.value.filter(
    (route) => route.id !== id
  );
};
</script>

<template>
  <div class="space"></div>
  <div class="container">
    <table>
      <tr>
        <th>ID</th>
        <th>{{ lang === "jpn" ? "検索時刻" : "Searched at" }}</th>
        <th>{{ lang === "jpn" ? "出発" : "From" }}</th>
        <th>{{ lang === "jpn" ? "到着" : "To" }}</th>
        <th>{{ lang === "jpn" ? "時間（分）" : "Min" }}</th>
        <th>{{ lang === "jpn" ? "運賃（円）" : "Yen" }}</th>
        <th></th>
      </tr>
      <tr v-for="selectedRoute in selectedRoutes">
        <td>{{ selectedRoute.id }}</td>
        <td>{{ new Date(selectedRoute.timestamp).toLocaleString() }}</td>
        <td>
          {{
            lang === "jpn"
              ? currentMap[selectedRoute.departureStation].jpnName
              : currentMap[selectedRoute.departureStation].engName
          }}
        </td>
        <td>
          {{
            lang === "jpn"
              ? currentMap[selectedRoute.arrivalStation].jpnName
              : currentMap[selectedRoute.arrivalStation].engName
          }}
        </td>
        <td>{{ selectedRoute.totalMinutes }}</td>
        <td>{{ selectedRoute.totalFare }}</td>
        <td class="delete" @click="deleteHandler(selectedRoute.id)">
          &#10062;
        </td>
      </tr>
    </table>
  </div>
  <div class="space"></div>
</template>

<style scoped>
* {
  border-collapse: collapse;
}

.container {
  max-height: 720px;
  overflow-y: scroll;
}

table {
  width: 100%;
}

td,
th {
  border: 1px solid black;
  padding: 8px;
}

tr {
  text-align: right;
  text-overflow: ellipsis;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

tr:nth-child(odd) {
  background-color: lightgray;
}

tr:hover {
  background-color: darkslategray;
  color: azure;
}

th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: black;
  color: white;
}

.space {
  height: 16px;
}

.delete {
  user-select: none;
  cursor: pointer;
}
</style>
