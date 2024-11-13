import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

function ProgressLine({ max, component }) {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const per = (component / max) * 100;
        setWidth(per);
    }, [max, component]);

    return (
        <div className="w-full h-2 relative bg-gray-50 rounded-xl overflow-hidden">
            <div
                style={{ width: `${width}%`, transition: 'width 2.5s ease' }}
                className="h-full bg-gradient-to-r from-orange-400 to-red-500 absolute inset-0 rounded-xl"
            ></div>
        </div>
    );
}

export default ProgressLine;

ProgressLine.propTypes = {
    max: PropTypes.number.isRequired,
    component: PropTypes.number.isRequired,
};
