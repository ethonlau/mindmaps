<template>
  <div id="app" class="theme-1">
    <loopComponent :data="model"></loopComponent>
    <div class="tip">
      <span>Tab</span>添加子节点
      <span>Enter</span>添加同级节点
      <span>Ctrl + Delete</span>删除当前节点
    </div>
    <div class="clear-btn" @click="clearModel">清空画布</div>
  </div>
</template>

<script>
import loopComponent from './components/loopComponent.vue'

export default {
  name: 'app',
  components: {
    loopComponent
  },
  data () {
    return {
      model: [
        {
          content: "中心主题",
          show: true,
          isCenter: true,
          child: []
        }
      ]
    }
  },
  mounted () {
    this.adjustTransform()
    const el = document.querySelector('ul')
    el.addEventListener('keydown', this.adjustTransform)
    el.addEventListener('mousedown', this.adjustTransform)
  },
  methods: {
    clearModel () {
      this.model = [
        {
          content: "中心主题",
          show: true,
          isCenter: true,
          child: []
        }
      ]
    },
    adjustTransform () {
      const el = document.querySelector('ul')
      if (el.offsetWidth > window.innerWidth) {
        var x = window.innerWidth / 2 + 'px'
      } else {
        x = '50%'
      }
      if (el.offsetHeight > window.innerHeight) {
        var y = window.innerHeight / 2 + 'px'
      } else {
        y = '50%'
      }
      el.style.transform = 'translate(-' + x + ', -' + y + ')'
    }
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;


  > ul {
    position: absolute;
    top: 50%;
    left: 50%;
    margin: 0;
    padding: 60px;
    transition: .2s;
  }

  .tip {
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(255,255,255,0.8);
    padding: 10px;
    color: #333;
    font-size: 12px;

    span {
      padding: 2px 8px;
      margin: 0 5px 0 10px;
      border: 1px solid #eee;
      border-radius: 4px;
      background-color: #f2f2f2;
    }
  }

  .clear-btn {
    position: fixed;
    top: 0;
    right: 0;
    background-color: rgba(255,255,255,0.8);
    padding: 10px 15px;
    font-size: 16px;
    color: #999;
    cursor: pointer;

    &:hover {
      color: #333;
    }
  }
}
.fade-enter-active, .fade-leave-active {
  opacity: 1;
  transition: .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translate3d(-5%, 0, 0);
  transition: .3s;
}
</style>
