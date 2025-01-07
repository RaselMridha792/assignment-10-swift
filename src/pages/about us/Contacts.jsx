import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Contacts = () => {
  const handleContact = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Successful",
      text: "Message Sending Successful",
      icon: "Success",
    });
  };
  return (
    <>
      <section className="bg-white">
        <div className="my-20 w-10/12 mx-auto px-5">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-Bebas py-5">Contacts</h1>
            <div>
              <span>
                <Link to="/">Home</Link> / Contact
              </span>
            </div>
          </div>
          <hr />
          <div className="mt-10 flex flex-col lg:flex-row  lg:gap-20">
            <div className="flex-1">
              <h1 className="text-xl font-bold">I HAVE QUESTIONS</h1>
              <p className="text-gray-500 py-3">
                Enjoy running, football, rugby, cycling, cricket, or any other
                sporting activity? We offer competitive prices and hot offers,
                exclusive and inovative products. You can expect a lot of ideas
                for sports and active lifestyle
              </p>
              <div className="mb-10">
                <form onSubmit={handleContact}>
                  <label className="form-control w-full ">
                    <div className="label">
                      <span className="label-text">Name</span>
                    </div>
                    <input
                      type="text"
                      placeholder="your name"
                      className="input input-bordered w-full"
                      required
                    />
                  </label>
                  <label className="form-control w-full ">
                    <div className="label">
                      <span className="label-text">Email</span>
                    </div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="input input-bordered w-full"
                      required
                    />
                  </label>
                  <label className="form-control w-full ">
                    <div className="label">
                      <span className="label-text">
                        Your Message (Optional)
                      </span>
                    </div>
                    <textarea
                      className="textarea textarea-bordered h-24"
                      placeholder="Your Message"
                    ></textarea>
                  </label>
                  <button
                    className="btn mt-5 bg-orange-500 text-white hover:bg-orange-600"
                  >
                    submit
                  </button>
                </form>
              </div>
            </div>
            <div className="flex-1 space-y-5 mb-20">
              <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                  How to Make an Order?
                </div>
                <div className="collapse-content">
                  <p>
                    1. Click on a Product Photo or Product Name to see more
                    detailed information. To place your order, choose the
                    specification you want and enter the quantity, and click
                    ‘Buy Now’;
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                  Delivery Terms
                </div>
                <div className="collapse-content">
                  <p>
                    The delivery times we specify start from the moment of our
                    order confirmation provided that the purchase price has been
                    paid (except for purchases by invoice). The delivery period
                    is five days unless a different delivery time is specified
                    in our online shop for the respective goods.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacts;
