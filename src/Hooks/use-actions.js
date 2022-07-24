import { useReducer, useState } from 'react';
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

    //Function to removeItem
    const onRemoveItem = (itemId) => {
        const newItems = state.items.filter(e => e.id !== itemId);
        dispatch({
            type: 'REMOVE_ITEM',
            value: newItems
        });
    }

    //Function to set complete item
    const onCompleteItem = ({ itemId, isChecked }) => {
        if (isChecked) {
            const newItems = state.items.map(e => {
                if (e.id === itemId) {
                    e.status = 'completed';
                    return e;
                }
                else {
                    return e;
                }
            });
            const tidyItem = newItems.sort((a, b) => {
                if (a.status === 'active' || b.status === 'completed') {
                    return -1
                }
                else {
                    return 1
                }
            });
            dispatch({
                type: 'COMPLETE_ITEM',
                value: tidyItem
            });
        }
    }

    return [{ inputValue, state }, { onSaveItem, handleInput, onRemoveItem, onCompleteItem }];

}