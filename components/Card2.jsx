import img from "../assets/img/image.png";
import Image from "next/image";

const Card2 = ({ data }) => {
  const { title, desc } = data;
  return (
    <div className="max-w-[700px] flex gap-4 mb-2 mt-6">
      <div>
        <Image
          className="min-w-[160px] xl:min-w-[300px] rounded-lg hover:opacity-75 cursor-pointer"
          src={img}
          alt=""
        />
      </div>
      <div>
        <h4 className="text-xl xl:text-2xl font-semibold hover:text-indigo-700 duration-150 cursor-pointer">
          {title}
        </h4>
        <p className="text-gray-700 mt-2">{desc}</p>
      </div>
    </div>
  );
};

export default Card2;
