import React from "react";

function ProductCard({title, price, category, isStockEmpty, discount}) {
    return (
        <div className="border border-gray-200 p-4 rounded-lg shadow-sm bg-white mb-4">
            <h3 className="text-xl font-bold text-blue-700">{title}</h3>
            <h2 className="text-l font-bold">{price}</h2>
            <p>{category}</p>
            <p>{isStockEmpty}</p>
            <p>{discount}</p>

            {isStockEmpty && (
                <h3 className="inline-block mt-2 bg-red-100 text-red-600 px-2 py-1 rounded-full font-semibold text-xs">
                    Habis!!!</h3>
            )}
        </div>
    );
}

export default ProductCard;