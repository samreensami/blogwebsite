"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

declare module "@emailjs/browser" {
  export interface EmailJSResponseStatus {
    status: number;
    text: string;
  }

  export function sendForms(
    serviceID: string,
    templateID: string,
    form: HTMLFormElement,
    userID: string
  ): Promise<EmailJSResponseStatus>;
}

export default function ContactUs ()  {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.current && form.current.checkValidity()) {
      emailjs
        .sendForm(
          "service_du4ijdn",
          "template_n72gznk",
          form.current,
          "Md-OwIjLR807jSEgn"
        )
        .then(
          () => {
            alert("Email sent successfully!");
          },
          (error: Error) => {
            alert("Failed to send email. Please try again later.");
            console.error("FAILED...", error.message);
          }
        );
    } else {
      alert("Please fill out all fields correctly.");
    }
  }

  return (
    <section
      id="contact"
      className=" px-6 font-satoshiRegular flex flex-col lg:flex-row items-center sm:justify-center min-h-screen bg-green-900"
      aria-labelledby="contact-heading"
    >
      <h2 id="contact-heading" className="sr-only">
        Contact Me
      </h2>
      
      <div className="h-fit min-h-screen text-left w-full max-w-xl p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl pt-8 mt-0 font-bold font-clashDisplayRegular text-gray-800 text-center">
          <u><i><b>Contact Us</b></i></u>
        </h2>
        <p className="mt-2 text-center text-gray-600">
          Have questions? Fill out the form below.
        </p>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col mt-6 space-y-4"
        >
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="from_name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 text-black mt-1 border rounded-lg focus:ring focus:ring-green-300 focus:outline-none"
              data-has-listeners="true"
              spellCheck="false"
              data-ms-editor="true"
              data-be-installed="true"
              data-darkreader-mode="dynamic"
              data-darkreader-scheme="dark"
              data-darkreader-proxy-injected="true"
              style={{ width: "100%" }}
              data-liner-extension-version="7.16.2"
              data-new-gr-c-s-check-loaded="14.1215.0"
              data-gr-ext-installed=""
              required
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="from_email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-1 border text-black rounded-lg focus:ring focus:ring-green-300 focus:outline-none"
              data-has-listeners="true"
              spellCheck="false"
              data-ms-editor="true"
              data-be-installed="true"
              data-darkreader-mode="dynamic"
              data-darkreader-scheme="dark"
              data-darkreader-proxy-injected="true"
              style={{ width: "100%" }}
              data-liner-extension-version="7.16.2"
              data-new-gr-c-s-check-loaded="14.1215.0"
              data-gr-ext-installed=""
              required
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Enter your message"
              className="w-full h-[200px] px-4 py-2 mt-1 text-black border rounded-lg focus:ring focus:ring-green-300 focus:outline-none"
              data-has-listeners="true"
              spellCheck="false"
              data-ms-editor="true"
              data-be-installed="true"
              data-darkreader-mode="dynamic"
              data-darkreader-scheme="dark"
              data-darkreader-proxy-injected="true"
              style={{ width: "100%" }}
              data-liner-extension-version="7.16.2"
              data-new-gr-c-s-check-loaded="14.1215.0"
              data-gr-ext-installed=""
              rows={4}
              required
            />
          </div>
          <button
            type="submit"
            className="px-2 w-full py-10 text-[#f0f0f0] bg-[#047856] rounded-lg hover:bg-[#04663d] hover:text-white focus:ring focus:ring-green-300 outline-none border-none"
          >
            Send Email
          </button>
        </form>
      </div>
    </section>
  );
};
