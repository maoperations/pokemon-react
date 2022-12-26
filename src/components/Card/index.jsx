import React from "react";
import { TYPES_COLOR } from "../../constants/colors";

const Card = ({ id, title, image, types, onOpen }) => {
  const color = TYPES_COLOR[types[0].type.name];

  return (
    <div
      className="p-5 rounded-2xl shadow-xl"
      style={{ backgroundColor: color }}
      onClick={onOpen}
    >
      <div className="relative flex items-center justify-between">
        <div>
          <p className="!text-4xl text-white font-bold capitalize">{title}</p>
          <div className="flex flex-col items-start gap-2 mt-5">
            {types.map((type, idx) => (
              <div
                className="bg-[rgba(255,255,255,0.5)] text-white font-bold py-2 px-6 rounded-full capitalize"
                key={idx}
              >
                <p>{type.type.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end w-[50%]">
          <img className="w-52 h-52" src={image} />
        </div>

        <div className="absolute bottom-full left-[calc(100%-30px)]">
          <p className="text-[hsla(0,0%,100%,.2)] text-3xl font-bold">#{id}</p>
        </div>
      </div>
    </div>
  );
};
export default Card;
