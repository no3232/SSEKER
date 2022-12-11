<template>
    <div>
        <h1>Participant</h1>
        {{ project }}
        <h3>Who is in a team</h3>
        <div>
            Needed Skills
            <div v-for="participant in this.project.participant" :key="participant.id">
                <div class="d-flex">
                    {{ participant.skill.title}} -
                    <span v-if="participant.manager">{{ participant.manager.username }}</span>
                    <span v-else>
                        <span class="mr-5">None</span>
                        <span id="register"><v-btn :data-participant-skill=participant.id @click="regisetParticipant">Register</v-btn></span>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            project: null,
            projectId: this.$route.params.projectId,
        }
    },
    methods: {
        getProject() {
            axios({
                method: 'get',
                url: `${this.$store.state.API_URL}/projects/project/${this.projectId}`
            })
            .then((res => {
                this.project = res.data
            }))
            .catch((err => {
                console.log(err)
            }))
        }
    },
    created() {
        this.getProject()
    }
}
</script>

<style>

</style>