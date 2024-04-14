import { useLoaderData, useParams } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { Helmet } from "react-helmet-async";

const EstateDetails = () => {
  const { id } = useParams();
  const idInt = parseInt(id);

  const estatesData = useLoaderData();

  const estate = estatesData.find((estate) => estate.id === idInt);

  const { estate_title, image, segment_name, description, price, status, area, location, facilities } = estate;

  return (
    <div className="flex items-center mx-auto rounded-lg lg:max-w-[1000px]">
      <Helmet>
        <title>Elite States | Estate Details</title>
      </Helmet>
      <div className="w-1/2">
        <img src={image} className="rounded-t-lg flex flex-col" />
      </div>
      {/* Text Contents */}
      <div className="p-5 space-y-[16px] w-1/2">
        <p className="capitalize bg-primary text-white text-[12px] px-3 py-1 rounded-r-full ">{segment_name}</p>
        <div className="flex items-center justify-between">
          <div>
            <p className="capitalize text-[14px] text-white font-medium bg-primary inline-block px-3 rounded-full mb-2">{status}</p>
            <h3 className="text-[16px] font-bold">{estate_title}</h3>
          </div>
          <h2 className="text-primary lg:text-[20px] text-[18px] font-bold">{price}</h2>
        </div>
        <hr />
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-[14px] text-[#4e5c79] mb-1 font-semibold">Facilities:</h4>
            {facilities.map((facility, index) => (
              <li className="capitalize ml-4 text-[14px] text-[#4e5c79]" key={index}>
                {facility}
              </li>
            ))}
          </div>
          <div className="flex flex-col items-end">
            <div className="flex items-center gap-2">
              <MdOutlineZoomOutMap className="text-[14px] text-[#4e5c79]" />{" "}
              <p className="text-[14px] text-[#4e5c79] font-medium">{area}</p>
            </div>
            <div className="flex items-center gap-2">
              <CiLocationOn />
              <p className="text-[14px] text-[#4e5c79] font-medium">{location}</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="">
          <p className="text-[14px] text-[#4e5c79]">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default EstateDetails;
