<template>
	<div class="landingGrid">
		<router-link 
			v-for="(i, index) in data.pages" 
			class="landingButton" 
			:to="i.link" 
			:key="index"
		>{{i.title}}</router-link>
	</div>
</template>

<script>
export default {
	computed: {
		data () {
			return this.$page.frontmatter
		}
	}
}
</script>


<style lang="stylus">
@import "../palette.styl";
.landingGrid
	display: grid
	grid-template-columns: repeat(auto-fit, 250px)
	grid-template-rows: repeat(auto-fit, 4.8rem)
	grid-gap: 25px;
	justify-content: center
	align-content: space-evenly
	position: absolute
	width: 100%
	height: 100%
	top: -3.6rem
.landingButton
	color: #fff
	background-color: $accentColor
	padding: 1.6rem
	border-radius: 4px
	transition: background-color .1s ease
	box-sizing: border-box
	border-bottom: 1px solid darken($accentColor, 10%)
    text-align: center
	&:hover
		background-color: lighten($accentColor, 10%)
</style>
