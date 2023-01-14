export interface Note {
    id: number,
    voice: string,
    text: string
}

export interface State {
    notes: Note[],
    loading: boolean
}

export interface NotesRequest {
    method: 'get' | 'post',
    data?: Note[],
    handleSuccess: Function,
    handleError: Function
}