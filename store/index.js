import Vuex from "vuex";

const createStore = () => {
    return new Vuex.Store({
        state: {
            fetchedPosts: []
        },
        mutations: {
            setPosts(state, posts) {
                state.fetchedPosts = posts
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                if(!process.client){
                    
                }
                vuexContext.commit("setPosts", [
                    {
                        id: 1,
                        title: "Başlık 1",
                        subTitle: "Alt Başlık 1",
                        text: "Açıklama 1",
                        author: "Yazar 1",
                    },
                    {
                        id: 2,
                        title: "Başlık 2",
                        subTitle: "Alt Başlık 2",
                        text: "Açıklama 2",
                        author: "Yazar 2",
                    },
                ])
            },
            setPosts(vuexContext, posts) {
                vuexContext.commit("setPosts", posts)
            }
        },
        getters: {
            getPosts(state) {
                return state.fetchedPosts
            }
        }
    })
}

export default createStore