import { useState } from 'react';
import Swal from "sweetalert2";
import { format } from 'date-fns';

const AddTask = ({ onSave }) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const currentDate = new Date();

    const onSubmit = (e) => {
        e.preventDefault();

        if (!text && !day) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Fill in your task and description or close the form!'
            })
        } else if (!text && day) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Fill in your task!'
            })
        } else if (text && !day) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Fill in your description!'
            })
        } else {
            onSave({ text, day });
        }

        setText('');
        setDay('');
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="add task" value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Description</label>
                <input type="text" placeholder="Description" value={day} onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className='form-control'>
                <p className='space'> Date: {format(currentDate, 'MMMM dd, yyyy')}</p>
                
                <p className='space'> Time: {format(currentDate, 'HH:mm:ss')}</p>
            </div>

            <input type="submit" className="btn btn-block" value="Save Task" />
        </form>
    )
}

export default AddTask