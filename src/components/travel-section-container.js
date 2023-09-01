import { useState } from "react";
import {
  FormControlLabel,
  Radio,
  Autocomplete,
  TextField,
  Icon,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import TopHeader from "./top-header";

const TravelSectionContainer = () => {
  const [
    selectOutlinedDateTimePickerValue,
    setSelectOutlinedDateTimePickerValue,
  ] = useState(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <section
        className="self-stretch flex flex-col items-center justify-start"
        id="Hero-Section"
      >
        <TopHeader
          locoUILogo="/locouilogo.svg"
          locoUI="/locoui.svg"
          topHeaderAlignSelf="stretch"
        />
        <section
          className="self-stretch relative h-[640px] text-center text-42xl text-primary-contrast font-baloo-bhai"
          id="Search"
        >
          <canvas className="absolute w-full top-[0px] right-[0px] left-[0px] [background:linear-gradient(78.78deg,_#114f8b_5.2%,_#2a9ad7)] h-[639.91px]" />
          <img
            className="absolute w-full top-[0.4px] right-[0px] left-[0px] max-w-full overflow-hidden h-[640px] object-cover"
            alt=""
            src="/banner--background@2x.png"
          />
          <div className="absolute top-[0px] left-[0px] w-full h-[640px] flex flex-col py-0 px-[140px] box-border items-center justify-center gap-[43px] md:pl-[30px] md:pr-[30px] md:box-border sm:w-auto sm:[align-self:unset] sm:h-auto">
            <div className="self-stretch flex flex-col items-center justify-start gap-[5px] sm:flex-1">
              <h1
                className="m-0 self-stretch relative text-inherit leading-[67px] font-normal font-inherit sm:text-23xl sm:leading-[48px] sm:flex-1"
                id="Explore"
              >{`Let’s explore & travel the world`}</h1>
              <h3
                className="m-0 self-stretch relative text-5xl leading-[32px] font-normal font-components-button-large"
                id="Find-Best"
              >
                Find the best destinations and the most popular stays!
              </h3>
            </div>
            <form
              className="self-stretch rounded-3xs bg-primary-contrast flex flex-col p-5 items-start justify-start gap-[4px] md:flex-col sm:flex-1 sm:mt-5"
              action="#"
              id="Search"
              form
              formMethod="post"
              formEncType="text/plain"
              formNoValidate
              formTarget="_self"
            >
              <div className="self-stretch overflow-hidden flex flex-row flex-wrap p-[5px] items-center justify-start gap-[5px] sm:flex-col sm:items-start">
                <h3
                  className="m-0 flex-1 relative text-xl tracking-[0.04em] uppercase font-bold font-components-button-large text-darkslategray-400 text-left sm:w-full sm:pb-2.5 sm:mb-1.5 sm:[border-bottom:1px] sm:[border-bottom-style:solid] sm:border-b-whitesmoke sm:flex-[unset] sm:self-stretch"
                  id="Search flights"
                >
                  Search flights
                </h3>
                <div className="flex flex-row flex-wrap items-start justify-center sm:w-full">
                  <div
                    className="flex flex-row items-start justify-center gap-[20px] sm:flex-1 sm:w-[100%!important]"
                    id="Radio"
                  >
                    <FormControlLabel
                      label="Return"
                      labelPlacement="end"
                      control={
                        <Radio
                          name="option2"
                          id="Return"
                          color="primary"
                          size="medium"
                        />
                      }
                      id="Return"
                      name="Return"
                    />
                    <FormControlLabel
                      label="One-way"
                      labelPlacement="end"
                      control={
                        <Radio
                          name="option1"
                          id="One-way"
                          color="primary"
                          checked
                          size="medium"
                        />
                      }
                      id="One-way"
                      name="One-way"
                    />
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start md:flex-col">
                <div className="flex-1 flex flex-row flex-wrap p-[5px] items-start justify-start gap-[10px] md:w-full md:flex-[unset] md:self-stretch sm:flex-col">
                  <Autocomplete
                    className="flex-1 sm:flex-[unset] sm:self-stretch"
                    disablePortal
                    options={["Flayer1", "Flayer2", "Flayer3"]}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        name="Departure"
                        color="primary"
                        label="Departure"
                        variant="outlined"
                        placeholder="Start Point"
                        helperText="Select your state"
                      />
                    )}
                    id="Departure"
                    defaultValue="Singapore (SIN)"
                    size="medium"
                  />
                  <Autocomplete
                    className="flex-1 sm:flex-[unset] sm:self-stretch"
                    disablePortal
                    options={["Flayer1", "Flayer2", "Flayer3"]}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        name="Arrival"
                        color="primary"
                        label="Arrival"
                        variant="outlined"
                        placeholder="Where you go.."
                        helperText="Select country"
                      />
                    )}
                    id="Arrival"
                    defaultValue="Los Angeles (LA)"
                    size="medium"
                  />
                  <div
                    className="flex-1 sm:flex-[unset] sm:self-stretch"
                    id="Date"
                  >
                    <DatePicker
                      label="Date"
                      value={selectOutlinedDateTimePickerValue}
                      onChange={(newValue) => {
                        setSelectOutlinedDateTimePickerValue(newValue);
                      }}
                      components={{
                        OpenPickerIcon: () => <Icon>calendar_today_sharp</Icon>,
                      }}
                      slotProps={{
                        textField: {
                          variant: "outlined",
                          name: "Date",
                          id: "Date",
                          size: "medium",
                          fullWidth: true,
                          color: "primary",
                          helperText: "Choose Date",
                        },
                      }}
                    />
                  </div>
                </div>
                <button
                  className="cursor-pointer [border:none] p-[5px] bg-[transparent] flex flex-col items-center justify-center md:w-full md:text-left"
                  id="Submit"
                  name="Submit"
                >
                  <button
                    className="cursor-pointer [border:none] p-0 bg-orange rounded w-[164px] h-14 overflow-hidden shrink-0 flex flex-col items-center justify-center [transition:0.3s] hover:bg-darkorange md:mr-[auto] sm:w-[100%!important]"
                    id="Search"
                    formAction
                  >
                    <div className="relative text-mini tracking-[0.46px] leading-[26px] uppercase font-medium font-components-button-large text-primary-contrast text-center inline-block w-[146.98px]">
                      Search flights
                    </div>
                  </button>
                </button>
              </div>
            </form>
          </div>
        </section>
      </section>
    </LocalizationProvider>
  );
};

export default TravelSectionContainer;
