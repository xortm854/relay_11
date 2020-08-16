const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path')
const request = require('request');
const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:3000', // 허락하고자 하는 요청 주소
    credentials: true, // true로 하면 설정한 내용을 response 헤더에 추가 해줍니다.
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


const client_id = '2rPyGSTC49Dfplyx5UvD';
const client_secret = 'RuhsLmEX55';
const api_url = 'https://openapi.naver.com/v1/vision/face'; // 얼굴 감지

const fs = require('fs');
const multer = require('multer');  //multer 모듈 import
const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'image/');
        },
        filename: function (req, file, cb) {
            cb(null, new Date().valueOf() + path.extname(file.originalname));
        }
    }),
});




// key값 img
app.post('/face', upload.single('img'), function (req, res) {
    var imgFile = req.file; //파일이 1개인 경우(upload.single()을 이용한 경우)

    var _formData = {
        image: 'image',
        image: fs.createReadStream(__dirname + '/'+imgFile.path)
    };
    var _req = request.post({
        url: api_url, formData: _formData,
        headers: { 'X-Naver-Client-Id': client_id, 'X-Naver-Client-Secret': client_secret }
    }).on('response', function (response) {
    });
    _req.pipe(res); // 브라우저로 출력
});


app.listen(3000, () => console.log('Server is running on port 3000...'));
