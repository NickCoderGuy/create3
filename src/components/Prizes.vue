<template>
<div class="wrapper">
  <div class="prizes">
    <div class="prize" v-for="prize in prizes" :key="prize.id">
      <div class="info">
        <h1>{{prize.name}}</h1>
        
      </div>
      <div class="image">
       <img :src="'images/'+prize.image"> 
      </div>
      <div class="price">
        <h2>{{prize.price}} points to buy</h2>
        <button class="button" @click="buy(prize)">Buy</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'PrizeList',
  props: {
    prizes: Array
  },
  methods: {

    buy(prize){
       
         //var cost = parseInt(prize.price);
 
        if(this.$root.$data.count >= prize.price) {
         this.$root.$data.count -= prize.price;
         this.$root.$data.chest.push(prize);
        }
      
    }

  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.prizes {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.prize {
  margin: 10px;
  margin-top: 50px;
  width: 500px;
  background-color: brown;
}

.prize img {
  border: 2px solid #333;
  height: 250px;
  width: 500px;
  object-fit: cover;
}

.prize .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: brown;
  color: white;
  padding: 10px 30px;
  height: 80px;
  text-align: center;
}

.info h1 {
  font-size: 40px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}


.price {
  
  text-align: center;
  background-color: brown;
  color: white;
}

.price h2 {

  text-align: center;

}

button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
}

.button {
  margin-left: auto;
}
.button:hover{

	background-color: indigo;

}
</style>
