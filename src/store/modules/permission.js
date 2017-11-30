import { constantRouterMap} from '@/router'

/*** ͨ��meta.role�ж��Ƿ��뵱ǰ�û�Ȩ��ƥ��* @param roles* @param route*/
// function hasPermission(roles, route) {
//   //console.log(route.meta.role)
//   //console.log(roles.length)   //roles�û���ӦȨ��
//   var roleArr=[];               //������洢�û��˵�Ȩ��
//   var childrenArr=[]            //�洢�����˵�Ȩ��
//   for(var i=0;i<roles.length;i++){
//   	roleArr.push(roles[i].menuList)
//   }
//   for(var i=0;i<roles.length;i++){
//   	childrenArr.push(roles[i].childList)
//   }
//   console.log(route)
//   // if(route.children){
//   // 	console.log(route.children)
//   // }
// 	if(route.meta && route.meta.role && route.redirect){ //���·����������meta��ǩ����ӵ��role������
//     //console.log(roles.indexOf(route.meta.role) >= 0)
//     //return route.meta.role.indexOf(roles) >= 0  �жϽ�ɫ
//     console.log(route)
//     return  roleArr.indexOf(route.meta.role) >= 0
//   }
//   else if(route.child){
//   	 console.log(childrenArr.indexOf(route.meta.role) >= 0)
//   	// console.log(childrenArr)
//     return  childrenArr.indexOf(route.meta.role) >= 0
//   }
//   else {
//   	return true
//   }
//   //console.log(roles)
// }

/**
 * �ݹ�����첽·�ɱ?���ط���û���ɫȨ�޵�·�ɱ�
 * @param asyncRouterMap
 * @param roles
 */
// function filterAsyncRouter(asyncRouterMap, roles) {
//   const accessedRouters = asyncRouterMap.filter(route => {
//     if (hasPermission(roles, route)) {
//       if (route.children && route.children.length) {
//       	console.log(roles)
//         //route.children = filterAsyncRouter(route.children, roles)
//         console.log(route.children)
//       }
//       return true
//     }
//     return false
//   })
//   return accessedRouters
// }
/* layout */
import Layout from '../../views/layout/Layout'
const permission = {
	state: {
		routers: constantRouterMap,
		addRouters: []
	},
	mutations: {
		SET_ROUTERS: (state, routers) => {        //���·�ɱ�
			state.addRouters = routers
			state.routers = constantRouterMap.concat(routers)
		}
	},
	actions: {
		GenerateRoutes({ commit }, data) {
			return new Promise(function(resolve){   //�õ�·���б?��������Ȩ��·�ɺ���·��
//					// const { roles } = data
//					// console.log(roles)
//					// let accessedRouters
//					// if (roles.indexOf('admin') >= 0) {   //��adminȨ��,��ӵ������Ȩ��
//					//   accessedRouters = asyncRouterMap
//					// } else {                            //������ִ�����溯��  filter�Ǿͷ���Ԫ�أ����û��
//					// 	for(var i=0;i<roles.length;i++){
//					// 		accessedRouters = filterAsyncRouter(asyncRouterMap, roles)
//					// 	}
//					//   console.log(accessedRouters)
//					// }
//					// commit('SET_ROUTERS', accessedRouters)  //�ύ
//					// resolve()    
//					/*��ݺ�̨����������·�ɱ�*/
					const { roles } =data;
					var newRoutes=[];
					roles.map((item, index) => {
					  newRoutes.push({
					      path:item.path,
					      component: Layout,
					      name: item.name,
					      icon:item.icon,
					      children:item.children
					  })
					})
					//console.log(newRoutes)
					commit('SET_ROUTERS',newRoutes)
					resolve() 
			})
		}
	}
}

export default permission
