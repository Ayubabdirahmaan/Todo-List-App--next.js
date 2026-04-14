import React from "react";
import Image from "next/image";

const AboutPage = async () => {
    const response = await fetch('https://dummyjson.com/products')
    const data = await response.json()
    console.log(data);
    return (
        <div>
            <h1>hello world</h1>
            {
                <div className="grid">
                    {
                    
                    }
                </div>

            }
        </div>
    );
};

export default AboutPage;
