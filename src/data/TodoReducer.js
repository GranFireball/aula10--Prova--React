export const TodoReducer = (state, action) => {
    console.log(state)
    console.log(action)
    switch(action.type){
        case 'ADD_TODO':

            if(!state.find((each) => (action.payload.text) === each.text)){
                
                return [...state, {text: action.payload.text}]
            }
            return state;
        default:
            alert("Não sei");
            return state;
    }
};