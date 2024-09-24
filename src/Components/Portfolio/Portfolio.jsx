import React, { useState } from "react";
import image1 from "../../assets/Images/poert1.png";
import image2 from "../../assets/Images/port2.png";
import image3 from "../../assets/Images/port3.png";
export default function Portfolio() {
  const [open, setOpen] = useState(false);
  const [first, setfirst] = useState("");

  function Open(x) {
    setfirst(x)
    console.log(x)
    setOpen(true);
    console.log(x);
  }
  function Close(e) {
    e.isPropagationStopped()
    console.log(e)
    setOpen(false);
    console.log("else");
  }
  const imagesList = [
    {
      id: 1,
      src: image1,
      alt: "Image 1",
    },
    {
      id: 2,
      src: image2,
      alt: "Image 2",
    },
    {
      id: 3,
      src: image3,
      alt: "Image 3",
    },
    {
      id: 4,
      src: image1,
      alt: "Image 1",
    },
    {
      id: 5,
      src: image2,
      alt: "Image 2",
    },
    {
      id: 6,
      src: image3,
      alt: "Image 3",
    },
  ];

  return (
    <>
      <div className=" flex  flex-col justify-center overflow-hidden bg-gray- py-6 sm:py-12">
        <div className="mx-auto max-w-screen-xl px-4 w-full">
          <div className="grid w-full sm:grid-cols-2 xl:grid-cols-3 gap-16">
            {imagesList.map((image) => (
              <div key={image.id}>
                <>
                <div
                 
                  onClick={() => Open(image.src)}
                  className="  cursor-pointer flex flex-col shadow-md rounded-xl mx-auto overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm"
                >
                  <div className="h-auto mx-auto relative overflow-hidden">
                    <div className="h-fit overflow-hidden ">
                      <img src={image.src} alt={image.alt} />
                    </div>
                    <div className="bg-green-400 opacity-0 hover:opacity-90 transition-all duration-500  flex justify-center items-center text-center absolute left-0 right-0 top-0 bottom-0">
                      <i className="text-white  fa-solid fa-plus fa-6x"></i>
                    </div>
                  </div>
                </div>
                {open && (
                  <div
                    onClick={(e) => Close(e)}
                    className=" bg-opacity-25 bg-red-400 z-50 h-screen w-full  flex justify-center items-center fixed left-0 right-0 bottom-0 top-0"
                  >
                    <div   className=" cursor-pointer flex flex-col shadow-md rounded-xl mx-auto overflow-hidden  max-w-sm">
                      <div className="h-auto mx-auto  overflow-hidden">
                        <div className="h-full overflow-hidden relative">
                          <img src={first} alt="" />
                        </div>
                      </div>
                    </div>
                    
                    
                  </div>
                  
                )}
              </>
              </div>
              
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
