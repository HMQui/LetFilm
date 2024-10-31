    import { useState } from 'react';
    import HeadlessTippy from '@tippyjs/react/headless';
    import { useNavigate } from 'react-router-dom';

    import useDebounce from '../../../../../hooks/debounce';
    import HandleRenderInputHome from './HandleRenderInputHome';

    function InputSearchHome() {
        const [valueInput, setvalueInput] = useState('');
        const debounceValue = useDebounce(valueInput, 400);
        const navigate = useNavigate();

        const handleSubmit = (e) => {
            e.preventDefault()
            if (valueInput.trim()) {
                navigate(`/search?q=${encodeURIComponent(valueInput)}`)
            }
        }
        
        return (
            <div className="w-full h-fit mt-3">
                <form className="w-full h-fit flex rounded-3xl bg-white relative" onSubmit={(e) => handleSubmit(e)}>
                    <HeadlessTippy
                        interactive
                        placement="bottom-start"
                        // visible={focus}
                        trigger='focusin'
                        render={(attrs) => (
                            <div className="w-full" {...attrs} tabIndex="-1">
                                <HandleRenderInputHome valueInput={debounceValue} />
                            </div>
                        )}
                    >
                        <input
                            placeholder="Search for a film, a movie, or a person,..."
                            className="py-2 px-4 w-full outline-none rounded-3xl"
                            onInput={(e) => setvalueInput(e.target.value)}
                        />
                    </HeadlessTippy>
                    <button
                        className="bg-gradient-to-r from-primary-900 to-primary-1150 rounded-3xl xl:w-[10%] lg:w-[15%] md:w-[20%] sm:w-[30%] mobile:w-[35%] text-primary-50 dark:from-primary-900 dark:to-primary-1250"
                        type="submit"
                    >
                        Search
                    </button>
                </form>
            </div>
        );
    }

    export default InputSearchHome;
