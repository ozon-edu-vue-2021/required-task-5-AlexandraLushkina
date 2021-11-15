<template>
  <div class="card">
    <img :src="img" class="card-image" />
    <div class="info">
      <h3 class="name">{{ name }}</h3>
      <h2 class="price">{{ price }} ₽</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardSmall",
  props: {
    img: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      default: "name",
    },
    price: {
      type: Number,
      default: 10,
    },
    uid: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
.card {
  justify-self: center;
  border-radius: 8px;
  background-color: #f3f3f3;
  display: grid;
  gap: 1rem;
  grid-auto-flow: column;
  grid-template-columns: 1fr 1fr 3fr;
  align-items: center;
  padding: 10px;
  margin: 20px;
}
.card-image {
  max-height: 80%;
  max-width: 70%;
  padding: 0;
  margin: 2px;
  justify-self: center;
}
.info {
  display: inline;
  justify-self: left;
}
</style>
