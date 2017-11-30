

<!--入驻信息1-->

<template>
	<div class="bigBox">
		<div class="boxTitle">
			<div class="boxTitle_center center">
				<span class=" span span1">1</span>
				<span>门店信息</span>
				<span class="span3"> >> </span>
			</div>
			<div class="boxTitle_center">
				<span class="span">2</span>
				<span>资质信息</span>
				<span class="span3"> >> </span>
			</div>
			<div class="boxTitle_center">
				<span class="span">3</span>
				<span>结算信息</span>
				<span class="span3"> >> </span>
			</div>
		</div> 
		<el-form  label-width="90px" :model="formLabelAlign" class="elform">
			  <el-form-item label="店铺名称：">
			    <el-input v-model="formLabelAlign.name" class="elformInput" placeholder="请输入店铺名称"></el-input>
			  </el-form-item>
			  <el-form-item label="联系人：">
			    <el-input v-model="formLabelAlign.region" class="elformInput" placeholder="请输入联系人"></el-input>
			  </el-form-item>
			  <el-form-item label="手机号：">
			    <el-input v-model="formLabelAlign.type" class="elformInput" placeholder="请输入手机号"></el-input>
			  </el-form-item>
			  <el-form-item label="店铺地址：">
				  <el-select v-model="value" placeholder="请选择" style="float: left;">
				    <el-option
				      v-for="item in options"
				      :key="item.value"
				      :label="item.label"
				      :value="item.value">
				    </el-option>
	  			  </el-select>
	  			  <el-select v-model="value1" placeholder="请选择" style="float: left;">
				    <el-option
				      v-for="item in options1"
				      :key="item.value"
				      :label="item.label"
				      :value="item.value">
				    </el-option>
	  			  </el-select>
	  			  <el-select v-model="value2" placeholder="请选择" style="float: left;">
				    <el-option
				      v-for="item in options2"
				      :key="item.value"
				      :label="item.label"
				      :value="item.value">
				    </el-option>
	  			  </el-select>
  			  </el-form-item>
  			  <el-form-item label="详细地址：" >
			    <el-input v-model="formLabelAlign.type" class="elformInput havebutton" placeholder="请输入详细地址" style="width:"></el-input>
			    <el-button>定位坐标</el-button>
			  </el-form-item>
			  <div id="map">地图模块</div>
			  <el-form-item label="店铺logo：">
			    <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList">
					  <el-button size="small" type="primary" style="float:left">点击上传</el-button>
					  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
					  <div style="" slot="tip" class="el-upload__tip">*该标志将被展示给平台用户</div>
					</el-upload>
			  </el-form-item>
			<el-button size="small" type="primary" style="width:200px;height:40px;position: absolute;left:50%">提交并进入下一步</el-button>
			  
		</el-form>

	</div>
</template>
<script>
	export default {
	    data() {
	      return {
	       	value: '',
	       	value1: '',
	       	value2:"",
	       	fileList :[],
	        formLabelAlign: {
	          name: '',
	          region: '',
	          type: ''
	        },
	        options: [{
	          value: '选项1',
	          label: '安徽省'
	        }, {
	          value: '选项2',
	          label: '河北省'
	        }],
	        options1: [{
	          value: '选项1',
	          label: '合肥市'
	        }, {
	          value: '选项2',
	          label: '石家庄市'
	        }],
	        options2: [{
	          value: '选项1',
	          label: '长丰县'
	        }, {
	          value: '选项2',
	          label: '不知道县'
	        }],
	        listQuery:{
	        	page: 1,
        		limit: 10, //每页条数
	        }
	      }
	      
	      
	    },
	    //http://www.easy-mock.com/mock/5a15110cb2301a1fb73f4afb/marie/roletable
	    created(){
	    	
	    },
	    methods:{
	    	handleRemove(file, fileList) {
		    	console.log(file, fileList);
		    },
		    handlePreview(file) {
		        console.log(file);
		    }
	    }
	 }
</script>
<style>
	#map{
		width:83%;
		height:200px;
		background:#ddd;
		margin:0 auto 20px;
	}
	.bigBox{
		width:100%;
		height: 100%;
	}
	.bigBox .boxTitle{
		width:70%;
		margin:0 auto 80px;
		padding:20px;
		
	}
	.bigBox .boxTitle .boxTitle_center{
		width:30%;
		float:left
	}
	.bigBox .boxTitle .boxTitle_center span{
		display: block;
		float:left;
		line-height: 30px;
	}
	.bigBox .boxTitle .center{
		color:#1482F0
	}
	.bigBox .boxTitle .boxTitle_center span.span{
		width:30px;
		height:30px;
		text-align: center;
		border-radius: 50%;
		border:1px solid #ddd;
		margin-left:30%;
		margin-right: 5%;
	}
	
	.bigBox .boxTitle .boxTitle_center span.span1{
		background:#1482F0;
		color:#fff;
	}
	.bigBox .boxTitle .boxTitle_center span.span3{
		margin-left:5%
	}
	.elform{
		
		width:60%;
		margin:20px auto;
	}
	.elformInput{
		width:90%
	}
	.havebutton{
		width:81%
	}
</style>