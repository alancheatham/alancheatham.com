<template>
  <div class="app">
    <div class="nav">
      <div class="left">
        Alan Cheatham
      </div>
      <div class="right">
        <router-link class="link" to="/">About</router-link>
        <router-link class="link" to="/music">Music</router-link>
        <router-link class="link" to="/resume">Résumé</router-link>
      </div>
    </div>
    <router-view class="page" />
  </div>
</template>

<style lang="stylus">
.app
  width 100%
  height 100%

  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color white
  background #353839
  font-size 17px

  overflow-x hidden

.nav
  color #a5cfde
  display flex
  justify-content space-between
  align-items center
  padding 20px
  height 57px

.link
  margin 15px 0 15px 15px

.page
  background #353839
  padding-top 40px

.router-link-exact-active
  text-decoration underline
</style>
