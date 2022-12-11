<template>
    <div>
        <div class="user-profile-container d-flex flex-row justify-content-around">
            <div class="user-profile-image-container text-start">
                <div class="text-center">{{ this.people.username }}</div>
                <!-- <div>
                    Uni:
                    <div v-if="this.people.university">{{ this.people.university.name }}</div>
                    <span v-else>None</span>
                </div> -->
                <div>
                    Speciality:
                    <div v-if="this.people.skill.length>0">
                        <span v-for="skill in this.people.skill" :key="skill.id">{{ skill.title }} | </span>
                    </div>
                    <span v-else>None</span>
                </div>
            </div>
            <div class="user-introduce-container text-start">
                <div class="profile-introduce">
                    Intoduce:
                    <span v-if="this.people.introduce">
                        {{ this.people.introduce }}
                    </span>
                    <span v-else>None</span>
                </div>
                <!-- <div>
                    Availability :
                    <span v-if="this.people.availability.length > 0">
                        <span v-for="availability in this.people.availability" :key="availability.id">{{availability.day}} | </span>
                    </span>
                    <span v-else>None</span>
                </div> -->
                <!-- <div v-if="this.people.onoffline">
                    <span class="my-3" v-if="this.people.onoffline.id === 3">{{ this.people.onoffline.title }}</span>
                    <span class="my-3" v-else>{{ this.people.onoffline.title }} Only</span>
                </div>
                <div v-else>On&offline None</div> -->
                <div>
                    Experiences in platform: 
                    <div v-if="this.people.manager.length > 0">
                        <div v-if="this.people.manager[0].project_set.length > 0">
                            <div v-for="manager in this.people.manager" :key="manager.id">
                                <p v-for="project in manager.project_set" :key="project.id">
                                    Project : {{ project.title }} | {{ project.start_date.substr(0,10) }} - {{ project.end_date.substr(0,10) }}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div v-else>None</div>
                </div>
                <!-- <div>
                    Interests: 
                    <span v-if="this.people.interest.length > 0">
                        <span v-for="interest in this.people.interest" :key="interest.id">{{ interest.name }} | </span>
                    </span>
                    <span v-else>None</span>
                </div> -->
            </div>
        </div>
        <div class="d-flex justify-content-sm-around my-5">
            <button class="btn btn-primary">Contact User {{ this.people.username }}</button>
            <button class="btn btn-primary">View Resume/Portfolio</button>
        </div>
        <div class="silmilar-skill-people-container mt-5">
            <SimilarSkillPeopleListVue/>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import SimilarSkillPeopleListVue from '@/components/People/SimilarSkillPeopleList'

export default {
    data() {
        return {
            people: null
        }
    },
    created() {
        this.getPeopleInfo()
    },
    methods: {
        getPeopleInfo() {
            const username = this.$route.params.username
            axios({
                method: 'get',
                url: `${this.$store.state.API_URL}/accounts/people/${username}`
            })
            .then((res => {
                this.people = res.data
            }))
            .catch(err => console.log(err))
        }
    },
    components: {
        SimilarSkillPeopleListVue,
    }
}
</script>

<style>

</style>