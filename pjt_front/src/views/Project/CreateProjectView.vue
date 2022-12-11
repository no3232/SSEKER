<template>
    <div>
        <h1>New Project</h1>
        <div>
            <v-container class="md-4">
                <v-text-field
                label="Title"
                v-model="title"
                required>
                </v-text-field>
            </v-container>
            <v-container class="participant-container md-4">
                <form @submit.prevent="addCount">
                    <v-container class="participant-container d-flex justify-space-around spacing-playground pa-6">
                        <v-select
                        :data-selecte-skill="skill"
                        @change="selectSkill"
                        :items="skill"
                        v-model="selectedSkill"
                        label="Choose Skill"
                        item-text="title"
                        bottom
                        autocomplete
                        id=selectedSkill
                        ></v-select>
                        <v-btn @click.prevent="minus">-</v-btn>
                        <input class="text-center" type="text" v-model="this.selectedCount" readonly>
                        <v-btn @click.prevent="plus">+</v-btn>
                        <v-btn type="submit" rounded>ADD</v-btn>
                    </v-container>
                </form>
            </v-container>
            <div class="text-center">
            <div v-if="this.participantList.length > 0">
                <div v-for="participant in this.participantList" :key="participant.id">
                    {{participant.selectedSkill}} : {{ participant.selectedCount }}
                </div>
            </div>
            <div v-else>Select Participant!</div>
            </div>
            <v-container class="form-check form-check-inline my-5 d-flex justify-md-space-around text-center">
            <div
                v-for="availability in this.availability" 
                :key=availability.id>
                <input class="form-check-input" type="checkbox" id="availability" :data-availability-id="availability.id">
                <label class="form-check-label" for="inlineCheckbox">{{ availability.day }}</label>
            </div>
            </v-container>
            <div>
                <v-container class="location-container d-flex justify-space-around spacing-playground pa-6">
                <div>
                <label for="onoffline">OFF&ONline</label>:
                <select @change="changeOnOffline" name="onoffline" id="onoffline">
                    <option value="0">Offline</option>
                    <option value="1" selected>Online</option>
                    <option value="2">Off&Online</option>
                </select>
                </div>
                    <v-select
                    :items="location"
                    v-model="selectedLocation"
                    label="Choose Location"
                    item-text="city"
                    bottom
                    autocomplete
                    id=selectedLocation
                    ></v-select>
                </v-container>
            </div>
            <v-container class="d-flex flex-column justify-center">
                <v-col
                cols="12"
                sm="6"
                >
                <v-date-picker
                    v-model="dates"
                    range
                ></v-date-picker>
                </v-col>
                <v-col
                cols="12"
                sm="6"
                >
                <v-text-field
                    v-model="dateRangeText"
                    label="Date range"
                    prepend-icon="mdi-calendar"
                    readonly
                ></v-text-field>
                </v-col>
            </v-container>
            <v-container class="md-4">
                <v-text-field 
                label="Content"
                placeholder="Write Content"
                v-model="content"
                required>
                </v-text-field>
            </v-container>
            <div class="d-flex justify-center mb-6 my-5" >
                <v-btn @click="createProject" rounded>Submit</v-btn>
            </div>
        </div>
    </div>
</template>


<script>
import axios from 'axios'

export default {
data() {
    return {
        title: '',
        content: '',
        startDate: '',
        endDate: '',
        skill: this.$store.state.skill,
        onoffline: this.$store.state.offline,
        location: this.$store.state.location,
        availability: this.$store.state.availability,
        selectedCount: 0,
        selectedSkill: '',
        participantList: [],
        selectedOnOfflineId: '',
        selectedLocation: '',
        dates: []
        }
    },
    computed: {
        dateRangeText () {
        return this.dates.join(' ~ ')
        },
    },
    methods: {
        changeOnOffline(event) {
            console.log(event.target)
            this.selectedOnOfflineId = event.target.value
        },
        addCount() {
            const selectedSkill = this.selectedSkill
            const selectedCount = this.selectedCount
            console.log(selectedSkill.id)
            if (this.selectedSkill && this.selectedCount) {
                this.selectedCount = 0
                this.selectedSkill = ''
                const participant = {selectedSkill, selectedCount}
                this.participantList.push(participant)
            } else {
                alert('양식 준수하세여')
            }
        },
        createProject() {
            let selectedAvailability = []
            const availability = document.querySelectorAll('#availability')
            for (const avg of availability) {
                const availabilityId = avg.dataset.availabilityId
                if (avg.checked) {
                    selectedAvailability.push(availabilityId)
                }
            }
            const selectedLocation = this.location.filter((el) => el.city === this.selectedLocation)[0].id
            const selectedParticipant = this.participantList
            const selectedDates = this.dates
            const title = this.title
            const content = this.content
            const onoffline = document.querySelector('#onoffline').value
            const payload = {
                selectedAvailability,
                selectedLocation,
                selectedParticipant,
                selectedDates,
                title,
                content,
                onoffline
            }
            axios({
                method: 'post',
                url: `${this.$store.state.API_URL}/projects/project`,
                headers: {
                    Authorization: `Token ${ this.$store.state.token }`
                },
                data: payload,
            })
            .then((res => {
                console.log(res)
                // this.$router.push({name: 'projects'})
            }))
            .catch((err => console.log(err)))
            
        },
        selectSkill(selectedSkill) {
            this.selectedSkill = selectedSkill
        },
        minus() {
            if (this.selectedCount > 0) {
                this.selectedCount--
            } else {
                alert('마이너스 X')
            }
        },
        plus() {
            if ( this.selectedCount >= 0 && this.selectedCount < 5 ) {
                this.selectedCount++
            } else {
                alert('max 5 명')
            }
        },
    },
    created() {
        this.$store.dispatch('getProjectObject')
    },
    watch: {
    }
}
</script>

<style>

</style>