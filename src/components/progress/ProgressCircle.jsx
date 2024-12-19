import PropTypes from "prop-types";

function ProgressCircle({ rate, bottom, left, size = 48 }) {
    let gradientColor = '#fff';
    if (rate < 5) {
        gradientColor = '#ef4444';
    } else if (rate >= 5 && rate < 7) {
        gradientColor = '#fcd34d';
    } else {
        gradientColor = '#10b981';
    }

    // Circle calculation based on rate
    const radius = size / 2 - 6; // Subtract stroke width to calculate radius
    const circleCircumference = 2 * Math.PI * radius;
    const progress = (1 - rate / 10) * circleCircumference;

    return (
        <div
            className="absolute rounded-full flex justify-center items-center"
            style={{
                bottom,
                left,
                width: size,
                height: size,
                backgroundColor: '#0f172a', // Replacing `bg-sky-950`
            }}
        >
            <div
                className="rounded-full flex justify-center items-center absolute"
                style={{
                    width: size - 2,
                    height: size - 2,
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }}
            >
                <div
                    className="rounded-full"
                    style={{
                        width: size / 1.5,
                        height: size / 1.5,
                    }}
                ></div>
            </div>
            <span
                className="absolute text-[0.7rem] font-semibold text-primary-50 select-none"
                style={{
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }}
            >
                {rate !== 0 ? `${Math.round(rate * 10)}%` : 'Unknow'}
            </span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                className="absolute"
                style={{
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }}
                width={`${size}px`}
                height={`${size}px`}
            >
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
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
    size: PropTypes.number, // New optional prop
};
