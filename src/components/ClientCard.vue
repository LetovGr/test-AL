<template lang="pug">
.col-sm-3.border.rounded.radius.border-warning.m-3.wrapper
	.name__f(v-if='staticF' ) {{client.firstName}}
		button.m-1.float-left.btn.btn-dark.btn-sm(@click='toggleFName' type='button') &#9998;
	.name__f(v-if='!staticF')
		input(v-model='newFirstName')
		button.m-1.float-left.btn.btn-primary(type='button' @click='sendF') Submit
	.name__l(v-if='staticL' ) {{client.lastName}}
		button.m-1.float-left.btn.btn-dark.btn-sm(@click='toggleLName' type='button') &#9998;
	.name__l(v-if='!staticL')
		input(v-model='newLastName')
		button.m-1.float-left.btn.btn-primary(type='button' @click='sendL') Submit
	.id ID {{client.id}}
	.date-create Дата создания {{client.createdAt}}
	.c-id(v-if='staticC') {{client.companyId}}
		button.m-1.float-left.btn.btn-dark.btn-sm(@click='toggleCName' type='button') &#9998;
	.c-id(v-if='!staticC')
		input(v-model='newCompanyName')
		button.m-1.float-left.btn.btn-primary(type='button' @click='sendC') Submit
</template>

<script>

export default {
	data() {
		return {
			staticF: true,
			staticL: true,
			staticC: true,
			newFirstName: '',
			newLastName: '',
			newCompanyName: ''
		}
	},
	props: {
		client: Object
	},
	methods: {
		toggleFName() {
			this.staticF = !this.staticF;
			this.newFirstName = this.staticFirstName
		},
		toggleLName() {
			this.staticL = !this.staticL;
			this.newLastName = this.staticLastName
		},
		toggleCName() {
			this.staticC = !this.staticC;
			this.newCompanyName = this.staticCompanyName
		},
		sendF() {
			console.log(JSON.stringify({newFName: this.newFirstName}));
			this.staticF = !this.staticF;
		},
		sendL() {
			console.log(JSON.stringify({newLName: this.newLastName}));
			this.staticL = !this.staticL;
		},
		sendC() {
			console.log(JSON.stringify({newCName: this.newCompanyName}));
			this.staticC = !this.staticC;
		}
	},
	computed: {
		staticFirstName(){
			return this.client.firstName
		},
		staticLastName(){
			return this.client.lastName
		},
		staticCompanyName(){
			return this.client.companyId
		}
	}

}
</script>

<style lang="scss" scoped>

.wrapper {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
}
.name {
	display: flex;
	flex-direction: row;
	width: 100%;
	justify-content: space-between;

	&__placeholder {
		display: flex;
		flex-direction: row;
	}
}
</style>
