"use client";
import ClothingCard from "@/components/clothingcard";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import React, { useState } from "react";

export default function Page() {
    // const [outfit, setOutfit] = useState();
    const [outfit, setOutfit] = useState({ pant: '', shirt: '', shoe: '' });

    const handleGenerateOutfit = async () => {
        const response = await fetch('http://127.0.0.1:5000/generate-outfit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({})
        });
        const data = await response.json();

        // Adjust the paths to be compatible with Next.js Image component
        const adjustedData = {
            pant: data.pant.replace(/\\/g, '/').startsWith('/') ? data.pant.replace(/\\/g, '/') : `/${data.pant.replace(/\\/g, '/')}`,
            shirt: data.shirt.replace(/\\/g, '/').startsWith('/') ? data.shirt.replace(/\\/g, '/') : `/${data.shirt.replace(/\\/g, '/')}`,
            shoe: data.shoe.replace(/\\/g, '/').startsWith('/') ? data.shoe.replace(/\\/g, '/') : `/${data.shoe.replace(/\\/g, '/')}`
        };

        setOutfit(adjustedData);
        console.log(adjustedData);
    };



  return (
    <>
    <main className="container mx-auto p-4">
        <div className="flex justify-center ml-10">
            {/* <h1 className="text-3xl font-bold text-center my-8">Generate an Outfit</h1> */}
            <Button className="text-3xl font-bold text-center my-8 " onPress={handleGenerateOutfit}>Generate An Outfit</Button>
            
        </div>
        <div className="flex justify-center">
        <div className="grid md:grid-cols-1 gap-8 text-center">
            <div className="grid grid-cols-1 gap-4 w-64">
              
            {/* <ClothingCard title="Top" image="" variant="Info" visibility='visible'/>
            <ClothingCard title="Top" image="" variant="Info" visibility='visible'/>
            <ClothingCard title="Top" image="" variant="Info" visibility='visible'/> */}
             <ClothingCard title="Shirt" image={outfit.shirt} variant="Info" visibility='visible'/>
            <ClothingCard title="Pant" image={outfit.pant} variant="Info" visibility='visible'/>
            <ClothingCard title="Shoe" image={outfit.shoe} variant="Info" visibility='visible'/>
            </div>
        </div>
        </div>
    </main>
    </>
  );
}
