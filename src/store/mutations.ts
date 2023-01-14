import { Note, State } from "@/interfaces"

const mutations = {
    setNotes(state: State, notes: Note[]) {
        state.notes = notes
    },
    setLoading(state: State, loading: boolean) {
        state.loading = loading
    },
    updateNote(state: State, newNote: Note) {
         state.notes = state.notes.map(oldNote => {
            return oldNote.id === newNote.id ? newNote : oldNote
         })
    },
    deleteNote(state: State, id: number) {
        state.notes = state.notes.filter(note => note.id !== id)
    }
}

export default mutations
