import KarenKing from '../assets/skleinrichert/logos/karen-king-logo.png';
import FreightSystems from '../assets/skleinrichert/logos/360freightsys.png';
import LowCostTristate from '../assets/skleinrichert/logos/lowcost.jpg';

import AllForYouProductions from '../assets/bdavidson/logos/allforyouprod.jpg';
import BondItLogistics from '../assets/bdavidson/logos/bonditlogistics.jpg';

import AllInOneDispatching from '../assets/dbrownlee/logos/allinonedisp.png';

import ZRLinks from '../assets/twaller/logos/zrlinks.png';
import TailoredInsGrp from '../assets/twaller/logos/tailoredins.png';

export const GetLogos = (logo) => {
    if (logo === 'karen-king-logo.png') {
        return KarenKing;
    } else if (logo === '360freightsys.png') {
        return FreightSystems;
    } else if (logo === 'lowcost.jpg') {
        return LowCostTristate;
    } else if (logo === 'allforyouprod.jpg') {
        return AllForYouProductions;
    } else if (logo === 'bonditlogistics.jpg') {
        return BondItLogistics;
    } else if (logo === 'allinonedisp.png') {
        return AllInOneDispatching;
    } else if (logo === 'zrlinks.png') {
        return ZRLinks;
    } else if (logo === 'tailoredins.png') {
        return TailoredInsGrp;
    }
}