import React, { useEffect } from "react";
import {
    electricalBg,
    bulb_lamp,
    Cable_Lugs,
    conduitFittings_access,
    cableTermination_kits,
    cableTray_ladder,
    circutBreaker,
    communicationControlCable,
    conduitBox,
    electri_panalboard,
    electric_metalic_tubing,
    electric_testing_equip,
    firedetectionAlarm,
    fuses,
    EnclosuresCabinets,
    FlexibleMetalicConduit,
    groundAndLightingMeterials,
    partialDiscahargeMonitor,
    powerCables,
    pvcPipes,
    rigidSteelConduit,
    safetyDisconnectSwitches,
    safetyToolsForTransmission,
    transformer,
    wireAndCables,
    wiringAndcablingAccessories,
    wiringDevices,
} from "../utils/importElectricalUtil";
import CommonServiceCard from "../components/cards/commonServiceCard";

const ElectricalPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    const products = [
        { id: 1, name: "Bulbs & Lamps", image: bulb_lamp, color: "text-blue-600" },
        {
            id: 2,
            name: "Safety Tools for Transmission Lines & Substation",
            image: safetyToolsForTransmission,
            color: "text-blue-600",
        },
        { id: 3, name: "Fire Detection & Alarm System", image: firedetectionAlarm, color: "text-red-600" },
        { id: 4, name: "Partial Discharge Monitoring System", image: partialDiscahargeMonitor, color: "text-blue-600" },
        { id: 5, name: "Electrical Testing Equipment", image: electric_testing_equip, color: "text-blue-600" },
        { id: 6, name: "Electrical Panelboards", image: electri_panalboard, color: "text-yellow-600" },
        { id: 7, name: "Fuses", image: fuses, color: "text-blue-600" },
        { id: 8, name: "Transformers", image: transformer, color: "text-blue-600" },
        { id: 9, name: "Safety & Disconnect Switches", image: safetyDisconnectSwitches, color: "text-red-600" },
        { id: 10, name: "Cable Termination & Kits", image: cableTermination_kits, color: "text-blue-600" },
        { id: 11, name: "Cable Lugs", image: Cable_Lugs, color: "text-blue-600" },
        { id: 12, name: "Communication & Control Cables", image: communicationControlCable, color: "text-blue-600" },
        { id: 13, name: "Wires & Cables", image: wireAndCables, color: "text-blue-600" },
        { id: 14, name: "Power Cables, LV, MV, HV", image: powerCables, color: "text-red-600" },
        { id: 15, name: "Wiring & Cabling Accessories", image: wiringAndcablingAccessories, color: "text-blue-600" },
        { id: 16, name: "Wiring Devices", image: wiringDevices, color: "text-blue-600" },
        { id: 17, name: "Circuit Breakers", image: circutBreaker, color: "text-red-600" },
        { id: 18, name: "Cable Tray & Ladders", image: cableTray_ladder, color: "text-blue-600" },
        { id: 19, name: "Conduit Fittings & Accessories", image: conduitFittings_access, color: "text-blue-600" },
        { id: 20, name: "Enclosures/Cabinets", image: EnclosuresCabinets, color: "text-blue-600" },
        { id: 21, name: "Conduit Boxes", image: conduitBox, color: "text-blue-600" },
        { id: 22, name: "PVC Pipes", image: pvcPipes, color: "text-blue-600" },
        { id: 23, name: "Flexible Metallic Conduits", image: FlexibleMetalicConduit, color: "text-blue-600" },
        { id: 24, name: "Electrical Metallic Tubing", image: electric_metalic_tubing, color: "text-blue-600" },
        { id: 25, name: "Rigid Steel Conduits", image: rigidSteelConduit, color: "text-gray-600" },
        { id: 26, name: "Grounding & Lightning Materials", image: groundAndLightingMeterials, color: "text-yellow-600" },
    ];

    const discription = 'CET is one of the major electrical wholesale distributor of electrical products and related services to contractors and end users. The growth and success we experience is through a network of established distributors and professional sales and technical engineers throughout the kingdom.'
    return (
        <div>
             <CommonServiceCard
                pageName="electrical"
                bgImg={electricalBg}
                discription={discription}
                division="Electrical Division"
                products={products}
                key="electrical"
            />
        </div>
    );
};

export default ElectricalPage;
