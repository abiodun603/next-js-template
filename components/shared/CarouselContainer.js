import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";
import AuthImage from "../../assets/AuthImg.svg"
// import 'bootstrap-css-only/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';
import Image from "next/image";
const CarouselPage = () => {
  return (
    <MDBContainer style={{display: "block"}}>
      <MDBCarousel
        activeItem={1}
        length={1}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>

          <MDBCarouselItem itemId="1">
            <MDBView style={{display: "block"}}>
                <Image
                    src={AuthImage}
                    alt="First slide"
                    layout="intrinsic"
                />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}
export default CarouselPage;

