
export default {
  state : {
    searchText: '',
    totalSearch: [],
    itemsInCartCount: 0,
    itemsInCart: [],
    searchResult: [],
  
  },
  mutations : {
    UPDATE_SEARCH_TEXT(state, newState) {
      state.searchText = newState;
    },
    UPDATE_TOTAL_SEARCH(state, newState) {
      state.totalSearch = newState;
    },
    UPDATE_ITEMS_CART_COUNT(state, newState) {
      state.itemsInCartCount = newState;
    },
    UPDATE_ITEM_CARTS(state, newState) {
      state.itemsInCart = newState;
    },
    UPDATE_SEARCH_RESULT(state, newState) {
      state.searchResult = newState;
    },
  },
  getters: {
    getSearchResults: state => state.searchResult,
    getSearchText: state => state.searchText,
    gettotalSearch: state => state.totalSearch,
    getItemsInCartCount: state => state.itemsInCartCount,
    getItemsInCart: state => state.itemsInCart,
  
  }, 
  actions: {
    getSearchDebounce({ commit, getters }, payload) {
      const searchData = payload.searchText ? payload.searchText : '';
      const totalSearch = payload.totalSearch;
      commit('UPDATE_ITEMS_CART_COUNT', 0)
      console.log('test 1', payload, totalSearch)
      if (searchData !== '') {
        const test = totalSearch.searchResult.filter((obj) => (
          Object.values(obj)
            .flat()
            .some((v) => (
              `${v}`.toLowerCase().includes(`${searchData}`.toLowerCase())
            ))
        ))
        commit('UPDATE_SEARCH_RESULT', {searchResult: test})
        console.log('getSearchResults', getters.getSearchResults)
        console.log('test 2', searchData, totalSearch, test)
      } else {
        const test =  totalSearch;
        console.log('test 3', searchData, totalSearch, test)
      }
  
      
    }
  }
}
 

