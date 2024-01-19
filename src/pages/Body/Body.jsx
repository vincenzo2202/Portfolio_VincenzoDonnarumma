import { Navigate, Route, Routes, } from "react-router-dom"
import { Home } from "../Home/Home" 
import { Portfolio } from "../Portfolio/Portfolio"

export const Body = () => {
    return (
        <>
            <Routes>
                <Route path="*" element={<Navigate to="/" />} />
                <Route path="/" element={<Home />} />
                <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
        </>
    )
}