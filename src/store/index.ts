import Vue from 'vue'
import Vuex from 'vuex'
import { User } from "@/types/user"
import { Tool } from "@/types/tool"

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    userList: new Array<User>(),
    toolList: new Array<Tool>(),
    isLogedIn: false 
  },
  actions: {
  },
  mutations: {
    addUserList(state, payload){
      state.userList.push(payload.user)
    },
    addToolList(state, payload){
      state.toolList.push(payload.tool)
    },
    isLogedInHandler(state){
      state.isLogedIn = !state.isLogedIn
    }
  },
  modules: {
  },
  getters:  {
    getUserList(state){
      return state.userList;
    },
    getToolList(state){
      return state.toolList;
    },
    getLoginState(state){
      return state.isLogedIn;
    },
    getUserByID(state) {
      return (serchId: number) => {
        const newArray = [];
        for (const user of state.userList) {
          if (user.id === serchId) {
            newArray.push(user);
          }
        }
        return newArray[0];
      };
    },
    getToolByID(state) {
      return (serchId: number) => {
        const newArray = [];
        for (const tool of state.toolList) {
          if (tool.id === serchId) {
            newArray.push(tool);
          }
        }
        return newArray[0];
      };
    },
  }
})
