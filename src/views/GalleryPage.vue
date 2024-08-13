<script setup>
import RecipeCard from "@/components/RecipeCard.vue";

</script>

<template>
  <div class="container">
    <div class="header">
      <div class="title"> Search: </div>
      <div class="input-wrapper">
        <input type="text" name="" id="">
        <i class="fa fa-search" aria-hidden="true"></i>
      </div>
    </div>
    <div class="list">
      <RecipeCard />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
}
.header {
  padding: 10px;
  display: flex;
}
.title {
  flex: 1;
}
.input-wrapper {
  border: 2px solid gray;
  border-radius: 5px;

  input {
    border: none;
    outline: none;
  }
}

.list {
  flex: 1;
  margin-top: 60px;
  background: #bdc3c7;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #2c3e50, #bdc3c7);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #2c3e50, #bdc3c7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}

</style>