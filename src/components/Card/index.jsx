const Card = ({ id, title, color, image, types }) => {
  return (
    <div className="p-5 rounded-2xl bg-green-400 shadow-xl shadow-green-200">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-3xl text-white font-bold capitalize">{title}</p>
          <div className="flex flex-col items-start gap-2 mt-5">
            {types.map((type) => (
              <div className="bg-[rgba(255,255,255,0.5)] text-white font-bold py-2 px-6 rounded-full capitalize">
                <p>{type.type.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <img className="w-52 h-52" src={image} />
        </div>
      </div>
    </div>
  );
};
export default Card;
