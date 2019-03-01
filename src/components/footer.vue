<template>
  <div @click="hd">
    <p class="card">
      {{text}}
    </p>
  </div>
</template>

<script>
export default {
  props: ['text'],
  methods:{
    hd(){
      this.$emit('click',this.text)
    }
  }
}
</script>

<style>
.card {
  padding: 10px;
}
</style>
