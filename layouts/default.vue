<template>
  <div class="container">
    <Header></Header>
    <slot></slot>
    <Footer></Footer>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: lightgray;
  max-width: 864px;
  width: 100vw;
  height: 100vh;
  border-radius: 8px;
}
</style>
