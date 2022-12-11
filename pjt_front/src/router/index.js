import Vue from 'vue'
import VueRouter from 'vue-router'
import MainView from '@/views/MainView'
import ProjectItemView from '@/views/Project/ProjectItmeView'
import ProjectListView from '@/views/Project/ProjectListView'
import PeopleListView from '@/views/People/PeopleListView'
import PeopleItemView from '@/views/People/PeopleView'
import CreateProjectView from '@/views/Project/CreateProjectView'
import ParticipantView from '@/views/Project/ParticipantView'
import SignUpview from '@/views/User/SignUpView'
import LoginView from '@/views/User/LoginView'


Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'main',
    component: MainView
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectListView
  },
  {
    path: '/project/:projectId',
    name : 'project',
    component: ProjectItemView
  },
  {
    path: '/peoples',
    name: 'peoples',
    component: PeopleListView
  },
  {
    path: '/people/:username',
    name: 'people',
    component: PeopleItemView,
  },

  {
    path: '/project/create',
    name: 'createProject',
    component: CreateProjectView
  },
  {
    path: '/project/:projectId/participant',
    name: 'participant',
    component: ParticipantView
  },
  {
    path: '/user/signup',
    name: 'signup',
    component: SignUpview
  },
  {
    path: '/user/login',
    name: 'login',
    component: LoginView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
