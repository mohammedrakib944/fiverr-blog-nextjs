import Image from "next/image";
import img from "../assets/img/image.png";

const Card = ({ data }) => {
  const { title, desc } = data;
  return (
    <div className="max-w-[600px] flex gap-4">
      <div className="min-w-[180px]">
        <Image
          className="rounded-lg hover:opacity-75 cursor-pointer"
          src={img}
          alt=""
        />
      </div>
      <div>
        <h4 className="text-xl font-semibold hover:text-indigo-700 duration-150 cursor-pointer">
          {title}
        </h4>
        <p className="text-gray-700 mt-2">{desc}</p>
      </div>
    </div>
  );
};

export default Card;
