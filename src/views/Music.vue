<template>
	<div class="music">
		<div class="alan">
			<div class="header">Music</div>
			<div class="description">
				I'm a multi-instrumentalist, composer, and producer.
			</div>
			<div class="container">
				<div class="scale">
					<iframe
						class="ytplayer"
						type="text/html"
						src="https://www.youtube.com/embed/wUr6N72CS7s?origin=http://alancheatham.com"
						frameborder="0"
						allowfullscreen
					></iframe>
				</div>
			</div>
		</div>
		<div class="bands">
			<div class="header">Bands</div>
			<div class="band yak">
				<img class="band__image" src="../assets/images/casualyak.jpg" />
				<div class="band__content">
					<div class="header band__header">Casual Yak</div>
					<iframe
						class="band__music"
						src="https://open.spotify.com/embed/track/1xPpdnkA8E9lvjXh6RMfU5"
						width="300"
						height="380"
						frameborder="0"
						allowtransparency="true"
						allow="encrypted-media"
					></iframe>
					<a
						class="contact__item"
						href="https://instagram.com/casualyakmusic"
						target="_blank"
					>
						<img class="icon" src="../assets/icons/instagram.png" />
						<span class="icon__label">@casualyakmusic</span>
					</a>
				</div>
			</div>
			<div class="band archnar">
				<img class="band__image" src="../assets/images/archnarcissist.png" />
				<div class="band__content">
					<div class="header band__header">Arch Narcissist</div>
					<iframe
						class="band__music"
						src="https://open.spotify.com/embed/track/7fxbO3VAcaLhPNwmsaoM6j"
						width="300"
						height="380"
						frameborder="0"
						allowtransparency="true"
						allow="encrypted-media"
					></iframe>
					<a
						class="contact__item"
						href="https://instagram.com/archnarcissist"
						target="_blank"
					>
						<img class="icon" src="../assets/icons/instagram.png" />
						<span class="icon__label">@archnarcissist</span>
					</a>
				</div>
			</div>
			<div class="band chunky">
				<img class="band__image" src="../assets/images/chunkyhustle.jpg" />
				<div class="band__content">
					<div class="header band__header">Chunky Hustle Brass Band</div>
					<iframe
						class="band__music"
						src="https://open.spotify.com/embed/track/5tOBhK4NqubNwrhhX2cLI2"
						width="300"
						height="380"
						frameborder="0"
						allowtransparency="true"
						allow="encrypted-media"
					></iframe>
					<a
						class="contact__item"
						href="https://instagram.com/chunkyhustlebrassband"
						target="_blank"
					>
						<img class="icon" src="../assets/icons/instagram.png" />
						<span class="icon__label">@chunkyhustlebrassband</span>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="stylus" scoped>
.alan
	width 100%
	display flex
	flex-direction column
	align-items center

.container
	width 100%
	max-width 840px
	margin-top 30px
	border 2px solid #a5cfde
	border-radius 20px
	overflow hidden
	// ios safari overflow hidden position absolute bug
	transform translateZ(0)
	-webkit-mask-image -webkit-radial-gradient(circle, #fff 100%, #000 0)

.scale
	position relative
	padding-bottom 56.25%

.ytplayer
	position absolute
	top 0
	left 0
	width 100%
	height 100%

.header
	font-size 35px
	text-align center
	margin-bottom 30px
	color #a5cfde

.description
	padding 0 15px
	text-align center

.bands
	margin-top 50px

.band
	height calc(100vh)
	min-height 800px
	position relative

.band__image
	width 100%
	height 100%
	object-fit cover
	opacity 0.5

.band__content
	position absolute
	top 0
	left 0
	width 100%
	display flex
	flex-direction column
	align-items center

.band__header
	font-size 70px
	color white
	padding-top 100px
	font-weight bold

.band__music
	margin-top 22px

.contact__item
	display flex
	align-items center
	margin-top 15px

.icon
	width 40px
	border-radius 30%
	transition ease-in 0.1s

	&:hover
		transform scale(1.1)

	&__label
		margin-left 10px

a:hover
	color #517eb9
</style>
