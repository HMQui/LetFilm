import { useEffect, useState } from "react";

export default function useDebounce(value, time) {
    const [debounceValue, setDebounceValue] = useState(value)

    useEffect(() => {
        const id = setTimeout(() => {
            setDebounceValue(value)
        }, time)

        return () => {
            clearTimeout(id)
        }
    }, [value, time])

    return debounceValue
}