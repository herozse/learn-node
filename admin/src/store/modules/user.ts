import { defineStore } from "pinia";

const useUserStore = defineStore('APP_USER', {
  state: () => {
    return {
      token: undefined,
      userInfo: null,
      routes: [],
      name: "lzs",
      age: 18,
    };
  },
  getters: {
    
  },
  actions: {

  }
});



export { useUserStore };
