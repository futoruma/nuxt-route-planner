<script setup>
const lang = useLang();
</script>

<template>
  <div class="header">
    <h2>
      <NuxtLink to="/">{{
        lang === "jpn" ? "乗換案内" : "Route Planner"
      }}</NuxtLink>
    </h2>
    <div class="options">
      <div>
        <NuxtLink v-if="useRoute().name !== 'statistics'" to="/statistics">{{
          lang === "jpn" ? "統計" : "Stats"
        }}</NuxtLink>
      </div>
      <div
        class="language"
        @click="lang === 'jpn' ? (lang = 'eng') : (lang = 'jpn')"
      >
        &#x1F310;
      </div>
    </div>
  </div>
</template>

<style scoped>
a {
  color: azure;
  margin: 0px 4px;
  padding: 12px;
  text-decoration: none;
  border-radius: 8px;
}

a:hover {
  color: white;
  background-color: rgb(42, 42, 42);
}

.header {
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 0px 0px;
  align-items: center;
  justify-content: space-between;
  background-color: darkslategray;
  color: azure;
  user-select: none;
  border-radius: 8px 8px 0px 0px;
}

.options {
  display: flex;
  margin: 0px 4px;
  align-items: center;
  justify-content: space-between;
}

.language {
  padding: 4px 8px;
  font-size: x-large;
  cursor: pointer;
  border-radius: 8px;
}

.language:hover {
  background-color: rgb(42, 42, 42);
}

.language:active {
  background-color: rgb(63, 63, 63);
}
</style>
