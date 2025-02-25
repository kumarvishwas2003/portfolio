import React from "react";

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8cc00333-5d6a-4277-8723-66e5a0c75af1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="text-green-500 bg-black-500/50 p-8">
      <div className="text-3xl font-bold mb-8 text-center">Contact Me!</div>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto space-y-6">
        <div className="flex flex-col space-y-2">
          <label className="text-lg font-medium">Name</label>
          <input
            type="text"
            name="name"
            required
            className="p-3 bg-black border-2 border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-500 transition-all"
            placeholder="Enter your name"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-lg font-medium">Email</label>
          <input
            type="email"
            name="email"
            required
            className="p-3 bg-black border-2 border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-500 transition-all"
            placeholder="Enter your email"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-lg font-medium">Message</label>
          <textarea
            name="message"
            required
            rows="5"
            className="p-3 bg-black border-2 border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-500 resize-y transition-all"
            placeholder="Type your message here..."
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-green-500 text-black font-bold rounded-lg hover:bg-green-600 transition-colors duration-300 transform hover:scale-[1.02]"
        >
          Send Message
        </button>
      </form>

      <span className="block mt-6 text-center font-mono text-lg bg-red-500">{result}</span>
    </div>
  );
}
