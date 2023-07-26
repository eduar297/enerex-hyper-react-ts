import { useState, useEffect } from 'react';

type Utility = {
    id: string;
    text: string;
};

const utilities: Utility[] = [
    {
        id: '125',
        text: 'AEP Ohio (Columbus Southern)',
    },
    {
        id: '126',
        text: 'AEP Ohio (Ohio Power)',
    },
    {
        id: '8',
        text: 'AEP Texas Central (TCC) / Central Power and Light ',
    },
    {
        id: '9',
        text: 'AEP Texas North (TNC) / West Texas Utilities (WTU)',
    },
    {
        id: '136',
        text: 'Alpena Power',
    },
    {
        id: '23',
        text: 'Ameren',
    },
    {
        id: '150',
        text: 'American Electric Power (AEP)',
    },
    {
        id: '142',
        text: 'Appalachian Power (AEP)',
    },
    {
        id: '64',
        text: 'Atlanta Gas Light Company',
    },
    {
        id: '21',
        text: 'Atlantic City Electric',
    },
    {
        id: '239',
        text: 'Atmos Energy ',
    },
    {
        id: '156',
        text: 'Atmos Energy',
    },
    {
        id: '10',
        text: 'Baltimore Gas and Electric (BGE)',
    },
    {
        id: '119',
        text: 'Bangor Hydro-Electric Company',
    },
    {
        id: '242',
        text: 'Bangor Natural Gas',
    },
    {
        id: '162',
        text: 'Black Hills Energy',
    },
    {
        id: '158',
        text: 'Blue Ridge Electric Coop',
    },
    {
        id: '157',
        text: 'Cascade Natural Gas Corporation',
    },
    {
        id: '53',
        text: 'CE Electric (Northern)',
    },
    {
        id: '54',
        text: 'CE Electric (Yorkshire)',
    },
    {
        id: '1',
        text: 'CenterPoint Energy',
    },
    {
        id: '146',
        text: 'CenterPoint Energy Houston Gas',
    },
    {
        id: '147',
        text: 'CenterPoint Energy Texas Gas',
    },
    {
        id: '144',
        text: 'CenterPoint-Illinois Gas Transmission Company',
    },
    {
        id: '145',
        text: 'CenterPoint-Mississippi River Transmission',
    },
    {
        id: '110',
        text: 'Central Florida Gas',
    },
    {
        id: '43',
        text: 'Central Hudson',
    },
    {
        id: '118',
        text: 'Central Maine Power Company',
    },
    {
        id: '74',
        text: 'Chesapeake Utilities',
    },
    {
        id: '93',
        text: 'Choptank Electric Cooperative',
    },
    {
        id: '99',
        text: 'Citizens Electric Company',
    },
    {
        id: '230',
        text: 'Citizens Energy Group',
    },
    {
        id: '240',
        text: 'Citizens Gas Fuel Company',
    },
    {
        id: '121',
        text: 'Cleveland Electric Illuminating',
    },
    {
        id: '75',
        text: 'Columbia Gas of Maryland',
    },
    {
        id: '210',
        text: 'Columbia Gas of Massachusetts',
    },
    {
        id: '65',
        text: 'Columbia Gas of Ohio',
    },
    {
        id: '78',
        text: 'Columbia Gas of Pennsylvania',
    },
    {
        id: '90',
        text: 'Columbia Gas of Virginia',
    },
    {
        id: '16',
        text: 'Commonwealth Edison',
    },
    {
        id: '2',
        text: 'Con Edison (New York)',
    },
    {
        id: '17',
        text: 'Connecticut Light and Power',
    },
    {
        id: '148',
        text: 'Connecticut Natural Gas Corp',
    },
    {
        id: '104',
        text: 'Consumers Energy',
    },
    {
        id: '86',
        text: 'Corning Natural Gas (PSC4)',
    },
    {
        id: '87',
        text: 'Corning Natural Gas (PSC5)',
    },
    {
        id: '88',
        text: 'Corning Natural Gas (PSC6)',
    },
    {
        id: '122',
        text: 'Dayton Power and Light',
    },
    {
        id: '152',
        text: 'Delaware Electric Coop',
    },
    {
        id: '35',
        text: 'Delmarva (Delaware)',
    },
    {
        id: '19',
        text: 'Delmarva (Maryland)',
    },
    {
        id: '135',
        text: 'Detroit Edison',
    },
    {
        id: '68',
        text: 'Dominion East Ohio',
    },
    {
        id: '84',
        text: 'Dominion Peoples',
    },
    {
        id: '134',
        text: 'Dominion Virginia Power',
    },
    {
        id: '234',
        text: 'DTE Energy Supply',
    },
    {
        id: '66',
        text: 'Duke Energy (Ohio)',
    },
    {
        id: '200',
        text: 'DUMMY UTILITY',
    },
    {
        id: '37',
        text: 'Duquesne Light',
    },
    {
        id: '49',
        text: 'E.ON Central Networks (East Midlands)',
    },
    {
        id: '48',
        text: 'E.ON Central Networks (Midlands)',
    },
    {
        id: '52',
        text: 'EDF Energy Networks (Eastern)',
    },
    {
        id: '51',
        text: 'EDF Energy Networks (London)',
    },
    {
        id: '50',
        text: 'EDF Energy Networks (Seeboard)',
    },
    {
        id: '137',
        text: 'Edison Sault Electric',
    },
    {
        id: '71',
        text: 'Elizabethtown Gas',
    },
    {
        id: '77',
        text: 'Elkton Gas',
    },
    {
        id: '164',
        text: 'Enbridge Inc',
    },
    {
        id: '55',
        text: 'ENW (Norweb)',
    },
    {
        id: '79',
        text: 'Equitable Gas',
    },
    {
        id: '109',
        text: 'Florida City Gas',
    },
    {
        id: '111',
        text: 'Florida Public Utilities Company',
    },
    {
        id: '138',
        text: 'Indiana Michigan Power (AEP)',
    },
    {
        id: '113',
        text: 'Indiantown Gas Company',
    },
    {
        id: '20',
        text: 'Jersey Central Power and Light',
    },
    {
        id: '161',
        text: 'Kansas Gas Services',
    },
    {
        id: '237',
        text: 'Laclede Energy Resources',
    },
    {
        id: '231',
        text: 'Liberty Utilities',
    },
    {
        id: '155',
        text: 'Long Island Power Authority',
    },
    {
        id: '228',
        text: 'Louisville Gas and Electric',
    },
    {
        id: '120',
        text: 'Maine Public Service Company',
    },
    {
        id: '42',
        text: 'Met-Ed',
    },
    {
        id: '105',
        text: 'Michigan Consolidated Gas Company',
    },
    {
        id: '106',
        text: 'Michigan Gas Utilities',
    },
    {
        id: '225',
        text: 'Missouri Gas Energy',
    },
    {
        id: '133',
        text: 'Mon Power',
    },
    {
        id: '89',
        text: 'National Fuel Gas (NY)',
    },
    {
        id: '85',
        text: 'National Fuel Gas (PA)',
    },
    {
        id: '1252',
        text: 'National Grid (Gas) (NY- Niagara Mohawk)',
    },
    {
        id: '33',
        text: 'National Grid (Mass.)',
    },
    {
        id: '128',
        text: 'National Grid (NH)',
    },
    {
        id: '94',
        text: 'National Grid (NY - Keyspan)',
    },
    {
        id: '1248',
        text: 'National Grid (NY - Long Island)',
    },
    {
        id: '30',
        text: 'National Grid (NY - Niagara Mohawk)',
    },
    {
        id: '117',
        text: 'National Grid (RI)',
    },
    {
        id: '129',
        text: 'New Hampshire Electric Cooperative',
    },
    {
        id: '211',
        text: 'New Hampshire Gas Corporation',
    },
    {
        id: '73',
        text: 'New Jersey Natural Gas',
    },
    {
        id: '209',
        text: 'New Mexico Gas Company',
    },
    {
        id: '62',
        text: 'Nicor Gas',
    },
    {
        id: '201',
        text: 'North Shore Gas',
    },
    {
        id: '216',
        text: 'Northern Indiana Public Service Company',
    },
    {
        id: '227',
        text: 'Northern Virginia Electric Cooperative',
    },
    {
        id: '28',
        text: 'NStar (Boston Edison)',
    },
    {
        id: '115',
        text: 'NStar (Cambridge Electric)',
    },
    {
        id: '116',
        text: 'NStar (Commonwealth Electric)',
    },
    {
        id: '98',
        text: 'Nueces Electric Cooperative',
    },
    {
        id: '40',
        text: 'NYSEG',
    },
    {
        id: '123',
        text: 'Ohio Edison',
    },
    {
        id: '163',
        text: 'Oklahoma Natural Gas',
    },
    {
        id: '3',
        text: 'Oncor (TXU Electric Delivery)',
    },
    {
        id: '5',
        text: 'Oncor (TXU SESCO)',
    },
    {
        id: '151',
        text: 'Oncor TXU ED / Oncor TXU SESCO',
    },
    {
        id: '31',
        text: 'Orange and Rockland',
    },
    {
        id: '96',
        text: 'Pacific Gas and Electric',
    },
    {
        id: '131',
        text: 'Pacific Power and Light',
    },
    {
        id: '34',
        text: 'PECO',
    },
    {
        id: '41',
        text: 'Penelec',
    },
    {
        id: '38',
        text: 'Penn Power',
    },
    {
        id: '63',
        text: 'Peoples Gas',
    },
    {
        id: '143',
        text: 'PEPCO (DC)',
    },
    {
        id: '11',
        text: 'PEPCO (Maryland)',
    },
    {
        id: '80',
        text: 'Philadelphia Gas Works',
    },
    {
        id: '226',
        text: 'Piedmont Natural Gas',
    },
    {
        id: '103',
        text: 'Pike County Light and Power',
    },
    {
        id: '132',
        text: 'Portland General Electric',
    },
    {
        id: '6',
        text: 'Potomac Edison',
    },
    {
        id: '238',
        text: 'Potomac Edison - Maryland',
    },
    {
        id: '39',
        text: 'PPL Electric Utility Corporation',
    },
    {
        id: '243',
        text: 'PSEG Long Island',
    },
    {
        id: '220',
        text: 'PSNC Energy',
    },
    {
        id: '22',
        text: 'Public Service Electric and Gas Company',
    },
    {
        id: '130',
        text: 'Public Service of New Hampshire',
    },
    {
        id: '1244',
        text: 'QA-TDSP',
    },
    {
        id: '29',
        text: 'Rochester Gas and Electric',
    },
    {
        id: '32',
        text: 'Rockland Electric Company',
    },
    {
        id: '60',
        text: 'San Diego Gas and Electric',
    },
    {
        id: '244',
        text: 'SCE&G',
    },
    {
        id: '56',
        text: 'Scottish Power (Manweb)',
    },
    {
        id: '44',
        text: 'Scottish Power (Scottish Power)',
    },
    {
        id: '114',
        text: 'Sebring Gas System, Inc.',
    },
    {
        id: '107',
        text: 'SEMCO Energy Gas Company',
    },
    {
        id: '241',
        text: 'Sharyland McAllen',
    },
    {
        id: '4',
        text: 'Sharyland Utilities',
    },
    {
        id: '221',
        text: 'Source-Gas',
    },
    {
        id: '224',
        text: 'Source-Gas (NE)',
    },
    {
        id: '72',
        text: 'South Jersey Gas',
    },
    {
        id: '61',
        text: 'Southern California Edison',
    },
    {
        id: '97',
        text: 'Southern California Gas Company',
    },
    {
        id: '57',
        text: 'Southern Electric Power Distribution',
    },
    {
        id: '95',
        text: 'Southern Maryland Electric Cooperative',
    },
    {
        id: '45',
        text: 'SSE Power Distribution (Scottish Hydro)',
    },
    {
        id: '112',
        text: 'St. Joe Natural Gas Company',
    },
    {
        id: '108',
        text: 'TECO Peoples Gas',
    },
    {
        id: '7',
        text: 'Texas New Mexico Power Co. (TNMP)',
    },
    {
        id: '153',
        text: 'The Illuminating Company',
    },
    {
        id: '124',
        text: 'Toledo Edison',
    },
    {
        id: '82',
        text: 'TW Phillips',
    },
    {
        id: '81',
        text: 'UGI Central Penn',
    },
    {
        id: '100',
        text: 'UGI Electric Service',
    },
    {
        id: '83',
        text: 'UGI Gas Service',
    },
    {
        id: '160',
        text: 'Unisource Energy Services',
    },
    {
        id: '18',
        text: 'United Illuminating',
    },
    {
        id: '58',
        text: 'Unitil (FGE)',
    },
    {
        id: '127',
        text: 'Unitil (NH)',
    },
    {
        id: '139',
        text: 'Upper Peninsula Power Company',
    },
    {
        id: '67',
        text: 'Vectren Energy Delivery of Ohio',
    },
    {
        id: '229',
        text: 'Virginia Natural Gas',
    },
    {
        id: '233',
        text: 'Volunteer Energy Service Inc',
    },
    {
        id: '149',
        text: 'Wallingford Electric Division',
    },
    {
        id: '69',
        text: 'Washington Gas (DC)',
    },
    {
        id: '76',
        text: 'Washington Gas (Maryland)',
    },
    {
        id: '92',
        text: 'Washington Gas (Shenandoah)',
    },
    {
        id: '91',
        text: 'Washington Gas (Virginia)',
    },
    {
        id: '219',
        text: 'WE Energies (Michigan Gas)',
    },
    {
        id: '140',
        text: 'WE Energies (Michigan)',
    },
    {
        id: '218',
        text: 'WE Energies (Wisconsin Gas)',
    },
    {
        id: '217',
        text: 'WE Energies (Wisconsin)',
    },
    {
        id: '101',
        text: 'Wellsboro Electric Company',
    },
    {
        id: '102',
        text: 'West Penn Power',
    },
    {
        id: '236',
        text: 'West Penn Power',
    },
    {
        id: '59',
        text: 'Western Massachusetts Electric Co.',
    },
    {
        id: '46',
        text: 'Western Power Distribtion (SWALEC)',
    },
    {
        id: '47',
        text: 'Western Power Distribution (SWEB)',
    },
    {
        id: '141',
        text: 'Wisconsin Public Service',
    },
    {
        id: '212',
        text: 'Xcel Energy (CO)',
    },
    {
        id: '203',
        text: 'Xcel Energy (MI)',
    },
    {
        id: '204',
        text: 'Xcel Energy (MN)',
    },
    {
        id: '206',
        text: 'Xcel Energy (ND)',
    },
    {
        id: '205',
        text: 'Xcel Energy (NM)',
    },
    {
        id: '207',
        text: 'Xcel Energy (SD)',
    },
    {
        id: '202',
        text: 'Xcel Energy (TX)',
    },
    {
        id: '208',
        text: 'Xcel Energy (WI)',
    },
    {
        id: '235',
        text: 'Yankee Gas',
    },
    {
        id: '159',
        text: 'Yankee Gas',
    },
];

const fetchUtilities = (): Promise<Utility[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(utilities);
        }, 1000);
    });
};

const useUtilities = (): {
    utilities: Utility[];
    loading: boolean;
    error: any;
} => {
    const [utilities, setUtilities] = useState<Utility[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        setLoading(true);
        setUtilities([]);
        setError(null);
        fetchUtilities()
            .then((data) => {
                setUtilities(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err);
                setLoading(false);
            });
    }, []);

    return { utilities, loading, error };
};

export default useUtilities;
