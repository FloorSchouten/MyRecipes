<template>
  <div class="page">
    <h1>Breakfast</h1>
    <img
      alt="breakfast pancakes"
      src="../assets/pancakes.jpg"
      style="width: 400px"
    />
  </div>
</template>

<script>
export default {
  name: "Breakfast",
};
</script>

<style lang="scss">
@import "../scss/_variables.scss";

.page {
  border-radius: 2px solid green;
  display: flex;
  justify-content: center;
}
</style>