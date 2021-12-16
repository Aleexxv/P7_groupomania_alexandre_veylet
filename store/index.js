// import dependency to handle HTTP request to our back end
import axios from 'axios'

// //to handle state
// const state = {}

// //to handle state
// const getters = {}

//to handle actions
const actions = {
    register: ({commit}, user) => {
        commit;
        axios.post('/api/users', user)
            .then(res => {
                console.log(res);
            }
        )
    },

    getUsers: ({commit}, users) => {
        commit;
        axios.get('/api/users', users)
            .then(res => {
                console.log(res.data);
            }
        )
    },

    postArticle: ({commit}, article) => {
        commit;
        axios.post('/api/articles', article)
            .then(res => {
                console.log(res);
            }
        )
    },
    
    getArticles: ({commit}, articles) => {
        commit;
        axios.get('/api/articles', articles)
            .then(res => {
                console.log(res.data);
            }
        )
    },
}

// //to handle mutations
// const mutations = {}

//export store module
export default {
    // state,
    // getters,
    actions,
    // mutations
}