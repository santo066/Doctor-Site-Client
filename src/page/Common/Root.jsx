import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Root() {
    document.addEventListener("DOMContentLoaded", () => {
        const lenis = new Lenis({
            lerp: 0.1,               // Smoothness (lower = smoother)
            wheelMultiplier: 1,    // Scroll speed
            gestureOrientation: "vertical",
            smoothTouch: false
        });

        // Animation loop
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    });
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}