<template>
    <div>
        {{ this.project }}
        <div class="d-flex justify-md-space-between">
            <h1 class="mx-5">{{ this.project.title }}</h1>
            <div class="mx-5">
                <v-btn class="mx-5" @click="deleteProject">DELETE</v-btn>
                <router-link :to="{ name:'participant', params: { projectId: this.$route.params.projectId } }"><v-btn>Register</v-btn></router-link>
            </div>
        </div>
        <hr>
        <div class="this.project-container d-flex border-1 mx-5 ">
            <div class="this.project-item-container container-lg">
                <div>{{ this.project.content }}</div>
                <div>
                    <span> {{ this.project.location.campus }} 캠퍼스</span>
                </div>
                <h3>팀원 현황</h3>
                <div>
                    <div class="d-flex justify-sm-space-between">
                        <span>Needed Skills</span>
                        <span>Manager</span>
                    </div>
                    <div v-for="participant in this.project.participant" :key="participant.id">
                        <div>{{ participant }}</div>
                        <hr>
                    </div>
                    <div v-for="(count, category) in skillCategory" :key="count">{{ category }} - 0 / {{ count }}</div>
                </div>
                <button class="btn btn-primary my-5">
                    Apply Now
                </button>
            </div>
            <div class="this.project-user-container container-sm">
                <router-link :to="{ name: 'people', params: { username: this.project.founder.username }}">
                <div>{{ this.project.founder.username}}</div>
                <button class="btn btn-primary">Contact User<b>{{ this.project.founder.username }}</b></button>
            </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'ProjectItem',
    data() {
        return {
            projectId: this.$route.params.projectId,
            project: null,
            skill: [],
            location: [],
            skillCategory: {}
        }
    },
    computed: {
    },
    methods: {
        getProject() {
            axios({
                method: 'get',
                url: `${this.$store.state.API_URL}/projects/project/${this.projectId}`
            })
            .then((res => {
                this.project = res.data
                this.skillcategoryCount()
            }))
            .catch((err => {
                console.log(err)
            }))
        },
        deleteProject() {
            axios({
                method: 'delete',
                url: `${this.$store.state.API_URL}/projects/project/${this.projectId}`
            })
            .then(this.$router.push({name: 'projects'}))
            .catch((err) => console.error(err))
        },
        skillcategoryCount() {
            const participant = this.project.participant
            for (const part of participant) {
                const category = part.skillcategory.category
                if (category in this.skillCategory) {
                    this.skillCategory[category] ++
                } else {
                    this.skillCategory[category] = 1
                }
            }
        }
    },
    created() {
        this.getProject()
    },  
}
</script>

<style>

</style>