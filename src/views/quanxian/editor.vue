<template>
	<div class="input">
		<el-form :inline="true" :model="formInline" class="demo-form-inline">
			<div class="input_3">
			  <el-input placeholder="请输入内容" v-model="formInline.user">
			    <template slot="prepend">用户名：</template>
			  </el-input>
			</div>
			<div class="input_3">
			  <el-input placeholder="请输入内容" v-model="formInline.region">
			    <template slot="prepend">手机号码：</template>
			  </el-input>
			</div>
			<div class="input_4">
			 
				
			    <el-select v-model="formInline.select" slot="prepend" placeholder="账号状态" >
			      <el-option label="请选择" value="1"></el-option>
			      <el-option label="启用" value="2"></el-option>
			      <el-option label="停用" value="3"></el-option>
			    </el-select>
			   
			
			</div>
			<div class="input_3">
				<el-form-item>
				    <el-button type="primary" @click="onSubmit">查询</el-button>
				 </el-form-item>
			</div>
		</el-form>
		
		<el-button type="primary" class="xinzeng" @click="dialogXinzengBox = true">新增</el-button>
		
		<el-button type="primary" class="xinzeng1" @click="shuaxin()">刷新</el-button>
		
		<el-dialog title="新增" :visible.sync="dialogXinzengBox" size="small">
				  <el-form :model="EditorForm" label-width="80px" :rules="addFormRules" ref="EditorForm">
				  		<el-form-item label="序号" prop="xuhao">
							<el-input v-model="EditorForm.xuhao" ></el-input>
						</el-form-item>
						<el-form-item label="姓名" prop="name">
							<el-input v-model="EditorForm.name" auto-complete="off"></el-input>
						</el-form-item>
						<el-form-item label="邮箱" prop="email">
							<el-input v-model="EditorForm.email" auto-complete="off"></el-input>
						</el-form-item>
						<el-form-item label="QQ号" prop="qqhao">
							<el-input v-model="EditorForm.qqhao" auto-complete="off"></el-input>
						</el-form-item>
						<el-form-item label="手机号" prop="phone">
							<el-input v-model="EditorForm.phone" auto-complete="off"></el-input>
						</el-form-item>
						<el-form-item label="性别">
							<el-radio-group v-model="EditorForm.sex">
								<el-radio class="radio" :label="1">男</el-radio>
								<el-radio class="radio" :label="0">女</el-radio>
							</el-radio-group>
						</el-form-item>
						<!--<el-form-item label="年龄">
							<el-input-number v-model="EditorForm.age" :min="0" :max="200"></el-input-number>
						</el-form-item>-->
						<el-form-item label="创建日期">
							<el-date-picker type="date" placeholder="选择日期" v-model="EditorForm.date"></el-date-picker>
						</el-form-item>
						
					</el-form>
				  <span slot="footer" class="dialog-footer">
				    <el-button @click="dialogXinzeng (false)">取 消</el-button>
				    <el-button type="primary" @click="dialogXinzeng (true)">确 定</el-button>
				  </span>
		</el-dialog>
		
		<div class="el-table-div">
			<el-table :data="tableData" border style="width: 100%" height="250">
				<el-table-column prop="xuhao" label="序号" width="80"> </el-table-column>
				<el-table-column prop="name" label="用户名" width="150"> </el-table-column>
				<el-table-column prop="phone" label="手机号" width="180"> </el-table-column>
				
				<el-table-column prop="qqhao" label="QQ号" width="180"> </el-table-column>
				<el-table-column prop="email" label="邮箱" width="400"> </el-table-column>
				<el-table-column prop="zhuangtai" label="账号状态" width="180"> </el-table-column>
				
				
				<el-table-column prop="date" label="创建时间" width="300"> </el-table-column>
				<el-table-column label="操作">
				<template scope="scope">
			        <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
			        <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)" >删除</el-button>
	      	    </template>
	      	
				</el-table-column>
			</el-table>
			<!--编辑-->
		  	<el-dialog title="编辑" :visible.sync="dialogVisible" size="small">
					  <el-form :model="EditorForm" label-width="80px" :rules="addFormRules" ref="EditorForm">
							<el-form-item label="序号" prop="xuhao">
								<el-input v-model="EditorForm.xuhao" ></el-input>
							</el-form-item>
							<el-form-item label="姓名" prop="name">
								<el-input v-model="EditorForm.name" auto-complete="off"></el-input>
							</el-form-item>
							<el-form-item label="邮箱" prop="email">
								<el-input v-model="EditorForm.email" auto-complete="off"></el-input>
							</el-form-item>
							<el-form-item label="QQ号" prop="qqhao">
								<el-input v-model="EditorForm.qqhao" auto-complete="off"></el-input>
							</el-form-item>
							<el-form-item label="手机号" prop="phone">
								<el-input v-model="EditorForm.phone" auto-complete="off"></el-input>
							</el-form-item>
							<el-form-item label="性别">
								<el-radio-group v-model="EditorForm.sex">
									<el-radio class="radio" :label="1">男</el-radio>
									<el-radio class="radio" :label="0">女</el-radio>
								</el-radio-group>
							</el-form-item>
							<!--<el-form-item label="年龄">
								<el-input-number v-model="EditorForm.age" :min="0" :max="200"></el-input-number>
							</el-form-item>-->
							<el-form-item label="创建日期">
								<el-date-picker type="date" placeholder="选择日期" v-model="EditorForm.date"></el-date-picker>
							</el-form-item>
							
						</el-form>
					  <span slot="footer" class="dialog-footer">
					    <el-button @click="dialogVisible = false">取 消</el-button>
					    <el-button type="primary" @click="dialogVisible=false">确 定</el-button>
					  </span>
			</el-dialog>
		</div>
		<div class="block">
		  <span class="demonstration">显示第1到6条记录，总共6条记录</span>
		  
		</div>
	</div>
	
	

	
</template>
<script>
export default {
    data() {
      return {
      	
        formInline: {
          user: '',
          region: '',
          select:''
        },
         tableData: [{
          xuhao:'1',
          date: '2016-05-02',
          name: '王小虎',
          sex :"男",
          phone : "13145545316",
          address: '上海市普陀区金沙江路 1518 弄',
          qqhao :"1797022956",
          email :"zliangwen3570@163.com",
          zhuangtai :"禁止"
        }, {
          xuhao :'2',
          date: '2016-05-04',
          name: '王小虎',
          sex :"男",
          phone : "13145545316",
          address: '上海市普陀区金沙江路 1517 弄',
          qqhao :"1797022956",
           email :"zliangwen3570@163.com",
           zhuangtai :"启用"
        }, {
          xuhao :'3',
          date: '2016-05-04',
          name: '王小虎',
          sex :"男",
          phone : "13145545316",
          address: '上海市普陀区金沙江路 1517 弄',
          qqhao :"1797022956",
           email :"zliangwen3570@163.com",
           zhuangtai :"启用"
        }, {
          xuhao :'4',
          date: '2016-05-04',
          name: '王小虎',
          sex :"男",
          phone : "13145545316",
          address: '上海市普陀区金沙江路 1517 弄',
          qqhao :"1797022956",
           email :"zliangwen3570@163.com",
           zhuangtai :"启用"
        }, {
          xuhao :'5',
          date: '2016-05-04',
          name: '王小虎',
          sex :"男",
          phone : "13145545316",
          address: '上海市普陀区金沙江路 1517 弄',
          qqhao :"1797022956",
           email :"zliangwen3570@163.com",
           zhuangtai :"启用"
        }, {
          xuhao :'6',
          date: '2016-05-04',
          name: '王小虎',
          sex :"男",
          phone : "13145545316",
          address: '上海市普陀区金沙江路 1517 弄',
          qqhao :"1797022956",
           email :"zliangwen3570@163.com",
           zhuangtai :"启用"
        }],
        dialogVisible:false,
        dialogXinzengBox : false,

		addFormRules: {
			name: [
				{ required: true, message: '请输入姓名', trigger: 'blur' }
			]
		},
		EditorForm:{
			xuhao:'',
			date:'',
			name:'',
			sex:'',
			age:'',
			address:'',
			xuhao:'',
			email:'',
			phone:''

		},
       
        
       
      }
      
    },
    methods: {
    	
        onSubmit() {
            console.log('submit!');
           
        },
        handleEdit:function(index,rows){//更新数据
		    this.dialogVisible=true;
		    this.EditorForm={
				
				xuhao:rows.xuhao,
				date:rows.date,
				name:rows.name,
				sex:rows.sex,
				age:rows.age,
				address:'',
				qqhao : rows.qqhao,
				email:rows.email,
				phone:rows.phone
			}
		},
		handleDelete(index, rows) {
	        this.tableData.splice(index,1) //删除数据
	    },
		
		dialogXinzeng :function( index){//新增数据
			var that = this;
			if(index == false){
				that.dialogXinzengBox = false;
			}else{
				that.dialogXinzengBox = false;
				console.log(that.tableData)
				console.log(that.EditorForm)
				that.tableData.push(that.EditorForm)
			}
			
			
		},
		shuaxin : function(){//刷新数据
			var count={}
			console.log(this.count)
		}
    }
  }
</script>
<style>
	.el-select {
	    width: 110px;
	  }
	.input{
		padding:20px;
	}
	.input_3{
		width:200px;
		float:left;
		margin-right:10px;
	}
	.input_4{
		width:150px;
		float:left;
	}
	.xinzeng{
		background:none;
		border:1px solid #ddd;
		position: absolute;
		left:200px;
		top:150px;
		color:#989898;
	}
	.xinzeng1{
		background:none;
		border:1px solid #ddd;
		position: absolute;
		right:20px;
		top:150px;
		color:#989898;
	}
	.el-table-div{
		margin-top:130px;
	}
	.el-table th>.cell{
		text-align: center;
	}
	.el-table .cell{
		text-align: center;
	}
	.block {
		padding:20px 0;
		border-bottom: 1px solid #ddd;
	}
	.block .demonstration{
		font-weight: 100;
		color:#666;
		font-size: 14px;
	}
	

  
</style>