<template lang="pug">
	main(role='main').col-md-9.ml-sm-auto.col-lg-10.px-4
		.row
			.col
				button.float-left.btn.btn-primary(@click='showCollapse = !showCollapse' type='button', :class="showCollapse ? 'collapsed' : null", aria-controls="addClientCard", :aria-expanded="showCollapse ? 'true' : 'false'") +
				b-collapse.mt-2(v-model="showCollapse" id="addClientCard")
					AddClient(v-if='isAddFormShow', :hide='hideAddClientForm')
		.row
			ClientCard(v-for='(item, index) in clientsShow', :client='item', :key='index')
</template>

<script>
import ClientCard from '@/components/ClientCard.vue'
import AddClient from '@/components/AddClient.vue'
import _ from 'lodash'

export default {
	name: 'clients',
	components: {
		ClientCard,
		AddClient
	},
	data() {
		return {
			clients: [],
			clientsTotal: 0,
			perPage: 3,
			currentPage: 1,
			isAddFormShow: true,
			showCollapse: false,
		}
	},
	mounted() {
		this.axios.get('/static/clients.json').then((response) => {
			 this.clients = response.data
		})
	},
	methods: {
		showAddClientForm() {
			this.isAddFormShow = true;
		},
		hideAddClientForm() {
			this.isAddFormShow = false;
		},
	},
	computed: {
		searchWord() {
			return this.$store.state.search
		},
		clientsShow() {
			let match =  findWord => new RegExp(this.searchWord, 'gi').test(findWord)
			let filteredClients = this.clients.filter(obj => {
				return match(obj.firstName) || match(obj.lastName)
				});
			return filteredClients
		},
		collection() {
			return this.paginate(this.clients)
		}
	}
}
</script>

<style lang="scss" scoped>

</style>