
<!--菜单管理-->



<template>
	<div class="input1">
		<el-form :inline="true" :model="formInline" class="demo-form-inline">
			<div class="input_3">
			  <el-input placeholder="请输入内容" v-model="formInline.user">
			    <template slot="prepend">菜单名称：</template>
			  </el-input>
			</div>
			
			<div class="input_3">
				<el-form-item>
				    <el-button type="primary" @click="onSubmit">查询</el-button>
				 </el-form-item>
			</div>
		</el-form>
		
		<el-button type="primary" class="xinzeng" @click="dialogXinzengBox = true">新增</el-button>
		
		<el-button type="primary" class="xinzeng1" @click="refresh()">刷新</el-button>
		<!--新增-->
		<el-dialog title="新增" :visible.sync="dialogXinzengBox" size="small">
				  <el-form :model="EditorForm" label-width="80px" :rules="addFormRules" ref="EditorForm">
				  		
						<el-form-item label="菜单名称" prop="menu">
							<el-input v-model="indexFrom.menu" auto-complete="off" style="width:300px"></el-input>
						</el-form-item>
						<el-form-item label="菜单级别" prop="menuLevel">
							<!--<el-input v-model="EditorForm.menuLevel" auto-complete="off"></el-input>-->
							<el-select v-model="value2" placeholder="请选择">
							    <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value" :disabled="item.disabled">
							    </el-option>
							</el-select>
						</el-form-item>
						
						<el-form-item label="创建日期">
							<el-date-picker type="date" placeholder="选择日期" v-model="indexFrom.date"></el-date-picker>
						</el-form-item>
						
					</el-form>
				  <span slot="footer" class="dialog-footer">
				    <el-button @click="dialogXinzeng (false)">取 消</el-button>
				    <el-button type="primary" @click="dialogXinzeng (true)">确 定</el-button>
				  </span>
		</el-dialog>
		
		<div class="el-table-div eldiv">
			<el-table :data="tableData" border style="width: 100%" height="300">
				<el-table-column prop="xuhao" label="序号" width="80" stripe> </el-table-column>
				<el-table-column prop="menu" label="菜单名称" width="430"> </el-table-column>
				<el-table-column prop="menuLevel" label="菜单级别" width="400"> </el-table-column>				
				<el-table-column prop="date" label="创建时间" width="480"> </el-table-column>
				<el-table-column label="操作">
				<template scope="scope">
					<el-button size="small" @click="second()">设置</el-button>
			        <el-button size="small" @click="handleEdit(scope.$index, scope.row)">更新</el-button>
			        <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)" >删除</el-button>
	      	    </template>
	      	
				</el-table-column>
			</el-table>
			<!--更新-->
		  	<el-dialog title="更新" :visible.sync="dialogGengxinBox" size="small">
				  <el-form :model="EditorForm" label-width="80px" :rules="addFormRules" ref="EditorForm">
				  		
						<el-form-item label="菜单名称" prop="menu">
							<el-input v-model="EditorForm.menu" auto-complete="off" style="width:300px"></el-input>
						</el-form-item>
						<el-form-item label="菜单级别" prop="menuLevel">
							<!--<el-input v-model="EditorForm.menuLevel" auto-complete="off"></el-input>-->
							<el-select v-modul="EditorForm.menuLevel" >
							    <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value" :disabled="item.disabled" >
							    </el-option>
							</el-select>
						</el-form-item>
						
						<el-form-item label="创建日期">
							<el-date-picker type="date" placeholder="选择日期" v-model="EditorForm.date"></el-date-picker>
						</el-form-item>
						
					</el-form>
				  <span slot="footer" class="dialog-footer">
				    <el-button @click="dialogGengxin (false)">取 消</el-button>
				    <el-button type="primary" @click="dialogGengxin (true)">确 定</el-button>
				  </span>
			</el-dialog>
		</div>
		<div class="block">
		  <!--<span class="demonstration">显示第1到6条记录，总共6条记录</span>-->
		    <el-pagination
		      @size-change="handleSizeChange"
		      @current-change="handleCurrentChange"
		      :current-page.sync="currentPage3"
		      :page-size="500"
		      layout="prev, pager, next, jumper"
		      :total="1000">
		    </el-pagination>
		  
		</div>
		<!--设置-->
		<el-dialog title="【菜单管理】二级菜单" :visible.sync="dialogSecond" size="small">
				  
				 <el-table :data="tableDataData" border style="width: 100%" height="250">
					<el-table-column prop="xuhao" label="序号" width="70" stripe> </el-table-column>
					<el-table-column prop="menu" label="菜单名称" width="130"> </el-table-column>
					<el-table-column prop="menuLevel" label="菜单级别" width="150"> </el-table-column>	
					<el-table-column prop="Chaining" label="菜单链接" width="150"> </el-table-column>	
					<el-table-column prop="date" label="创建时间" width="180"> </el-table-column>
					<el-table-column label="操作">
					<template scope="scopedata">
						<el-button size="small" @click="second">设置</el-button>
				        <el-button size="small" @click="handleEditData(scopedata.$index, scopedata.row)">更新</el-button>
				        <el-button size="small" type="danger" @click="handleDeleteData(scopedata.$index, scopedata.row)" >删除</el-button>
		      	    </template>
		      	
					</el-table-column>
				</el-table> 
				<div class="block">
				  <!--<span class="demonstration">显示第1到6条记录，总共6条记录</span>-->
				    <el-pagination
				      @size-change="handleSizeChange"
				      @current-change="handleCurrentChange"
				      :current-page.sync="currentPage3"
				      :page-size="500"
				      layout="prev, pager, next, jumper"
				      :total="1000">
				    </el-pagination>
				  
				</div>
		</el-dialog>
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
          date: '2016-05-04',
          menu :"系统管理",
          menuLevel :"一级菜单",
          
        }, {
          xuhao :'2',
          date: '2016-05-04',
          menu :"会员管理",
          menuLevel :"一级菜单"
        }, {
          xuhao :'3',
          date: '2016-05-04',
          menu :"加盟商管理",
          menuLevel :"一级菜单"
        }, {
          xuhao :'4',
          date: '2016-05-04',
          menu :"资讯管理",
          menuLevel :"一级菜单"
        }, {
          xuhao :'5',
          date: '2016-05-04',
          menu :"财务管理",
          menuLevel :"一级菜单"
        }, {
          xuhao :'6',
          date: '2016-05-04',
          menu :"讲师管理",
          menuLevel :"一级菜单"
        }, {
          xuhao :'7',
          date: '2016-05-04',
          menu :"讲师管理",
          menuLevel :"一级菜单"
        }],
        tableDataData:[
          	{
          		xuhao:'1',
          		date: '2016-05-04',
          		menu :"系统管理",
          		menuLevel :"二级菜单",
          		Chaining : "www.baidu.com"
          	},{
          		xuhao:'2',
          		date: '2016-05-04',
          		menu :"系统管理",
          		menuLevel :"二级菜单",
          		Chaining : "www.baidu.com"
          	},
          ],
        dialogVisible:false,
        dialogXinzengBox : false,
		dialogGengxinBox:false,
		dialogSecond : false,
		currentPage3 : 1,
		addFormRules: {
			name: [
				{ required: true, message: '请输入姓名', trigger: 'blur' }
			]
		},
		EditorForm:{
		  xuhao :'',
          date: '',
          menu :"",
          menuLevel :""

		},
       indexFrom:{
       	  xuhao :'',
          date: '',
          menu :"",
          menuLevel :""
       },
        options2: [{
          value: '选项1',
          label: '一级菜单'
        }, {
          value: '选项2',
          label: '二级菜单'
          
        }],
        value2: '',
        freshArray :[]
       
      }
      
    },
    methods: {
    	
        onSubmit() {
            console.log('submit!');
           
        },
        handleEdit:function(index,rows){//更新数据
		    this.dialogGengxinBox=true;
		    this.EditorForm={
				
				xuhao:rows.xuhao,
				date:rows.date,
				menu:rows.menu,
				menuLevel:rows.menuLevel
				
			}
		},
		handleDelete(index, rows) {
	        this.tableData.splice(index,1) //删除数据
	    },
		handleEditData:function(index,rows){//更新数据
		    this.dialogGengxinBox=true;
		    this.EditorForm={
				
				xuhao:rows.xuhao,
				date:rows.date,
				menu:rows.menu,
				menuLevel:rows.menuLevel
				
			}
		},
		handleDeleteData(index, rows) {
	        this.tableDataData.splice(index,1) //删除数据
	    },
		dialogXinzeng :function( index){//新增数据
			var that = this;
			if(index == false){
				that.dialogXinzengBox = false;
			}else{
				that.dialogXinzengBox = false;
				console.log(that.tableData)
				console.log(that.EditorForm)
				that.tableData.push(that.indexFrom)
			}
			
			
		},
		
		refresh : function(){//刷新数据
			
			
		},
		
		dialogGengxin : function(index){
			if(index == false){
				this.dialogGengxinBox = false
			}else{
				this.dialogGengxinBox = false;
				
			}
		},
		second(){
			this.dialogSecond = true
		},
		handleSizeChange(val) {
	        console.log("每页 ${val} 条");
	    },
	    handleCurrentChange(val) {
	        console.log("当前页: ${val}");
	    }
    }
  }
</script>
<style>
	.el-select {
	    width: 110px;
	  }
	.input1{
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
	.eldiv{
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