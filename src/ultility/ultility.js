
/* convert api result to our state(data) */
export const convertToState = (response) =>
    response.map((item) => ({ title: item.voice, content: item.text, id: item.id, titleEditable: false, contentEditable: false }));
    
/* convert data state to api endpoint */
export const stateToUploadData = (response) =>
    response.map((item) => ({ id: item.id, voice: item.title, text:item.content }));