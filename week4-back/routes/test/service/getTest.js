const {
    user //사용할 테이블 명
} = require('../../../sequelize/models') // relay16/src/sequelize/model/index.js 

module.exports = function (req, res) {
    let tester = req.body;

    function sim_cosine(data1, data2) {
        sum_name1 = 0;
        sum_name2 = 0;
        sum_name1_name2 = 0;
        count = 0;
        for (let i = 0; i < data1.length; i++) {
            sum_name1 += Math.pow(data1[i], 2);
            sum_name2 += Math.pow(data2[i], 2);
            sum_name1_name2 += data1[i] * data2[i];
        }
        return sum_name1_name2 / (Math.sqrt(sum_name1) * Math.sqrt(sum_name2));
    }
    
    function dataPush(rows) {
        let ary = [];
        ary.push(rows.music);
        ary.push(rows.sports);
        ary.push(rows.movie);
        ary.push(rows.game);
        ary.push(rows.travel);
        return ary;
    }
    
    function main() {
        let cosineAll = [];
        input_name = '김테스트';
        input_data = [5, 5, 1, 1, 1];
        // input_name =  tester.name
        // input_data = tester.data;
       
    
        user.findAll({}).then(results => {
            // console.log(results[1]) //결과 받아와서 동작
    
            for (let i = 0; i < results.length; i++) {
                let obj = {}
                obj.name = results[i].dataValues.id;
                let data = dataPush(results[i].dataValues);
                obj.select = data;
                obj.data = sim_cosine(input_data, data);
              
                cosineAll.push(obj);
                
            }
            cosineAll.sort(function (a, b) {
                return a.data < b.data ? 1 : -1;
            });
            console.log('이름 :  ' + input_name + '  Select : ' + input_data);
            console.log(cosineAll);
            res.json(cosineAll.slice(0,3))
        }).catch(err => {
            console.log("ERR = " + err)
        })
    
       
       
    }
    main();
   


}