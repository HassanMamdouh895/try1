import React, { useState } from "react";

export default function Contact() {
  return (
    <>
      <div className=" flex-col bg-white  h-screen items-center">
        <h1 className="text-5xl uppercase font-semibold whitespace-nowrap text-center text-black pt-8">
        conatct section
        </h1>
        <div className="flex justify-center items-center pt-4">
          <div className="h-1 bg-black w-20"></div>
          <i className="fa-solid px-4 text-black  fa-star"></i>
          <div className="h-1 bg-black w-20"></div>
        </div>
        <div className="flex items-center justify-center p-12">
    {/* <!-- Author: FormBold Team -->
    <!-- Learn More: https://formbold.com --> */}
    <div className="mx-auto w-full max-w-[550px] ">
        <div action="https://formbold.com/s/FORM_ID" method="POST">
            <div className="mb-5">
                <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
                    Full Name
                </label>
                <input type="text" name="name" id="name" placeholder="Full Name"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
            <div className="mb-5">
                <label htmlFor="email" className="mb-3 block text-base font-medium text-[#07074D]">
                    Email Address
                </label>
                <input type="email" name="email" id="email" placeholder="example@domain.com"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
            <div className="mb-5">
                <label htmlFor="subject" className="mb-3 block text-base font-medium text-[#07074D]">
                    Subject
                </label>
                <input type="text" name="subject" id="subject" placeholder="Enter your subject"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
            <div className="mb-5">
                <label htmlFor="message" className="mb-3 block text-base font-medium text-[#07074D]">
                    Message
                </label>
                <textarea rows="4" name="message" id="message" placeholder="Type your message"
                    className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"></textarea>
            </div>
            <div>
                <button
                    className="hover:shadow-form rounded-md bg-[#07074D] py-3 px-8 text-base font-semibold text-white outline-none">
                    Submit
                </button>
            </div>
        </div>
    </div>
</div>
      </div>
    </>
  );
}
