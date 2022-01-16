// import dependency to handle HTTP request to our back end
import axios from 'axios'

// //to handle state
// const state = {
// }

// //to handle state
// const getters = {}

//to handle actions
const actions = {
    register: ({commit}, user) => {
            commit;
            axios.post('/api/register', user)
            .then(res => {
                console.log(res)
            }).catch (err => {
                console.log(err)
            })
    },

    login: ({commit}, user) => {
            commit;
            axios.post('/api/login', user)
            .then(res => {
                console.log(res);
                axios.get('/api/user')
                .then(res => {
                    console.log(res);
                    }).catch (err => {
                    console.log(err);
                    })
                }).catch (err => {
                    console.log(err)
            })
    },

    // postArticle: ({commit}, article) => {
    //     commit;
    //     axios.post('/api/articles', article)
    //         .then(res => {
    //             res.send(res.data)
    //         }
    //     )
    // },

    // getArticle: ({commit}, article) => {
    //     commit;
    //     axios.get('/api/articles', article)
    //         .then(res => {
    //             console.log(res.data);
    //         }
    //     )
    // },
}

// //to handle mutations
// const mutations = {
// }

//export store module
export default {
    // state,
    // getters,
    actions,
    // mutations
}