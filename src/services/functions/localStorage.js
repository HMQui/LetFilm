const lcs = "LOCAL_DATA"

const getData = () => {
    const data = localStorage.getItem(lcs);
    return data ? JSON.parse(data) : {};
};

const setData = (data = {}) => {
    localStorage.setItem(lcs, JSON.stringify(data))
}

export { getData,setData }