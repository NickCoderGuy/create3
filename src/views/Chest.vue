<template>
  <div class="chest">
    <h1>This is where all the prizes you bought are!</h1>
    <p>You can view them or sell them to get points back!</p>
    <p>Number of points {{numberOf}}</p>
    <p>Prizes in Chest {{chestNum}}</p>
    <ChestList :chest="chest" />
  </div>
</template>
<script>
import ChestList from "../components/Chests.vue"
export default{

        name: 'Chest',
        components: {

                ChestList

},
        computed: {

                numberOf(){

                        return this.$root.$data.count;

                },
                chest(){

                        return this.$root.$data.chest;

                },

		chestNum(){

			return this.$root.$data.chest.length;

		}

        }


}
</script>
~

