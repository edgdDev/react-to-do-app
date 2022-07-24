import React from 'react';

export const CreateItem = ({ handleInput, saveItem, inputValue }) => {

    return (
        <div className='container-create-item'>
            <input
                placeholder='Add task...'
                type='text'
                value={inputValue}
                onChange={({ target }) => handleInput(target.value)}
                onKeyDown={({ key }) => key === 'Enter' && inputValue.length && saveItem()}
            />
            <button
                onClick={saveItem}
            >
                + Add
            </button>

        </div>

    )
}