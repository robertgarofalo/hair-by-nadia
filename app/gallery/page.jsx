'use client'

import { useEffect, useState } from "react";
import Image from "next/image";

export default function MasonryGrid() {
    // const [images, setImages] = useState([]);

    // useEffect(() => {
    //     fetch("https://api.unsplash.com/photos?client_id=YOUR_ACCESS_KEY")
    //         .then((res) => res.json())
    //         .then((data) => setImages(data));
    // }, []);


    const images = [
        'https://cdn.pixabay.com/photo/2018/02/14/21/45/woman-3153999_640.jpg',
        'https://cdn.pixabay.com/photo/2017/06/15/11/40/beautiful-2405131_640.jpg',
        'https://cdn.pixabay.com/photo/2016/06/06/17/05/woman-1439909_640.jpg',
        'https://cdn.pixabay.com/photo/2017/05/28/09/44/woman-2350565_640.jpg',
        'https://cdn.pixabay.com/photo/2024/08/24/05/02/woman-8993222_640.jpg',
        'https://cdn.pixabay.com/photo/2019/09/16/09/30/alone-4480444_640.jpg',
        'https://cdn.pixabay.com/photo/2015/07/07/23/40/fashion-835219_640.jpg',
        'https://cdn.pixabay.com/photo/2020/02/24/09/11/man-4875665_640.jpg',
        'https://cdn.pixabay.com/photo/2024/06/10/06/54/ai-generated-8820062_640.jpg',
        'https://cdn.pixabay.com/photo/2018/04/27/03/51/woman-3353702_640.jpg',
        'https://cdn.pixabay.com/photo/2020/06/08/09/01/hair-5273705_640.jpg',
        'https://cdn.pixabay.com/photo/2020/01/17/16/26/portrait-4773351_640.jpg',
        'https://cdn.pixabay.com/photo/2023/08/17/19/00/woman-8197201_640.jpg',
        'https://cdn.pixabay.com/photo/2021/09/04/05/11/hair-6597025_640.jpg',
        'https://cdn.pixabay.com/photo/2024/10/27/15/43/ai-generated-9153698_640.png',
        'https://cdn.pixabay.com/photo/2024/05/06/00/39/one-person-8742116_640.jpg',
        'https://cdn.pixabay.com/photo/2014/10/31/07/05/young-girl-510441_640.jpg',
    ]

    return (
        <div className="px-[200px] mx-auto p-4">
            {/* <h2 className="text-center text-2xl font-bold mb-6">Gallery</h2> */}
            <div className="text-center">
                <h1 className="text-[48px] inline-block mb-10 text-luxury border-b-2 border-luxury">Gallery</h1>
            </div>

            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 space-y-4">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="break-inside-avoid overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    >
                        <Image
                            src={image}
                            alt={`image ${index}`}
                            width={500}
                            height={300}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
