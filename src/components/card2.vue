<template>
  <div class="popbox" v-if="show">
    <div class="mask" @click="close"></div>
    <div class="content">
      你好
    </div>

  </div>
</template>

<script>
export default {
  props: ['text','value'],
  data: function(){
    return {
      show: false
    }
  },
  watch:{
    value:function(val){
      this.show = val
    }
  },
  methods:{
    close(){
      debugger
      this.show = false
      this.$emit('input',false)
    },
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
.popbox{

}
.mask{
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background:black;
  z-index: 99999;
}
</style>
