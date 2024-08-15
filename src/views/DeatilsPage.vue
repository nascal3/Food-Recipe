<script setup>
  import {onMounted, ref} from "vue";
  import http from "../../middleware/HttpController.js";
  import { useRoute } from "vue-router";

  const details = ref([])

  onMounted(() => {
    const router = useRoute()
    const id = router.params.id
    http.get(`/lookup.php?i=${id}`).then(res => {
      details.value = res.data.meals
    })
  })
</script>

<template>
  <div class="container">
    <image class="image">
      <img :src="details[0]?.strMealThumb" alt="">
    </image>
    <div class="details">
      <h2>{{ details[0]?.strMeal }}</h2>
      <div class="description">{{ details[0]?.strInstructions }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .container {
    display: flex;
    flex-direction: row;
    padding: 60px;

    image{
      width: 150px;
      height: 150px;
      border-radius: 50%;
      overflow: hidden;

      img {
        width: 100%;
      }
    }

    .details {
      width: 300px;
      margin-left: 30px;
    }


  }
</style>
