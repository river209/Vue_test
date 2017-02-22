<template>
    <div id = "topBar">
        <h2 class="b_top">
            <router-link to="/checklins" class="back">{{linesName}}</router-link>
            {{msg}}
            <router-link to="additem" class="edit" v-if="!nolist">添加</router-link>
        </h2>
    </div>
</template>
<script>


export default {
    name: 'topbar',
    data () {
        return {
          msg: '确客管理',
          nolist:false,
          linesName:"线路名称"
        }
    },
    created(){
        console.log('this_is_created_path_'+this.$router.path)
    },
    watch:{




        '$route':'barOption'
    },
    methods:{
       barOption(){

        //console.log('this_is_change_path_'+this.$route)
        const path = this.$route.path;
        if(path.lastIndexOf('additem')> -1){
            this.nolist = true;
            this.linesName = "返回"

        }else{
            this.nolist = false;
            this.linesName = "线路名称"
        }

       } 
    }
}
</script>