<template lang="pug">
	.client-add-form
		b-card-group.col-sm-5(deck='')
			b-card(header='Рога и Копыта' header-tag='header',title='Добавление нового клиента' border-variant="warning")
				b-form(v-if='show')
					b-form-group(label-for='firstname-input')
						b-form-input(type='text' v-model='clientForm.firstName' required='' placeholder='Имя')
					b-form-group(label-for='lastname-input')
						b-form-input(type='text' v-model='clientForm.lastName' required='' placeholder='Фамилия')
					b-form-group(label-for='id-input')
						b-form-input(type='number' v-model='clientForm.id' required='' placeholder='Id')
					b-form-group(label-for='date-input')
						b-form-input(type='date' v-model='clientForm.createdAt' required='' placeholder='Дата Регистрации')
					b-form-group(label-for='company-input')
						b-form-input(type='text' v-model='clientForm.companyName' required='' placeholder='Компания')
					.btn-group.float-left(role="group" aria-label="Basic example")
						b-button(variant='primary' @click='addClient', type='button' v-b-tooltip.hover title="Данные о клиенте будут добавлены в базу(Вывод в console)") Добавить
						b-button(variant='warning' @click='onReset', type='button' v-b-tooltip.hover title="Очистить все заполненные поля") Стереть поля

</template>

<style lang="scss" scoped>

</style>

<script>
export default {
	data(){
		return {
			clientForm: {
				firstName: '',
				lastName: '',
				id: '',
				createdAt: null,
				companyName: ''
			},
			show: true
		}
	},
	props: [
		'hide'
	],
	methods: {
		addClient() {
			console.log(JSON.stringify({newClients:this.clientForm}))
		},
		onReset(evt) {
			this.clientForm.firstName = ''
			this.clientForm.lastName = ''
			this.clientForm.id = ''
			this.clientForm.createdAt = null
			this.clientForm.companyName = ''
		}
	}
}
</script>
