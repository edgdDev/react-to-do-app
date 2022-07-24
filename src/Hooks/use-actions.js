import { useReducer, useState, useEffect } from 'react';
import reducer, { initialState } from "../reducer";

export const useActions = () => {

    //Hooks
    const [inputValue, setValue] = useState('');
    const [state, dispatch] = useReducer(reducer, initialState);

    //Function to catch value from Input
    const handleInput = (values) => setValue(values);

    //Function to saveItem
    const onSaveItem = () => {

        if (!inputValue.length) {
            alert("Before to add new task, must you're sure what the field is not empty");
            return;
        }

        const payload = {
            status: 'active',
            task: inputValue,
            id: state.iterator + 1
        };
        dispatch({
            type: 'SAVE_ITEM',
            value: payload
        });
        setValue('');
    }

    useEffect(() => {
        console.log(state);
    }, [state])

    return [{ inputValue, state }, { onSaveItem, handleInput }];

}