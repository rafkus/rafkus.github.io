import Slider from './Slider.js';

const run = () => {
    const props = {
        container: "#slider",
        imageSources: ["https://raw.githubusercontent.com/rafkus/rafkus.github.io/master/slider/assets/img1.jpg", 
                       "https://raw.githubusercontent.com/rafkus/rafkus.github.io/master/slider/assets/img2.jpg", 
                       "https://raw.githubusercontent.com/rafkus/rafkus.github.io/master/slider/assets/img3.jpg", 
                       "https://raw.githubusercontent.com/rafkus/rafkus.github.io/master/slider/assets/img4.jpg"]
    }

    const slider = new Slider(props);
}

document.addEventListener("DOMContentLoaded", run);
