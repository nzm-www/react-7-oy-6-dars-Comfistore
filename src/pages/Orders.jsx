import React from "react";

function Orders() {
  return (
    <div>
      <div className="container pl-56 pr-56">
        <h2 className="font-medium text-4xl pb-6 text-slate-600">
          Your Orders
        </h2>
        <hr />
        <h2 className="pt-10 pb-8">Total Orders</h2>
        <div className="flex gap-[200px]">
          <div className="flex items-center gap-44">
            <p className="text-sm font-bold ">Name</p>
            <p className="text-sm font-bold ">Address</p>
          </div>
          <div className="flex items-center gap-44">
            <p className="text-sm font-bold ">Products</p>
            <p className="text-sm font-bold ">Cost</p>
            <p className="text-sm font-bold ">Date</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
