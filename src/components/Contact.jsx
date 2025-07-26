import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "motion/react"

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "433222f9-e623-4b46-8444-463d84c994a3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };

  return (
    <>
      <Toaster /> {/* ✅ Toast will now appear on submit */}

      <motion.div

      initial={{opacity:0, x:-200}}
        transition={{duration: 1}}
        whileInView={{opacity:1, x:0}}
        viewport={{once:true}}
        className="text-center p-6  py-20 lg:px-32 w-full overflow-hidden"
        id="contact"
      >
        <h1 className="text-2xl sm:text-4xl font-semibold mb-2 ">
          Contact{" "}
          <span className="underline underline-offset-4 font-light decoration-1 under ">
            With Us
          </span>{" "}
        </h1>
        <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
          Ready to make a move? Let's Build your future Together
        </p>

        <form
          onSubmit={onSubmit}
          className="max-w-2xl mx-auto text-gray-600 pt-8"
        >
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 text-left font-semibold">
              Your Name
              <input
                className=" outline-0 w-full border border-gray-300 rounded py-3 px-3 mt-2"
                name="Name"
                type="text"
                placeholder="Enter Your Name"
                required
              />
            </div>

            <div className=" w-full md:w-1/2 text-left md:pl-4 font-semibold">
              Your Email
              <input
                className="outline-0 w-full border border-gray-300 rounded py-3 px-4 mt-2"
                name="Email"
                type="email"
                placeholder="Enter Your Email"
                required
              />
            </div>
          </div>
          <div className="my-6 text-left">
            Message
            <textarea
              className=" outline-0 w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"
              name="Message"
              placeholder="Write Your Message Here!"
              required
            ></textarea>
          </div>
          <button className="bg-blue-500 text-white py-2 px-6  text-center rounded">
            {result ? result : "Send Message"}
          </button>
        </form>
      </motion.div>
    </>
  );
};

export default Contact;

