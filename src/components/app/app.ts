import AppController from '../controller/controller';
import { INewsData, ISourceData } from '../interfaces/interfaces';
import { AppView } from '../view/appView';

class App {
    controller: AppController;
    view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start(): void {
        (<HTMLElement>document.querySelector('.sources')).addEventListener('click', (e: Event) =>
            this.controller.getNews(e, (data?: INewsData) => this.view.drawNews(data))
        );
        this.controller.getSources((data?: ISourceData) => this.view.drawSources(data));
    }
}

export default App;
