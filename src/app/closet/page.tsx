"use client";
import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  CheckboxGroup
} from "@nextui-org/react";
import Image from "next/image";
import ClothingCard from "@/components/clothingcard";

export default function Page() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isInvalid, setIsInvalid] = React.useState(true);
  const [topSelected, setTopSelected] = React.useState(false);
  const [bottomSelected, setBottomSelected] = React.useState(false);
  const [shoeSelected, setShoeSelected] = React.useState(false);
  const [file, setFile] = useState();
  const [filebottom, setBotFile] = useState();
  const [filetop, setTopFile] = useState();
  const [fileshoe, setShoeFile] = useState();
  const [show, setShow] = useState(false);
  const [showBottom, setBottom] = useState(false);
  const [showShoe, setShoe] = useState(false);
  const [showTop, setTop] = useState(false);
  const [ftop, setFtop] = useState(false);
  const [fbot, setFbop] = useState(false);
  const [fshoe, setFsop] = useState(false);
  // var filebottom;
  // var filetop;
  // var fileshoe;
  var variable = 'invisible';

    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    function topPath(e){
      console.log(e.target.files);
      setTopFile(URL.createObjectURL(e.target.files[0]));
    }
    function bottomPath(f) {
      console.log(f.target.files);
      setBotFile(URL.createObjectURL(f.target.files[0]));
    }
    function shoePath(f) {
      console.log(f.target.files);
      setShoeFile(URL.createObjectURL(f.target.files[0]));
    }

    function changeVariable() {
      if (variable == 'invisible') {
        variable = 'visible';
      }
      if (variable == 'visible'){
        variable = 'invisible';
      }

  
      // Update the text content of the paragraph
      // document.getElementById('variableValue').textContent = 'Variable Value: ' + variable;
    }
    
    function doneAction(){
      onOpen();
      // isVisible;
    }

  return (
    <>
    <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center my-8">Your Virtual Closet</h1>
        {/* <Button onClick={()=>setShow(!show)} title="Learn More"/>
          {
              show?<p id="variableValue">{variable}</p>:null
          } */}
        
        {/* Upload Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 flex justify-center">Add New Items</h2>
          <div className="flex justify-center">
          <Button onPress={onOpen}>Upload Item</Button>
          </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Upload Image and Select Clothing Type
              </ModalHeader>
              <ModalBody>
                
                <CheckboxGroup
                    isRequired
                    isInvalid={isInvalid}
                    label="Select Clothing Type"
                    onValueChange={(value) => {
                      setIsInvalid(value.length < 1);
                    }}
                >
                  <Checkbox value="top" isSelected={topSelected} onValueChange={()=>{setTop(true); setTopSelected; setFtop(!ftop)}} isDisabled={shoeSelected || bottomSelected && !topSelected}>Top</Checkbox>
                  <Checkbox value="bottom" isSelected={bottomSelected} onValueChange={()=>{setBottom(true); setBottomSelected; setFbop(!fbot);}} isDisabled={shoeSelected || topSelected && !bottomSelected}>Bottom</Checkbox>
                  <Checkbox value="shoes" isSelected={shoeSelected} onValueChange={()=>{setShoe(true); setShoeSelected; setFsop(!fshoe)}} isDisabled={bottomSelected || topSelected && !shoeSelected}>Shoes</Checkbox>
                </CheckboxGroup>
                <Input type="text" label="Description" />
                {/* <Input type="file" onChange={han}/> */}
                
                {ftop?<input type="file" onChange={topPath}/>:null}
                {fbot?<input type="file" onChange={bottomPath}/>:null}
                {fshoe?<input type="file" onChange={shoePath}/>:null}
                {/* <Button onPress={()=>{handleChange}}>Choose File</Button> */}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close   
                </Button>
                <Button color="primary" onPress={()=>{setShow(true); onClose(); setFtop(false); setFbop(false); setFsop(false);}}>
                  Done
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
        </div>
        
        
        <div className="grid md:grid-cols-3 gap-8 text-center">
          
          <div>
            <h2 className="text-xl font-semibold mb-4">Tops</h2>
            <div className="grid grid-cols-2 gap-4">
              <ClothingCard title="Top" image="/otops_images/black shirt.png" variant="Info"/>
              <ClothingCard title="Top" image="/otops_images/grayShirt.png" variant="Info"/>
              <ClothingCard title="Top" image="/otops_images/blueShirtSree.png" variant="Info"/>
              <ClothingCard title="Top" image="/otops_images/purpleHoodie.png" variant="Info"/>
              {
                show?showTop?<ClothingCard title="Top" image={filetop} variant="Info" visibility='visible'/>:null:null
}   
            </div>
          </div>
          
          {/* Bottoms Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Bottoms</h2>
            <div className="grid grid-cols-2 gap-4">
              <ClothingCard title="Bottom" image="/obottoms_images/blackSweatPants.png" variant="Info"/>
              <ClothingCard title="Bottom" image="/obottoms_images/cargoPants.png" variant="Info"/>
              <ClothingCard title="Bottom" image="/obottoms_images/dark_grey_sweats.png" variant="Info"/>
              <ClothingCard title="Bottom" image="/obottoms_images/jeans.png" variant="Info"/>
              {
                show?showBottom?<ClothingCard title="Top" image={filebottom} variant="Info"/>:null:null
              }
            </div>
          </div>
          
          {/* Shoes Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Shoes</h2>
            <div className="grid grid-cols-2 gap-4">
              <ClothingCard title="Bottom" image="/oshoes_images/airForce.png" variant="Info"/>
              <ClothingCard title="Bottom" image="/oshoes_images/blackRunningShoes.png" variant="Info"/>
              <ClothingCard title="Bottom" image="/oshoes_images/boots.png" variant="Info"/>
              <ClothingCard title="Bottom" image="/oshoes_images/converseRed.png" variant="Info"/>
                {
                  show?showShoe?<ClothingCard title="Top" image={fileshoe} variant="Info"/>:null:null
                }
            </div>
          </div>
        </div>
      </main>
      
    </>
  );
}
