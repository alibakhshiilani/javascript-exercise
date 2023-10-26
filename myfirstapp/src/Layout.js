import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./Layout.css"

const Layout = () => {

    const [theme,setTheme] = useState(
        localStorage.getItem("theme") || "light"
    )

    return <div>
        {/* <header style={{backgroundColor:"green"}}>
            <button onClick={() => {
                const newTheme = theme === "light" ? "dark" : "light";

                setTheme(newTheme)
                localStorage.setItem("theme",newTheme)
            }}>
                
                <span className="theme-charcater">{theme}</span> Mode
                
            </button>
        </header> */}
        <Outlet />
        {/* <footer style={{backgroundColor:"blue"}}>Footer</footer>   */}
    </div>
}

export default Layout;