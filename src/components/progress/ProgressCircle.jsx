import PropTypes from "prop-types";

function ProgressCircle({ rate, bottom, left }) {
    let gradientColor = '#fff';
    if (rate < 5) {
        gradientColor = '#ef4444';
    } else if (rate >= 5 && rate < 7) {
        gradientColor = '#fcd34d';
    } else {
        gradientColor = '#10b981';
    }    

    // Circle calculation based on rate
    const circleCircumference = 2 * Math.PI * 18; // 18 is the radius
    const progress = (1 - rate / 10) * circleCircumference;

    return (
        <div 
            className={`absolute h-12 w-12 bg-sky-950 rounded-full`}
            style={{ bottom: bottom, left: left }}
        >
            <div className="rounded-full h-11 w-11 flex justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="rounded-full h-8 w-8"></div>
            </div>
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[0.7rem] font-semibold text-primary-50 select-none">
                {Math.round(rate * 10)}%
            </span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="48px"
                height="48px"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
                <circle
                    cx="24"
                    cy="24"
                    r="18"
                    fill="none"
                    stroke={gradientColor}
                    className="stroke-[6px] stroke-linecap-round"
                    style={{
                        strokeDasharray: circleCircumference,
                        strokeDashoffset: progress,
                        transform: 'rotate(-90deg)',
                        transformOrigin: 'center center',
                    }}
                />
            </svg>
        </div>
    );
}

export default ProgressCircle;

ProgressCircle.propTypes = {
    rate: PropTypes.number.isRequired,
    bottom: PropTypes.string,
    left: PropTypes.string,
}