import {createStore} from 'vuex'

export const store = createStore({
  state() {
    return {
       // data for dolist
      tasks:[
         {  
            id:0,
            title:"Example title",
            body:"Example body",
            dataСreation:new Date().toLocaleDateString(),
            dataEnd:new Date().toLocaleDateString(),
            status:false,
         },
         {  
            id:1,
            title:"Example title",
            body:"Example body",
            dataСreation:new Date().toLocaleTimeString(),
            dataEnd:new Date().toLocaleTimeString(),
            status:true,
         },
         
      ],
   }
},
      getters: {
         getTasks(state) {
           return state.tasks
         }
       },
       mutations: {
         addTask(state,item) {
           state.tasks.push(item);
         }
      },

      
         
    
  
})