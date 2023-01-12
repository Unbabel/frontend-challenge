import { Note, State } from "@/interfaces"

const mutations = {
    setNotes(state: State, notes: Note[]) {
        state.notes = notes
    },
    setLoading(state: State, loading: boolean) {
        state.loading = loading
    }
}

export default mutations
