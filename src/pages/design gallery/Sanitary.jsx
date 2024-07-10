
import popular1 from "../../assets/images/her1.jpeg";
import popular2 from "../../assets/images/her1.jpeg";
import popular3 from "../../assets/images/her1.jpeg";
import popular4 from "../../assets/images/her1.jpeg";
import popular5 from "../../assets/images/her1.jpeg";
import popular6 from "../../assets/images/her1.jpeg";



export default function Sanitary() {
  
 
  let myData = [
    {
      image: 'data:image/jpeg;base64,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',
      title: "Residential",
    },
    {
      image: 'data:image/jpeg;base64,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',
      title: "Commercial",
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCIZy_-_XXCe03EALIFoxZ9oLHDKl4j8kkgw&s',
      title: "Residential",
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL7o4dka7K-BDH6b64-6VT1E8PtzYB1kOsLA&s',
      title: "Residential",
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL7o4dka7K-BDH6b64-6VT1E8PtzYB1kOsLA&s',
      title: "Commercial",
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt-ymPhvtBhfyFbeM3-R4lbxeDTqVsG8DfOQ&s',
      title: "Residential",
    },
  ];

  

  return (
    <>
    <br/>
      <div className="p-10 flex flex-col lg:gap-10 gap-5 bg-secondary">
       
       

       

        <div>
          
         
        <div className="md:flex md:flex-col md:items-center">
  <div className="w-full md:w-auto md:flex md:flex-col md:items-center">
    
  <h1 className="text-[36px]  lg:text-[35px] font-bold text-center">
           Sanitaryware
        </h1>
  </div>

  
</div>



<div className="grid place-items-center md:grid md:grid-cols-3 md:gap-5">
  {myData?.map((item, index) => (
    <div key={index} className="mt-8 group">
      <div className="relative overflow-hidden rounded-3xl">
        <img
          src={item.image}
          alt=""
          className="w-full  h-[370px] md:h-[240px]  lg:h-[370px] rounded-3xl scale-100 group-hover:scale-125 transition-all duration-200"
        />
        <div className="absolute w-full h-full bg-black/60 rounded-3xl bottom-0 opacity-0 group-hover:opacity-transition-all duration-500">
          <div className="absolute right-4 top-4"></div>
          {/* <div className="text-white absolute bottom-3 left-8">
            <h2 className="text-sm">Bedroom</h2>
            <p className="text-2xl">Innovation</p>
          </div> */}
        </div>
      </div>
    </div>
  ))}
</div>

        </div>
      </div>
    </>
  );
}