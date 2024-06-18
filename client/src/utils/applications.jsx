import KarenKing from '../assets/skleinrichert/applications/application_skleinrichert_karenking.pdf';
import FreightSystems from '../assets/skleinrichert/applications/application_skleinrichert_360freightsys.pdf';
import LowCostTristate from '../assets/skleinrichert/applications/application_skleinrichert_lowcost.pdf';

import AllForYouProductions from '../assets/bdavidson/applications/application_bdavidson_allforyouprod.pdf';
import BondItLogistics from '../assets/bdavidson/applications/application_bdavidson_bonditlogistics.pdf';


export const GetApplications = (application) => {
    if (application === 'KarenKing') {
        return KarenKing;
    } else if (application === 'FreightSystems') {
        return FreightSystems;
    } else if (application === 'LowCostTristate') {
        return LowCostTristate;
    } else if (application === 'AllForYouProductions') {
        return AllForYouProductions;
    } else if (application === 'BondItLogistics') {
        return BondItLogistics;
    }
}