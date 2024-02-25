import ClothingCard from "@/components/clothingcard";
import React from "react";

export default function Page() {
  return (
    <>
    <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center my-8">Your Virtual Laundry</h1>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          
          <div>
            <h2 className="text-xl font-semibold mb-4">Tops</h2>
            <div className="grid grid-cols-2 gap-4">
              
              <ClothingCard title="Top" image="/logov3.png" variant="Clean"/>
              
            </div>
          </div>
          
          {/* Bottoms Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Bottoms</h2>
            <div className="grid grid-cols-2 gap-4">
              <ClothingCard title="Top" image="/logov3.png" variant="Clean"/>
            </div>
          </div>
          
          {/* Shoes Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Shoes</h2>
            <div className="grid grid-cols-2 gap-4">
              <ClothingCard title="Top" image="/logov3.png" variant="Clean"/>
            </div>
          </div>
        </div>

    </main>
    </>
  );
}
