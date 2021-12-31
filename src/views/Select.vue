<template>
  <div class="select">
    <div class="select-title">
      <span class="select-book">选择书籍</span>
      <span>已选择{{ BookLength }}本书籍</span>
      <span class="select-cancel" @click="back()">取消</span>
    </div>
    <div class="books">
      <div
        class="book"
        :key="book.id"
        v-for="book in books"
        :title="book.name"
        @click="bookClick(book)"
      >
        <div class="book-item">
          <img :src="book.imgurl" alt="" />
          <span class="book-choice" :class="{ active: book.select }">
            <i
              class="bi"
              :class="{
                'bi-check-circle-fill': book.select,
                'bi-check-circle': !book.select,
              }"
            ></i>
          </span>
        </div>
        <div class="book-name">{{ book.name }}</div>
      </div>
   
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { State, Getter, Action, Mutation, namespace } from "vuex-class";
import { GetBook, GetBooks } from "../store/TestData";
@Options({
  components: {},
})
export default class Select extends Vue {
  books = GetBooks();

  @Action("back") back: any;

  get BookLength() {
    return this.books.filter((v) => v.select).length;
  }
  bookClick(book: any) {
    book.select = !book.select;
  }
}
</script>

<style lang="stylus" scoped>
.select
  display flex
  flex-direction column
  height 100%
.select-title
  display flex
  justify-content space-between
  width 100%
  height 50px
  background-color #ddd
  text-align center
  line-height 50px
  padding 0px 20px
.select-book
  font-size 18px
  font-weight 600
.select-cancel
  cursor pointer
.book-item
  position relative
  .book-choice
    position absolute
    bottom 8px
    right 8px
    font-size 20px
  .book-choice.active
    color #36b800
    font-weight 600
</style>
