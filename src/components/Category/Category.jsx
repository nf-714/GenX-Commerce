import React from "react"
import categories from "./categories.js"

import "./category.scss"

export default function Category() {
    return (
        <div className="category">
            {categories.map((category) => {
                return (
                    <div 
                        className="category__container"
                        key = {category.id} 
                        style = {{
                            background: `linear-gradient(rgba(85, 72, 83, 0.61), rgba(59, 60, 71, 0.61)), url("${category.imageUrl}")`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            height: "16rem",
                            display: "flex",
                            textAlign: "center",
                            justifyContent: "center",
                            alignItems: "center",
                            border:"3px solid #2D3155",
                            borderRadius: "20px",
                        }}
                    >
                        <h3 className="category__titles">{category.title}</h3>
                    </div>
                )
            })}          
        </div>
    );
}