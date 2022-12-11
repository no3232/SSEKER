<template>
    <div>
        <h1>People with similar skill</h1>
        <div class="simlilar-people-container d-flex flex-row justify-content-around flex-wrap container-sm my-5 text-start">
            <div v-if="this.peoples.length > 0" class="col-md-4 border border-light rounded">
                <div v-for="people in this.peoples" :key="people.id">
                <router-link :to="{ name: 'people', params: { username: people.username }}">
                <div class="text-center">{{ people.username }}</div>
                <div class="px-4">
                    <span v-for="availability in people.availability" :key="availability.day">{{ availability.day }} | </span>
                    <div>
                        <span v-if="people.onoffline.id === 3">{{ people.onoffline.title}}</span>
                        <span v-else>{{ people.onoffline.title}} Only</span>
                    </div>
                    <span v-for="skill in people.skill" :key="skill.id">{{ skill.title }} | </span>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                        </svg>
                        {{ people.location[0].city }}
                    </div>
                </div>
                </router-link>
                </div>
            </div>
            <div v-else>
                <h1>None</h1>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            peoples: [],
            username: this.$route.params.username
        }
    },
    watch: {
        $route(to, from) {
            if (to.params != from.params) {
                this.username = to.params.username
                this.getSimilarSkillPeoples()
                this.$router.go()
            }
        }
    },
    methods: {
        getSimilarSkillPeoples() {
            axios({
                method: 'get',
                url: `${this.$store.state.API_URL}/accounts/people/similarskill/${this.username}`
            })
            .then((res => {
                this.peoples = res.data
            }))
            .catch(err => console.error(err))
        },
    },
    created() {
        this.getSimilarSkillPeoples()
    },
}
</script>

<style>

</style>