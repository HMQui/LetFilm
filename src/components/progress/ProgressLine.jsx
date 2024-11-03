import ReactDOM from 'react-dom';

function ProgressLine({ progress }) {
    return ReactDOM.createPortal(
        <div className="fixed top-0 left-0 w-full h-1 bg-gray-300 z-50">
            <div
                className="h-full bg-red-800 transition-all duration-300 ease-in-out"
                style={{ width: `${progress}%` }}
            ></div>
        </div>,
        document.body,
    );
}

export default ProgressLine;
