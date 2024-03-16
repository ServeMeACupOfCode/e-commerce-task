import React, { useEffect, useState } from "react";
import { MdStar } from "react-icons/md";
import { useParams } from "react-router-dom";
import axios from "axios";
export default function ProductDetailsPage() {
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(true);
  let { id } = useParams();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setProductsList(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const { image, title, description, rating, price } = productsList;
  return (
    <div>
      <div className="p-3 max-w-7xl m-auto">
        <div className="mt-6 sm:mt-10">
          <div>
            <div className="grid gird-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6 h-max">
              <div className="overflow-hidden rounded-xl">
                <img src={image} alt="Product-Image" className="w-full" />
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <h1 className="text-3xl text-red-500 font-semibold sm:text-4xl">
                    {title}
                  </h1>
                  <p className="mt-3 text-gray-600 text-md leading-6 text-justify sm:text-left sm:mt-4">
                    {description}
                  </p>
                  <span className="my-3 text-xl text-yellow-600 flex items-center gap-1 sm:my-4">
                    {Array.from({ length: rating }).map((_, index) => (
                      <MdStar key={index} />
                    ))}
                  </span>
                  <span className="text-xl text-red-500 font-semibold sm:text-2xl">
                    ${price}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
