<template>
  <div class="home">
    <div class="content">
      I do not collect any data from this app.
    </div>
  </div>
</template>

<script>
export default {
  name: "PrivacyPolicy",
}
</script>

<style lang="stylus" scoped>
.home
	display flex
	justify-content center

.content
	max-width 330px
	width 100%
	padding 0 15px 15px
	display flex
	flex-direction column
	align-items center

.portrait
	width 300px
	height 300px
	border-radius 100%
	border 2px solid #a5cfde
	overflow hidden
	box-shadow 6px 6px 24px 5px rgba(0, 0, 0, 0.3)

img
	width 100%

.info
	padding-top 50px

.header
	font-size 25px
	color #a5cfde

.body
	padding-top 20px
	line-height 1.2

.contact
	display flex
	align-items center
	justify-content space-between
	margin-top 25px

.icon
	width 40px
	border-radius 30%
	transition ease-in 0.1s

	&:hover
		transform scale(1.1)
</style>
