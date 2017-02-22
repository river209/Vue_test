<template>
<div class="b_wrapperBox"> 
        <topBar></topBar>
        <router-view></router-view>
  </div>
</template>

<script>
import topBar from './topBar.vue';
export default {
  data () {
    return {
      msg: 'null'
    }
  },
  components:{topBar}
}
</script>
