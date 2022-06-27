<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <el-menu :default-openeds="['1','2']">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>用户管理</template>
            <el-menu-item-group>
              <el-menu-item index="1-1">
                <!--name对应的是router里面设置的name，params是参数-->
                <router-link :to="{name:'Manager',params:{id:3}}">管理员</router-link>
              </el-menu-item>
              <el-menu-item index="1-2">
                <router-link to="/user/generalUsers">普通用户</router-link>
              </el-menu-item>
              <el-menu-item index="1-3">
                <router-link to="/goMain1/admin">回到首页</router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-message"></i>数据管理</template>
            <el-menu-item-group>
              <el-submenu index="2-1">
                <template slot="title">公交数据</template>
                <el-menu-item index="2-1-1">站点信息</el-menu-item>
              </el-submenu>
              <el-submenu index="2-2">
                <template slot="title">地铁数据</template>
                <el-menu-item index="2-2-1">站点信息</el-menu-item>
              </el-submenu>
              <el-submenu index="2-3">
                <template slot="title">手机数据</template>
                <el-menu-item index="2-3-1">站点信息</el-menu-item>
              </el-submenu>
              <el-submenu index="2-4">
                <template slot="title">出租数据</template>
                <el-menu-item index="2-4-1">站点信息</el-menu-item>
              </el-submenu>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>用户中心</el-dropdown-item>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>{{ $route.params.name }}</span>
        </el-header>
        <el-main>
          <router-view>

          </router-view>
        </el-main>
      </el-container>
    </el-container>

  </div>
</template>

<script>
export default {
  name: "Main1"
}
</script>

<style scoped>
.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>