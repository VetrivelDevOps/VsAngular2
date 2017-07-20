import {UIPageEelementValidationMessages} from './UIPageEelementValidationMessages.model'
export class UIPageEelements{
              constructor ( public pageName : string,
                  public elementName: string,
                  public label: string,
              public sequenceId : number,
              public editableReadOnlyHidden : number,
              public placeholder : string,
              public UIPageEelementValidationMessages : UIPageEelementValidationMessages[]
       ) { }
}
