const AboutUs = () => {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">About Swiggy</h1>
        <p className="text-lg text-gray-600 mb-6">
          Swiggy is one of India's leading online food delivery platforms, connecting millions of customers
          with their favorite restaurants. Founded in 2014, Swiggy has revolutionized the way people order food,
          offering a seamless and convenient experience. With a vast network of restaurants, lightning-fast delivery,
          and a user-friendly app, Swiggy ensures that your favorite meals are just a few clicks away.
          Whether you're craving local delicacies or international cuisines, Swiggy brings the joy of food right to your doorstep.
        </p>
        <div className="space-y-2">
          <h2 className="text-xl font-bold text-gray-800">Why Choose Swiggy?</h2>
          <ul className="list-disc list-inside text-lg text-gray-700">
            <li>Food Delivery</li>
            <li>Restaurant Partners</li>
            <li>Fast Delivery</li>
            <li>Convenience</li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default AboutUs;