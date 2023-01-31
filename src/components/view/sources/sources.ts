import './sources.css';
import { ISource, ISourceItem } from './../../interfaces/interfaces';

class Sources {
    draw(data: ISource[]): void {
        const fragment = document.createDocumentFragment() as DocumentFragment;
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item: ISource): void => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

            const sourceName = sourceClone.querySelector('.source__item-name') as HTMLElement;
            sourceName.textContent = item.name;

            const sourceItem = sourceClone.querySelector('.source__item') as HTMLElement;
            sourceItem.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        document.querySelector('.sources')!.append(fragment);
    }
}

export default Sources;
