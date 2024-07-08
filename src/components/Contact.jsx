  import React from "react";

  const Contact = () => {
    return (
      <div
        name="contact"
        className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
      >
        <form
          method="POST"
          action="https://formsubmit.co/52074a91b9ade461bee970333a879038"
          className="flex flex-col max-w-[600px] w-full"
        >
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
              Contact
            </p>
            <p className="font-bold pt-2 text-gray-400">
              Submit the form below or use an email - <a className="text-gray-300 hover:text-pink-300" href="mailto:contact@menelikmichael.com">contact@menelikmichael.com</a>
            </p>
          </div>
          <input
            className="bg-[#ccd6f6] p-2"
            type="text"
            name="name"
            id=""
            placeholder="Name"
            required
          />
          <input
            className="my-4 p-2 bg-[#ccd6f6]"
            type="email"
            name="Email"
            id=""
            placeholder="Email"
            required
          />
          <textarea
            className="bg-[#ccd6f6] p-2"
            name="message"
            rows="10"
            placeholder="Message"
            required
          ></textarea>
          <input type="hidden" name="_captcha" value="false"></input>
          <input type="hidden" name="_next" value="https://localhost:3000/success.html"></input>
          <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
            Let's Collaborate
          </button>
        </form>
      </div>
    );
  };

  export default Contact;
