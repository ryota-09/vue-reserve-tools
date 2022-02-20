import Vue from 'vue'
import Vuex from 'vuex'
import { User } from "@/types/user"
import { Tool } from "@/types/tool"
import { ReserveState } from '@/types/reserveState'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    currentUser: new User(0, "", "", "", 0, []),
    userList: [
      new User(1, "田中", "ex01@example.com", "12345678", 1, [new Tool(1, "iPad", "/img/ipad.jpg", [new ReserveState(true, 1, 10, 11, 10, 10),new ReserveState(true, 1, 15, 17, 11, 11) ])]),
      new User(2, "鈴木", "ex02@example.com", "12345678", 0, [new Tool(3, "プロジェクター", "", [new ReserveState(true, 2, 9, 10, 10, 10)]),new Tool(7, "Webカメラ", "", [new ReserveState(true, 2, 12, 14, 11, 11)])]),
      new User(3, "佐藤", "ex03@example.com", "12345678", 2, []),
      new User(4, "長崎", "ex04@example.com", "12345678", 1, [new Tool(5, "軽トラック", "", [new ReserveState(true, 4, 15, 17, 10, 10)])]),
      new User(5, "富山", "ex05@example.com", "12345678", 3, [new Tool(1, "iPad", "/img/ipad.jpg", [new ReserveState(true, 1, 10, 11, 10, 10),new ReserveState(true, 1, 15, 17, 11, 11),new ReserveState(true, 5, 18, 19, 10, 10) ])]),
    ],
    toolList: [
      new Tool(1, "iPad", "/img/ipad.jpg", [new ReserveState(true, 1, 10, 11, 10, 10),new ReserveState(true, 1, 15, 17, 11, 11),new ReserveState(true, 5, 18, 19, 10, 10) ]),
      new Tool(2, "iPhone", "/img/iPhone.jpg", []),
      new Tool(3, "プロジェクター", "/img/projector.jpg", [new ReserveState(true, 2, 9, 10, 10, 10)]),
      new Tool(4, "スクリーン", "/img/screen.jpg", []),
      new Tool(5, "軽トラック", "/img/smallCar.jpg", [new ReserveState(true, 4, 15, 17, 10, 10)]),
      new Tool(6, "大型車", "/img/bigCar.jpg", []),
      new Tool(7, "Webカメラ", "/img/webCamera.jpg", [new ReserveState(true, 2, 12, 14, 11, 11)]),
      new Tool(8, "横断幕", "/img/sheet.jpg", []),
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
    },
    setReserveDate(state, payload){
      const newArray = [];
        for (const tool of state.toolList) {
          if (tool.id === payload.toolId) {
            newArray.push(tool);
          }
        }
      const newReserveState = new ReserveState(
        payload.isReserved,
        payload.userId,
        payload.startUsehour,
        payload.endUsehour,
        payload.startUseDay,
        0
      )
      newArray[0].reserveArray.push(newReserveState);
    }
  },
  modules: {
  },
  getters:  {
    getCurrentUser(state){
      return state.currentUser;
    },
    getUserList(state){
      return state.userList;
    },
    getToolList(state){
      return state.toolList;
    },
    getLoginState(state){
      return state.isLogedIn;
    },
    getReserveToolList(state){
        const newArray = new Array<Tool>();
        for(const tool of state.toolList){
          for(const reserveState of tool.reserveArray){
            if(reserveState){
              newArray.push(tool)
            }
          }
        }
        return newArray;
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
