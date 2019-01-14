<template lang="pug">
	main(role='main').col-md-9.ml-sm-auto.col-lg-10.px-4
		.row
			CompanyCard(v-for='(item, index) in companies', :company='item', :key='index')
</template>

<script>
import CompanyCard from '@/components/CompanyCard.vue'

export default {
	name: 'companies',
	components: {
		CompanyCard
	},
	data() {
		return {
			companies: false
		}
	},
	mounted() {
		this.axios.get('/static/companies.json')
		.then((response) => {
 			this.companies = response.data
		})
		.catch(err => {
			console.log(err)
		})

	}
}
</script>

<style lang="scss" scoped>

</style>