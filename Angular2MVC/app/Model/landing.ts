export class ILanding {
    Id: string;
    ClaimantName: string;
    ClaimRefNo: string;
    ClaimStatus: string;
};

export interface IClaims {
    LandingList: ILanding[],
    LandingHead: UIPageEelements[]
};

export class UIPageEelements {
    pageName : string ;
    elementName: string;
    sequenceId: number;
    label: string;
    editableReadOnlyHidden: number;
    placeholder : string ;    
}
