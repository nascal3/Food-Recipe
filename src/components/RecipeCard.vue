<script setup>
  defineProps({
    recipe: {
      type: Object
    }
  });
</script>

<template>
  <div class="card">
    <img :src="recipe.strMealThumb" alt="">
    <div class="title">{{ recipe.strMeal }}</div>

  </div>
</template>

<style lang="scss" scoped>
  .card {
    min-height: 270px;
    max-height: 320px;
    width: 300px;
    border: 1px solid gray;
    border-radius: 8px;
    background: #FFFFFF;
    padding: 10px;

    .title {
      font-weight: 600;
    }

    img {
      width: 100%;
      height: 180px;
    }
  }
</style>
