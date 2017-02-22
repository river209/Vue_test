<template>
    <div>
        <div class="b_card pb20">
            <ul class="b_list001">
                <li v-for = "(item,index) in items">
                    <em>{{index+1}}</em>{{item.name}}
                    <a href="#" class="edit"><i></i></a>
                    <div class="btns">
                        <a href="#" class="tel"></a>
                        <a href="#" class="arrived" v-bind:class="{cur:item.status}">已到场</a><a href="#" class="unarrived" v-bind:class="{cur:!item.status}">未到场</a>
                    </div>
                </li>
            </ul>
        </div>
        <div class="b_btnBox">
            <a href="#" class="b_finish">提交信息</a>
        </div>
        </br>
        <ul>
            <li v-for="article in articles">
                {{article.title}}
            </li>
        </ul>
    </div>
</template>
<script>
import Vue from 'vue';


export default {
  data () {
    return {
        msg: 'Welcome to Your Vue.js App',
        items:[
            {name:"杨小桃",status:false},
            {name:"hahah",status:true},
            {name:"bbb",status:false},
            {name:"杨da",status:false},
            {name:"ewhi桃",status:true},
            {name:"桃",status:true},
            {name:"杨桃",status:false},
            {name:"杨桃",status:false}
        ],
        articles:[]
    }
  },
  mounted:function(){
    this.$http.jsonp('http://api.douban.com/v2/movie/top250?count=10',{},{
        headers:{},
        emulateJSON:true
    }).then(function(data){
        this.articles = data.data.subjects
    },function(error){
        console.log(error)
    })
  }
}
</script>