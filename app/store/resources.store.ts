export const useRessourcesStore = defineStore('ressources', {
    state: () => ({
        rscMailObjecs: [
            {id: 'contact', label: "prise de contact", disabled: true}
        ]
    }),
    getters: {
        getNotDisabled: (state) => state.rscMailObjecs.filter((el) => !el.disabled)
    },
    actions: {
        login() {
            console.log()
        }
    }
})
