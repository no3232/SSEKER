import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    API_URL: 'http://127.0.0.1:8000',
    token: null,
    projects: [],
    people: [],
    skill: [],
    location: [],
    onoffline: [],
    availability: [],
    skillCategory: [],
  },
  getters: {
  },
  mutations: {
    GET_PROJECTS(state, projects) {
      state.projects = projects
    },
    GET_PEOPLE(state, people) {
      state.people = people
    },
    SAVE_TOKEN(state, token) {
      state.token = token
    },
    SAVE_PROJECT_OBJECTS(state, objects) {
      state.skill = objects.skill
      state.location = objects.location
    },
  },
  actions: {
    getProjects(context) {
      axios({
        method: 'get',
        url: `${this.state.API_URL}/projects`
      })
      .then((res) => {
        context.commit('GET_PROJECTS', res.data)
      })
      .catch((err => {
        console.log(err)
      }))
    },
    getPeople(context) {
      axios({
        method: 'get',
        url: `${this.state.API_URL}/accounts/people`
      })
      .then((res => {
        context.commit('GET_PEOPLE', res.data)
      }))
      .catch((err => {
        console.log(err)
      }))
    },
    getProjectObject(context) {
      axios({
        method: 'get',
        url: `${this.state.API_URL}/projects/objects`,
      })
      .then((res => {
        context.commit('SAVE_PROJECT_OBJECTS', res.data)
      }))
      .catch(err => console.log(err))
    },
    // User
    signUp(context, payload) {
      const username = payload.username
      const password1 = payload.password1
      const password2 = payload.password2
      axios({
        method: 'post',
        url: `${this.state.API_URL}/dj-accounts/signup/`,
        data: {
          username, password1, password2
        }
    })
    .then(res => {
      context.commit('SAVE_TOKEN', res.data.key)
      router.push({ name: 'main' })
    })
    .catch(err => {
      console.log(err)
      alert('양식을 준수해주세요')
      return
      })
    }, 
    logIn(context, payload) {
      const username = payload.username
      const password = payload.password
      axios({
        method: 'post',
        url: `${this.state.API_URL}/dj-accounts/login/`,
        data: {
          username, password
        }
      })
        .then(res => {
          context.commit('SAVE_TOKEN', res.data.key)
          router.push({ name: 'main' })
          return 
        })
        .catch(err => 
          console.log(err))
    },
  },
  modules: {
  }
})
