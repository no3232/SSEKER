<template>
    <div>
        <div class="input-group d-flex justify-content-center container-sm my-5">
            <input type="search" class="form-control rounded mx-3" placeholder="Search" aria-label="Search" aria-describedby="search-addon"/>
            <button type="button" class="btn btn-outline-primary rounded">search</button>
        </div>
        <div>
            <v-container class="d-flex" fluid>
                <p>{{ selected }}</p>
                <div id="location" v-for="location in this.locations" :key="location.id">
                    <v-checkbox :label="location.campus" @change="test"></v-checkbox>
                </div>
            </v-container>    
            <div class="text-center">
                <v-btn @click="searchProjects">검색</v-btn>
            </div>
        </div>
        <div class="text-center my-5">
            <router-link :to="{ name: 'createProject' }"><v-btn>New Project</v-btn> </router-link>
        </div>
        <div class="project-container d-flex flex-row flex-wrap text-start justify-content-around">
            <div class="col-md-4 border border-light rounded" v-for="project in this.$store.state.projects" :key="project.id">
                <router-link :to="{ name: 'project', params: { projectId: project.id }}">
                    <div class="container">
                        <div class="card-header text-center">Project {{ project.title }}</div>
                        <div class="d-flex card-body justify-content-between">
                            <div>{{ project.founder.username }}</div>
                            <div>{{ project.location.campus }}</div>
                        </div>
                    <div class="">Needed Skills
                            <div v-for="participant in project.participant" :key="participant.id">{{participant}}</div>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template> 

<script>

export default {
    name: 'ProjectList',
    data() {
        return {
            locations: this.$store.state.location,
            selectedLocations: [],
        }
    },
    methods: {
        searchProjects() {
            const selectdLocation = document.querySelector('#location')
            console.log(selectdLocation.checked)
            for (const sel of selectdLocation) {
                console.log(sel.checked)
            }
        },
        test() {
        },
    },
    created() {
        this.$store.dispatch('getProjects')
    },
    watch: {
        selectedLocations() {
            console.log(this.selectedLocations)
        }
    }
}
</script>

<style>

</style>