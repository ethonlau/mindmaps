<style lang="scss">
  ul {
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  li {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  .theme-1 {
    > ul > li {
      border: none;

      &:first-child:before, &:last-child:before {
        width: 0;
      }

      > .node-wrap > .node:before {
        width: 0;
      }
    }

    > ul > li:first-child {
      > .node-wrap > .delete-btn {
        display: none;
      }

      > .node-wrap > .node {
        min-width: 64px;
        text-align: center;
      }
    }

    li {
      position: relative;
      border-left: 1px solid #aaa;
      padding-left: 8px;

      &:first-child, &:last-child {
        border: none;

        &:before {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          width: 1px;
          height: 50%;
          background-color: #aaa;
        }
      }

      &:first-child {
        &:before {
          top: 50%;
        }
      }

      &:last-child {
        &:before {
          top: 0;
        }
      }

      &:only-child {
        &:before {
          width: 0;
        }
      }
    }

    .node-wrap {
      position: relative;

      .node {
        position: relative;
        margin: 4px 8px 4px 0;
        padding: 5px 12px;
        background-color: #E8FAF9;
        outline-color: #A0D5D2;
        border: 1px solid #A0D5D2;
        border-radius: 4px;
        color: #025652;

        &:before {
          content: '';
          position: absolute;
          top: 50%;
          left: -9px;
          transform: translateY(-50%);
          width: 8px;
          height: 1px;
          background-color: #aaa;
        }

        &.have-subnode {
          &:after {
            content: '';
            position: absolute;
            top: 50%;
            right: -9px;
            transform: translateY(-50%);
            width: 8px;
            height: 1px;
            background-color: #aaa;
          }
        }
      }

      .delete-btn {
        position: absolute;
        top: -5px;
        right: -2px;
        border: none;
        background-color: transparent;
        cursor: pointer;
        opacity: 0;
        outline: none;

        &:hover {
          opacity: 1 !important;
        }
      }

      .show-or-hide {
        position: absolute;
        right: 1px;
        top: 50%;
        transform: translateY(-50%);
        width: 16px;
        height: 16px;
        line-height: 1;
        text-align: center;
        padding: 0;
        border-radius: 8px;
        cursor: pointer;
        color: transparent;
        border-color: transparent;
        background-color: transparent;
        outline: none;

        &:hover {
          color: #333 !important;
          border-color: #999 !important;
          background-color: white !important;
        }
      }

      .create-subnode {
        position: absolute;
        padding: 2px 8px;
        right: -26px;
        top: 50%;
        transform: translateY(-50%);
        background-color: #E8FAF9;
        border: 1px solid #A0D5D2;
        border-radius: 4px;
        cursor: pointer;
        opacity: 0;
        outline: none;

        &:hover {
          opacity: 1 !important;
        }

        &:before {
          content: '';
          position: absolute;
          top: 50%;
          left: -9px;
          transform: translateY(-50%);
          width: 8px;
          height: 1px;
          background-color: #aaa;
        }
      }

      &:hover {
        .delete-btn, .create-subnode {
          opacity: 0.4;
        }

        .show-or-hide {
          color: #999;
          border-color: #eee;
          background-color: white;
        }
      }
    }
  }
</style>

<template>
  <ul>
    <template v-for="(item,index) in data">
      <li :key="index" :class="[ {'center' : item.isCenter} ]">
        <div class="node-wrap">
          <editableDiv v-model="item.content"
                       v-on:delete-node="deleteItem(index)"
                       :subnode="item.child.length > 0 ? true : false"
                       @keyup.tab.native="addSubItem($event, item)"
                       @keyup.enter.native="addItem($event)"
                       @keyup.ctrl.delete.native="deleteItem(index)">
          </editableDiv>
          <button class="delete-btn" @click="deleteItem(index)">×</button>
          <button v-if="item.child.length == 0"
                class="create-subnode"
                @click="addSubItem($event, item)">
            +
          </button>
          <button v-if="item.child.length > 0" class="show-or-hide" @click="showOrHide(item)">
            <template v-if="item.show">-</template>
            <template v-else>+</template>
          </button>
        </div>
        <transition name="fade">
          <loopComponent v-if="item.show && item.child"
                         :data="item.child">
          </loopComponent>
        </transition>
      </li>
    </template>
  </ul>
</template>

<script>
import editableDiv from './editableDiv.vue'

export default {
  name: 'loopComponent',
  props: ['data'],
  components: {
    editableDiv
  },
  methods: {
    deleteItem(index) {
      this.data.splice(index, 1)
    },
    addSubItem(event, item) {
      item.child.push({
        content: "",
        show: true,
        child: []
      })
      const el = event.currentTarget.parentElement.parentElement
      this.$nextTick(() => {
        el.querySelector("li:last-child").querySelector(".node").focus()
      })
    },
    addItem(event) {
      this.data.push({
        content: "",
        show: true,
        child: []
      })
      const el = event.currentTarget.parentElement.parentElement
      this.$nextTick(() => {
        el.parentElement.lastElementChild.querySelector(".node").focus()
      })
    },
    showOrHide(item) {
      item.show = !item.show
    },
  },
  mounted () {
    window.addEventListener('keydown', event => {
      if (event.keyCode === 9 || event.keyCode === 13 || event.keyCode === 17) {
        event.preventDefault()
      }
    })
  }
}
</script>