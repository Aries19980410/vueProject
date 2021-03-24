<template>
  <div class="container">
    <div class="box-card">
      <div class="login">
        <div class="title">
          <span>{{title}}</span>
          <span>{{desc}}</span>
        </div>
        <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-position="left"
            label-width="80px"
            class="demo-ruleForm"
        >
          <el-form-item label="用户名：">
            <el-input v-model="ruleForm.username" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <!-- <el-form-item label="手机号：">
           <el-input v-model="ruleForm.phone"></el-input>
         </el-form-item> -->
          <el-form-item label="密码：">
            <el-input v-model="ruleForm.password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-button @click="loginSin" type="primary" style="width: 100%;">登录</el-button>
        </el-form>
      </div>
    </div>

  </div>
</template>

<script>
import {login, getUserInfo} from "@/api/user/index";
import {ref} from "vue";
export default {
  name: 'Index',
  data() {
    return {
      ruleForm: {},
      rules: {},
      userId: ''
    };
  },
  setup(){
    const title = ref('xxx系统')
    const desc = ref('这是什么样子的xxxx')
    return{title,desc}
  },
  mounted() {
    // this.getList();
  },
  methods: {
    loginSin() {
      login(this.ruleForm).then((res) => {
        if (res.data.token) {
          this.userId = res.data.userId
          this.$store.state.islogin = true;
          this.$store.state.token = res.data.token;
          this.$router.push({
            path: './index'
          })
          this.userInfo()
        }
      });

    },
    userInfo() {
      getUserInfo(this.userId, this.$store.state.token).then(res => {
        console.log(res)
        this.$store.state.userInfo = res.data
      })
    }
  },
}
</script>
<style lang="scss" scoped>
.container {
  height: 744px;
  background: url("../../assets/bg.png");
  background-size: cover;
  .box-card{
    position: absolute;
    width: 350px;
    height: 300px;
    right: 200px;
    background: #fff;
    border-radius: 15px;
    top: 30%;
    .login{
      padding: 20px 20px;
    }
    .title{
      display: flex;
      flex-direction: column;
      align-items: center;
      span:first-child{
        padding-bottom: 20px;
        font-weight: bold;
        font-size: 18px;
      }
      span:nth-child(2){
        color: #ccc;
        font-size: 12px;
        padding-bottom: 20px;
      }
    }
  }
}

</style>