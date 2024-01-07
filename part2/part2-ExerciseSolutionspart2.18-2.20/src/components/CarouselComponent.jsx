

import Image  from "../assets/pexels-dominika-gregušová-672532.jpg";
import Image2 from "../assets/pexels-h-emre-773471.jpg";
import Image3 from "../assets/pexels-michael-steinberg-318820.jpg";
import Image4 from "../assets/pexels-pixabay-417192.jpg";
import Image5 from "../assets/pexels-vlad-vasnetsov-2348182.jpg";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const CarouselComponent = () => {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay : true,
    autoSpeed: 3000,
    cssEase: "linear",
    

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

   
  };

  return (
    
      <section className='image'>
         <Slider {...settings} >
        
          <div>
            <img src={Image}    alt="" />
          </div>
          
            <div>
              <img src={Image2}   alt="" />
            </div>

           <div>
             <img src={Image3}   alt="" />
           </div>

           <div>
             <img src={Image4}   alt="" />
           </div>

            <div>
              <img src={Image5}   alt="" />
            </div>
          </Slider>
          
        </section>
   
  );
};

export default CarouselComponent;
