const nbrPages= ref(0)
const globalCurrentPage=ref(0)

export const usePagination =() => { 

    const localCurrentPage=ref(0)

    const updatePage = (value) => {
        localCurrentPage.value=value

    }
    return {
        nbrPages,
        currentPage,
        updatePage
    }
}
