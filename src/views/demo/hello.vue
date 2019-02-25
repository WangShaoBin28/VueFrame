<template>

  <div>
    <a-button type="primary" shape="circle" icon="search"></a-button>
    <a-button type="primary" icon="search">Search</a-button>
    <a-button shape="circle" icon="search" />
    <a-button icon="search">Search</a-button>
    <a-button shape="circle" icon="search" />
    <a-button icon="search">Search</a-button>
    <a-button type="dashed" shape="circle" icon="search" />
    <a-button type="dashed" icon="search">Search</a-button>
    <count-to :start-val="0" :end-val="aabbb" :duration="3600"/>
  </div>
<!--<div>-->
    <!--<el-table-->
      <!--:data="tableData"-->
      <!--style="width: 100%">-->
      <!--<el-table-column-->
        <!--prop="date"-->
        <!--label="日期"-->
        <!--width="180">-->
      <!--</el-table-column>-->
      <!--<el-table-column-->
        <!--prop="userName"-->
        <!--label="姓名"-->
        <!--width="180">-->
      <!--</el-table-column>-->
      <!--<el-table-column-->
        <!--prop="address"-->
        <!--label="地址">-->
      <!--</el-table-column>-->
    <!--</el-table>-->
    <!--<el-row>-->
       <!--<el-button @click="bindCount">默认按钮</el-button>-->
    <!--</el-row>-->
    <!--</div>-->
  </template>

<script>
  import API from '@/sdks/jssdk-login'
  import CountTo from 'vue-count-to'

  export default {
    components: { CountTo },
    data() {
      return {
          tableData: [],
        aabbb:88888888

      }
    },
    methods: {
      bindCount: function () {
        API.user_info_parents_get().then(data => {
          console.log('请求成功！: ', data)
          if (data.code === 200) {
            this.tableData=data.content
            // this.$router.push({name: 'demo_hello2'})
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
