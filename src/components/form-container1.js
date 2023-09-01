import { TextField } from "@mui/material";
import VariantContainedSizeLarge from "./variant-contained-size-large";
import Footer from "./footer";

const FormContainer1 = () => {
  return (
    <section
      className="self-stretch flex flex-col items-start justify-start text-center text-lg text-cornflowerblue-200 font-components-button-large"
      id="Footer"
    >
      <div className="self-stretch bg-aliceblue overflow-hidden flex flex-col items-start justify-start gap-[10px]">
        <img
          className="relative w-[1440px] h-[530px] object-cover"
          alt=""
          src="/subscribe-section-background@2x.png"
        />
        <div className="my-0 mx-[!important] [position:relative!important] top-[52px] left-[auto!important] w-[549px] flex flex-col p-5 box-border items-center justify-start gap-[30px] ml-[auto] mr-[auto] md:py-6 md:px-0 md:box-border sm:pl-6 sm:pr-6 sm:box-border sm:ml-[auto] sm:mr-[auto] sm:[position:relative!important] sm:left-[auto!important] sm:w-full">
          <div className="self-stretch flex flex-col items-center justify-start gap-[7px]">
            <b className="self-stretch relative tracking-[0.04em] uppercase">
              subscribe to our newsletter
            </b>
            <h2 className="m-0 self-stretch relative text-11xl font-bold font-inherit text-darkslategray-100">
              Get weekly updates
            </h2>
          </div>
          <div className="self-stretch rounded-xl bg-primary-contrast shadow-[0px_0px_24px_rgba(0,_0,_0,_0.03)] flex flex-col py-7 px-[30px] items-start justify-start gap-[17px] text-left text-slategray border-[1px] border-solid border-whitesmoke">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[34px]">
                Fill in your details to join the party!
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
              <div className="self-stretch flex flex-col items-start justify-start">
                <TextField
                  className="[border:none] bg-[transparent] self-stretch"
                  color="primary"
                  variant="outlined"
                  type="text"
                  label="Your name"
                  size="medium"
                  margin="none"
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start">
                <TextField
                  className="[border:none] bg-[transparent] self-stretch"
                  color="primary"
                  variant="outlined"
                  type="text"
                  label="Email address"
                  size="medium"
                  margin="none"
                />
              </div>
            </div>
            <button className="cursor-pointer [border:none] p-0 bg-orange rounded w-[164px] h-14 overflow-hidden shrink-0 flex flex-col items-center justify-center hover:bg-darkorange sm:w-full sm:hover:bg-peru">
              <VariantContainedSizeLarge
                buttonText="submit"
                variantContainedSizeLargePosition="unset"
                variantContainedSizeLargeBoxSizing="border-box"
                buttonColor="#fff"
                buttonDisplay="inline-block"
              />
            </button>
          </div>
        </div>
      </div>
      <Footer
        dimensionCode="/locouilogo1.svg"
        dimensionCodeText="/locoui1.svg"
        dimensionText="/vector4.svg"
        dimensionValue="/vector5.svg"
        dimensionCodeImageUrl="/vector6.svg"
        footerPosition="unset"
      />
    </section>
  );
};

export default FormContainer1;
