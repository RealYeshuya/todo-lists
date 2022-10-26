<template>
  <div class="home">
    <h1 class="name">JOSHUA PANGANIBAN</h1>
  </div>
  <router-link to="todoList">
    <div class="gotoApp">GO TO APP</div> <!-- Route to the App -->
  </router-link>
</template>

<script lang="ts"> // @ is an alias to /src

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
}
</script>
