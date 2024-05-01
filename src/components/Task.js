import React, { useState } from 'react';
import { FaPencilAlt, FaTimes } from 'react-icons/fa';
import Modal from './Modal';

const Task = ({ task, onDelete, onEdit }) => {
  const [showModal, setShowModal] = useState(false);
  const pieChartData = [
    { name: 'Assigned', value: 20 },
    { name: 'InProgress', value: 30 },
    { name: 'Completed', value: 50 },
  ];

  return (
    <div>
      <div className="task">
        <div>
          <p className="taskName">
            <span className="textBold">Task Name:</span> {task.text}
          </p>
          <p className="taskDate"><span className="textBold">Description:</span> {task.day}</p>
          <button type="button" className='btn btn-warning' onClick={() => setShowModal(true)}>Progress</button>
          <Modal isOpen={showModal} onClose={() => setShowModal(false)} data={pieChartData} />
        </div>
        <div>
          <p><FaTimes onClick={() => onDelete(task.id)} className="delIcon" /></p>
          <p><FaPencilAlt onClick={() => onEdit(task.id)} className="editIcon" /></p>
        </div>
      </div>
    </div>
  );
};

export default Task;
