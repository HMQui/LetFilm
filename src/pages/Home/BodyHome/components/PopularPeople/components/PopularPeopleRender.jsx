import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import { popularPeople, getImg } from '../../../../../../services/functions/api_call'
import ProgressLine from '../../../../../../components/progress/ProgressLine';

function PopularPeopleRender() {
    const [loading, setLoading] = useState(true);
    const [dataRender, setDataRender] = useState(null);
    const [avgPopularity, setAvgPopularity] = useState(0);

    useEffect(() => {
        const fetch = async () => {
            try {
                setLoading(true);
                const data = await popularPeople();
                setLoading(false);
                setDataRender(() => {
                    return data.length > 8 ? data.slice(0, 8) : data;
                });
                setAvgPopularity(() => {
                    const length = data.length > 8 ? 8 : data.length;
                    var max = 0;
                    for (let i = 0; i < length; i++) {
                        if (max < data[i].popularity) max = data[i].popularity;
                    }
                    return max;
                });
            } catch {
                throw new Error('Fail to call Popular People');
            }
        };

        fetch();
    }, []);

    return (
        <div>
            {loading ? (
                <div className="mt-5 animate-pulse w-full h-[300px] bg-gray-200 opacity-15 rounded-3xl flex justify-center items-center">
                    <FontAwesomeIcon icon={faSpinner} className="text-[3rem] animate-spin-custom" />
                </div>
            ) : (
                <div className=" grid md:grid-cols-2 mobile:grid-cols-1 gap-4">
                    {dataRender.map((render) => {
                        return (
                            <Link
                                key={render.id}
                                to={`people/${render.id}`}
                                className="px-2 flex flex-row gap-4 justify-start items-center group"
                            >
                                <div
                                    style={{ backgroundImage: `url('${getImg + render.profile_path}')` }}
                                    className="w-24 h-20 bg-cover bg-center rounded-full overflow-hidden"
                                ></div>
                                <div className="w-full flex flex-col justify-around items-start">
                                    <h4 className="font-bold text-xl text-primary-1350 sm:group-hover:text-orange-400 dark:text-primary-50">
                                        {render.name}
                                    </h4>
                                    <h5 className="text-sm text-primary-1350 dark:text-primary-50">
                                        {render.known_for_department}
                                    </h5>
                                    <ProgressLine max={avgPopularity} component={render.popularity} />
                                </div>
                            </Link>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default PopularPeopleRender;
