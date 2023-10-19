import { useState } from 'react';

export default function CdDetail({cd}) {
    const [showMore, setShowMore] = useState(false);

    function handleClick() {
        setShowMore(!showMore)
    }

    return (
        <>
            <ul key={cd.id}>
                <button onClick={handleClick}>{cd.album}</button>
                {showMore &&
                    <>
                        <li>{cd.artist}</li>
                        <li>{cd.year}</li>
                    </>
                }
            </ul>
        </>
    )
}