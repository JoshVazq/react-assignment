import * as http from '../http/service';
import { fetchRecipes } from './service';

jest.mock('../http/service', () => ({
    get: jest.fn().mockImplementation(() =>
        Promise.resolve({
            json: () => ({ meals: [] }),
        })),
}));
it('fetchRecipes should call the correct endpoint and returns the data', async () => {
    const url = 'endpoint',
        params = {};

    const result = await fetchRecipes();
    expect(http.get).toHaveBeenCalledWith('https://www.themealdb.com/api/json/v1/1/latest.php');
    expect(result).toEqual([]);
});
