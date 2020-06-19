let backendHost;
if (window.location.href.includes('localhost')) {
    backendHost = 'http://localhost:8000/api'
} else {
    backendHost = 'https://restaurant-jg-api.herokuapp.com'
}
console.log(backendHost)
export const API_URL = `${backendHost}/`;
export const IMAGES_URL = `http://localhost:8000/images/`;