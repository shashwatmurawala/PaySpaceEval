function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const getQueryParameter = (param) => {
    const url = new URL(window.location.href);
    return url.searchParams.get(param); 
}

export { classNames, getQueryParameter};