import React, { useEffect } from "react";
import {instrumentationBg,guages,industrialAutomation,instrumentationTubes,labAndReserch,testAndCalibration} from'../utils/common'
import CommonServiceCard from "../components/cards/commonServiceCard";

const InstrumentationPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    const products = [
        { id: 1, name: "Test & Calibration Instruments", image: testAndCalibration, color: "text-blue-600" },
        {
            id: 2,
            name: "Gauges",
            image: guages,
            color: "text-blue-600",
        },
        { id: 3, name: "Instrumentation Tubes & Fittings", image: instrumentationTubes, color: "text-red-600" },
        { id: 4, name: "Industrial Automation", image: industrialAutomation, color: "text-blue-600" },
        { id: 5, name: "Lab & Research Equipment", image:labAndReserch, color: "text-blue-600" },
       
    ];

    const discription ='CET Instrumentation Division is one of our largest and fastest growing divisions. Our experience in the instrumentation field has allowed us to have installed and worked with a wide variety of instrumentation products. We have the talent and expertise to fully service your instrumentation needs.'
    return (
      <div>
         <CommonServiceCard
                pageName="instrumentation"
                bgImg={instrumentationBg}
                discription={discription}
                division="Instrumentation Division"
                products={products}
                key="instrumentation"
            />
      </div>
    );
};

export default InstrumentationPage;