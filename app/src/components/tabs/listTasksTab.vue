<template>
    <div class="container">
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Descrição</th>
                    <th>Nível</th>
                    <th>Opções</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="task in taskList" :key="key">
                    <td>{{ task['nome'] }}</td>
                    <td>{{ task['descricao'] }}</td>
                    <td>{{ task['descricao_nivel'] }}</td>
                    <td><button><img src="../../assets/pencil-square.svg" alt=""></button><button @click="aaa(task)"><img src="../../assets/x-circle.svg" alt=""></button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'listTasksTab',
    computed: {
        ...mapGetters({
            taskList: 'getTaskList',
        })
    },
    mounted() {
        this.$store.dispatch('fetchTaskList')
    },
    methods: {
        aaa(sus) {
            console.log('sending: ',sus)
            this.$store.dispatch('fetchExcluirTask', sus)
        }
    },
}
</script>