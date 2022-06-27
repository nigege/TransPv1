<template>
  <el-container>
    <!--    //暂时什么都不放-->
    <el-header class="el-head">
      <p>Tongji Univercity | College Of Transportation Engineering | TransportXLab</p>
    </el-header>
    <!--    //中间左边是一个循环的图片展示区域，右边是一个登录界面-->
    <el-container class="all-background">
      <!--//图片展示区域,用了区域分割的方式进行了页面布局-->
      <el-aside width="60%" class="el-bodyleft">
        <div class="logo-box">
          <span>努力推动人类交通事业发展</span>
          <el-divider content-position="right">TransportX</el-divider>
        </div>
      </el-aside>
      <!--登录的区域-->
      <el-main class="el-bodyright">
        <el-form ref="form" :model="form" :rules="rules" class="login-box">
          <el-form-item>
            <p class="title">欢迎登录</p>
          </el-form-item>
          <el-form-item label="账号" prop="name">
            <el-input type="text" placeholder="请输入用户名" v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" placeholder="请输入密码" v-model="form.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('form')" class="login-button">登录</el-button>
          </el-form-item>
          <el-form-item class="box-form-item">
            <el-link href="#" target="_blank">忘记密码</el-link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <el-link href="#" target="_blank">注册用户</el-link>
          </el-form-item>
        </el-form>
      </el-main>
    </el-container>
    <!--底部的区域，这三个部分的格式设置，首尾设置一定的高度，中间区域不用，关键在于整体的高度要设置为100%-->
    <el-footer class="el-foot">
      <el-link href="#" target="_blank">关于我们</el-link>
      |
      <el-link href="#" target="_blank">服务条款</el-link>
      |
      <el-link href="#" target="_blank">联系我们</el-link>
      |
      <el-link href="#" target="_blank">帮助中心</el-link>
      |
      TranspotX.All Rights Reserved.
    </el-footer>
  </el-container>

</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        name: '',
        password: ''
      },
      rules: {
        name: [
          {required: true, message: '请输入账号', trigger: 'blur'},
          {min: 5, max: 10, message: '账号长度在5到10个字符', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          {min: 5, max: 10, message: '密码长度在5到10个字符', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    //跳转的操作
    //前面这点只是简单的对前面的用户名和密码规则的验证
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //获取登录状态
          sessionStorage.setItem("isLogin",'true');
          //跳转到main1页
          this.$router.push({name:'Main1',params:{name:this.form.name}});
        } else {
          this.$message.error('请输入正确的用户名和密码');
          return false;
        }
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.login-box {
  width: 320px;
  margin: 140px auto;
  border: 1px solid #a0b1c4;
  padding: 20px;
  border-radius: 10px;
  background-color: white;
}

.box-form-item {
  text-align: center;
}

.login-button {
  width: 320px;
}

.title {
  font-size: 25px;
  text-align: center;
}

.el-head {
  background-color: #eff4fa;
  height: 5%;
  color: #000000;
  text-align: left;
  font-size: 18px;
  font-family: "lucida Grande", Verdana, "Microsoft YaHei";
  word-spacing: 2px;
  color: #0571c1;
}

.el-bodyleft {
  //height: 88%;
  //background: red;
  //float: left;
}

.el-bodyright {
  //width: 20%;
  //height: 88%;
  //background: white;
  //filter: opacity(95%);
}

.logo-box {
  width: 500px;
  margin: 200px auto;
  //border: 1px solid #a0b1c4;
  padding: 50px;
  border-radius: 10px;
  //background-color: white;
  font-size: 80px;
  font-family: 华文行楷;
}

.el-divider__text.is-right {
  font-size: 35px;
  font-family: "Times New Roman";

}

.el-foot {
  background-color: #eff4fa;
  height: 6%;
  color: black;
  font-size: medium;
  text-align: center;
  line-height: 70px;

}

.el-container {
  padding: 0px;
  /*外部间距也是如此设置*/
  margin: 0px;
  /*统一设置高度为100%*/
  height: 100%;
}

.all-background {
  background-color: #f3f2f2;
}


</style>