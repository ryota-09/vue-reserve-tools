import Vue from 'vue'
import Vuex from 'vuex'
import { User } from "@/types/user"
import { Tool } from "@/types/tool"
import { ReserveState } from '@/types/reserveState'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    userList: [
      new User(1, "田中", "ex01@example.com", "12345678", 0, []),
      new User(2, "鈴木", "ex02@example.com", "12345678", 0, []),
      new User(3, "佐藤", "ex03@example.com", "12345678", 0, []),
      new User(4, "長崎", "ex04@example.com", "12345678", 0, []),
      new User(5, "富山", "ex05@example.com", "12345678", 0, []),
    ],
    toolList: [
      new Tool(1, "iPad", "", new ReserveState(false, 0, 0)),
      new Tool(1, "iPhone", "", new ReserveState(false, 0, 0)),
      new Tool(1, "プロジェクター", "", new ReserveState(false, 0, 0)),
      new Tool(1, "スクリーン", "", new ReserveState(false, 0, 0)),
      new Tool(1, "軽トラック", "", new ReserveState(false, 0, 0)),
      new Tool(1, "大型車", "", new ReserveState(false, 0, 0)),
      new Tool(1, "Webカメラ", "", new ReserveState(false, 0, 0)),
      new Tool(1, "横断幕", "", new ReserveState(false, 0, 0)),
    ],
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
