<template>
  <div class="shop">
    <h1>Welcome to the Shop!</h1>
    <p>This is where you buy items!</p>
    <p>Number of points {{numberOf}}</p>
    <PrizeList :prizes="prizes" />
  </div>
</template>
<script>
import PrizeList from "../components/Prizes.vue"
export default{

	name: 'About',
	components: {

		PrizeList

},
	computed: {

		numberOf(){

			return this.$root.$data.count;

		},
		prizes(){

			return this.$root.$data.prizes;

		}

	}


}
</script>
