<template>
    <div>
        <h1>UPDATE</h1>
        <v-text-field
        label="Introduce"
        v-model="introduce"
        required>
        </v-text-field>
        <v-text-field
        label="github"
        v-model="github"
        required>
        </v-text-field>
        <v-text-field
        label="blog"
        v-model="blog"
        required>
        </v-text-field>
        <v-btn @click="updateUser">UPDATE</v-btn>
        <hr>
        <v-btn @click="deleteUser">DELETE</v-btn>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            introduce: '',
            github: '',
            blog: '',
        }
    },
    methods: {
        updateUser() {
            const username = this.$route.params.username
            const introduce = this.introduce
            const github = this.github
            const blog = this.blog
            axios({
                method: 'put',
                url: `${this.$store.state.API_URL}/accounts/people/${username}`,
                data: {
                    introduce,
                    github,
                    blog,
                    location:3,
                    skill: [1,2,3],
                },
            })
            .then()
            .catch()
        },
        deleteUser() {
            const username = this.$route.params.username
            axios({
                method: 'delete',
                url: `${this.$store.state.API_URL}/accounts/people/${username}`,
            })
        }
    }
}
</script>

<style>

</style>