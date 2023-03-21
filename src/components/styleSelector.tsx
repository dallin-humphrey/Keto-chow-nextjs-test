import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';

import shoeSelectorOne from '../../public/shoeSelectorOne.png';
import shoeSelectorTwo from '../../public/shoeSelectorTwo.png';
import shoeSelectorThree from '../../public/shoeSelectorThree.png';
import shoeSelectorFour from '../../public/shoeSelectorFour.png';
import shoeSelectorFive from '../../public/shoeSelectorFive.png';

type Style = {
    id: number;
    url: StaticImageData;
    alt: string;
};

const StyleSelector: React.FC = () => {
    const [selectedStyle, setSelectedStyle] = useState<number>(0);

    const styles: Style[] = [
        { id: 0, url: shoeSelectorOne, alt: 'Style 1' },
        { id: 1, url: shoeSelectorTwo, alt: 'Style 2' },
        { id: 2, url: shoeSelectorThree, alt: 'Style 3' },
        { id: 3, url: shoeSelectorFour, alt: 'Style 4' },
        { id: 4, url: shoeSelectorFive, alt: 'Style 5' },
    ];

    const handleStyleSelect = (id: number) => {
        setSelectedStyle(id);
    };

    return (
        <div className="style-selector flex items-center justify-center w-3/5 mt-4">
            {styles.map((style) => (
                <div
                    key={style.id}
                    className={`w-18 h-12 mx-2 cursor-pointer rounded ${selectedStyle === style.id ? 'border border-slate-500' : ''
                        }`}
                    onClick={() => handleStyleSelect(style.id)}
                >
                    <Image src={style.url} alt={style.alt} width={150} height={150} objectFit="cover" className='rounded' />
                </div>
            ))}
        </div>
    );
};

export default StyleSelector;
