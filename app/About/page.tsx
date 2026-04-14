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
                        data.products?.map((prod: any) => (

                            <>
                                <h1>{prod.title}</h1>
                                <img src={prod.thumbnail} alt="" />
                            </>
                        )).slice(0, 5)
                    }
                </div>

            }
        </div>
    );
};

export default AboutPage;
