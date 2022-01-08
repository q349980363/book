<template>
  <div class="search">
    <div class="search-box">
      <div class="search-box-left">
        <i class="bi bi-chevron-left search-button" @click="back()"></i>
      </div>
      <div class="search-box-right">
        <i class="bi bi-search search-ico"></i>
        <input type="text" class="search-input" v-model="bookName"  @keyup.enter="clickSearch"/>
      </div>
      <div class="search-box-btn" @click="clickSearch">搜索</div>
    </div>
    <div class="search-list">
      <div
        class="search-list-item"
        :key="i"
        v-for="(book, i) in books"
        :title="book"
      >
        {{ book }}
      </div>

      <div class="search-list-item">书名</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { State, Getter, Action, Mutation, namespace } from "vuex-class";
import { GetBook, GetBooks } from "../store/TestData";
import { http, cheerio } from "../store";
import { Cheerio, CheerioAPI } from "cheerio";
import * as _ from "lodash";

@Options({
  components: {},
})
export default class Search extends Vue {
  bookName = "";
  books = Array<string>();
  async clickSearch() {
    var response = await http.get(
      "http://www.b520.cc/modules/article/search.php?searchkey=" + this.bookName
    );
    // console.log(response.data);

    const $ = cheerio.load(response.data);
    var asd = $(
      "#hotcontent > table > tbody > tr > td:nth-child(1) > a"
    ).first();
    var list = $("#hotcontent > table > tbody > tr > td:nth-child(1) > a")
      .map((i, element) => {
        return $(element).text();
      })
      .toArray();
    this.books = list;
    // console.log(list);
  }
  @Action("back") back: any;
}
</script>

<style lang="stylus" scoped>
.search {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.search-button {
  display: inline-block;
  margin-top: 5px;
  cursor: pointer;
}

.search-box {
  display: flex;
  width: 100%;
  border-bottom: 1px solid #000;
}

.search-box-right {
  flex: 1;
  position: relative;
}

.search-ico {
  position: absolute;
  left: 40px;
  margin-top: 5px;
  margin-left: -20px;
}

.search-input {
  width: 100%;
  height: 30px;
  border: 0;
  // margin-left: 10px;
  padding-left: 35px;
  font-size: 18px;
  border-radius: 15px 0px 0px 15px;
}

.search-box-btn {
  background-color: #fff;
  cursor: pointer;
}

.search-list {
  flex: 1;
  overflow-y: auto;
  font-size: 20px;
}

.search-list-item {
  cursor: pointer;
  padding: 10px 0 10px 25px;
  border-bottom: 1px solid #000;
}
</style>
