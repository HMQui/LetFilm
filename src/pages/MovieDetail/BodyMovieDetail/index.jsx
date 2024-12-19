import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { detailMovie } from '../../../services/functions/api_call';
import OverViews from '../../../components/overViews/overViews';

function BodyMovieDetail() {
    const { id } = useParams();
    const [dataRender, setDataRender] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetch = async () => {
            try {
                setLoading(false);
                const data = await detailMovie(id);
                setDataRender(data);
            } catch (error) {
                console.log('Fail to call Detail Movei', id, error);
            } finally {
                setLoading(true);
            }
        };
        fetch();
    }, [id]);

    return (
        <>
            {loading && (
                <div className="mt-[69px] flex-1 min-h-[1000px]">
                    <OverViews
                        type='movie'
                        bgImg={dataRender.backdrop_path}
                        poster={dataRender.poster_path}
                        title={dataRender.original_title}
                        release_date={dataRender.release_date}
                        genres={dataRender.genres}
                        runtime={dataRender.runtime}
                        vote_average={dataRender.vote_average}
                    />
                </div>
            )}
        </>
    );
}

export default BodyMovieDetail;
