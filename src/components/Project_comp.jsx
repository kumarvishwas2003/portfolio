import React from 'react'

const Project_comp = ({name,image,description}) => {
    return (
      <>
        <div className="rounded-lg w-full mt-2  border-green-500 border-2 shadow-lg shadow-green-500/50">
          <div className="p-[1px] flex items-center justify-center">
            {/* <div className="rounded-full bg-blue-300 w-32 h-32 flex justify-center items-center">
              <span className="text-4xl font-bold text-green-500">BB</span>
            </div> */}
            <img src={image} alt="" className='w-full object-cover bg-white'/>
          </div>
          <div className="bg-black p-4 rounded-b-lg">
            <h2 className="text-2xl text-green-500 font-bold">{name}</h2>
            <p className="mt-2 text-green-500">
              {description}
              <a
                href="#"
                className="text-green-300 underline hover:text-green-600"
              >
                Load more.
              </a>
            </p>
          </div>
          <div className="bg-black px-4 py-2 rounded-b-lg border-t-2 border-green-400 flex justify-between items-center">
            <span className="text-green-500">LIVE</span>
            <span className="text-green-500">GITHUB</span>
          </div>
        </div>
      </>
    );
}

export default Project_comp