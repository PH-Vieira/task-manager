<template>
    <div class="container">
        <div class="card">
            <div class="title">
                Adicionar nova task
            </div>
            <form class="body" @submit.prevent="add">
                <div>Nome <input v-model="task.taskName" type="text"></div>
                <div>Descrição <input v-model="task.taskDesc" type="text"></div>
                <div>
                    Nível 
                    <select v-model="task.taskLevel">
                        <option :value="index" v-for="(item, index) in niveis" :key="index">{{ item[1] }}</option>
                    </select>
                </div>
                <button class="cardBtn">Adicionar</button>
            </form>
        </div>
        <autoMessage />
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import autoMessage from './autoMessage.vue'

export default {
    name: 'createTaskTab',
    components: {
        autoMessage,
    },
    data() {
        return {
            task: {
                taskName: null,
                taskDesc: null,
                taskLevel: null,
            }
        }
    },
    computed: {
        ...mapGetters({
            taskData: 'getTask',
            niveis: 'getNiveis',
        })
    },
    mounted() {
        this.$store.dispatch('fetchNiveis')
    },
    methods: {
        add() {
            console.log('this.task', this.task)
            this.$store.dispatch('fetchAddTask', this.task)
        },
    },
    watch: {
        taskData() {
            console.log('taskData: ', this.taskData)
        }
    },
}
</script>