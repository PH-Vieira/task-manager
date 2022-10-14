import Axios from "axios";

export const Add = Axios.create({
    baseURL: process.env.VUE_APP_ADD
});

export const Buttons = Axios.create({
    baseURL: process.env.VUE_APP_BUTTONS
});

export const List = Axios.create({
    baseURL: process.env.VUE_APP_LIST
});

export const Niveis = Axios.create({
    baseURL: process.env.VUE_APP_NIVEIS
});

export const Excluir = Axios.create({
    baseURL: process.env.VUE_APP_EXCLUIR
});