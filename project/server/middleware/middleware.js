const db = require('../config/db.config')
const bcrypt = require('bcrypt')
const saltRounds = 10;
var jwt = require('jsonwebtoken')
const secret = 'secrettoken'
const request = require('request')
const cdb = require('../config/dbLoan')
const https = require('https');
const { profile } = require('console');
const { link } = require('fs');
const axios = require('axios');
const { url } = require('inspector');
const { ClientRequest } = require('http');
const { query } = require('../config/db.config');



exports.register = function (req, res, next) {
    bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
        db.execute(
            'INSERT INTO user (username, password, name, major) VALUES (?, ?, ?, ?)',
            [req.body.username, hash, req.body.name, req.body.major],
            function (err, results, fields) {
                if (err) {
                    res.json({ status: 'error', messge: err })
                }
                res.json({ status: 'OK' })
            }
        )
    })
}
exports.login = function (req, res, next) {
    db.execute(
        'SELECT * FROM user WHERE username=?',
        [req.body.username],
        function (err, user, fields) {
            if (err) {
                res.json({ status: 'error', message: err });
                return
            }
            if (user.length == 0) {
                res.json({ status: 'error', message: 'no user data' });
                return
            }
            bcrypt.compare(req.body.password, user[0].password, function (err, isLogin) {
                if (isLogin) {
                    var token = jwt.sign({ username: user[0].username }, secret, { expiresIn: '10h' });
                    res.json({ status: 'OK', message: 'login success', token })
                } else {
                    res.json({ status: 'error', message: 'login failed' })
                }
            });
        }
    );
}
exports.authens = function (req, res, next) {
    try {
        const token = req.headers.authorization.split(' ')[1]
        var decoded = jwt.verify(token, secret);
        res.json({ status: 'OK', decoded })
    } catch (err) {
        res.json({ status: 'error', message: err.message })
    }

}
exports.applyloan = function (req, res, next) {
    try {
        cdb.execute("SELECT * FROM apply_loan",
            function (error, apply_loan, fields) {
                if (error) {
                    res.json({ error });
                } else {
                    res.status(200).json({ apply_loan });
                }
            }
        );
    } catch (err) {
        res.status(500).json({ error: err });
    }
}
exports.applyloanID = function (req, res, next) {
    try {
        const id = req.params.id;
        cdb.execute("SELECT * FROM apply_loan WHERE id=?", [id],
            function (error, apply_loan, fields) {
                if (error) {
                    res.json({ error });
                } else {
                    res.status(200).json({ apply_loan });
                }
            }
        );
    } catch (error) {
        res.status(500).json({ error: err });
    }
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

exports.webhook = function (req, res) {
    let reply_token = req.body.events[0].source.userId
    // select(reply_token)
    sentline(reply_token)
    res.sendStatus(200)

}
function sentline(reply_token) {
    const line = require("@line/bot-sdk");
    const client = new line.Client({
        channelAccessToken: "hARFCA91cauLzRqqXTzzoqI8uCJBWZtBlDozccC3uU52nQVc0zlJZ8MRGs/iL279T6FPtNJxO515Zd5MfjZA7VhDdUguuGIvb2kN6N1JgZ2zZJ/DRIqsGX7CaLjFV7C6fxOAVO+ZYryv83fSM9ZiMwdB04t89/1O/w1cDnyilFU=",
    });

    client.getProfile(`${reply_token}`)
        .then((profile) => {
            database(profile)
            // console.log('userId :', profile.userId);
            // console.log('displayName :', profile.displayName);
            // console.log('pictureUrl :', profile.pictureUrl);
            // console.log('statusMessage :', profile.statusMessage);
            // console.log('language :', profile.language);
        })
        .catch((err) => {
            err
        });

}

function database(profile) {
    // const cut = profile.pictureUrl.substring(8, 300)
    const userId = profile.userId
    const displayName = profile.displayName
    const pictureUrl = profile.pictureUrl
    const statusMessage = profile.statusMessage
    const language = profile.language
    select(userId)
    try {
        db.query(`INSERT INTO dataline (userId, displayName, pictureUrl, statusMessage, language) VALUES ('${userId}', '${displayName}', '${pictureUrl}', '${statusMessage}', '${language}')`,
            function (err, results, fields) {
                sentline(profile)
            }
        )
    } catch (err) {
        console.log(err)
    }
}

function select(userId) {
    try {
        db.query(`SELECT * FROM dataline WHERE userId = '${userId}'`,
            function (err, results, fields) {
                console.log('results', results)
                if (results.length === 0) {
                    database(userId)
                }
            }
        )
    } catch (err) {
        console.log(err)
    }
}

    // function select(reply_token) {
    //     let headers = {
    //         'Content-Type': 'application/json',
    //         'Authorization': 'Bearer {hARFCA91cauLzRqqXTzzoqI8uCJBWZtBlDozccC3uU52nQVc0zlJZ8MRGs/iL279T6FPtNJxO515Zd5MfjZA7VhDdUguuGIvb2kN6N1JgZ2zZJ/DRIqsGX7CaLjFV7C6fxOAVO+ZYryv83fSM9ZiMwdB04t89/1O/w1cDnyilFU=}'
    //     }
    // let body = JSON.stringify({
    //     replyToken: reply_token,
    //     messages: [{
    //         type: 'text',
    //         text: 'Hello'
    //     },
    //     {
    //         type: 'text',
    //         text: 'How are you?'
    //     }]
    // })
    // let body = JSON.stringify({
    //     replyToken: reply_token,
    //     messages: [{
    //         type: 'text',
    //         text: 'Hello'
    //     },
    //     {
    //         type: 'text',
    //         text: 'How are you?'
    //     }]
    // })
    // request.get({
    //     url: 'https://api.line.me/v2/bot/profile/',
    //     headers: headers,
    //     body: body
    // }, (err, res, body, userId) => {
    //     console.log(body)
    // });












