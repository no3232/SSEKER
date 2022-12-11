<template>
    <div>
        <h1 class="text-center">Work With Us</h1>
        <div class="project-container d-flex flex-row justify-content-around flex-wrap container-sm my-5 text-start pl-4">
        <div class="col-md-4 border border-light rounded" v-for="project in this.ADProjects" :key="project.id">
            <router-link :to="{ name: 'project', params: { projectId: project.id }}">
                <div class="container">
                    <div class="card-header text-center">Project {{ project.title }}</div>
                    <div class="b-flex card-body">
                    <span>{{ project.onoffline.title }}</span>
                    <div v-if="project.location.length <= 3">
                        <span v-for="location in project.location" :key="location.id">
                            <span>{{location.city}}</span> |
                        </span>
                    </div>
                    <div v-else>
                        Anywhere
                    </div>
                    <div>
                        Needed Skills 
                        <span v-for="participant in project.participant" :key="participant.id">
                            {{ participant.skill[0].title }}
                        </span>
                    </div>
                    <p>Duration {{ project.start_date.substr(0,10) }} - {{ project.end_date.substr(0,10) }}</p>
                </div>
                </div>
            </router-link>
        </div>
    </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            ADProjects: [],
        }
    },
    methods: {
        getADProjects() {
            axios({
                method: 'get',
                url: `${this.$store.state.API_URL}/projects/adprojects`
            })
            .then((res => {
                this.ADProjects = res.data
            }))
            .catch(err => console.log(err))
        },
    },
    created() {
        this.getADProjects()
    }
}
</script>

<style>

</style>