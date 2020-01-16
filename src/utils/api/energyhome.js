/**
 * 能耗首页接口
 */

import axios from '@/utils/http' // 导入http中创建的axios实例
// import { adornData, adornParams } from './adddefault'
const energyhome = {
  // GET /index/enterpriseinfo
  enterpriseinfo(params) {
    return axios.get('/index/enterpriseinfo', {
      params: params
    })
  },
  //   GET /index/energy/day
  day(params) {
    return axios.get('/index/energy/day', {
      params: params
    })
  },
  //GET /index/energy/purpose
  purpose(params) {
    return axios.get('/index/energy/purpose', {
      params: params
    })
  },
  //   GET /index/energy/category
  category(params) {
    return axios.get('/index/energy/category', {
      params: params
    })
  },
  //GET /index/energy/compare
  compare(params) {
    return axios.get('/index/energy/compare', {
      params: params
    })
  },
  // GET /classificationEnergy/statics/list
  staticslist(params) {
    return axios.get('/classificationEnergy/statics/list', {
      params: params
    })
  },
  // GET /classificationEnergy/transverse/statics
  statics(params) {
    return axios.get('/classificationEnergy/transverse/statics', {
      params: params
    })
  },
  //GET /classificationEnergy/portrait/statics
  portraitstatics(params) {
    return axios.get('/classificationEnergy/portrait/statics', {
      params: params
    })
  }
}
export default energyhome
