import React, { useState } from 'react';
import axios from 'axios'
import { toast } from 'react-toastify';

const Modal = ({ isOpen, onClose,title,data,setData,submitHandler }) => {

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 max-md:p-5">
      <div className="bg-white rounded-lg p-6 w-96">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Add {title}</h2>
        <form onSubmit={submitHandler}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">{title} Name</label>
            <input
              type="text"
              id="title"
              value={data}
              name='name'
              onChange={(e) => setData(e.target.value)}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-2 px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
