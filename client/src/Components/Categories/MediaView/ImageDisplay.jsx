import "./ImageDisplay.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { X } from "heroicons-react";

const ImageDisplay = ({ property, setDisplayImg }) => {
  return (
    <>
      <div className="ImgContainer">
        <div className="close">
          <div
            className="enclose"
            onClick={() => {
              setDisplayImg(false);          
            }}
          >
            <X />
          </div>
        </div>
        <Carousel>
          {property.images.map((image) => {
            return (
              <>
                <div className="contImg">
                  <img src={image} alt="display-image" />
                </div>
              </>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default ImageDisplay;
