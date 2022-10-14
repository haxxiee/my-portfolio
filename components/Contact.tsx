import React, { FC, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact: FC = () => {
  const form = useRef<any>();

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.currentTarget.reset();
  };

  return (
    <div className="flex flex-col justify-center items-center text-gray-800 dark:text-gray-200 md:w-[30rem] md:m-auto mx-3 ">
      <div className="flex items-center gap-2 mb-8 hover:text-purple-500 hover:dark:text-purple-400 transition-colors">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          height="14"
          width="14"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"></path>
        </svg>
        <span className="font-bold uppercase text-md relative -bottom-px">
          Contact
        </span>
      </div>
      <form
        className="flex flex-col gap-5 w-full"
        ref={form}
        onSubmit={sendEmail}
      >
        <div className="flex flex-col md:w-3/4">
          <label className="font-bold" htmlFor="fullName">
            Full Name
          </label>
          <input
            className="text-base font-semibold bg-transparent border-2 border-slate-700 dark:border-slate-700 px-5 py-3 rounded focus:outline-none focus:border-slate-800 dark:focus:border-slate-300"
            name="user_name"
            type="text"
            placeholder="John Doe"
            required
          />
          <span className="text-sm">The one where you tell me your name</span>
        </div>
        <div className="flex flex-col md:w-3/4">
          <label className="font-bold" htmlFor="email">
            Email Address
          </label>
          <input
            className="text-base font-semibold bg-transparent border-2 border-slate-700 dark:border-slate-700 px-5 py-3 rounded focus:outline-none focus:border-slate-800 dark:focus:border-slate-300"
            name="user_email"
            type="email"
            placeholder="john.doe@example.com"
            required
          />
          <span className="text-sm">
            The one where you tell me how I can contact you back
          </span>
        </div>
        <div className="flex flex-col">
          <label className="font-bold" htmlFor="text">
            Message
          </label>
          <textarea
            className="text-base font-semibold bg-transparent border-2 border-slate-700 dark:border-slate-700 px-5 py-3 rounded focus:outline-none focus:border-slate-800 dark:focus:border-slate-300"
            name="message"
            rows={4}
            placeholder="Type your message here"
            required
          />
          <span className="text-sm">
            The one where you tell me what I can do to help you
          </span>
        </div>

        <div className="flex justify-center items-center">
          <button className="flex mt-6" type="submit">
            <div className="relative cursor-pointer">
              <div className="relative rounded-sm z-10 px-8 py-2.5 flex gap-2.5 items-center justify-center bg-neutral-900 dark:bg-neutral-50 text-neutral-50 dark:text-neutral-900 top-0 left-0 transition-[top_left] hover:top-0.5 hover:left-0.5 active:top-1 active:left-1">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  fontSize="16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"></path>
                </svg>
                <span className="font-bold">Send Message</span>
              </div>
              <div className="w-full h-full rounded-sm absolute top-1 left-1 border-2 border-neutral-900 dark:border-neutral-50"></div>
            </div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
