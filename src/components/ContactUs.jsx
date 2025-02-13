
const ContactUs = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Contact Us</h1>
      <p className="text-lg text-gray-600 text-center mb-8">
        Have questions, feedback, or need assistance? We're here to help! Reach out to us via the contact details below,
        or fill out the form, and our team will get back to you as soon as possible. Your satisfaction is our priority!
      </p>

      <div className="space-y-4 mb-8">
        <div className="flex items-center justify-center space-x-3">
          <span className="text-2xl">📞</span>
          <span className="text-lg text-gray-700">+91 12345 67890</span>
        </div>
        <div className="flex items-center justify-center space-x-3">
          <span className="text-2xl">📧</span>
          <span className="text-lg text-gray-700">support@swiggymock.com</span>
        </div>
        <div className="flex items-center justify-center space-x-3">
          <span className="text-2xl">📍</span>
          <span className="text-lg text-gray-700">123 Swiggy Street, Food City, India</span>
        </div>
      </div>

      <form className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Enter your message"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;