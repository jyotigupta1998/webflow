const TodoReducer = (state={todos:[]},action)=>{
    switch(action.type){
        case "Add_todo": 
            return {todos:action.payload};
        case "Remove_todo":
            return {todos:action.payload};
        default: 
            break;
    }
}

export default TodoReducer;