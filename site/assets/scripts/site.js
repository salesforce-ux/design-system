import svgFix from 'app_modules/site/vendor/svg4everybody';
import { logCurrentPageVisit } from 'app_modules/site/analytics';

svgFix(document);
logCurrentPageVisit();
