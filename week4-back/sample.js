const {
    user //사용할 테이블 명
} = require('./sequelize/models') // relay16/src/sequelize/model/index.js 

// // 유저 삽입
// for (let i = 0; i < 100; i++) {
//     user.create({
//         id: i,
//         "nickname": `${i}user`,
//         "abcd": "",
//         "music": Math.floor(Math.random() * 5),
//         "game":Math.floor(Math.random() * 5),
//         "sports": Math.floor(Math.random() * 5),
//         "movie": Math.floor(Math.random() * 5),
//         "travel": Math.floor(Math.random() * 5),
//     }).then(results => {
//         console.dir("RESULT =" + results) //결과 받아와서 동작
//     }).catch(err => {
//         console.log("ERR = " + err)
//     })

// }

// //수정
// user.update({
//     //바꿀 데이터,
//     job: "가수",
//     hobby: "테니스",
//     character: "외향"
// }, {
//     where: {
//         id: "jk", // 업데이트할 유저 id!, nickname아니고 유저id 
//     }
// }).then(results => {
//     console.log("RESULT =" + results) //결과 받아와서 동작
// }).catch(err => {
//     console.log("ERR = " + err)
// })

// // 삽입
// userkeyword.create({
//     userid: "jk",
//     keyword: "테니스"
// }).then(results => {
//     console.log("RESULT =" + results) //결과 받아와서 동작
// }).catch(err => {
//     console.log("ERR = " + err)
// })


// //조회 하나만
// user.findOne({
//     where: {
//         id: "jk"
//     }
// }).then(results => {
//     console.dir(results.dataValues) //결과 받아와서 동작
// }).catch(err => {
//     console.log("ERR = " + err)
// })

// //조회 all
// userkeyword.findAll({
//     where: {
//         id: "jk"
//     }
// }).then(results => {
//     console.dir(results) //결과 받아와서 동작
// }).catch(err => {
//     console.log("ERR = " + err)
// })
