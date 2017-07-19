export class ILanding {
    ClaimId: string;
    Type: string;
    Date: string;
    Description: string;
    Status: string
};

export interface IClaims {
    LandingList: ILanding[],
    LandingHead: string[]
};
