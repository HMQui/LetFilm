import { useEffect, useState, memo } from 'react';
import PropTypes from 'prop-types';

import { getVideoKey } from '../../services/functions/api_call';

function Video({ type, id }) {
    const [videoKey, setVideoKey] = useState('');

    // Video.js
    useEffect(() => {
        if (!videoKey && id) {
            // fetch only if there’s no videoKey and a valid id
            const fetch = async () => {
                const data = await getVideoKey(type, id);
                for (let i = 0; i < data.length; i++) {
                    if (data[i].type === 'Trailer') {
                        var trailer = data[i];
                        break;
                    }
                }
                if (!trailer) {
                    trailer = data[0].key;
                }
                setVideoKey(trailer.key);
            };
            fetch();
        }
    }, [type, id, videoKey]);


    return (
        <div className="lg:py-20 lg:px-36 md:px-20 md:py-36 sm:px-10 sm:py-36 mobile:px-3 mobile:py-52 h-lvh w-lvw">
            {videoKey && (
                <iframe
                    src={`https://www.youtube.com/embed/${videoKey}?&embed=1`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full h-full"
                ></iframe>
            )}
        </div>
    );
}

export default memo(Video);

Video.propTypes = {
    type: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
};
