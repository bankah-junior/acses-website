import React from "react";

const MessageCard = ({ title, name, imageSrc, message }) => {
  return (
    <div className="w-full border rounded-lg shadow-md p-6 min-h-[16rem] md:min-h-[20rem] transition-transform transform hover:scale-105 hover:shadow-lg bg-gradient-to-r from-green-300 via-green-200 to-white hover:from-green-400 hover:via-green-300">
      <div className="flex items-center gap-4 mb-4">
        <div className="relative w-16 h-16 rounded-full overflow-hidden">
          <img
            src={imageSrc}
            alt={name}
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-sm text-black-500">{name}</p>
        </div>
      </div>
      <div>
      <p
        className="text-black-6000 font-bold"
           style={{
            textShadow: "0.5px 0.5px 1px white, -0.5px -0.5px 1px white",
         }}
>
         {message}
       </p>

      </div>
    </div>
  );
};

export default MessageCard;
