import { useEffect } from "react";
import ReactDOM from "react-dom";

function WrapperFullScreen({ children }) {
    useEffect(() => {
        // Disable scroll on mount
        document.body.style.overflow = "hidden";

        // Re-enable scroll on unmount
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return ReactDOM.createPortal(
        <div className="fixed top-0 left-0 w-full h-full z-[9999] flex items-center justify-center">
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-85"></div>
            
            <div className="relative z-10">
                {children}
            </div>
        </div>,
        document.body
    );
}

export default WrapperFullScreen;
