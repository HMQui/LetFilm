import { useEffect, useState } from "react";

export default function useDebounce(value, time) {
    const [debounce, setDebounce] = useState(value)

    useEffect(() => {
        const id = setTimeout(() => {
            setDebounce(value)
        }, time)

        return () => {
            clearTimeout(id)
        }
    }, [value, time])

    return debounce
}