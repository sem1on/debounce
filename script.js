const debounce = (fn, ms) => {
    let timiout;
    return function () {
        const fnCall = () => { fn.apply(this, arguments) }
        clearTimeout(timiout);
        timiout = setTimeout(fnCall, ms)
    };
}

function onChange(e) {
    console.log(e.target.value);
}

onChangeDebounce = debounce(onChange, 500);

document.getElementById('search').addEventListener('keyup', onChangeDebunce);
