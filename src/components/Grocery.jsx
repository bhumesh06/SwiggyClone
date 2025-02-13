

// Dummy Grocery Data
const groceryItems = [
  {
    id: 1,
    name: "Fresh Apples",
    price: 120, // Price in INR
    description: "Crisp and juicy, straight from the orchard.",
    image: "https://picsum.photos/200/300?random=1",
  },
  {
    id: 2,
    name: "Organic Bananas",
    price: 60,
    description: "Naturally sweet and packed with nutrients.",
    image: "https://picsum.photos/200/300?random=2",
  },
  {
    id: 3,
    name: "Carrots",
    price: 40,
    description: "Fresh and crunchy, perfect for salads.",
    image: "https://picsum.photos/200/300?random=3",
  },
  {
    id: 4,
    name: "Tomatoes",
    price: 30,
    description: "Ripe and red, great for cooking.",
    image: "https://picsum.photos/200/300?random=4",
  },
  {
    id: 5,
    name: "Spinach",
    price: 25,
    description: "Nutrient-rich leafy greens.",
    image: "https://picsum.photos/200/300?random=5",
  },
];

// Higher-Order Component (HOC)
export const HOCGroceryList = (GroceryList) => {
  return (props) => {
    const { items } = props; // Destructure `items` from props

    return (
      <>
        {items.map((item) => (
          <div key={item.id} className='p-2 m-2 border-gray-400 border-b-2 text-left flex justify-between'>
            <div className='w-9/12'>
              <div className='py-2'>
                <span className='font-bold'>{item.name}</span>
                <span> - ₹{item.price}</span>
              </div>
              <p className='text-xs'>{item.description}</p>
            </div>
            <div className='w-3/12 p-4'>
              <img src={item.image} alt={item.name} className='w-full rounded-lg' />
            </div>
          </div>
        ))}
      </>
    );
  };
};

// Grocery Page Component
const Grocery = () => {
  const GroceryListWithHOC = HOCGroceryList(); // Apply HOC

  return (
    <div className='max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md'>
      <h1 className='text-3xl font-bold text-gray-800 mb-6'>Grocery Items</h1>
      <GroceryListWithHOC items={groceryItems} />
    </div>
  );
};

export default Grocery;