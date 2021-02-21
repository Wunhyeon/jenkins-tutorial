const express= require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('hello world!');
})

app.get('/typingErrorTest', (req, res) => {
    res.send('error');
})

app.listen(PORT,() => {
    console.log(`Server Listening on ${PORT}`);
})
//hi

//주님 감사드립니다~~ 정말로 감사드립니다~~~

//테스트에서 에러나면 빌드 안되는 것도 확인~~

//주님 감사드립니다. 항상 정말로 너무너무 감사드립니다~~

module.exports = app;