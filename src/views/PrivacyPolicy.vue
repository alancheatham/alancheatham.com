<template>
  <div class="home">
    <h1>Privacy Policy</h1>
    <h2>Pivot</h2>
    <div class="content">
      I do not collect any data from this app.<br />
      Contact alancheatham@gmail.com with any questions.
    </div>
    <h2>Poke A Dot</h2>
    <div class="content">
      I do not collect any data from this app.<br />
      Contact alancheatham@gmail.com with any questions.
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
	flex-direction column
	align-items center

.content
	max-width 600px
	width 100%
	padding 15px
	display flex
	flex-direction column
	align-items center
	text-align center

h1
	font-size 35px
	margin-bottom 10px
	color #a5cfde

h2
	font-size 20px
	color #a5cfde
	padding-top 10px
</style>
