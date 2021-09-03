import Vuex from "vuex";

const createStore = () => {
    return new Vuex.Store({
        state : {
            fetchedPosts : []
        },
        mutations : {
            setPosts(state,posts){
                state.fetchedPosts = posts
            }
        },
        actions : {
            setPosts(vuexContext, posts){
                vuexContext.commit("setPosts",posts)
            }
        },
        getters : {
            getPosts(state){
                return state.fetchedPosts
            }
        }
    })
}

export default createStore