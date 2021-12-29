<template>
  <div class="home">
    <h1 class="title">免费小说 Kindle阅读</h1>
    <input type="text" class="search" />
    <h3 class="book-list">
      <span>书架</span>
      <span class="choice-book" @click="choice"> 选择</span>
    </h3>
    <div class="books">
      <div class="book" :key="i" v-for="i in 10">
        <div class="book-item">
          <img src="https://fakeimg.pl/150x200/" alt="" />
        </div>
        <p>书名</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
  methods:{
    choice(){
      this.$router.push('/about')
    }
  },

})
export default class Home extends Vue {}
</script>

<style lang="stylus">

.title
  padding 10px 15px
  color #666
  font-size 20px
.search
  width 100%
  height 30px
  border 0
  margin 0
  padding 0 10px 
  background-color #eee
  border-radius 15px
  font-size 16px

.book-list
  display flex
  justify-content space-between
  padding 10px 15px
  border-bottom 1px solid #aaa
  font-size 18px
  .choice-book
    font-weight 400
    font-size 16px
    color #444

.books
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
.book
  // width 100%/5
  // flex-grow 1
  // margin auto

  margin-right: auto
  margin-left: auto
  .book-item
    box-shadow: 0 1px 6px rgb(0 0 0 / 35%)
    width 150px
    height 200px
  // border 1px solid #000
  img
    width 100%
    height 100%
  p
    margin-top 5px
    margin-bottom 25px

</style>
