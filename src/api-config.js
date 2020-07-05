let backendHost;
let urlImg;
if (window.location.href.includes('localhost')) {
    backendHost = 'http://localhost:8000/api'
} else {
    backendHost = 'https://laravel-e-commerce-api.herokuapp.com/api'
}
if (window.location.href.includes('localhost')) {
    urlImg = 'http://localhost:8000/images/'
} else {
    urlImg = 'https://laravel-e-commerce-api.herokuapp.com/images/'
}
console.log(backendHost)
export const API_URL = `${backendHost}/`;
export const IMAGES_URL = `${urlImg}`;