/* eslint-disable react/prop-types */
import React, { useState } from 'react'


const Person = ({ photo,person, ministry, mustard_seed }) => {
  const [imageLoaded, setImageLoaded] = useState(true);

const handleImageError = () => {
  setImageLoaded(false);
};

  return (
    <div className="c-person flex items-center py-0 cursor-pointer">
      <div className="w-1/6 py-4">
        <img
          src={imageLoaded ? photo : "/images/avatar.webp"}
          alt="user photo"
          onError={handleImageError}
          className="w-12 h-12 mx-auto"
        />
      </div>
      <div className="w-5/6 py-3">
        <p>{person}</p>
        <span className="flex items-center">
          <p className="mr-4 font-light italic">{ministry}</p>
          <p className="font-light italic">{mustard_seed}</p>
        </span>
      </div>
    </div>
  );
};

export default Person;
