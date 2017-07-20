
import { UIPageEelements } from './uipageelement.model'
export class UIPage {
    constructor(public pageName: string,
        public pageDescription: string,
        public title: string,
        public UIPageEelements: UIPageEelements[]
    ) { }
}
