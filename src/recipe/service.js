import { get } from '../http/service';

const API_URL = 'https://www.themealdb.com/api/json/v1/1/';

export function fetchRecipes() {
    return get(`${API_URL}latest.php`).then(result => result.json().meals);
}

export default fetchRecipes;
