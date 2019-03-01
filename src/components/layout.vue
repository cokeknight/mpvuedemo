<template>
  <div>
    <div>
      <slot/>
    </div>
    <FooterX text="看这里" @click="sasas">12</FooterX>

    <card2 v-model="card2f"/>
  </div>
</template>

<script>
import FooterX from '@/components/footer'
import card2 from '@/components/card2'
export default {
  components:{
    FooterX,
    card2
  },
  data:function(){
    return {
      card2f: false
    }
  },
  props: ['text'],
  methods:{
   sasas: function () {
     this.card2f = true
   }
  },
  mounted(){
    // this.$bus.$on('pop',()=>{
    //   console.log('mounted')
    //   this.card2f = true
    // })
  }
}
</script>

<style>
.card {
  padding: 10px;
}
</style>
