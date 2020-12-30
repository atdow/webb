import Mock from "mockjs";

// const fs = require("fs");

// import Mock from 'mockjs2'
// import { builder, getQueryParameters } from '../util'

const totalCount = 5701

//地图数据
const testapi = (options) => {
    let result = {
        code: 200,
        data: { a: 111 }
    }
    return result
}

Mock.mock(/\/test\/api/, 'get', testapi)

