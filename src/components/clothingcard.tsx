import { Button } from "@nextui-org/react";
import Image from "next/image";

type CardProps={
    title: string;
    image: string;
    variant: string;
    visibility?: string;
}
const ClothingCard = ({title, image, variant, visibility}: CardProps) => {
  return (
    <div className={visibility}>
        <div className="border p-4 mb-2">
             <Image 
               src={image}
               alt={title}
               width={200}
               height={200}
             />

        </div>
            {/* <Button fullWidth>{variant}</Button> */}
    </div>
  )
}

export default ClothingCard