<script>
import { mapGetters } from 'vuex';

export default {
    name: 'autoMessage',
    computed: {
        ...mapGetters({
            message: 'getMessage',
        })
    },
    watch: {
        message(newMessage, oldMessage) {
            if (this.message != '') {
                console.log('message', this.message)
                this.$swal.fire({
                    text: this.message,
                    toast: true,
                    position: 'top-end',
                    timer: 3000,
                    showConfirmButton: false,
                })
                setTimeout(() => {
                    this.$store.commit('setMessage', '')
                }, 3000);
            }
        }
    },
}
</script>