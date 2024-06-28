import KarenKing from '../assets/skleinrichert/applications/application_skleinrichert_karenking.pdf';
import FreightSystems from '../assets/skleinrichert/applications/application_skleinrichert_360freightsys.pdf';
import LowCostTristate from '../assets/skleinrichert/applications/application_skleinrichert_lowcost.pdf';

import AllForYouProductions from '../assets/bdavidson/applications/application_bdavidson_allforyouprod.pdf';
import BondItLogistics from '../assets/bdavidson/applications/application_bdavidson_bonditlogistics.pdf';

import AllInOneDispatching from '../assets/dbrownlee/applications/application_dbrownlee_allinonedisp.pdf';

import ZRLinks from '../assets/twaller/applications/application_twaller_zrlinks.pdf';
import TailoredInsGrp from '../assets/twaller/applications/application_twaller_tailoredins.pdf';

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
    } else if (application === 'AllInOneDispatching') {
        return AllInOneDispatching;
    } else if (application === 'ZRLinks') {
        return ZRLinks;
    } else if (application === 'TailoredInsGrp') {
        return TailoredInsGrp;
    }
}