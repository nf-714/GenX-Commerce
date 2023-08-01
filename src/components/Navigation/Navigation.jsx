import React from "react"
import "./navigation.scss"

const Navigation = () => {
    const btn_style = {                        
        backgroundColor: "#2D3155",
        color:"#EDF2F4",
        width:"6rem",
        height:"2rem",
        border: "1px solid #2D3155",
        margin:"0 1rem",
    }
    return (
        <div className = "navigation">
            <h1>Gen-Z</h1>
            <div className = "navigation__links" style = {
                {
                    display:"flex",
                    alignItems:"center",
                }
            }>
                <button 
                    className="navigation__btn"
                    style = { btn_style }
                >
                    Sign In
                </button>
                <button 
                    className="navigation__btn"
                    style = { btn_style }
                >
                    Sign Up
                </button>
                <p>Cart Logo</p>
            </div>
        </div>
    )
}

export default Navigation