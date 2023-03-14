import Image from 'next/image';
import AuthImage from '../../assets/AuthImage.png';
import SmallLogo from '../../assets/logo2.svg';
import {
  AuthContainer,
  CredentialBox,
  ImageBox,
} from '../../styles/layout.style';
// import { MDBMask, MDBView } from "mdbreact";

const AuthLayout = ({ children, ...props }) => (
  <AuthContainer>
    <ImageBox {...props} img={props.img}>
      {/* <MDBView> */}
      {/* <MDBMask className="" overlay="red-strong"><p>jdjdjdjdjdj</p></MDBMask> */}
      <Image
        src={AuthImage}
        alt="First slide"
        layout="fill"
        // height={`100%`}

        // style ={{
        //   height: "100%",
        //   position: "relative"
        // }}
      />
      {/* </MDBView> */}
    </ImageBox>
    <CredentialBox>
      <div className="credentialHeader space-x-4">
        {/* <RiHeartAddFill className="credentialIcon" /> */}
        <Image
          src={SmallLogo}
          alt=""
          height={30}
          width={30}
          // style={{ width: 'auto', height: 'auto' }}
        />
        <h2>CollateAm</h2>
      </div>
      <div className="credentialChildren">
        <div>
          <div
            className="credentialChildrenHeader space-y-2 mb-4"
            style={{ paddingBottom: '0.2em' }}
          >
            <h3>{props.title}</h3>
            <p>{props.discription}</p>
          </div>
          {children}
        </div>
      </div>
      <div className="credentialFooter">{/* icons */}</div>
    </CredentialBox>
  </AuthContainer>
);

export default AuthLayout;
