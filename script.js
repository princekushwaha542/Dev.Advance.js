function createToster(config){
    return function (str){
        let div = document.createElement("div");
        div.textContent = str;
        div.className = `inline-block ${config.theme === 'dark' ? " bg-gray-200 " : " text-red-800" } ${config.theme === 'light' ? " bg-gray-200 " : " text-red-100" } px-6 py-3 rounded shadow-lg pointer-events-none`;
        document.querySelector('.parent').appendChild(div);
        setTimeout(() => {
            document.querySelector('.parent').removeChild(div);
        }, config.duration * 1000);
    };
}

let toaster = createToster({
    positionX: 'right',
    positionY: 'top',
    duration:3,
    theme:'light',
});
toaster('Download completed!');
setTimeout(() => {
    toaster('File uploaded successfully!');
}, 2000);