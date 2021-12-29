<template>
  <div class="home">
    <input type="text" class="inp" />
    <p class="book-word">
      <span>书籍</span>
    </p>
       <div class="book">
       <div class="book"></div>
       <p>书名</p>
       </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>

<style lang="stylus">
.inp
  width 80%
  height 30px
</style>
