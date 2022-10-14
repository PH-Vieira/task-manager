import { createStore } from "vuex";
import { Add, Buttons, List, Niveis, Excluir } from "@/services/api.js";

export default createStore({
  state() {
    return {
      message: null,
      botoes: null,
      currentComponent: null,
      taskList: null,
      niveis: null,
    };
  },
  getters: {
    getMessage(state) {
      return state.message;
    },
    getBotoes(state) {
      return state.botoes;
    },
    getCurrentComponent(state) {
      return state.currentComponent;
    },
    getTaskList(state) {
      return state.taskList;
    },
    getNiveis(state) {
      return state.niveis;
    },
  },
  mutations: {
    setMessage(state, data) {
      state.message = data;
    },
    setBotoes(state, data) {
      state.botoes = data;
    },
    setCurrentComponent(state, data) {
      state.currentComponent = data;
    },
    setTaskList(state, data) {
      state.taskList = data;
    },
    setNiveis(state, data) {
      state.niveis = data;
    },
  },
  actions: {
    async fetchAddTask({ commit }, payload) {
      const response = await Add.post("", payload);
      console.log("response.data.message ", response.data.message);
      commit("setMessage", response.data.message);
    },
    async fetchBotoes({ commit }) {
      const response = await Buttons.get();
      commit("setBotoes", response.data);
    },
    async fetchCurrentComponent({ commit }, payload) {
      commit("setCurrentComponent", payload);
    },
    async fetchTaskList({ commit }) {
      const response = await List.get();
      console.log("list: ", response.data);
      commit("setTaskList", response.data);
    },
    async fetchNiveis({ commit }) {
      const response = await Niveis.get();
      console.log("niveis: ", response.data);
      commit("setNiveis", response.data);
    },
    async fetchExcluirTask({ commit }, payload) {
      console.log("payload received: ", payload);
      const response = await Excluir.post("", {
        nome: payload.nome,
      });
      console.log("getting: ", response.data);
      this.dispatch('fetchTaskList')
    },
  },
});
