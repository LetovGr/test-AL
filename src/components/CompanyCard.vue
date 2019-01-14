<template lang="pug">
.col-sm-3.border-bottom.border-warning.m-3.wrapper
	.id {{company.id}}
	.date-create {{company.createdAt}}
	.name {{company.name}}
</template>

<script>

export default {
	data() {
		return {

		}
	},
	props: {
		company: Object
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
