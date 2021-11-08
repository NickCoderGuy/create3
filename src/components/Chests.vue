<template>
<div class="wrapper">
  <div class="prizes">
    <div class="prize" v-for="chest in chest" :key="chest.id">
      <div class="info">
        <h1>{{chest.name}}</h1>

      </div>
      <div class="image">
       <img :src="'images/'+chest.image">
      </div>
      <div class="price">
        <h2>Sell for {{chest.price}} points</h2>
        <button class="button" @click="sell(chest)">Sell</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ChestList',
  props: {
    chest: Array
  },
  methods: {

   sell(chest){

      this.$root.$data.count += parseInt(chest.price);
      this.$root.$data.chest.splice(0,1);


   }

  }
}
</script>
<style>

img{

height: 150px;
width: 300px;

}
.prize{

border: 2px;
border-color: black;

}
</style>
