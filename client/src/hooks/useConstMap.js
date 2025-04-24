const useConstMap = (value, map, defaultValue) => {
    return map[value] !== undefined ? map[value] : defaultValue;
}

export default useConstMap;