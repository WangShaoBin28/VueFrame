<template>
  <div>
    <el-row>
      <el-button type="primary" @click="bindCount">主要按钮</el-button>
    </el-row>
  </div>
</template>

<script>
  import API from '@/sdks/jssdk-login'

  export default {
    data() {
      return {
        studentCode: '',
        uniqueCode: ''
      }
    },
    methods: {
      bindCount: function () {
        API.user_info_parents_get({studentCode: this.studentCode, uniqueCode: this.uniqueCode}).then(data => {
          console.log('绑定账号: ', data)
          if (data.code === '2000') {
            this.$router.push({name: 'parent_classes_classindex'})
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
