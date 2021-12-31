<template>
  <div class="header">
    <div class="logo"></div>
    <div class="right">
      <span class="icon icon-min" title="最小化" @click="minimizeWin">
        <i class="bi bi-dash"></i>
      </span>
      <span class="icon icon-max" title="最大化" @click="maximizeWin">
        <i class="bi bi-app" style="font-size: 0.8em"></i>
      </span>
      <span class="icon icon-close" title="关闭" @click="closeWin">
        <i class="bi bi-x"> </i>
      </span>
    </div>
  </div>
</template>

<script>
import { remote } from "electron";
window.remote = remote;
console.log(remote);
export default {
  name: "Header",
  methods: {
    minimizeWin() {
      remote.getCurrentWindow().minimize(); // 窗口最小化
    },
    maximizeWin() {
      const win = remote.getCurrentWindow();
      if (win.isMaximized()) {
        // 判断 窗口是否已最大化
        win.restore(); // 恢复原窗口大小
      } else {
        win.maximize(); //最大化窗口
      }
    },
    closeWin() {
      // ipcRenderer.send('close');
      //   remote.getCurrentWindow().close(); // 关闭窗口，也结束了所有进程
    },
  },
};
</script>

<style scoped>
.icon-close {
  /* background-color: #e9a621; */
}
.icon-min {
  /* background-color: #ff3300; */
}
.icon-max {
  /* background-color: #0036a3; */
}
.right {
  /* float: right; */
  color: #d3dae3;

  -webkit-app-region: no-drag;
  /* //自定义元素上添加此样式否自无法操作 */
}
.right .icon {
  display: inline-block;
  line-height: 30px;
  height: 30px;
  width: 30px;
  text-align: center;
  cursor: pointer;
  color: #d3dae3;
}
.right .icon:hover {
  color: #ffffff;
  background-color: #b4b6ba;
}
.right .icon-guanbi:hover {
  background-color: #b10202;
}
.header {
  display: flex;
  color: #ffffff;
  font-size: 30px;
  line-height: 30px;
  height: 30px;
  background-color: #0084ff;
  -webkit-app-region: drag;
  /* //添加此样式 */
}
.logo {
  flex: 1;
  /* width: 30px; */
}
</style>
