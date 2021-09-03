import Vuex from "vuex";
import axios from "axios";

const createStore = () => {
    return new Vuex.Store({
        state: {
            fetchedPosts: []
        },
        mutations: {
            setPosts(state, posts) {
                state.fetchedPosts = posts
            },
            addPost(state, post) {
                state.fetchedPosts.push(post)
            },
            updatePost(state, editedPost) {
                let postIndex = state.fetchedPosts.findIndex(post => post.id == editedPost.id)
                state.fetchedPosts[postIndex] = editedPost
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                return context.app.$axios.get(process.env.baseURL+"posts.json")
                    .then(response => {
                        let data = response.data;
                        let postArray = []
                        for (let key in data) {
                            postArray.push({ id: key, ...data[key] })
                        }
                        vuexContext.commit("setPosts", postArray)
                    })
            },
            setPosts(vuexContext, posts) {
                vuexContext.commit("setPosts", posts)
            },
            addPost(vuexContext, post) {
                return this.$axios.post(process.env.baseURL+"posts.json", post)
                    .then(response => {
                        vuexContext.commit("addPost", { ...post, id: response.data.name })
                    })
            },
            updatePost(vuexContext, editedPost) {
                return this.$axios.put(
                    process.env.baseURL+"posts/" +
                    editedPost.id +
                    ".json", editedPost
                ).then(response => {
                    vuexContext.commit("updatePost", editedPost)
                }).catch(e => console.log(e))
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