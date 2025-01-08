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
        'https://images.unsplash.com/photo-1736168432643-2d5882e17aeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1734279135171-b283435831db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3NHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1735405659018-b63cdfc215de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0N3x8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1735437629103-0fac198c7c2e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1735835593807-575407b39ed7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2Mnx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1735578515772-b2c4f60b4cb3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1735405659018-b63cdfc215de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0N3x8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1736168432643-2d5882e17aeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1736144287605-3919f585752c?q=80&w=1982&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1736024852276-112dad90586d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1725830826396-bcb0585da085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3NXx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1735578515772-b2c4f60b4cb3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1735578515772-b2c4f60b4cb3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D',
    ]

    return (
        <div className="px-[200px] mx-auto p-4">
            <h1 className="text-center text-2xl font-bold mb-6">Gallery</h1>
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
