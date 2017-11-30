<!--
	作者：zliangwen3570@163.com
	时间：2017-11-23
	描述：入驻信息2
-->

<template>
	<div class="bigBox">
		<div class="boxTitle">
			<div class="boxTitle_center center">
				<span class=" span span1">1</span>
				<span>门店信息</span>
				<span class="span3"> >> </span>
			</div>
			<div class="boxTitle_center center">
				<span class="span span1">2</span>
				<span>资质信息</span>
				<span class="span3"> >> </span>
			</div>
			<div class="boxTitle_center">
				<span class="span">3</span>
				<span>结算信息</span>
				<span class="span3"> >> </span>
			</div>
		</div> 
		<el-form  label-width="230px" :model="formLabelAlign" class="elform">
			<div style="padding-bottom:20px;border-bottom: 1px solid #ddd;">
				<el-form-item label="*法人姓名：">
				    <el-input v-model="formLabelAlign.name" class="elformInput" placeholder="请输入法人姓名"></el-input>
				  </el-form-item>
				  <el-form-item label="*法人身份证号：">
				    <el-input v-model="formLabelAlign.region" class="elformInput" placeholder="请输入法人身份证号"></el-input>
				  </el-form-item>
				  <el-form-item label="*身份证正反面：">
				    <el-upload
					  class="avatar-uploader"
					  action="https://jsonplaceholder.typicode.com/posts/"
					  :show-file-list="false"
					  :on-success="handleAvatarSuccess"
					  :before-upload="beforeAvatarUpload">
					  <img v-if="imageUrl" :src="imageUrl" class="avatar">
					  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
					</el-upload>
					<el-upload
					  class="avatar-uploader marginLeft30"
					  action="https://jsonplaceholder.typicode.com/posts/"
					  :show-file-list="false"
					  :on-success="handleAvatarSuccess1"
					  :before-upload="beforeAvatarUpload1">
					  <img v-if="imageUrl1" :src="imageUrl1" class="avatar">
					  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
					</el-upload>
					
				  </el-form-item>
				  <div slot="tip" class="el-upload__tip" style="padding-left:14%">*要求：使用身份证原件拍照，证件文字清晰</div>
			</div>
			  <!--营业执照-->
			<div style="padding-bottom:20px;border-bottom: 1px solid #ddd;margin-top:60px">
				 
				  <el-form-item label="*营业执照：">
				    <el-upload
					  class="avatar-uploader"
					  action="https://jsonplaceholder.typicode.com/posts/"
					  :show-file-list="false"
					  :on-success="handleAvatarSuccess"
					  :before-upload="beforeAvatarUpload">
					  <img v-if="imageUrl" :src="imageUrl" class="avatar">
					  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
					</el-upload>
					
					
				  </el-form-item>
				  <div slot="tip" class="el-upload__tip" style="padding-bottom: 20px;padding-left:14%">*要求：使用证件原件拍照，证件文字清晰</div>
				    <el-form-item label="*营业执照名称：">
					    <el-input v-model="formLabelAlign.name" class="elformInput" placeholder="请输入营业执照名称"></el-input>
					</el-form-item>
					<el-form-item label="*营业执照编号/注册码：">
					    <el-input v-model="formLabelAlign.region" class="elformInput" placeholder="请输入营业执照编号/注册码"></el-input>
					</el-form-item>
					<el-form-item label="*营业执照地址：">
					    <el-input v-model="formLabelAlign.region" class="elformInput" placeholder="请输入营业执照地址"></el-input>
					</el-form-item>
					<el-form-item label="*营业执照有效期至：">
					    <el-date-picker
					      v-model="value1"
					      type="date"
					      placeholder="选择日期"
					      :picker-options="pickerOptions0">
					    </el-date-picker>
					</el-form-item>
			</div> 
			<!--药品经营许可-->
			<div style="padding-bottom:20px;border-bottom: 1px solid #ddd;margin-top:60px">
				 
				  <el-form-item label="*药品经营许可证：">
				    <el-upload
					  class="avatar-uploader"
					  action="https://jsonplaceholder.typicode.com/posts/"
					  :show-file-list="false"
					  :on-success="handleAvatarSuccess"
					  :before-upload="beforeAvatarUpload">
					  <img v-if="imageUrl" :src="imageUrl" class="avatar">
					  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
					</el-upload>
					
					
				  </el-form-item>
				  <div slot="tip" class="el-upload__tip" style="padding-bottom: 20px;padding-left:14%">*要求：使用证件原件拍照，证件文字清晰</div>
				    <el-form-item label="*许可证件名称：">
					    <el-input v-model="formLabelAlign.name" class="elformInput" placeholder="请输入许可证件名称"></el-input>
					</el-form-item>
					<el-form-item label="*许可证件编号：">
					    <el-input v-model="formLabelAlign.region" class="elformInput" placeholder="请输入许可证件编号"></el-input>
					</el-form-item>
					<el-form-item label="*许可证件地址：">
					    <el-input v-model="formLabelAlign.region" class="elformInput" placeholder="请输入许可证件地址"></el-input>
					</el-form-item>
					<el-form-item label="*许可证件有效期至：">
					    <el-date-picker
					      v-model="value1"
					      type="date"
					      placeholder="选择日期"
					      :picker-options="pickerOptions0">
					    </el-date-picker>
					</el-form-item>
			</div>
			<!--
            	执业药师资格证
            -->
			<div style="padding-bottom:20px;border-bottom: 1px solid #ddd;margin-top:60px">
				 
				  <el-form-item label="*执业药师资格证：">
				    <el-upload
					  class="avatar-uploader"
					  action="https://jsonplaceholder.typicode.com/posts/"
					  :show-file-list="false"
					  :on-success="handleAvatarSuccess"
					  :before-upload="beforeAvatarUpload">
					  <img v-if="imageUrl" :src="imageUrl" class="avatar">
					  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
					</el-upload>
					
					
				  </el-form-item>
				  <div slot="tip" class="el-upload__tip" style="padding-bottom: 20px;padding-left:14%">*要求：使用证件原件拍照，证件文字清晰</div>
				    <el-form-item label="*证件名称：">
					    <el-input v-model="formLabelAlign.name" class="elformInput" placeholder="请输入证件名称"></el-input>
					</el-form-item>
					<el-form-item label="*证件编号：">
					    <el-input v-model="formLabelAlign.region" class="elformInput" placeholder="请输入证件编号"></el-input>
					</el-form-item>
					<el-form-item label="*证件地址：">
					    <el-input v-model="formLabelAlign.region" class="elformInput" placeholder="请输入证件地址"></el-input>
					</el-form-item>
					<el-form-item label="*证件有效期至：">
					    <el-date-picker
					      v-model="value1"
					      type="date"
					      placeholder="选择日期"
					      :picker-options="pickerOptions0">
					    </el-date-picker>
					</el-form-item>
			</div>
			
			<!--
            	作者：zliangwen3570@163.com
            	时间：2017-11-23
            	描述：药品经营质量管理规范认证证书
            -->
            <div style="padding-bottom:20px;border-bottom: 1px solid #ddd;margin-top:60px">
				 
				  <el-form-item label="*药品经营质量管理规范认证证书：">
				    <el-upload
					  class="avatar-uploader"
					  action="https://jsonplaceholder.typicode.com/posts/"
					  :show-file-list="false"
					  :on-success="handleAvatarSuccess"
					  :before-upload="beforeAvatarUpload">
					  <img v-if="imageUrl" :src="imageUrl" class="avatar">
					  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
					</el-upload>
					
					
				  </el-form-item>
				  <div slot="tip" class="el-upload__tip" style="padding-bottom: 20px;padding-left:14%">*要求：使用证件原件拍照，证件文字清晰</div>
				    <el-form-item label="*证件名称：">
					    <el-input v-model="formLabelAlign.name" class="elformInput" placeholder="请输入证件名称"></el-input>
					</el-form-item>
					<el-form-item label="*证件编号：">
					    <el-input v-model="formLabelAlign.region" class="elformInput" placeholder="请输入证件编号"></el-input>
					</el-form-item>
					<el-form-item label="*证件地址：">
					    <el-input v-model="formLabelAlign.region" class="elformInput" placeholder="请输入证件地址"></el-input>
					</el-form-item>
					<el-form-item label="*证件有效期至：">
					    <el-date-picker
					      v-model="value1"
					      type="date"
					      placeholder="选择日期"
					      :picker-options="pickerOptions0">
					    </el-date-picker>
					</el-form-item>
			</div>
			
			<!--
            	作者：zliangwen3570@163.com
            	时间：2017-11-23
            	描述：执业医师资格证
            -->
            
            <div style="padding-bottom:20px;border-bottom: 1px solid #ddd;margin-top:60px">
				 
				  <el-form-item label="*执业医师资格证：">
				    <el-upload
					  class="avatar-uploader"
					  action="https://jsonplaceholder.typicode.com/posts/"
					  :show-file-list="false"
					  :on-success="handleAvatarSuccess"
					  :before-upload="beforeAvatarUpload">
					  <img v-if="imageUrl" :src="imageUrl" class="avatar">
					  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
					</el-upload>
					
					
				  </el-form-item>
				  <div slot="tip" class="el-upload__tip" style="padding-bottom: 20px;padding-left:14%">*要求：使用证件原件拍照，证件文字清晰</div>
				    <el-form-item label="*证件名称：">
					    <el-input v-model="formLabelAlign.name" class="elformInput" placeholder="请输入证件名称"></el-input>
					</el-form-item>
					<el-form-item label="*证件编号：">
					    <el-input v-model="formLabelAlign.region" class="elformInput" placeholder="请输入证件编号"></el-input>
					</el-form-item>
					<el-form-item label="*证件地址：">
					    <el-input v-model="formLabelAlign.region" class="elformInput" placeholder="请输入证件地址"></el-input>
					</el-form-item>
					<el-form-item label="*证件有效期至：">
					    <el-date-picker
					      v-model="value1"
					      type="date"
					      placeholder="选择日期"
					      :picker-options="pickerOptions0">
					    </el-date-picker>
					</el-form-item>
			</div>
			
			<!--
            	作者：zliangwen3570@163.com
            	时间：2017-11-23
            	描述：医疗器械经营许可证
            -->
            <div style="padding-bottom:20px;border-bottom: 1px solid #ddd;margin-top:60px">
				 
				  <el-form-item label="*医疗器械经营许可证：">
				    <el-upload
					  class="avatar-uploader"
					  action="https://jsonplaceholder.typicode.com/posts/"
					  :show-file-list="false"
					  :on-success="handleAvatarSuccess"
					  :before-upload="beforeAvatarUpload">
					  <img v-if="imageUrl" :src="imageUrl" class="avatar">
					  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
					</el-upload>
					
					
				  </el-form-item>
				  <div slot="tip" class="el-upload__tip" style="padding-bottom: 20px;padding-left:14%">*要求：使用证件原件拍照，证件文字清晰</div>
				    <el-form-item label="*证件名称：">
					    <el-input v-model="formLabelAlign.name" class="elformInput" placeholder="请输入证件名称"></el-input>
					</el-form-item>
					<el-form-item label="*证件编号：">
					    <el-input v-model="formLabelAlign.region" class="elformInput" placeholder="请输入证件编号"></el-input>
					</el-form-item>
					<el-form-item label="*证件地址：">
					    <el-input v-model="formLabelAlign.region" class="elformInput" placeholder="请输入证件地址"></el-input>
					</el-form-item>
					<el-form-item label="*证件有效期至：">
					    <el-date-picker
					      v-model="value1"
					      type="date"
					      placeholder="选择日期"
					      :picker-options="pickerOptions0">
					    </el-date-picker>
					</el-form-item>
			</div>
           
           
           <!--
           	作者：zliangwen3570@163.com
           	时间：2017-11-23
           	描述：食品卫生许可证
           -->
           <div style="padding-bottom:20px;border-bottom: 1px solid #ddd;margin-top:60px">
				 
				  <el-form-item label="*食品卫生许可证：">
				    <el-upload
					  class="avatar-uploader"
					  action="https://jsonplaceholder.typicode.com/posts/"
					  :show-file-list="false"
					  :on-success="handleAvatarSuccess"
					  :before-upload="beforeAvatarUpload">
					  <img v-if="imageUrl" :src="imageUrl" class="avatar">
					  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
					</el-upload>
					
					
				  </el-form-item>
				  <div slot="tip" class="el-upload__tip" style="padding-bottom: 20px;padding-left:14%">*要求：使用证件原件拍照，证件文字清晰</div>
				    <el-form-item label="*证件名称：">
					    <el-input v-model="formLabelAlign.name" class="elformInput" placeholder="请输入证件名称"></el-input>
					</el-form-item>
					<el-form-item label="*证件编号：">
					    <el-input v-model="formLabelAlign.region" class="elformInput" placeholder="请输入证件编号"></el-input>
					</el-form-item>
					<el-form-item label="*证件地址：">
					    <el-input v-model="formLabelAlign.region" class="elformInput" placeholder="请输入证件地址"></el-input>
					</el-form-item>
					<el-form-item label="*证件有效期至：">
					    <el-date-picker
					      v-model="value1"
					      type="date"
					      placeholder="选择日期"
					      :picker-options="pickerOptions0">
					    </el-date-picker>
					</el-form-item>
			</div>
			
			<!--
            	作者：zliangwen3570@163.com
            	时间：2017-11-23
            	描述：健康证
            -->
            
            <div style="padding-bottom:20px;margin-top:60px">
				 
				  <el-form-item label="*健康证：">
				    <el-upload
					  class="avatar-uploader"
					  action="https://jsonplaceholder.typicode.com/posts/"
					  :show-file-list="false"
					  :on-success="handleAvatarSuccess"
					  :before-upload="beforeAvatarUpload">
					  <img v-if="imageUrl" :src="imageUrl" class="avatar">
					  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
					</el-upload>
					
					
				  </el-form-item>
				  <div slot="tip" class="el-upload__tip" style="padding-bottom: 20px;padding-left:14%">*要求：使用证件原件拍照，证件文字清晰</div>
				    <el-form-item label="*证件名称：">
					    <el-input v-model="formLabelAlign.name" class="elformInput" placeholder="请输入证件名称"></el-input>
					</el-form-item>
					<el-form-item label="*证件编号：">
					    <el-input v-model="formLabelAlign.region" class="elformInput" placeholder="请输入证件编号"></el-input>
					</el-form-item>
					<el-form-item label="*证件地址：">
					    <el-input v-model="formLabelAlign.region" class="elformInput" placeholder="请输入证件地址"></el-input>
					</el-form-item>
					<el-form-item label="*证件有效期至：">
					    <el-date-picker
					      v-model="value1"
					      type="date"
					      placeholder="选择日期"
					      :picker-options="pickerOptions0">
					    </el-date-picker>
					</el-form-item>
			</div>
			<div style="padding: 20px 30%">
				<el-button>上一步</el-button>
				<el-button>提交并进入下一步</el-button>
			</div>
			
		</el-form>
		
	</div>
</template>
<script>
	export default {
	    data() {
	      return {
	      	imageUrl: '',
	      	imageUrl1: '',
	       	value: '',
	       	value1: '',
	       	value2:"",
	       	fileList :[],
	        formLabelAlign: {
	          name: '',
	          region: '',
	          type: ''
	        },
	      
	        
	      }
	      
	      
	    },
	    //http://www.easy-mock.com/mock/5a15110cb2301a1fb73f4afb/marie/roletable
	    created(){
	    	
	    },
	    methods: {
	      handleAvatarSuccess(res, file) {
	        this.imageUrl = URL.createObjectURL(file.raw);
	      },
	      handleAvatarSuccess1(res, file) {
	        this.imageUrl1 = URL.createObjectURL(file.raw);
	      },
	      beforeAvatarUpload(file) {
	        const isJPG = file.type === 'image/jpeg';
	        const isLt2M = file.size / 1024 / 1024 < 2;
	
	        if (!isJPG) {
	          this.$message.error('上传头像图片只能是 JPG 格式!');
	        }
	        if (!isLt2M) {
	          this.$message.error('上传头像图片大小不能超过 2MB!');
	        }
	        return isJPG && isLt2M;
	      },
	      beforeAvatarUpload1(file) {
	        const isJPG = file.type === 'image/jpeg';
	        const isLt2M = file.size / 1024 / 1024 < 2;
	
	        if (!isJPG) {
	          this.$message.error('上传头像图片只能是 JPG 格式!');
	        }
	        if (!isLt2M) {
	          this.$message.error('上传头像图片大小不能超过 2MB!');
	        }
	        return isJPG && isLt2M;
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
	.avatar-uploader{
		float:left
	}
	.marginLeft30{
		margin-left:30px;
	}
	.avatar-uploader .el-upload {
	    border: 1px dashed #d9d9d9;
	    border-radius: 6px;
	    cursor: pointer;
	    position: relative;
	    overflow: hidden;
	  }
	  .avatar-uploader .el-upload:hover {
	    border-color: #20a0ff;
	  }
	  .avatar-uploader-icon {
	    font-size: 28px;
	    color: #8c939d;
	    width: 220px;
	    height: 158px;
	    line-height: 158px;
	    text-align: center;
	  }
	  .avatar {
	    width: 220px;
	    height: 158px;
	    display: block;
	  }
</style>