import React from 'react';

export const ListItem = ({ items, removeItem, completeItem }) => {

    return(
        <div className='container-list-item'>
        { items.length !== 0 && items.map(e => (
            <div key={e.id} className={`content-list-item ${e.status === 'completed' && 'task-completed'}`} >
                <div className=''>
                    <input 
                        type='checkbox'
                        disabled={ e.status === 'completed' && true }
                        onChange={({ target }) => completeItem({ itemId: e.id, isChecked: target.checked })} 
                    /> 
                    <label className=''> {e.task} </label> 
                </div>
                <div>
                    <button
                        onClick={() => removeItem(e.id)}
                    >
                        {' Delete'}
                    </button>
                </div>
            </div>
        )) }

    </div>
    )
}