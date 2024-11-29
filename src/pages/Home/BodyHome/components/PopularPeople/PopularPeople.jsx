import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { PopularPeopleRender } from './components';

function PopularPeople() {
    return (
        <div className="pb-4 bg-white w-full dark:bg-primary-1150">
            <div className="p-5 flex flex-row justify-start items-center gap-4">
                <FontAwesomeIcon
                    icon={faUser}
                    className="md:text-[2.4rem] mobile:text-[1.8rem] text-rose-600 select-none mt-[-8px]"
                ></FontAwesomeIcon>
                <h3 className="md:text-[2.4rem] mobile:text-[1.8rem] text-primary-1350 dark:text-primary-50 font-bold select-none">
                    Popular People
                </h3>
            </div>
            <PopularPeopleRender />
        </div>
    );
}

export default PopularPeople;
