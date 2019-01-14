<template lang="pug">
nav.navbar.sticky-top.navbar-dark.bg-dark.shadow
	b-dropdown.m-md-2(id="ddown1" text="Рога и Копыта")
		router-link(v-for="item in links" tag="b-dropdown-item" size='lg' :to="item.path" exact active-class="active") {{item.title}}
	input.form-control.mr-sm-2.col-sm(v-model='search', type='search' placeholder='Search' aria-label='Search')

</template>

<script>
export default {
	data() {
		return {
			links: [
				{title: 'Клиенты', path: '/clients/'},
				{title: 'Компании', path: '/companies/'}
			]
		}
	},
	computed: {
		search: {
			get() {
				return this.$store.state.search
			},
			set(newVal) {
				this.$store.commit('searchUpdate', newVal)
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.logo {
	color: white;
	font-weight: 600;
	font-size: 1em;
	text-align: left;
}
</style>
