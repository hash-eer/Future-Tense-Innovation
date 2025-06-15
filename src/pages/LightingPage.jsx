import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
    lightBg,
    balletsAndCOntrolleer,
    bulbAndLamps,
    emergencyLighting,
    hazardousLightings,
    indoorLighting,
    ledLighting,
    Luminaires,
    ObstructionLight,
    OutdoorLight,
} from "../utils/importLightingUtils";
import CommonServiceCard from "../components/cards/commonServiceCard";

const LightingPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    const products = [
        { id: 1, name: "Indoor Lighting", image: indoorLighting, color: "text-blue-600" },
        {
            id: 2,
            name: "Outdoor Lighting",
            image: OutdoorLight,
            color: "text-blue-600",
        },
        { id: 3, name: "Hazardous Lighting", image: hazardousLightings, color: "text-red-600" },
        { id: 4, name: "LED Lighting", image: ledLighting, color: "text-blue-600" },
        { id: 5, name: "Obstruction Lighting", image: ObstructionLight, color: "text-blue-600" },
        { id: 6, name: "Emergency Lighting", image: emergencyLighting, color: "text-yellow-600" },
        { id: 7, name: "Ballasts & Control Devices", image: balletsAndCOntrolleer, color: "text-blue-600" },
        { id: 8, name: "Luminaires", image: Luminaires, color: "text-blue-600" },
        { id: 9, name: "Bulbs & Lamps", image: bulbAndLamps, color: "text-red-600" },
    ];

    const discription =
        "CET Lighting Division is responsible for providing an adequate, modern, aesthetic, efficient lighting system for Roadways, Bridges, Underpasses, Home Lighting, Interior Lighting, Exterior Lighting, Interior Hangings, Chandeliers Pendants, Sconces, Wall Sconces, Flush & Semi-Flush Ceiling Lights and so on.";
    return (
        <div>
            <CommonServiceCard
                pageName="lighting"
                bgImg={lightBg}
                discription={discription}
                division="Lighting Division"
                products={products}
                key="lighting"
            />
        </div>
    );
};

export default LightingPage;
