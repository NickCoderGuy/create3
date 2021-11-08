<template>
  <div>
  <div class = "front">
	<h1>Welcome to the Prize Clicker!</h1>
        <p>Click This button for points to redeem at the shop!</p>
  </div>
  <button class = "button" @click="getPoint">+1</button>
  <p id='locked'>Locked!</p>
  <button id = "lockedButton" class = "button" @click="plus5">+5</button>
  <p>Points earned</p>
  <p>{{numOfPoints}}</p>
  <div class='footer'>
  <p>Made by Nick Taylor cs260 <a href ="" target="_blank">GitHub</a></p>
  </div> 
  </div>
</template>

<script>
export default {
	
	name: 'Home',
	methods: {
		getPoint(){
			this.$root.$data.count += 1;
			if(this.$root.$data.count >= 10){

				document.getElementById("locked").innerHTML = "Unlocked the +5 button!";
				document.getElementById("lockedButton").style.backgroundColor = "gold";

			}
		},
		plus5(){
			if(this.$root.$data.count >= 10){
			this.$root.$data.count += 5;
			}
		}
	},
	computed: {

		numOfPoints(){
			
			return this.$root.$data.count;

		},


	}

	
}
</script>

<style>
.button{

	height: 40px;
	width: 80px;

}

#lockedButton{

	background-color: brown;

}
</style>
