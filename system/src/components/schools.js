//Logo schools
import plmunLogo from '../assets/schools/Logo_Images/plmun.png';
import loaiLogo from '../assets/schools/Logo_Images/loai.png';
import sbcaLogo from '../assets/schools/Logo_Images/sbca.png';
import smclLogo from '../assets/schools/Logo_Images/smcl.png';
import scaLogo from '../assets/schools/Logo_Images/sca.png';
import imLogo from '../assets/schools/Logo_Images/ip.png';
import saintbcaLogo from '../assets/schools/Logo_Images/saintbca.png';
import mshsLogo from '../assets/schools/Logo_Images/mshs.png';
import lsoaLogo from '../assets/schools/Logo_Images/lsoa.jpg';
import mesLogo from '../assets/schools/Logo_Images/mes.png';
import pdhLogo from '../assets/schools/Logo_Images/pdh.jpeg';


export const schoolData = [
    {
        id:0,
        name: "Muntinlupa",
        type: "City",
        coordinates:{
        lat:14.389786,
        lang:121.047566
        }
    },
    {
        id: 1,
        name: "Pamantasan ng Lungsod ng Muntinlupa",
        number: "0998 478 3585",
        type: "Public University",
        address: "92QG+M5V, University Rd, Poblacion, Muntinlupa, Metro Manila",
        image: plmunLogo,
        link: "/dummy-website",
        coordinates:{ 
        lat:  14.389101, 
        lang: 121.025299
        }
    },
    {
        id:2,
        name: "Lyceum of Alabang Inc.",
        number: "(02) 8856 9246",
        type: "Private School",
        address: "Km.30 National Road, Tunasan, Muntinlupa, 1773 Metro Manila",
        image: loaiLogo,
        link: "/dummy-website2",
        coordinates: 
        {lat: 14.3730, 
        lang:121.0474}
    },
    {
        id:3,
        name: "San Beda College Alabang",
        number: "(02) 8842 3508",
        type: "Private School",
        address: "8 Don Manolo Blvd, Cupang, Muntinlupa, 1770 Metro Manila",
        image: sbcaLogo,
        link: "/dummy-website3",
        coordinates: 
        {lat:14.433139015342093,
         lang: 121.02552395588836}
    },
    {   
        id:4,
        name: "South Mansfield College",
        number: "(02) 8862 1976",
        type: "Private School",
        address: "Soldiers Hills St, Putatan, Muntinlupa, Metro Manila",
        image: smclLogo,
        link: "/dummy-website4",
        coordinates:
        {lat:14.39870, 
        lang:121.0438}
    },
    {
        id:5,
        name: "STI College Alabang",
        number: "(02) 8862 1976",
        type: "Private School",
        address: "Soldiers Hills St, Putatan, Muntinlupa, Metro Manila",
        image: scaLogo,
        link: "/dummy-website5",
        coordinates:
        {lat:14.41970, 
        lang:121.04680}
    },
    {
        id:6,
        name: "Informatics College Northgate Alabang",
        number: "0969 476 3014",
        type: "Private School",
        address: "Cyberzone Filinvest, Indo China Drive, Corporate Ave, Alabang, Muntinlupa, Metro Manila",
        image: imLogo,
        link: "/dummy-website6",
        coordinates:
        {lat:14.42555,  
        lang:121.04030}
    },
    {
        id:7,
        name: "Saint Bernadette College of Alabang",
        number: "(02) 8850 5709",
        type: "Private School",
        address: "Km. 23.6 East Service Rd, S Luzon Expy, Muntinlupa, 1770 Metro Manila",
        image: saintbcaLogo,
        link: "/dummy-website7",
        coordinates:
        {lat:14.42500, 
        lang:121.04694}
    },
    {
        id:8,
        name: "Muntinlupa Science High School",
        number: "(02) 8519 9770",
        type: "Public School",
        address: "999 Buendia St, Tunasan, Muntinlupa, 1774 Metro Manila",
        image: mshsLogo,
        link: "/dummy-website8",
        coordinates:
       {lat:14.384209621244105, 
        lang:121.05194543776378}
    },
    {
        id:9,
        name: "Lakewood School Of Alabang Inc.",
        number: "(02) 8550 2260",
        type: "Private School",
        address: "GNT Bldg., 21 National Road, Putatan,<br>Muntinlupa, 1770 Metro Manila",
        image: lsoaLogo,
        link: "/dummy-website9",
        coordinates:
        {lat: 14.403900, 
        lang: 121.0465}
    },
    {
        id:10,
        name: "Alabang Elementary School",
        number: "(02) 8842 2594",
        type: "Public Elementary School",
        address: "C2CX+8M7, Mendiola, Alabang, Muntinlupa, 1780 Metro Manila",
        image: mesLogo,
        link: "/dummy-website10",
        coordinates:
        {lat: 14.421011156899189, 
        lang:121.04914925383369}
    },
    {
        id:11,
        name: "Pedro E. Diaz High School",
        number: "(02) 8856 7583",
        type: "Public High School",
        address: "U.P. Side Subdivision, Alabang, Muntinlupa City, Philippines",
        image: pdhLogo,
        link: "/dummy-website11",
        coordinates:
        {lat:14.411685110604237, 
        lang: 121.04410590892839}
    }
  ]
  
  export default schoolData;
  