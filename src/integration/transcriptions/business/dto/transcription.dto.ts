export interface TranscriptionDTO {
    id: number;
    voice: string;
    text: string;
    isNew: boolean;
    isEdited?: boolean;
}
