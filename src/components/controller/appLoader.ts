import { IKey } from '../interfaces/interfaces';
import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '5a81c1ecf90847c5906feb075bb1bdb4',
        });
    }
}

export default AppLoader;
