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

module.exports = app;