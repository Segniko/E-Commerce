"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Button from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link"; // Import Link component
import { useRouter } from 'next/router';

export default function Products() {

  const products = [
    // Electronics
    {
      name: "Wireless Bluetooth Headphones",
      description: "High-quality sound with active noise cancellation.",
      price: "$79.99",
      image: "/headphones-placeholder.jpg",
    },
    {
      name: "Smartphone 13 Pro",
      description: "The latest smartphone with top-tier performance.",
      price: "$999.99",
      image: "/smartphone-placeholder.jpg",
    },
    {
      name: "4K Ultra HD Smart TV",
      description: "Cinematic experience with crystal-clear visuals.",
      price: "$499.99",
      image: "/tv-placeholder.jpg",
    },
    {
      name: "Portable Bluetooth Speaker",
      description: "Rich, immersive sound with compact design.",
      price: "$39.99",
      image: "/speaker-placeholder.jpg",
    },
    {
      name: "Gaming Laptop Pro",
      description: "High-performance laptop for gamers and creators.",
      price: "$1,399.99",
      image: "/laptop-placeholder.jpg",
    },

    // Fashion
    {
      name: "Men's Casual T-Shirt",
      description: "Soft, breathable fabric perfect for everyday wear.",
      price: "$19.99",
      image: "/tshirt-placeholder.jpg",
    },
    {
      name: "Women's Summer Dress",
      description: "Stylish and comfortable dress for summer outings.",
      price: "$29.99",
      image: "/dress-placeholder.jpg",
    },
    {
      name: "Leather Office Shoes",
      description: "Premium leather shoes for work and formal events.",
      price: "$89.99",
      image: "/shoes-placeholder.jpg",
    },
    {
      name: "Winter Puffer Jacket",
      description: "Stay warm and stylish during winter seasons.",
      price: "$79.99",
      image: "/jacket-placeholder.jpg",
    },
    {
      name: "Classic Blue Jeans",
      description: "Timeless style with a comfortable fit.",
      price: "$49.99",
      image: "/jeans-placeholder.jpg",
    },

    // Accessories
    {
      name: "Leather Wallet",
      description: "Compact and durable wallet with multiple compartments.",
      price: "$25.99",
      image: "/wallet-placeholder.jpg",
    },
    {
      name: "Fitness Smartwatch",
      description: "Track your health and stay connected on the go.",
      price: "$199.99",
      image: "/smartwatch-placeholder.jpg",
    },
    {
      name: "Modern Sunglasses",
      description: "Stylish sunglasses with UV protection.",
      price: "$29.99",
      image: "/sunglasses-placeholder.jpg",
    },
    {
      name: "Backpack Pro",
      description: "Ergonomic and stylish backpack for daily use.",
      price: "$69.99",
      image: "/backpack-placeholder.jpg",
    },

    // Home and Kitchen
    {
      name: "Kitchen Stand Mixer",
      description: "Perfect for baking and cooking enthusiasts.",
      price: "$299.99",
      image: "/mixer-placeholder.jpg",
    },
    {
      name: "Nonstick Cookware Set",
      description: "Durable, easy-to-clean cookware for your kitchen.",
      price: "$99.99",
      image: "/cookware-placeholder.jpg",
    },
    {
      name: "Modern Coffee Maker",
      description: "Brew fresh and delicious coffee at home.",
      price: "$59.99",
      image: "/coffeemaker-placeholder.jpg",
    },
    {
      name: "Ergonomic Office Chair",
      description: "Comfortable chair for your work-from-home setup.",
      price: "$149.99",
      image: "/chair-placeholder.jpg",
    },

    // Fitness
    {
      name: "Yoga Mat Pro",
      description: "Premium yoga mat for comfort and durability.",
      price: "$39.99",
      image: "/yogamat-placeholder.jpg",
    },
    {
      name: "Adjustable Dumbbell Set",
      description: "Perfect for home workouts with adjustable weights.",
      price: "$129.99",
      image: "/dumbbell-placeholder.jpg",
    },
    {
      name: "Running Shoes",
      description: "Lightweight and supportive shoes for runners.",
      price: "$59.99",
      image: "/runningshoes-placeholder.jpg",
    },

    // Beauty and Personal Care
    {
      name: "Skincare Set",
      description: "Essential skincare products for glowing skin.",
      price: "$49.99",
      image: "/skincare-placeholder.jpg",
    },
    {
      name: "Hair Dryer Pro",
      description: "Fast-drying hair dryer with multiple heat settings.",
      price: "$79.99",
      image: "/hairdryer-placeholder.jpg",
    },
    {
      name: "Electric Toothbrush",
      description: "Advanced cleaning for healthier teeth and gums.",
      price: "$39.99",
      image: "/toothbrush-placeholder.jpg",
    }
  ];

  const handleAddToCart = () => {
    // Add your logic to add the product to the cart here
  };

  return (
    <div>
      <Header />
      <main className="pt-32 pb-16 px-4">
        <h1 className="text-4xl font-bold mb-8">Our Products</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={200}
                className="rounded-lg w-full mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-400 mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold">{product.price}</span>
                <Button className="bg-blue-500 text-white hover:bg-blue-600" onClick={handleAddToCart}>
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
