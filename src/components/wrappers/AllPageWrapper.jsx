// eslint-disable-next-line react/prop-types
function AllPageWrapper({ handleWrapper }) {


    return (
        <div
            className="inset-0 bg-black bg-opacity-50 backdrop-blur-xs min-h-dvh z-40 pointer-events-auto"
            style={{ pointerEvents: 'auto' }}
            onMouseDown={handleWrapper}
        ></div>
    );
}

export default AllPageWrapper;