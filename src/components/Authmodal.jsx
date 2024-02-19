import React from 'react'
import RegisterAndLogin from './RegisterAndLogin';



const Authmodal = ({ closeModal }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
        <div className='bg-white p-8 rounded-lg relative'>
            <button className='absolute top-2 right-2 text-black bg-slate-300 rounded-full p-2' onClick={closeModal}>
                Close
            </button>
            <RegisterAndLogin />
        </div>
    </div>
  )
}

export default Authmodal;
