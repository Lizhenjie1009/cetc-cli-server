'use strict';

const Controller = require('egg').Controller;
const mongo = require('../utils/mongo');

class ProjectController extends Controller {
  // 获取项目/组件
  async getTemplate() {
    const { ctx } = this;
    // 读取mongodb数据库的数据
    const data = await mongo().query('project');
    ctx.body = data;
    // [
    //   {
    //     name: 'vue2模板',
    //     npmName: 'cetc-cli-vue2',
    //     version: '1.0.0',
    //   },
    // ];
  }
}

module.exports = ProjectController;
