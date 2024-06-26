/* eslint-disable react/prop-types */
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { Link } from "react-router-dom";

const EstatesCard = ({ estate }) => {
  const { id, estate_title, image, segment_name, description, price, status, area, location, facilities } = estate;
  return (
    <div data-aos="fade-up" data-aos-duration="1000" data-aos-anchor="#estate-anchor" className="mx-auto rounded-lg bg-white shadow-lg">
      <div className="relative">
        <img src={image} className=" rounded-t-lg" />
        <p className="capitalize bg-primary text-white text-[12px] px-3 py-1 rounded-r-full absolute top-4">{segment_name}</p>
      </div>
      {/* Text Contents */}
      <div className="p-5 space-y-[12px]">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <p className="capitalize text-[14px] text-white font-medium bg-primary inline-block px-3 rounded-full">{status}</p>
            <h3 className="text-[18px] font-bold">{estate_title}</h3>
          </div>
          <h2 className="text-primary lg:text-[20px] text-[18px] font-bold">{price}</h2>
        </div>
        <hr />
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-[14px] text-[#4e5c79] mb-1 font-semibold">Facilities:</h4>
            {facilities.map((facility, index) => (
              <li className="capitalize ml-3 text-[13px] text-[#4e5c79]" key={index}>
                {facility}
              </li>
            ))}
          </div>
          <div className="flex flex-col items-end">
            <div className="flex items-center gap-2">
              <MdOutlineZoomOutMap className="text-[14px] text-[#4e5c79]" />{" "}
              <p className="text-[13px] text-[#4e5c79] font-medium">{area}</p>
            </div>
            <div className="flex items-center gap-2">
              <CiLocationOn />
              <p className="text-[13px] text-[#4e5c79] font-medium">{location}</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="">
          <p className="text-[13px] text-[#4e5c79]">{description.slice(0, 70)}...</p>
          <div className="text-right">
            <Link
              to={`/estate-details/${id}`}
              className="bg-primary inline-block text-white text-[14px] font-semibold py-2 w-full mt-3 text-center rounded-full"
            >
              View Property
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstatesCard;
