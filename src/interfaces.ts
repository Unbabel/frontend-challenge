export interface Note {
    id: number,
    voice: string,
    text: string
}

export interface State {
    notes: Note[],
    loading: boolean
}