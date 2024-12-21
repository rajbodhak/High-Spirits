// Modal.js
import React from 'react';

const Modal = ({ isOpen, onClose, title, category, instruction, image }) => {
    if (!isOpen) return null;

    return (
        <div
            onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center text-zinc-100"
        >
            <div
                className="flex flex-col bg-white bg-opacity-5 backdrop-blur-lg rounded-lg shadow-lg max-w-xs w-full p-4 items-center" // Adjusted max-width for responsiveness
                onClick={(e) => e.stopPropagation()}
            >
                <img className="h-24 w-1/2  object-fill rounded-t-lg " src={image} alt={title} /> {/* Reduced image height */}
                <h2 className="text-lg sm:text-xl font-bold mt-2">{title}</h2>
                <p className="mt-1 text-sm sm:text-base"><span className='font-bold'>Category:</span> {category}</p> {/* Responsive font size */}
                <p className="mt-1 text-xs "><span className='font-bold'>Instruction:</span> {instruction}</p> {/* Responsive font size */}
                <button
                    className="mt-4 bg-gray-600 hover:bg-gray-700 text-white rounded-xl px-4 py-2 text-sm sm:text-base border border-white" // Responsive button text size
                    onClick={onClose}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default Modal;