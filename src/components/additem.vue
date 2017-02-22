<template>
    <div class="b_wrapperBox" >
        <div class="b_card">
            <h3 class="b_tit client">客户信息</h3>
            <ul class="b_list">
                <li><input type="text" placeholder="请输入客户姓名"><label class="label">姓&emsp;名</label></li>
                <li><input type="text" placeholder="请输入客户手机号"><label class="label">手机号</label></li>
                <li>
                    <div class="inpBox">
                        <input type="radio" name="sex" id="male"><label for="male">男</label>
                        <input type="radio" name="sex" id="female"><label for="female">女</label>
                    </div>
                    <label class="label">性&emsp;别</label>
                </li>
            </ul>
        </div>
        <div class="b_btnBox">
            <a href="#" class="b_finish">确定</a>
        </div>
    </div>
</template>
<script>
export default{
    data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },

}
</script>