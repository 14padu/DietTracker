import React from 'react'

const DeleteDiet = ({ id, onDelete }) => {
    const handleDelete = () => {
        if (window.confirm('Sure you want to delete this Diet?')){
            onDelete(id)
        }
    }
    return(
        <button className='btn btn-delete' onClick={handleDelete}>
            Delete
        </button>
    )
}

export default DeleteDiet;