import { useState, useEffect } from 'react';
import CdDetail from './CdDetail';

export const CdList = () => {
    const [cds, setCds] = useState([])
    
    useEffect(() => {
        fetch('http://127.0.0.1:8000/cds/')
        .then(response => response.json())
        .then(data => setCds(data))
    }, [])

    return (
        <>
            {cds?.map((cd) => (
                <div key={cd.id}>
                    <CdDetail cd={cd}/>
                </div>
            ))}
        </>
    )
}