const express = require('express');
const { maridb } = require('mariadb');
const { Sequelize, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const cookieParser = require('cookie-parser');
import {User} from './models/User';

    // DATABASE



(async () => {
    await Sequelize.sync({ force: true });
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connexion à la base de donnée réussi !');
        } catch (error) {
        console.error('Connexion à la base de donnée échoué essai encore !', error);
    }
})()

    //APP

// CREATE APP AND USE
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin : 'http://localhost:3000'
}));


//HEADERS APP
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-origin', '*');
    res.setHeader('Access-Control-Allow-Headers','origin, X-Requested-with, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});


    // USERS

// MODEL USER


// REQ CREATE USER
app.post('/register', (req, res, next) => {
    (async () => {
        try {
            await User.sync ({ alter: true })

            const salt = await bcrypt.genSalt(10);
            const test = req.body.password
            const hash = await bcrypt.hash(test, salt);

            const user = User.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: hash,
            });

            res.send(await user);
            console.log(user)
            } catch (error) {
            console.error(error)
        }
    })()
})

// REQ LOGIN USER
app.post('/login', (req, res, next) => {
    (async () => {
        try {
            const user = await User.findOne({
                where: {
                    email: req.body.email,
                }
            });
            if (user) {
                const valid = await bcrypt.compare(req.body.password, user.password); 
                if (valid) {
                    res.status(200).json({
                        id: user.id,
                        token: token = jwt.sign({ id: user.id }, 'process.env.SERCRET_TOKEN', { expiresIn: '1h' }),
                    });
                } else {
                    res.status(401).json({ message: 'Mot de passe incorrect' });
                }
            } else {
                res.status(401).json({ message: 'Email incorrect' });
            }
        } catch (err) {
            console.log({message : err})
        }
    })()
})
%

// REQ FIND USER
app.get('/user', (req, res, next) => {
    (async () => {
        try {
            const verify = jwt.verify(token, 'process.env.SERCRET_TOKEN')
            if (!verify) {
                res.status(401).json({ message: 'Vous n\'êtes pas connecté' });
            } else {
                const user = await User.findOne({
                    where: {
                        id: verify.id,
                    }
                });
                res.send(user);
            }
        } catch (err) {
            console.log({ message: err })
        }
    })()
})


// REQ LOGOUT USER
app.post('/logout', (req, res, next) => {
    const verify = jwt.verify(token, 'process.env.SERCRET_TOKEN')
    const user = User.findOne({
        where: {
            id: verify.id,
        }
    });
    res.status(200).json({
        message: 'Vous êtes déconnecté',
        token: token = jwt.sign({ id: user.id }, 'process.env.SERCRET_TOKEN', { expiresIn: '0h' }),
    });
    res.send('Vous êtes déconnecté');
})

    // ARTICLES

// MODEL Article
const Article = sequelize.define("Article", {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    desc: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

// REQ POST ARTICLES
app.post('/articles', (req, res, next) => {
    (async () => {
        try {
            await Article.sync ({ alter: true })
            const article = Article.create({
                title: req.body.title,
                desc: req.body.desc,
                author: req.body.author,
            });
            console.log(article)
            } catch (error) {
            console.error(error)
        }
    })()
})

// REQ FIND ALL ARTICLES
app.get('/articles', (req, res, next) => {
    (async () => {
        try {
            const articles = await Article.findAll();
            res.send(articles)
            console.log(articles.every(article => article instanceof Article)); // true
            console.log("All articles:", JSON.stringify(articles, null, 2));
            } catch (error) {
            console.error(error)
        }
    })()
})




// EXPORT APP
module.exports = app;
