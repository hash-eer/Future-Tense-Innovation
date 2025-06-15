import React, { useEffect } from "react";
import {
    communicationBg,
    adaptorAndTester,
    cctvSolutions,
    networkingAndCommunication,
    telecommunication,
    wirelessCommunication,
} from "../utils/importCommunication";
import CommonServiceCard from "../components/cards/commonServiceCard";

const CommunicationPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    const products = [
        { id: 1, name: "Adaptors & Testers", image: adaptorAndTester, color: "text-blue-600" },
        {
            id: 2,
            name: "Telecommunications",
            image: telecommunication,
            color: "text-blue-600",
        },
        { id: 3, name: "Networking & Communication Devices", image: networkingAndCommunication, color: "text-red-600" },
        { id: 4, name: "Wireless Communications", image: wirelessCommunication, color: "text-blue-600" },
        { id: 5, name: "CCTV Solutions", image: cctvSolutions, color: "text-blue-600" },
    ];

    const discription =
        "CET represents many reputed communication equipment products in the Kingdom such as Convergence / IP Telephony, IT Networking Equipments, Wireless Devices, Telecom Products and so on.";
    return (
            <CommonServiceCard
                pageName="communication"
                bgImg={communicationBg}
                discription={discription}
                division="Telecommunication Division"
                products={products}
                key="communication"
            />
    );
};

export default CommunicationPage;
