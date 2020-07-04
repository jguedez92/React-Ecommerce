let backendHost;
if (window.location.href.includes('localhost')) {
    backendHost = 'http://localhost:8000/api'
} else {
    backendHost = 'https://laravel-e-commerce-api.herokuapp.com/api'
}
console.log(backendHost)
export const API_URL = `${backendHost}/`;
export const IMAGES_URL = `http://localhost:8000/images/`;