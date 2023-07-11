const mongoose = require('mongoose');


const express = require('express')

const app = express()


app.use(express.json());
app.use(require('./routes/genre.route'))
app.use(require('./routes/book.route'))
app.use(require('./routes/review.route'))
app.use(require('./routes/author.route'))


mongoose.connect('mongodb+srv://admin:1998@intocode.6gsnoaz.mongodb.net/books')


.then(() => console.log('успешно соединились с сервером MongoDB'))
.catch(() => console.log('ошибка при соединении с сервером MongoDB'))

app.listen(2000, () => {
    console.log('сервер запушен успешно');
})