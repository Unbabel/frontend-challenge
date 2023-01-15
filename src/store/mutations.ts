import { Note, State, Toast } from "@/interfaces"

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
    },
    addNote(state: State) {
        state.notes.push({
            id: Date.now(),
            voice: '',
            text: ''
        })
    },
    setToast(state: State, toast: Toast) {
        state.toast = toast
    },
    clearToast(state: State) {
        state.toast = { status: 'none', message: '' }
    }
}

export default mutations
