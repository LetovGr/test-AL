<template lang="pug">
//- .col-sm-2.h-100.bg-secondary.sidebar.shadow-sm
//- 	b-list-group.w-100.col-sm
//- 		router-link(v-for="item in links" tag="b-list-group-item" :to="item.path" exact active-class="active")

</template>

<script>
export default {
	data(){
		return {

		}
	},
	// methods: {
	// 	goTo (path){
	// 	this.$router.push({path})
	// 	}
	// }
}
</script>

<style lang="scss" scoped>
.sidebar {
	position: fixed;
	z-index: 2;
	height: 100vh;
	left: 0;
	color: black;
}

span {
	cursor: pointer;
}

</style>
