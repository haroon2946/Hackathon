interface Product {
  title: string;
  price: string;
  imageUrl: string;
}

export default function ProductCard({ title, price, imageUrl }: Product) {
  return (
    <div className="flex flex-col items-center bg-gray-800 text-white p-4 rounded-lg">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-64 object-cover rounded"
      />
      <h2 className="mt-4 text-lg font-semibold">{title}</h2>
      <p className="text-sm text-gray-400 mt-2">{price}</p>
    </div>
  );
}


