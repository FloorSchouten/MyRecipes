<template>
  <ul id="nav">
    <li>
      <router-link to="/" class="nav-link" active-class="isActive" exact>Home</router-link>
    </li>
    <li>
      <router-link to="/cookies" class="nav-link" active-class="isActive">Cookies</router-link>
    </li>
    <li>
      <router-link to="/breakfast" class="nav-link" active-class="isActive"
        >Breakfast</router-link
      >
    </li>
    <li>
      <router-link to="/dinners" class="nav-link" active-class="isActive">Dinners</router-link>
    </li>
    <router-view />
  </ul>
</template>
<script>
export default {
  name: "Navigation",
};
</script>

<style lang="scss">
@import "../scss/_variables.scss";

ul {
  display: flex;
  justify-content: center;
  margin-bottom: 150px;
  padding-left: 0;
}
li {
  margin-right: 25px;
  list-style-type: none;
  font-weight: bold;
  text-decoration-style: none;
}
.isActive {
  color: $link-color-active;
}
.nav-link {
  text-decoration: none;
}
.nav-link:hover {
  text-decoration: underline;
}
.nav-link:active {
  color: $primary;
}
</style>