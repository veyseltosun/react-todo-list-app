import { ADD_TASK } from "./actions";

const initialData = {
    taskItems :[]
}

const taskReducer = (state =initialData, action ) => {

    switch(action.type) {
        case ADD_TASK:
            return{
                ...state,
                taskItems : [...state.taskItems, {text:action.payload, completed:false}]
            }
    }

}

export default taskReducer;