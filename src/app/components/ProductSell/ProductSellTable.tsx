import React from "react";
import Image from "next/image";
const TableComponent: React.FC = () => {
  return (
    <div className=" w-full overflow-x-auto">
      <table className="w-full divide-y divide-gray-200">
        <thead className="py-6">
          <tr>
            <th
              scope="col"
              className="w-[70%] px-2 py-3 text-left text-xs font-medium uppercase text-gray-500 "
            >
              Product Name
            </th>
            <th
              scope="col"
              className="w-[10%] px-6 py-3 text-left text-xs font-medium uppercase text-gray-500 "
            >
              Stock
            </th>
            <th
              scope="col"
              className="w-[10%] px-6 py-3 text-left text-xs font-medium uppercase text-gray-500 "
            >
              Price
            </th>
            <th
              scope="col"
              className="w-[10%] px-6 py-3 text-left text-xs font-medium uppercase text-gray-500 "
            >
              Total Sales
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {/* Sample table data */}
          <tr>
            <td className="flex items-center gap-2 whitespace-nowrap px-6 py-4">
              <div className="rounded-lg">
                <Image
                  src="/images/redWolf.jpg"
                  alt="Red Wolf"
                  className="rounded-lg"
                  width={80}
                  height={100}
                />
              </div>

              <div className="">
                <div className="text-xl  font-bold"> Abstract</div>
                <div className="  text-sm text-gray-300">
                  {" "}
                  Lorep Ispoisdvo dovisdovi osvnao
                </div>
              </div>
            </td>
            <td className="whitespace-nowrap px-6 py-4">32 In Stock</td>
            <td className="whitespace-nowrap px-6 py-4 font-bold">$20</td>
            <td className="whitespace-nowrap px-6 py-4"> 20</td>
          </tr>
          <tr>
            <td className="flex items-center gap-2 whitespace-nowrap px-6 py-4">
              <div className="rounded-lg">
                <Image
                  src="/images/whitewolf.jpg"
                  alt="Red Wolf"
                  className="rounded-lg"
                  width={80}
                  height={100}
                />
              </div>

              <div className="">
                <div className="text-xl  font-bold"> Sarphenes Illustration</div>
                <div className="  text-sm text-gray-300">
                  {" "}
                  Lorep Ispoisdvo dovisdovi osvnao
                </div>
              </div>
            </td>
            <td className="whitespace-nowrap px-6 py-4">32 In Stock</td>
            <td className="whitespace-nowrap px-6 py-4 font-bold">$30</td>
            <td className="whitespace-nowrap px-6 py-4">50</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
