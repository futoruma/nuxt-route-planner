<script setup>
const { id, stationName, color, isSelected } = defineProps([
  "id",
  "stationName",
  "color",
  "isSelected",
]);
</script>

<template>
  <div
    :class="{
      existing: stationName,
      selected: isSelected,
    }"
    @click="$emit('stationClicked')"
  >
    {{ stationName }}
  </div>
</template>

<style scoped>
.existing {
  text-align: center;
  user-select: none;
  cursor: pointer;
  border: solid 2px;
  border-radius: 8px;
  height: 32px;
  word-break: break-all;
  line-height: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
}

.existing:hover {
  background-color: lightgray;
}

.selected {
  background-color: darkslategray;
  color: azure;
}
</style>
