<template>
  <div class="home">
      <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名：">
        <el-input v-model="ruleForm.username"></el-input>
      </el-form-item>
       <!-- <el-form-item label="手机号：">
        <el-input v-model="ruleForm.phone"></el-input>
      </el-form-item> -->
      <el-form-item label="密码" >
        <el-input v-model="ruleForm.password"></el-input>
      </el-form-item>
      <el-button @click="loginSin">提交</el-button>
    </el-form>
  </div>
</template>

<script>
import { login,getUserInfo} from "@/api/user/index";
export default {
  name: 'Index',
   data() {
    return {
      ruleForm: {},
      rules: {},
    };
  },
  mounted() {
    // this.getList();
  },
  methods: {
    loginSin() {
      login(this.ruleForm).then((res) => {
        if(res.data.token){
          this.userId = res.data.userId
          this.$store.state.islogin =true;
          this.$store.state.token = res.data.token;
        }
        this.userInfo()
      });
    },
    userInfo(){
      getUserInfo({
        userId:this.userId,
        token:this.$store.state.token 
      }).then(res=>{
        console.log(res)
        this.$store.state.userInfo = res.data 
      })
    }
  },  
}
</script>
