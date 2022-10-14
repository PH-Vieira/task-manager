<template>
    <div class="container">
        {{ currentDate }}
    </div>
</template>

<script>
export default {
    name: 'mainInfo',
    data() {
        return {
            currentDate: null,
        }
    },
    computed: {
        
    },
    methods: {
        getDate() {
            var currentDate = new Date().toJSON().slice(11,19);
            this.currentDate = currentDate;
        },
        async changeDate() {
            const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
            do {
                this.getDate();
                await sleep(1400);
            } while (1 == 1)
        }
    },
    mounted() {
        this.changeDate();
    },
}
</script>