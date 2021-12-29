<template>
  <div class="about">
    <input type="text" class="search" />
    <h3 class="book-list">
      <span>选择书籍</span>
      <span class="choice-book" @click="cancel">取消</span>
    </h3>
    <div class="books">
      <div class="book" :key="i" v-for="i in 100">
        <div class="book-item">
          <img src="https://fakeimg.pl/150x200/" alt="" />
          <span class="book-choice"></span>
        </div>
        <p>书名</p>
      </div>
    </div>
    <div class="remove">移出书架</div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  components: {},
  methods:{
    cancel(){
      this.$router.push('/')
    }
  },
})
export default class About extends Vue {}
</script>

<style lang="stylus">
.search
  margin-top 10px
.book-item
  position relative
  .book-choice
    display block
    width 20px
    height 20px
    border 1px solid red
    position absolute
    bottom 8px
    right 8px
    border-radius 10px

.remove
  width 100%
  height 30px
  background-color red
  color #fff
</style>
