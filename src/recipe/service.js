import { get } from '../http/service';

const API_URL = 'https://www.themealdb.com/api/json/v1/1/';

export function fetchRecipess() {
    return new Promise(resolve =>
        setTimeout(() => resolve([{ idMeal: '1', strMealThumb: '', strMeal: 'The best ever' }]), 500));
    // return get(`${API_URL}latest.php`).then(result => result.json().meals);
}
export function fetchRecipes() {
    return get(`${API_URL}latest.php`).then(result => result.json().meals);
}

export default fetchRecipes;
