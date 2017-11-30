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
			
			<div class="input_3">
				<el-form-item>
				    <el-button type="primary" @click="onSubmit">查询</el-button>
				 </el-form-item>
			</div>
		</el-form>
		
		<el-button type="primary" class="xinzeng" @click="addUser">新增</el-button>
		
		<el-button type="primary" class="xinzeng1" @click="refresh">刷新</el-button>
		
		<el-dialog title="新增" :visible.sync="dialogXinzengBox" size="small">
				  <el-form :model="addFrom" label-width="80px" :rules="addFormRules" ref="addFrom">
				  			<el-form-item label="用户名" prop="userRealName">
								<el-input v-model="addFrom.userRealName" auto-complete="off"></el-input>
							</el-form-item>
							<el-form-item label="手机号码" prop="userMobile">
								<el-input v-model="addFrom.userMobile" auto-complete="off"></el-input>
							</el-form-item>
							<el-form-item label="登录密码" prop="userMima">
								<el-input v-model="addFrom.userMima" auto-complete="off"></el-input>
							</el-form-item>
							<el-form-item label="确认密码" prop="userSureMima">
								<el-input v-model="addFrom.userSureMima" auto-complete="off"></el-input>
							</el-form-item>
							<el-form-item label="真实姓名" prop="userName">
								<el-input v-model="addFrom.userName" auto-complete="off"></el-input>
							</el-form-item>
							<el-form-item label="Email地址" prop="userEmail">
								<el-input v-model="addFrom.userEmail" auto-complete="off"></el-input>
							</el-form-item>
							<el-form-item label="账号状态">
								<el-select  placeholder="请选择" >
								    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
								</el-select>
							</el-form-item>
							<el-form-item label="所属角色">
								<el-radio-group v-model="addFrom">
								    
								    
								</el-radio-group>
							</el-form-item>
							
							
						
					</el-form>
				  <span slot="footer" class="dialog-footer">
				    <el-button @click="dialogXinzeng (false)">取 消</el-button>
				    <el-button type="primary" @click="dialogXinzeng (true,addForm)">确 定</el-button>
				  </span>
		</el-dialog>
		
		<div class="el-table-div">
			<el-table :data="tableData" border style="width: 100%" height="250">
				<el-table-column prop="count" label="序号" width="80" ></el-table-column>
				<el-table-column prop="userName" label="用户名" width="130"> </el-table-column>
				<el-table-column prop="userRealName" label="姓名" width="150"> </el-table-column>
				<el-table-column prop="userMobile" label="手机号" width="180"> </el-table-column>
				
				
				<el-table-column prop="userEmail" label="邮箱" width="400"> </el-table-column>
				<el-table-column prop="userStatus" label="账号状态" width="180"> </el-table-column>
				
				
				<el-table-column prop="updateDate" label="创建时间" width="300"> </el-table-column>
				<el-table-column label="操作">
				<template scope="scope">
					<el-button size="small" @click="resetting(scope.$index, scope.row)">重置</el-button>
			        <el-button size="small" @click="handleEdit(scope.$index,scope.row)">编辑</el-button>
			        <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)" >删除</el-button>
	      	    </template>
	      	
				</el-table-column>
			</el-table>
			<!--编辑-->
		  	<el-dialog title="编辑" :visible.sync="dialogVisible" size="small">
			    <el-form :model="EditorForm" label-width="80px" :rules="addFormRules" ref="EditorForm">
					<el-form-item label="用户名" prop="userName">
						<el-input v-model="EditorForm.userName" auto-complete="off" :disabled="true"></el-input>
					</el-form-item>
					<el-form-item label="姓名" prop="userRealName">
						<el-input v-model="EditorForm.userRealName" auto-complete="off" ></el-input>
					</el-form-item>
					<el-form-item label="手机号" prop="userMobile">
						<el-input v-model="EditorForm.userMobile" auto-complete="off"></el-input>
					</el-form-item>
					<el-form-item label="Email地址">
						<el-input v-model="EditorForm.userEmail" ></el-input>
					</el-form-item>
					<el-form-item label="账号状态">
						<el-select v-model="EditorForm" placeholder="请选择" >
						    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="所属角色">
					   
					</el-form-item>
				</el-form>
			  <span slot="footer" class="dialog-footer">
			    <el-button @click="dialogVisible = false">取 消</el-button>
			    <el-button type="primary" @click="dialogVisible=false">确 定</el-button>
			  </span>
			</el-dialog>
		</div>
		<div class="block page-div">
	      <el-pagination
	              @size-change="handleSizeChange"
	              @current-change="handleCurrentChange"
	              current-page.sync="listQuery.page"
	              :page-sizes="[10, 20, 30, 40]"
	              :page-size="listQuery.limit"
	              layout="total, sizes, prev, pager, next, jumper"
	              :total="total">
	      </el-pagination>
	    </div>
	</div>
	
	

	
</template>
<script>
	import { isvalidUsername } from '@/utils/validate'
export default {
    data() {
      return {
      	
        formInline: {
          user: '',
          region: ''
         
        },
        total:null,
        loading:true,
        tableData: [],
        dialogVisible:false,
        dialogXinzengBox : false,
		radio:'',
		addFormRules: {
			name: [
				{ required: true, message: '请输入姓名', trigger: 'blur' }
			]
		},
		EditorForm:{
			
		},
       	addFrom:{
			
			userRealName:'',
			userMobile:'',
			userEmail:'',
			userName:'',
			userMima:'',
			userSureMima:'',
			radioList : [],
			
		},
		listQuery:{
			pageSize:10,
			pageId:1
		},
        radio1:3,
		options: [{
          value: '01',
          label: '启用'
        }, {
          value: '02',
          label: '禁止'
        }],
        value:'',
        
       
      }
      
    },
    created() {
	    this.getPersonnelList();
	 },
    methods: {
    	
        onSubmit() {//查询
           
        		
	            var that = this;
	            that.service({
	           		url : '/sys/operateuser/listData',
	           		method:'post',
	           		data:{
	           			pageSize :10,
	           			pageId:1,
	           			menuNameSearch : that.formInline.user,
	           			userMobileSearch:that.formInline.region
	           			
	           		}
	            }).then(function(response){
	           		that.tableData = response.data.rows;
	           		console.log(response.data)
	            }).catch(function(data){
	           	console.log(data)
	            })
        	
           
        },
        handleEdit:function(index,rows){//编辑数据
        	var that=this;
		    that.dialogVisible=true;
		    that.service({
		    	url:"/sys/operateuser/update",
		    	method:"post",
		    	data:{
		    		id:rows.id
		    	}
		    }).then(function(response){
		    	
		    	that.EditorForm = response.data
		    	console.log(that.EditorForm)
		    }).catch(function(data){
		    	
		    })
		   
		},
		handleDelete(index, rows) {
			
	        this.tableData.splice(index,1) //删除数据
	    },
		
		dialogXinzeng :function( index,rows){//新增数据
			var that = this;
			if(index == false){
				that.dialogXinzengBox = false;
			}else{
				that.dialogXinzengBox = false;
				
			}
			
			
		},
		refresh : function(){//刷新数据
			this.getPersonnelList();
		},
		getPersonnelList (){//获取菜单数据
			console.log(this.listQuery)
			var that = this;
	    	that.service({                     //不走store,直接写
				url: '/sys/operateuser/listData',
			 	method: 'post',
			 	data:this.listQuery
			 }).then(function(response){
			 	
			 	console.log(response.data)
			 	that.loading=false;
			 	//that.tableData = response.data.rows;
			 	for(var i=0;i<response.data.rows.length;i++){
			 		var index = i+1;
			 		response.data.rows[0].count = index;
			 		
			 	}
			 	console.log(response.data.rows)
			 	that.tableData = response.data.rows;
			 	console.log(that.listQuery)
			 }).catch(function(data){
			 	
			 	console.log(data)
			 })
		},
		handleSizeChange(val) {  //条数改变
			this.listQuery.pageSize = val;
			console.log(val)
			
			
			this.getPersonnelList()
	      	console.log(this.listQuery)
	    },
	    handleCurrentChange(val) {    //页数改变
	    	
	     	this.listQuery.pageId = val;
	     	console.log(this.listQuery)
			this.getPersonnelList()
	    },
	
		resetting(index,rows){//重置密码
			console.log(rows);
			var that = this;
		    that.$confirm('是否重置密码?', '提示', {
	          confirmButtonText: '确定',
	          cancelButtonText: '取消',
	          type: 'warning'
	        }).then(() => {
	        	console.log()
	        	that.service({
					url:"/sys/operateuser/resetPassword",
					method:"post",
					data:{
						id:rows.id
					}
				}).then(function(response){
					console.log("!!!")
					that.$message({
			            type: 'success',
			            message: '重置成功!',
			        });
				}).catch(function(data){
					
				})
	        }).catch(() => {
	          that.$message({
	            type: 'info',
	            message: '已取消'
	          });          
	        });
			
		},
    
    	select(){
    		console.log(111)
    	},
    	addUser(){
    		var that = this;
    		that.dialogXinzengBox = true;
    		that.service({
    			url:"/sys/operateuser/add",
    			method:"post"
    		}).then(function(response){
    			console.log(response)
    			that.addFrom.radioList = response.data
    			console.log(that.radioList)
    		}).catch(function(data){
    			
    		})
    	},
    	
    	
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