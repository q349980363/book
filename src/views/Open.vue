<template>
  <div class="open">
    <div class="open-head">
      <i
        class="bi bi-chevron-left open-button"
        @click="back()"
        style="cursor: pointer"
      ></i>
      <span class="open-head-rigth"><i class="bi bi-list"></i></span>
    </div>
    <div class="open-mian">
      {{ GetText() }}
    </div>
    <div class="open-list">
      <div class="open-list-item">第一章</div>
      <div class="open-list-item">第一章</div>
      <div class="open-list-item">第一章</div>
      <div class="open-list-item">第一章</div>
      <div class="open-list-item">第一章</div>
      <div class="open-list-item">第一章</div>
      <div class="open-list-item">第一章</div>
      <div class="open-list-item">第一章</div>
      <div class="open-list-item">第一章</div>
      <div class="open-list-item">第一章</div>
      <div class="open-list-item">第一章</div>
      <div class="open-list-item">第一章</div>
      <div class="open-list-item">第一章</div>
      <div class="open-list-item">第一章</div>
      <div class="open-list-item">第一章</div>
      <div class="open-list-item">第一章</div>
      <div class="open-list-item">第一章</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { State, Getter, Action, Mutation, namespace } from "vuex-class";
import { GetBook, GetBooks, GetText } from "../store/TestData";
@Options({
  components: {},
})
export default class Open extends Vue {
  books = GetBooks();

  @Action("back") back: any;
  GetText(){
    return GetText()
  }
}
</script>

<style lang="stylus" scoped>
.open
  display flex
  flex-direction column
  height 100%
  position relative

.open-head
  display flex
  justify-content space-between
  width 100%
  height 50px
  line-height 50px
  border-bottom 1px solid #000
  padding 0 10px
.open-head-rigth
  color #dc3545
  font-size 30px

.open-mian
  flex 1
  overflow-y auto

.open-list
  position absolute
  top 50px
  right 0
  z-index 1
  width 200px
  height 300px
  background-color #aaa
  overflow-y auto
.open-list-item
  cursor pointer
  border-bottom 1px solid #000
</style>
