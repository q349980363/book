<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <!-- <Headr></Headr> -->
  <router-view />
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
// import { GetBook, GetBooks } from "../store/TestData";
// import Headr from "./components/Headr.vue";

@Options({
  // components: { Headr },
})
export default class App extends Vue {
  // books = GetBooks();
}
</script>

<style lang="stylus"></style>
