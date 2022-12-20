<template>
    <div>
        <h1>set info</h1>
        <v-btn @click="setinfo">setinfo</v-btn>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    methods: {
        setinfo() {
            axios({
                method: 'put',
                url: `${this.$store.state.API_URL}/accounts/people/${this.$route.params.username}`,
                data: {
                    location: 1,
                    skill: [1,2,],
                }
            })
            .then((res => console.log(res.data)))
            .catch((err) => console.log(err))
        }

    }
}
</script>

<style>

</style>