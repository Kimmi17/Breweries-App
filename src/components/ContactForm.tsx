import React, { useState } from "react";

const ContactForm = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Function to handle form input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col justify-center mt-14">
        <h2 className="text-xl font-bold font-serif mb-4">Contact Us!</h2>
        <form
          onSubmit={handleSubmit}
          className="border rounded-md p-2"
          style={{
            background: "linear-gradient(to right, #c5eff7, #96d6e0)",
            padding: "20px",
            borderRadius: "10px",
            maxWidth: "500px",
          }}
        >
          <img src="Brewery.jpeg" alt="Contact" className="mb-4" />
          {/* Image added here */}
          <div className="mb-4">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="block w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-black-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="block w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-black-500"
            />
          </div>
          <div className="mb-4">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows={4}
              required
              className="block w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-black-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="block py-2 px-4 mt-4 border bg-gray-900 text-white font-semibold font-serif rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
