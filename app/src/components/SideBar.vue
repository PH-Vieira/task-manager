<template>
    <ul class="sidenav">
        <li v-for="(botao, index) in botoes" :key="index">
            <button @click="event" class="btn" :id="botao[0]" :style="{ 'background-image': 'url(' + botao[1] + ')' }"></button>
        </li>
    </ul>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'SideBar',
    data() {
        return {
            
        }
    },
    computed: {
        ...mapGetters({
            botoes: 'getBotoes',
        }),
    },
    mounted() {
        this.$store.dispatch('fetchBotoes');
    },
    methods: {
        event($e) {
            this.$store.dispatch('fetchCurrentComponent', $e.target.id);
        }
    }
}
</script>

<style scoped>
@import url('../style/sideNav.css');
</style>