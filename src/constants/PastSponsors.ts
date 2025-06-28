import CK from '../assets/PastSponsors/CK.png';
import CodeChef from '../assets/PastSponsors/CodeChef.png';
import DainikBhaskar from '../assets/PastSponsors/Dainik_Bhaskar.png';
import DigitalOcean from '../assets/PastSponsors/Digital_Ocean.png';
import FabHotels from '../assets/PastSponsors/fabHotels.jpg';
import FestPav from '../assets/PastSponsors/FestPav.png';
import HackSociety from '../assets/PastSponsors/Hack_Society.png';
import HackerEarth from '../assets/PastSponsors/HackerEarth.png';
import InkMonk from '../assets/PastSponsors/InkMonk.png';
import KnowAFest from '../assets/PastSponsors/KnowAFest.png';
import MyFM from '../assets/PastSponsors/MyFM.png';
import PayTM from '../assets/PastSponsors/PayTM.png';
import Swiggy from '../assets/PastSponsors/Swiggy.png';
import TCF from '../assets/PastSponsors/The_College_Fever.png';
import swiggy from '../assets/SponsorPage/swiggy.png';
import myfm from '../assets/SponsorPage/myfm.png';
import inkmonk from '../assets/SponsorPage/inkmonk.png';
import hackerearth from '../assets/SponsorPage/hackerearth.png';
import collegefever from '../assets/SponsorPage/collegefever.png';
import digitalocean from '../assets/SponsorPage/digitalocean.png';
import db from '../assets/SponsorPage/db.png';
import ck from '../assets/SponsorPage/ck.png';
import paytm from '../assets/SponsorPage/paytm.png';
import festpav from '../assets/SponsorPage/festpav.png';
import hacksociety from '../assets/SponsorPage/hacksociety.png';
import knowafest from '../assets/SponsorPage/knowafest.png';
import wolfram from '../assets/SponsorPage/wolfram.png';
import codechef from '../assets/SponsorPage/codechef.png';
import devfolio from '../assets/SponsorPage/devfolio.png';
import ethIndia from '../assets/SponsorPage/EthIndia.png';
import polygon from '../assets/SponsorPage/Polygon.png';
import internshala from '../assets/SponsorPage/internshala.png';
import canaraBank from '../assets/SponsorPage/canaraBank.png';
import unstop from '../assets/SponsorPage/unstop.png';
import sbi from '../assets/SponsorPage/SBI.png';
import easeMyTrip from '../assets/SponsorPage/EaseMyTrip.png';
import Edukul from '../assets/SponsorPage/Edukul.png';
import UdupisKitchen from '../assets/SponsorPage/UdupisKitchen.png';
import Aptos from '../assets/SponsorPage/Aptos.png';
import HighHeads from '../assets/SponsorPage/HighHeads.png';
import PizzaHut from '../assets/SponsorPage/PizzaHut.png';
import Foodiyapa from '../assets/SponsorPage/Foodiyapa.png';
import HotelGoldInn from '../assets/SponsorPage/HotelGoldInn.png';
import AggarawalCaterers from '../assets/SponsorPage/AggarawalCaterers.png';
import ChaiChowk from '../assets/SponsorPage/ChaiChowk.png';

export interface Sponsor {
    name: string;
    src: string;
}

export interface currentSponsor {
    name: string;
    src: string;
    alt: string;
}

export const pastSponsors1: Sponsor[] = [
    { name: 'CK', src: CK },
    { name: 'CodeChef', src: CodeChef },
    { name: 'Dainik Bhaskar', src: DainikBhaskar },
    { name: 'Digital Ocean', src: DigitalOcean },
    { name: 'FabHotels', src: FabHotels },
    { name: 'FestPav', src: FestPav },
    { name: 'Hack Society', src: HackSociety },
];

export const pastSponsors2: Sponsor[] = [
    { name: 'HackerEarth', src: HackerEarth },
    { name: 'InkMonk', src: InkMonk },
    { name: 'KnowAFest', src: KnowAFest },
    { name: 'MyFM', src: MyFM },
    { name: 'PayTM', src: PayTM },
    { name: 'Swiggy', src: Swiggy },
    { name: 'The College Fever', src: TCF },
];

export const sponsorPage: Sponsor[] = [
    { name: 'swiggy', src: swiggy },
    { name: 'myfm', src: myfm },
    { name: 'db', src: db },
    { name: 'digitalocean', src: digitalocean },
    { name: 'collegefever', src: collegefever },
    { name: 'hackerearth', src: hackerearth },
    { name: 'inkmonk', src: inkmonk },
    { name: 'ck', src: ck },
    { name: 'paytm', src: paytm },
    { name: 'festpav', src: festpav },
    { name: 'hacksociety', src: hacksociety },
    { name: 'knowafest', src: knowafest },
    { name: 'wolfram', src: wolfram },
    { name: 'codechef', src: codechef },
];

export const currentSponsers: currentSponsor[] = [
    { name: 'Devfolio', src: devfolio, alt: 'DEVFOLIO LOGO' },
    { name: 'Polygon', src: polygon, alt: 'POLYGON LOGO' },
    { name: 'EthIndia', src: ethIndia, alt: 'ETHINDIA LOGO' },
    { name: 'Internshala', src: internshala, alt: 'INTERNSHALA LOGO' },
    { name: 'CanaraBank', src: canaraBank, alt: 'CANARABANK LOGO' },
    { name: 'Unstop', src: unstop, alt: 'UNSTOP LOGO' },
    { name: 'Sbi', src: sbi, alt: 'SBI LOGO' },
    { name: 'EaseMyTrip', src: easeMyTrip, alt: 'EASEMYTRIP LOGO' },
    { name: 'Edukul', src: Edukul, alt: 'EDUKUL LOGO' },
    { name: 'UdupisKitchen', src: UdupisKitchen, alt: 'UDUPISKITCHEN LOGO' },
    { name: 'Aptos', src: Aptos, alt: 'APTOS LOGO' },
    { name: 'HighHeads', src: HighHeads, alt: 'HIGHHEADS LOGO' },
    { name: 'PizzaHut', src: PizzaHut, alt: 'PIZZAHUT LOGO' },
    { name: 'Foodiyapa', src: Foodiyapa, alt: 'FOODIYAPA LOGO' },
    { name: 'HotelGoldInn', src: HotelGoldInn, alt: 'HOTELGOLDINN LOGO' },
    {
        name: 'AggarawalCaterers',
        src: AggarawalCaterers,
        alt: 'AGGARAWALCATERERS LOGO',
    },
    { name: 'ChaiChowk', src: ChaiChowk, alt: 'CHAICHOWK LOGO' },
];
