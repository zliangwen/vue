<template>
  <div>
    <p>3</p>
  </div>
</template>

<script>

export default {
  data() {
    return {
      
    }
  },
  created() {
   
  },
  created(){
    	this.getList()
    },
  methods: {
    getList : function(){
			var _serf = this
			_serf.service({
				url :'/tablelist',
				data : _serf.listQurey,
				method :"post",
				
			}).then(function(response){
				console.log(response.data)
				_serf.tableData = response.data;
				_serf.total=response.total;
       			_serf.loading=false
			}).catch(function(data){
				console.log(data)
			})
		}
  }
}
</script>
