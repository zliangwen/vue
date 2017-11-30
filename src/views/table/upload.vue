<template>
	
		<el-form  label-width="80px" :model="formLabelAlign" class="app">
			<div class="long">
				<div style="margin-left:35%">
					已注册？
					
						<el-button type="primary" @click="toLogin">登录</el-button>
					
					
				</div>
				
			</div>
			
				<el-form-item label="手机号：">
			        <el-input v-model="formLabelAlign.name" class="input_1" placeholder="输入手机号"></el-input>
			        <el-button type="primary" class="button" @click="onSubmit">发送验证码</el-button>
			    </el-form-item>
			  
			    <el-form-item label="验证码：">
			        <el-input v-model="formLabelAlign.region" class="input_1" placeholder="输入验证码"></el-input>
			    </el-form-item>
			    <el-form-item label="密码：">
			    	<el-input v-model="formLabelAlign.type" class="input_1" placeholder="输入密码"></el-input>
			    </el-form-item>
			    <el-form-item >
			        <el-button type="primary"  @click="moveInto">立即入驻</el-button>
			    </el-form-item>
			    <div style="padding-left:10px">
			  	    <el-checkbox v-model="checked">我已阅读 <a href="#">《惠惠到平台服务协议》</a></el-checkbox>
			    </div>
				
		    
		</el-form>
	
	
</template>
<script>
   export default {
    data() {
      return {
       
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        },
         checked: true
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      moveInto(){
      	console.log("moveInto!")
      },
      toLogin(){
      	this.$router.push({ path: '/login' })
      }
    }
  }
</script>
<style>
	.el-form-item__content{
		margin-left:30%
	}
	
	.app{
		width:50%;
		margin:10% auto;
	}
	.input_1{
		width:30%;
		float:left
	}
	.button{
		float:left;
		margin-left:40px
	}
	
	.long{
		padding:20px 0;
		
	}
	
</style>