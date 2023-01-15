export interface Note {
    id: number,
    voice: string,
    text: string
}

export interface Toast {
    status: 'success' | 'error' | 'none',
    message: string
}

export interface State {
    notes: Note[],
    loading: boolean,
    toast: Toast
}

export interface NotesRequest {
    method: 'get' | 'post',
    data?: Note[],
    handleSuccess: Function,
    handleError: Function
}