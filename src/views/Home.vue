<template>
  <div class="home">
    <div class="home-title">
      <h1 class="explain">免费小说 Kindle阅读</h1>
      <router-link to="/search" class="search">
        <div class="search-item">
          <i class="bi bi-search home-search"></i>
        </div>
      </router-link>
      <h3 class="home-title-tool">
        <span>书架</span>
        <router-link to="/select">
          <i class="bi bi-check2-circle"></i>
          <span class="choice-book">选择</span>
        </router-link>
      </h3>
    </div>
    <div class="books">
      <router-link
        to="/open"
        class="book"
        :title="book.name"
        :key="book.id"
        v-for="book in books"
      >
        <div class="book-item">
          <img :src="book.imgurl" :alt="book.name" />
        </div>
        <div class="book-name">{{ book.name }}</div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { GetBook, GetBooks } from "../store/TestData";

@Options({
  components: {},
})
export default class Home extends Vue {
  books = GetBooks();
}
</script>

<style lang="stylus" scoped>
.home
  display flex
  flex-direction column
  height 100%
.home-title
  width 100%
  // height 130px
  font-size 30px
  background-color #ddd
  box-shadow: 0 1px 6px rgb(0 0 0 / 35%)
.explain
  width 100%
  text-align center
  padding 20px 15px
  color #666
.search
  // padding  0 10px
.search-item
  // width 100%
  margin 0 15px
  border 0
  // margin 0
  padding-left 10px
  background-color #eee
  border-radius 15px
  font-size 16px
.home-search
  display inline-block
  margin-top 5px
.home-title-tool
  width 100%
  // height 50px
  display flex
  justify-content space-between
  padding 10px 15px
  border-bottom 1px solid #aaa
  font-size 18px
  .choice-book
    font-weight 400
    font-size 16px
    color #444
</style>
