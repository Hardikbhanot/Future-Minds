import React from "react";
    
    import tawkTo from 'tawkto-react';
    import { useEffect } from "react";
    const tawk_url = process.env.TAWK_URL;

    function Tawk() {

        const tawkToPropertyId = '60216b5cc31c9117cb770bf7'
        const tawkToKey = '1eu18momd'
        
        useEffect(() => {
            tawkTo(tawkToPropertyId, tawkToKey)
        }, [])
        return (
            <div>
            
            </div>
        );

    }
    export default Tawk;