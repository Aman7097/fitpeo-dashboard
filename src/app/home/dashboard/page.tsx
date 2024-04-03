"use client";
import React from "react";

import HomeLayout from "@/layouts/Admin";
import Earning from "../../../../public/svg/Earning.svg";
import Order from "../../../../public/svg/order.svg";

import Balance from "../../../../public/svg/Balance.svg";

import TotalSales from "../../../../public/svg/TotalSales.svg";
import Hand from "../../../../public/svg/Hand.svg";

import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import BarChart from "@/app/components/OverviewBarGraph/Overview";
import CustomerChart from "@/app/components/CustomerPieChart/Customer";
import TableComponent from "@/app/components/ProductSell/ProductSellTable";

const HomePage = () => {
  return (
    <>
      <HomeLayout>
        <div className="h-full w-full flex-col items-center justify-center p-4 px-6 text-xl">
          <div className="my-6 flex items-center justify-between gap-8">
            <div className="flex items-center ">
              {" "}
              Hello sharukh
              <Hand className="h-8 w-8" />
            </div>

            <div className="flex items-center">
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5 text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  className="block w-full rounded-lg border border-gray-300 bg-white p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Search..."
                />
              </div>
            </div>
          </div>

          <div className="my-6 flex items-center justify-between gap-8">
            <div className="flex w-full items-center  justify-evenly rounded-lg bg-white  p-4">
              <div className="m-2 flex-wrap  rounded-full bg-green-400 p-6  ">
                <Earning className="h-14 w-14 text-green-400" />
              </div>

              <div className="flex-col items-center justify-between ">
                <div className="text-sm text-gray-400">Earning</div>
                <div className="text-xl  font-bold">$198k</div>
                <div className="items-center gap-2  text-sm text-gray-700">
                  <span className="py-2 font-semibold text-green-300">
                    {" "}
                    <FaArrowUp className="inline " />
                    37.2 %{" "}
                  </span>
                  this month
                </div>
              </div>
            </div>

            <div className="flex w-full items-center justify-evenly gap-2 rounded-lg bg-white  p-4">
              <div className="m-2 flex-wrap  rounded-full bg-violet-400 p-6  ">
                <Order className="h-14 w-14 text-violet-400" />
              </div>

              <div className="flex-col items-center justify-between ">
                <div className="text-sm text-gray-400">Orders</div>
                <div className="text-xl  font-bold">$2.4k</div>
                <div className="items-center gap-2  text-sm text-gray-700">
                  <span className="py-2 font-semibold text-red-300">
                    {" "}
                    <FaArrowDown className="inline " />2 %{" "}
                  </span>
                  this month
                </div>
              </div>
            </div>
            <div className="flex w-full items-center justify-evenly gap-2 rounded-lg bg-white  p-4">
              <div className="m-2 flex-wrap  rounded-full bg-blue-400 p-6  ">
                <Balance className="h-14 w-14 text-blue-400" />
              </div>

              <div className="flex-col items-center justify-between ">
                <div className="text-sm text-gray-400">Balance</div>
                <div className="text-xl  font-bold">$2.4k</div>
                <div className="items-center gap-2  text-sm text-gray-700">
                  <span className="py-2 font-semibold text-red-300">
                    {" "}
                    <FaArrowDown className="inline " />2 %{" "}
                  </span>
                  this month
                </div>
              </div>
            </div>
            <div className="flex w-full items-center justify-evenly gap-2 rounded-lg bg-white  py-4">
              <div className="m-2 flex-wrap  rounded-full bg-red-400 p-6  ">
                <TotalSales className="h-14 w-14 text-red-700" />
              </div>

              <div className="flex-col items-center justify-between ">
                <div className="text-sm text-gray-400">Total Sales</div>
                <div className="text-xl  font-bold">$89k</div>
                <div className="items-center gap-2  text-sm text-gray-700">
                  <span className="py-2 font-semibold text-green-300">
                    {" "}
                    <FaArrowUp className="inline " />
                    11%{" "}
                  </span>
                  this month
                </div>
              </div>
            </div>
          </div>

          <div className="my-6 flex items-center justify-between gap-8 py-4">
            <BarChart />
            <CustomerChart />
          </div>

          <div className="my-6 flex-col items-center  gap-8 p-4 rounded-lg  bg-white">
            <div className="flex items-center gap-8 px-2  justify-between">
              <div className="flex-col">
                <h2 className=" text-2xl font-bold">Product Sell</h2>
              </div>

              <div className="flex items-center  rounded-lg justify-end p-2 gap-2">
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      className="h-5 w-5 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    className="block w-full rounded-lg border border-gray-300 bg-white p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Search..."
                  />
                </div>

                <select
                  // value={selectedOption}
                  // onChange={handleOptionChange}
                  className="w-full rounded-lg border border-gray-300 px-6 py-2 focus:border-blue-500 focus:outline-none"
                >
                  <option value="30days">Last 30 days</option>
                  <option value="quarter">Last Quarter</option>
                  <option value="year">Last Year</option>
                </select>
              </div>
            </div>

            <div className="table w-full py-4">

              <TableComponent />

            </div>
          </div>
        </div>
      </HomeLayout>
    </>
  );
};

export default HomePage;
