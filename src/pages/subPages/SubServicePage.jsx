import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SubPageCard from '../../components/cards/commonSubCard';
import { getFullProductDataById, serviceConfig } from '../../utils/common';
import ServiceNotFound from '../ServiceNotFound';

const SubServicePage = () => {
    const { service, id } = useParams(); 

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
   
    const currentService = serviceConfig[service];

    const currentDta=getFullProductDataById(currentService,id)

    return (
        <div>
            {currentDta.length==0  
            ?
             <ServiceNotFound tonavigate={service} /> 
             :
            <SubPageCard
            product={currentDta.product}
            parent={service}
            bgImg={currentDta.bgImg}
            title={currentDta.title}
        />
            }
        </div>
    );
};

export default SubServicePage;