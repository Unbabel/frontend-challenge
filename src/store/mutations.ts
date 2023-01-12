import { Note, State } from "@/interfaces"

const mutations = {
    setNotes(state: State, notes: Note[]) {
        state.notes = notes
    }
}

export default mutations
