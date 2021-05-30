const http = require('http')
const sqlite3 = require('sqlite3').verbose()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

let db = new sqlite3.Database('test.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message)
    }
    console.log('Database connected')
})
let app = express()

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())

db.serialize(() => {
    db.run('CREATE TABLE IF NOT EXISTS todo (id INTEGER PRIMARY KEY AUTOINCREMENT, list)')
})

app.get('/', function (req,res) {
    res.send(`
        <html>
            <body>
                <form action="/todo" method="POST">
                    <input type="text" id="deskripsi" name="deskripsi" />
                    <button>Add</button>
                </form>
            </body>
        </html>
    `)
})

app.post('/todo', function (req, res) {
    db.serialize(() => {
        db.run(`INSERT INTO todo (list) VALUES ("${req.body.deskripsi}")`, function(err) {
            if (err) {
                return console.error(err.message)
            }
            console.log('Berhasil ditambahkan')
            res.send(req.body.deskripsi + " berhasil ditambahkan")
        })
    })
})

app.get('/todo', function (req, res) {
    db.all(`SELECT * FROM todo`, function(err, rows) {
        if (err) {
            return console.error(err.message)
        }
        res.json(rows)
    })
})

app.listen(3000)
