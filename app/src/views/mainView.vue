<template>
    <div>
        <SideBar />
        <mainInfo />
        <Component :is="component" />
    </div>
</template>

<script>
import SideBar from '../components/SideBar.vue'
import mainInfo from '../components/tabs/mainInfo.vue'
import createTask from '../components/tabs/createTaskTab.vue'
import settingsTab from '../components/tabs/settingsTab.vue'
import homeTab from '../components/tabs/homeTab.vue'
import listTasksTab from '../components/tabs/listTasksTab.vue'
import graphsTab from '../components/tabs/graphsTab.vue'
import { mapGetters } from 'vuex'
export default {
    name: 'mainView',
    components: {
        SideBar,
        mainInfo,
        createTask,
        settingsTab,
        homeTab,
        listTasksTab,
        graphsTab,
    },
    data() {
        return {
            component: createTask,
        }
    },
    computed: {
        ...mapGetters({
            rawComponent: 'getCurrentComponent',
        })
    },
    watch: {
        rawComponent(newRawComponent, oldRawComponent) {
            switch (newRawComponent) {
                case 'plus':
                    this.component = createTask;
                    break;
                case 'home':
                    this.component = homeTab;
                    break;
                case 'list':
                    this.component = listTasksTab;
                    break;
                case 'graph':
                    this.component = graphsTab;
                    break;
                case 'gear':
                    this.component = settingsTab;
                    break;
                default:
                    break;
            }
        },
    },
}
</script>

<style>
@import url('../style/main.css');
</style>