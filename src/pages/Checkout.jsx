
import React from "react";
import { useNavigate } from "react-router-dom";
function Checkout() {
  const navigate = useNavigate();
  function handleclikchek() {
    navigate("/orders");
  }
  return (
    <div>
      <div>
        <div className="container pl-56 pr-56">
          <h2 className="font-semibold text-3xl pb-6">Place Your Order</h2>
          <hr className="pb-7" />

          <div class=" p-10 flex flex-col gap-10  rounded-lg shadow-lg w-[600px] ">
            <h2 className="font-semibold text-xl">Shipping information</h2>
            <div class="w-full flex flex-col gap-10">
              <div id="input" class="relative">
                <input
                  type="text"
                  class="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-violet-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
                  placeholder="First name"
                />
                <label
                  for="floating_outlined"
                  class="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white disabled:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  First name
                </label>
              </div>

              <div id="input" class="relative">
                <input
                  type="text"
                  class="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-violet-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
                  placeholder="Address"
                />
                <label
                  for="floating_outlined"
                  class="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white disabled:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Address
                </label>
              </div>
            </div>

            <div class="">
              <button
                onClick={handleclikchek}
                class="w-full rounded-lg flex items-center justify-center text-sm px-5 py-2 focus:outline-none h-[50px] border bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 border-blue-500-blue- text-white focus:ring-4 focus:ring-blue-200 hover:ring-4 hover:ring-blue-100 transition-all duration-300"
                type="button"
              >
                <div class="flex gap-2 items-center">PLACE YOUR ORDER</div>
              </button>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Checkout;
