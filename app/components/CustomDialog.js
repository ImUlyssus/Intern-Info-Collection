import React from 'react';

export function CustomDialog({ message, onClose }) {
  return (
    <div style={dialogOverlayStyle}>
      <div style={dialogBoxStyle}>
        <h4 style={{ color: '#FF0000', fontSize: "20px", fontWeight: "bold", padding: "5px" }}>Missing Information</h4>
        <p>{message}</p>
        <button onClick={onClose} style={buttonStyle}>
          Close
        </button>
      </div>
    </div>
  );
}

// Styles for custom dialog
const dialogOverlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
};

const dialogBoxStyle = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '8px',
  textAlign: 'center',
  width: '400px',
};

const buttonStyle = {
  padding: '0.5rem 1.5rem',
  backgroundColor: '#000',
  color: '#fff',
  border: 'none',
  cursor: 'pointer',
  borderRadius: '5px',
};
