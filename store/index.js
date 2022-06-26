export const getters = {
    bookList:(state) => {
        return state.books
    }
}

export const state =  {
    books:[]
}

export const mutations = {
    SET_BOOKS(state, book){
        state.books = book
    }
}

export const actions = {
    setBooks({ commit }, payload){
        commit("SET_BOOKS", payload)
    }
}