const express = require('express');
const { maridb } = require('mariadb');
const { Sequelize, DataTypes } = require('sequelize');

    // DATABASE

// CONNEXION TO DATABASE
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
});

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

// CREATE APP
const app = express();
app.use(express.json());


//HEADERS APP
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-origin', '*');
    res.setHeader('Access-Control-Allow-Headers','origin, X-Requested-with, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});


    // USERS

// MODEL USER
const User = sequelize.define("User", {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

// REQ CREATE USER
app.post('/users', (req, res, next) => {
    (async () => {
        try {
            // await User.sync ({ alter: true })
            const user = User.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password,
            });
            console.log(user)
            } catch (error) {
            console.error(error)
        }
    })()
})

// REQ FIND ALL ARTICLES
app.get('/users', (req, res, next) => {
    (async () => {
        try {
            const users = await User.findAll();
            res.send(users);
            console.log(users.every(user => user instanceof User)); // true
            console.log("All users:", JSON.stringify(users, null, 2));
            } catch (error) {
            console.error(error)
        }
    })()
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
});

// REQ POST ARTICLES
app.post('/articles', (req, res, next) => {
    (async () => {
        try {
            await Article.sync ({ alter: true })
            const article = Article.create({
                title: req.body.title,
                desc: req.body.desc,
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