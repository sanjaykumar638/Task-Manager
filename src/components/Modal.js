// Modal.js
import React from 'react';
import PieChartComponent from './PieChart';

const Modal = ({ isOpen, onClose, data }) => {
  return (
    <div className={isOpen ? "modal modal-open" : "modal modal-closed"}>
      {isOpen && (
        <div className="modal-content">
          <span className="close" onClick={onClose}>&times;</span>
          <h2>Assignment Progress</h2>
          <PieChartComponent data={data} />
        </div>
      )}
    </div>
  );
};

export default Modal;
