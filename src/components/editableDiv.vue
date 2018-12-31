<template>
  <div class="node" :class="[subnode ? 'have-subnode' : 'no-subnode']"
     v-html="innerText"
     :contenteditable="canEdit"
     @focus="isLocked = true"
     @blur="isLocked = false"
     @input="changeText">
  </div>
</template>

<script>
export default {
  name: 'editableDiv',
  props: {
    value: {
      type: String,
      default: ''
    },
    canEdit: {
      type: Boolean,
      default: true
    },
    subnode: {
      type: Boolean
    },
  },
  data(){
    return {
      innerText: this.value,
      isLocked: false
    }
  },
  watch: {
    'value'(){
      if (!this.isLocked && !this.innerText) {
        this.innerText = this.value;
      }
    }
  },
  methods: {
    changeText(){
      this.$emit('input', this.$el.innerHTML);
    }
  }
}
</script>