<template>
  <div class="search">
    <div class="search-box">
      <div class="search-box-left">
        <i class="bi bi-chevron-left search-button" @click="back()" style="cursor: pointer"></i> 
      </div>
      <div class="search-box-right">
        <i class="bi bi-search search-ico"></i>
        <input type="text" class="search-input"/>
      </div>
    </div>
    <div class="search-list">
     <div class="search-list-item">书名</div>
     <div class="search-list-item">书名</div>
     <div class="search-list-item">书名</div>
     <div class="search-list-item">书名</div>
     <div class="search-list-item">书名</div>
     <div class="search-list-item">书名</div>
     <div class="search-list-item">书名</div>
     <div class="search-list-item">书名</div>
     <div class="search-list-item">书名</div>
     <div class="search-list-item">书名</div>
     <div class="search-list-item">书名</div>
     <div class="search-list-item">书名</div>
     <div class="search-list-item">书名</div>
     <div class="search-list-item">书名</div>
     <div class="search-list-item">书名</div>
     <div class="search-list-item">书名</div>
     <div class="search-list-item">书名</div>
     <div class="search-list-item">书名</div>
     <div class="search-list-item">书名</div>
     <div class="search-list-item">书名</div>
     <div class="search-list-item">书名</div>
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
export default class Search extends Vue {
  books = GetBooks();
  @Action("back") back: any;
}
</script>

<style lang="stylus" scoped>
.search
  display flex
  flex-direction column
  height 100%

.search-box
  display flex
  width 100%
  padding 10px 10px
 
.search-button
  display inline-block
  margin-top 5px
.search-ico
  position absolute
  left 40px
  margin-top 5px
  margin-left 5px
.search-box-right
  flex 1
.search-input
  width 100%
  height 30px
  border 0
  margin-left 10px
  padding-left 35px
  font-size 18px
  border-radius 15px

.search-list
  flex 1
  overflow-y auto
  font-size 20px
.search-list-item
  padding 10px 0 10px 25px

</style>
