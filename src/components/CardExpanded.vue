<template>
  <div class="card">
    <img :src="img" class="card-image" />
    <h2 class="price">{{ price }} ₽</h2>
    <h3 class="name">{{ name }}</h3>
    <p class="description">{{ shortDescription }}</p>
    <button class="button" @click="onClick">В корзину</button>
  </div>
</template>

<script>
export default {
  name: "CardExpanded",
  props: {
    img: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: "",
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
  computed: {
    shortDescription() {
      if (this.description.length > 96) {
        return this.description.slice(0, 96) + " ...";
      }
      return this.description;
    },
  },
  methods: {
    onClick() {
      this.$emit("good-added", {
        name: this.name,
        img: this.img,
        price: this.price,
        uid: this.uid,
      });
    },
  },
};
</script>

<style scoped>
.card {
  border-radius: 8px;
  background-color: #f3f3f3;
}
.card-image {
  max-height: 100%;
  max-width: 100%;
}
.description {
  margin-bottom: 30px;
}
.button {
  background-color: #e53558;
  color: #fff;
  position: relative;
  cursor: pointer;
  bottom: 0;
  font-family: "GTEestiDisplay", Arial, sans-serif;
  line-height: 1.55;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 1px;
  border: none;
  border-radius: 8px;
  padding: 10px;
}
</style>
