import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import NotFound from '@/views/404View.vue'
import datasetPaths from '@/static/datasetPaths.js'

Vue.use(VueRouter)

const routes = [ // order matters for dataset menu
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      datasetSectionMenu: false
    }
  },
  {
    path: datasetPaths.ahccd.en,
    alias: datasetPaths.ahccd.fr,
    name: 'ahccd',
    // component: AHCCDForm,
    meta: {
      datasetSectionMenu: true,
      en_path: datasetPaths.ahccd.en,
      fr_path: datasetPaths.ahccd.fr,
      group: 'valueAddedHistClimProd'
    },
    component: () => import(/* webpackChunkName: "ahccd" */ '../views/AHCCDForm.vue')
  },
  {
    path: datasetPaths.cangrd.en,
    alias: datasetPaths.cangrd.fr,
    name: 'cangrd',
    // component: CanGRDForm,
    meta: {
      datasetSectionMenu: true,
      en_path: datasetPaths.cangrd.en,
      fr_path: datasetPaths.cangrd.fr,
      group: 'valueAddedHistClimProd'
    },
    component: () => import(/* webpackChunkName: "cangrd" */ '../views/CanGRDForm.vue')
  },
  {
    path: datasetPaths.rdpa.en,
    alias: datasetPaths.rdpa.fr,
    name: 'rdpa',
    // component: RDPAForm,
    meta: {
      datasetSectionMenu: true,
      en_path: datasetPaths.rdpa.en,
      fr_path: datasetPaths.rdpa.fr,
      group: 'valueAddedHistClimProd'
    },
    component: () => import(/* webpackChunkName: "rdpa" */ '../views/RDPAForm.vue')
  },
  {
    path: datasetPaths.cmip5.en,
    alias: datasetPaths.cmip5.fr,
    name: 'cmip5',
    // component: CMIP5Form,
    meta: {
      datasetSectionMenu: true,
      en_path: datasetPaths.cmip5.en,
      fr_path: datasetPaths.cmip5.fr,
      group: 'climateSimulation'
    },
    component: () => import(/* webpackChunkName: "cmip5" */ '../views/CMIP5Form.vue')
  },
  {
    path: datasetPaths.dcs.en,
    alias: datasetPaths.dcs.fr,
    name: 'dcs',
    // component: DCSForm,
    meta: {
      datasetSectionMenu: true,
      en_path: datasetPaths.dcs.en,
      fr_path: datasetPaths.dcs.fr,
      group: 'climateSimulation'
    },
    component: () => import(/* webpackChunkName: "dcs" */ '../views/DCSForm.vue')
  },
  {
    path: datasetPaths.cansips.en,
    alias: datasetPaths.cansips.fr,
    name: 'cansips',
    // component: CanSIPSForm,
    meta: {
      datasetSectionMenu: true,
      en_path: datasetPaths.cansips.en,
      fr_path: datasetPaths.cansips.fr,
      group: 'climateSimulation'
    },
    component: () => import(/* webpackChunkName: "cansips" */ '../views/CanSIPSForm.vue')
  },
  {
    path: datasetPaths.normals.en,
    alias: datasetPaths.normals.fr,
    name: 'normals',
    // component: ClimateNormalsForm,
    meta: {
      datasetSectionMenu: true,
      en_path: datasetPaths.normals.en,
      fr_path: datasetPaths.normals.fr,
      group: 'histClimateRiver'
    },
    component: () => import(/* webpackChunkName: "climateNormals" */ '../views/ClimateNormalsForm.vue')
  },
  {
    path: datasetPaths.monthly.en,
    alias: datasetPaths.monthly.fr,
    name: 'monthly',
    // component: ClimateMonthlyForm,
    meta: {
      datasetSectionMenu: true,
      en_path: datasetPaths.monthly.en,
      fr_path: datasetPaths.monthly.fr,
      group: 'histClimateRiver'
    },
    component: () => import(/* webpackChunkName: "climateMonthly" */ '../views/ClimateMonthlyForm.vue')
  },
  {
    path: datasetPaths.daily.en,
    alias: datasetPaths.daily.fr,
    name: 'daily',
    // component: ClimateDailyForm,
    meta: {
      datasetSectionMenu: true,
      en_path: datasetPaths.daily.en,
      fr_path: datasetPaths.daily.fr,
      group: 'histClimateRiver'
    },
    component: () => import(/* webpackChunkName: "climateDaily" */ '../views/ClimateDailyForm.vue')
  },
  {
    path: datasetPaths.ltce.en,
    alias: datasetPaths.ltce.fr,
    name: 'ltce',
    meta: {
      datasetSectionMenu: true,
      en_path: datasetPaths.ltce.en,
      fr_path: datasetPaths.ltce.fr,
      group: 'histClimateRiver'
    },
    component: () => import(/* webpackChunkName: "ltce" */ '../views/LTCEForm.vue')
  },
  {
    path: datasetPaths.hourly.en,
    alias: datasetPaths.hourly.fr,
    name: 'hourly',
    // component: ClimateHourlyForm,
    meta: {
      datasetSectionMenu: true,
      en_path: datasetPaths.hourly.en,
      fr_path: datasetPaths.hourly.fr,
      group: 'histClimateRiver'
    },
    component: () => import(/* webpackChunkName: "climateHourly" */ '../views/ClimateHourlyForm.vue')
  },
  {
    path: datasetPaths.hydrometric.en,
    alias: datasetPaths.hydrometric.fr,
    name: 'hydrometric',
    meta: {
      datasetSectionMenu: true,
      en_path: datasetPaths.hydrometric.en,
      fr_path: datasetPaths.hydrometric.fr,
      group: 'histClimateRiver'
    },
    component: () => import(/* webpackChunkName: "hydrometric" */ '../views/HydrometricArchiveForm.vue')
  },
  {
    path: '/:pathMatch(.*)',
    name: '404',
    component: NotFound,
    meta: {
      datasetSectionMenu: false
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
