let thrash_views = 
{"California": {"cities": ['Los Angeles',
'San Diego',
'Santa Ana',
//'Fresno',// removed shorts
'Colfax',
'Eureka',
//'Sacramento' // removed shorts
]},
"Indonesia": {"cities":['Kota Bekasi',
'Depok',
'Tangerang',
'Bukittinggi',
'Malang',
"Samarinda",
"Makassar",
"Medan",
'Semarang',
'Bantar Agung',
'Giritirto']},
"Norway": {"cities":["Oslo", "Bergen"]},
"Brazil": {"cities":[
'Curitiba',
//"Teresina",// removed shorts
'Belo Horizonte',
'Recife',
'Rio de Janeiro',
'Porto Alegre',
//'Brasília' // removed shorts
]},
"Chile": {"cities":[
'Villa Alemana',
"Copiapó",
"Concepción",
"Puerto Montt",
'Peñaflor']},
"Sweden": {"cities": [
'Sandviken',
//'Växjö',// removed shorts
'Falkenberg',
"Malmö",
'Örebro',
'Umeå',
//'Karlstad',// removed shorts
'Linköping']},
"Greece": {"cities": ['Thessaloniki',
'Athens',
'Heraklion',
//"Volos",// removed shorts
'Patras',
//"Chania",// removed shorts
//'Larissa',// removed shorts
'Ioannina',
'Serres']},
"Portugal": {"cities": ['Lisbon',
'Leiria',
'Lagoa',
"Viseu",
'Porto',
"Ponta Delgada",
'Loures',
'Vila Nova de Gaia',
'Almada',
'Faro',
'Oeiras',
'Seixal',
'Funchal',
'Santa Maria da Feira',
'Évora',
'Guimarães']},
"Netherlands": {"cities": [
//'Utrecht',// removed shorts
"Zwolle",
'Sneek',
'Winterswijk',
'Enschede',
'Schijndel',
'Amsterdam',
'Groningen',
'Tilburg',
'Westzaan',
'Nijverdal',
'Zuidschermer',
'Amersfoort',
'Gorinchem']},
"Central America" : {"cities":['San José',
//'Tegucigalpa',// removed shorts
'San Salvador',
'Guatemala City',
'Managua',
'Panama City']},
"Scandinavia": {"cities": ["Stockholm", "Oslo", "Copenhagen", "Helsinki"]},
"Northeast":{"cities": [
'Pittsburgh',
'New York City']},
"Southeast":{"cities": [
'Louisville',
//'Greensboro', // removed shorts
//'Charlotte', // removed shorts
//'Lexington',// removed shorts
'Orlando',
'Tampa',
'Richmond',
'Raleigh',
'Paducah',
'Jacksonville',
'Nashville',
'Stockbridge',
'Atlanta',
//'Huntsville',// removed shorts
'Alexandria']},
"Southwest":{"cities":['Los Angeles',
'Tucson',
'San Francisco',
'Fresno',
'San Diego',
'Salt Lake City',
'Reno',
'Phoenix',
'Eureka',
'Sacramento']},
"Northwest":{"cities": ['Seattle',
'Portland',
'Great Falls',
'Missoula',
'Richland',
'Boise',
'Grants Pass',
'Eugene',
'Bellingham',
'Idaho Falls',
'Casper',
'Billings',
'Kalispell',
'Yakima']},
"Midwest":{"cities": ['Minneapolis',
'St. Louis',
'Pueblo',
'Kansas City',
'Columbia',
'Denver',
'Springfield',
'Des Moines',
'Cedar Rapids',
'Olathe',
'Omaha',
'Sioux Falls',]},
"Great Lakes":{"cities": ['Detroit', 
'Chicago', 
//'Grand Rapids',// removed shorts
//'Lansing',// removed shorts
'Columbus',
"Fond du Lac",
'Cleveland', 
'Milwaukee', 
'Indianapolis']},
"Germany":{"cities": ['Munich',
'Frankfurt',
'Hamburg',
'Dusseldorf',
//'Stuttgart',// removed shorts
'Berlin',
'Leipzig',
//'Hanover',// removed shorts
'Münster',
'Gelsenkirchen']},
"Italy":{"cities": ['Milan',
'Rome',
'Verona',
'Bari',
'Turin',
"Lecce",
//'Bologna',// removed shorts
//'Palermo',// removed shorts
'Cagliari',
'Venice',
'Padua',
'Fabbriche di Vergemoli',
'Naples',
//'Florence',
'Barasso',
'Catania',
'Agrigento']},
"South America":{"cities": [
'Santiago',
'Lima',
'Recife',
'Quito',
//'Teresina',
'Caracas',
'Porto Alegre']},
"Finland":{"cities": ["Helsinki", "Oulu"]},
"Japan":{"cities": ['Tokyo',
'Nagoya',
'Chiba',
'Fukuoka',
'Saitama',
'Kobe',
"Sapporo",
'Hamamatsu']},
"Switzerland":{"cities": ['Lucerne',
'Zurich',
'Lausanne',
'Laufen',
'Chur',
'Thun',
'Maur',
'Nyon',
'Sion',
'Geneva',
'Bern',
'Weinfelden',
'Winterthur']},
"Spain":{"cities":[
'Barcelona',
'Madrid',
'Zarautz',
'Pamplona',
'Bilbao',
"Algeciras",
//"Salamanca",// removed shorts
'Palma',
'Valencia',
"Murcia",
"Granada‎",
"León",
'Vitoria-Gasteiz',
'Vigo',
'A Coruña']},
"United Kingdom":{"cities": ['Belfast',
 'Barnsley',
 'Edinburgh',
 'Birmingham',
 'Kirklees',
 //'Nottingham',// removed shorts
 //'Leeds',// removed shorts
 //'Manchester',// removed shorts
 'Brighton',
 'Bristol',
 'Reading',
 'Newcastle upon Tyne',
 'London',
 'Corby',
 'Litherland',
 'Willerby',
 //'Bradford',
 'Preston',
 'Swansea']},
"South": {"cities": ['Albuquerque',
'San Antonio',
'Corpus Christi',
//'Austin', // removed shorts
'Little Rock',
'Wichita Falls',
'El Paso',
'Houston',
'Tulsa',
'New Orleans',
'Baton Rouge']},
"Canada":{"cities":[
'Toronto',
'Saskatoon',
'Edmonton',
'Winnipeg',
'Calgary',
'Quebec City']}};

let black_views = 
{"California": {"cities": ["Los Angeles",  "San Diego", "Fresno"]},
"Norway": {"cities":['Oslo',
'Bergen',
'Skien',
'Hamar',
'Trondheim',
'Stavanger']},
"Central America" : {"cities":['San José',
'Tegucigalpa',
'San Salvador',
'Guatemala City',
'Managua',
'Panama City',
'San Pedro Sula']},
"Colombia" : {"cities":['Pasto',
'Bogota',
'Medellín',
"Bucaramanga",
//"Cali",
"Los Andes",
'Manizales',
'Fusagasugá ciudad']},
"Sweden": {"cities": [
//'Sundsvall', removed shorts
'Stockholm', 'Umeå', 'Linköping', 'Gothenburg', 'Skellefteå',
'Halmstad',
//'Borlänge',// removed shorts
//'Gävle',// removed shorts
//'Karlskrona'// removed shorts
]},
"Hungary": {"cities": ['Szeged',
'Szigetvár',
'Debrecen',
'Miskolc',
'Budapest',
'Szerencs',
'Szombathely',
'Ózd',
//'Veszprém',// removed shorts
'Nagykanizsa',
'Zalaegerszeg',
'Nagyatád',
'Szentendre']},
"Eastern Europe": {"cities": ['Lviv',
'Chișinău',
'Kharkiv',
'Minsk',
//'Kiev',// removed shorts
'Mykolaiv',
//'Zhytomyr',// removed shorts
'Donetsk',
'Rivne',
//"Gomel",// removed shorts
//'Dnipro',// removed shorts
"Grodno"]},
"North Asia": {"cities": ['Tokyo',
'Sha Tin',
"Tai'an",
//"Shanghai",// removed shorts
//"Jinzhou",// removed shorts
'Suwon-si',
"Beijing",
"Nanchang",
"Hong Kong",
"Ulaanbaatar",
'Osaka',
'Xihu',
'Taipei',
'Osaka',
'Taishan',
'Dongcheng',
'Linqu',
//'Seoul'// removed shorts
]},
"Malaysia": {"cities": ['Pasir Mas',
'Kuala Lumpur',
'Klang City',
"Alor Setar",
"Johor Bahru",
"Sibu",
"Tawau",
'Ipoh',
'Sandakan',
'Petaling Jaya',
'FELDA Jengka 7',
'Kota Kinabalu',
'Kuala Terengganu']},
"Northeast":{"cities": ['New York City',
'Waldorf',
'Washington, D.C.',
'Philadelphia',
'Pittsburgh',
'Portland',
'Jackson Township',
//'Rochester',// removed shorts
'Oakham',
'Curtin']},
"Southeast":{"cities": ['Lexington',
'Asheville',
'Nashville',
'Louisville',
'Miami',
'Richmond',
'Charlotte',
'Huntsville',
'Frostproof',
'Herndon',
'Tampa',
'Atlanta',
'Raleigh',
'Bowling Green',
'Gainesville',
'Birmingham',
'Sanford']},
"Brazil":{"cities": ['Rio de Janeiro',
'Belo Horizonte',
//'São Paulo',
//'Brasília',// removed shorts
"Natal",
"Salvador",
"Criciúma",
"Ji-Paraná",
'Curitiba',
'Peixoto de Azevedo',
'Sumaré',
'Santa Maria']},
"Southwest":{"cities": ['Tucson',
'Las Vegas',
'San Diego',
'Phoenix',
'Salt Lake City',
'Mammoth Lakes',
'Los Angeles',
'Sacramento']},
"Northwest":{"cities": ['Portland',
//'Spokane',// removed shorts
'Eugene',
'Seattle',
'Boise',
'Missoula',
'Olympia',
'Bozeman']},
"Midwest":{"cities": ['Minneapolis',
'Kansas City',
'Denver',
'Fargo',
'Omaha',
'St. Louis',
'Minot',
'Cedar Rapids']},
"Great Lakes":{"cities": [
//'Grand Rapids',// removed shorts
'Fort Wayne',
'Chicago',
'Flint',
'Indianapolis',
//'Lansing',// removed shorts
'Detroit',
'Milwaukee',
'Cleveland',
'Columbus',
'DeKalb',
//'Traverse City'// removed shorts
]},
"Poland":{"cities": ['Mielec',
'Lublin',
'Perzów',
'Białystok',
'Gdańsk',
'Olsztyn',
'Wrocław',
//'Łódź', // removed shorts
'Warsaw',
'Kraków',
'Katowice',
'Dukla',
'Toruń',
'Zielona Góra']},
"Germany":{"cities": ['Berlin',
//'Augsburg', //removed 4 shorts
'Dortmund',
'Kiel',
'Cologne',
'Kipfenberg',
'Saarbrücken',
'Memmingen',
'Hamburg',
//"Erfurt",//removed 4 shorts
"Bremen",
"Leipzig",
'Schweinfurt',
'Osnabrück',
'Aachen',
'Munich']},
"Italy":{"cities": ['Venice',
'Bari',
'Turin',
"Bolzano",
"Taranto",
//'Palermo',//removed shorts
//'Bologna',// removed shorts
'Catania',
'Rome',
'Cagliari',
'Milan',
'Biella',
'Florence',
"Ponte dell'Olio",
'San Clemente',
'Nervesa della Battaglia',
'Abriola',
'Genoa',
'Nembro']
},
"South America":{"cities": ["Lima", "Bogata", "Santiago"]},
"France":{"cities": ['Paris',
'Avignon',
'Rouen',
'Mirabeau',
'Brest',
'Lyon',
'Nice',
'Toulouse',
//'Poitiers',//removed shorts
'Bordeaux',
'Merléac','Bagnols-sur-Cèze',
'Grenoble',
'Maisons-Laffitte',
'Aurillac',
'Besançon',
'Beaurains',
'Bergerac',
'Villard-de-Lans',
'Mondeville',
'Segré-en-Anjou Bleu',
'Sarralbe',
'Remiremont',
'Antibes',
'Vernouillet',
'Plérin',
'La Rochelle',
'Dunkirk',
'Pont-Saint-Esprit',
'Cherval',
'Grabels',
'Hettange-Grande',
'Sentenac-de-Sérou',
'Chambéry',
'Quimper',
'Strasbourg',
'Trélazé',
'Nantes',
'Sainte-Marguerite',
'Commentry',
'Albi',
'Le Cannet',
'Martignas-sur-Jalle',
'Dagneux',
'Yutz']},
"Finland":{"cities": [
//'Kouvola',//removed shorts
'Helsinki',
'Lahti',
//'Jyväskylä',//removed shorts
'Hyvinkää',
'Ylöjärvi',
//'Kuopio',//removed shorts
'Rovaniemi',
'Hämeenlinna',
'Oulu',
'Vantaa',
'Tampere',
'Pirkkala',
'Lappeenranta',
'Riihimäki',
'Turku']},
"Switzerland":{"cities": ["Zurich"]},
"Spain":{"cities":['Bullas',
'Barcelona',
'Madrid',
'Zarautz',
'Pamplona',
'Bilbao',
'Palma',
'Valencia',
'Granada',
'Quintana del Castillo',
'Vitoria-Gasteiz',
'Vigo',
'A Coruña']},
"United Kingdom":{"cities": ['Derby',
'London',
'Edinburgh',
//'Leeds',// removed shorts
'Birmingham',
'Southampton',
//'Manchester',// removed shorts
'Cheltenham',
'Sapcote',
'Aberdeen',
'Glasgow',
'Belfast',
'Newcastle upon Tyne',
'Kirklees']},
"South": {"cities": ['Houston',
'San Antonio',
'New Orleans',
'Santa Fe',
'Austin',
'Baton Rouge',
'Dallas',
'Oklahoma City',
'Brownsville',
'El Paso',
'Tulsa']},
"Australia": {"cities": ['Melbourne',
'Brisbane',
'Adelaide',
'Canberra',
'Perth']}};

let death_views = 
{"California": {"cities": ["Los Angeles",  "San Diego", "Fresno"]},
"Norway": {"cities":['Oslo',
'Bergen',
'Trondheim',
'Mo i Rana',
'Jessheim',
'Fredrikstad',
'Sogndal',
'Stavanger',
'Askim',
'Hønefoss']},
"Central America" : {"cities":['San José',
'Tegucigalpa',
'San Salvador',
'Guatemala City',
'Managua',
'Panama City',
'San Pedro Sula']},
"Canada": {"cities": [
'Quebec City',
'Winnipeg',
'Lévis',
'Edmonton',
"Thunder Bay",
'Longueuil',
'Calgary',
"Regina",
'Saguenay',
'Toronto']},
"Argentina" : {"cities":[
//"Córdoba",// removed shorts
"Rio Grande",
'Bahía Blanca',
'Salta',
//'Neuquén',// removed shorts
'San Miguel']},
"Denmark" : {"cities":['Aalborg',
'Copenhagen',
'Ribe',
//'Aarhus',// removed shorts
//'Odense',// removed shorts
'Esbjerg',
'Næstved',
'Silkeborg',
'Ringsted',
'Randers',
//'Slagelse',// removed shorts
//'Roskilde',// removed shorts
'Kolding']},
"Sweden": {"cities": ['Stockholm',
'Gothenburg',
'Örebro',
'Visby',
'Helsingborg',
'Linköping',
'Fors',
'Gamleby',
//'Sandviken'// removed shorts
]},
"Scandinavia": {"cities": ["Stockholm", "Oslo", "Copenhagen", "Helsinki"]},
"The Baltic States": {"cities": ['Vilnius', 'Tallinn', 'Riga', 'Cēsis', 'Kaunas', 'Tartu']},
"Southeast Asia": {"cities": [
'San Mateo',
'Quezon City',
'Cebu City',
'Trece Martires',
'Kota Bekasi',
//'Kota Kinabalu',// removed shorts
'Giritirto',
"Bangkok",
'Denpasar',
'Tangerang',
'Malang']},
"South Asia": {"cities": ['Bengaluru',
'New Delhi',
'Guwahati',
'Astana',
'Kathmandu',
"Bangalore",
//'Kolkata', // removed shorts
'Karachi',
'Rawalpindi',
'Lahore',
'Almaty',
'Chattogram',
'Colombo',
'Ashgabat City']},
"Africa": {"cities": [
'Cape Town',
'Gqeberha',
//'Cairo',// removed shorts
"Port Elizabeth",
'Casablanca',
'Nairobi',
//'Harare',// removed shorts
'Tunis',
//'Tripoli',// removed shorts
'Beau Bassin-Rose Hill',
'Kelibia',
'Somerset West',
'Algiers']},
"Northeast":{"cities": ['Brookhaven',
'Buffalo',
'New York City',
//'Rochester',// removed shorts
'Pittsburgh',
//'Hartford',// removed shorts
'Philadelphia']},
"Florida": {"cities": ['Tampa',
'Sarasota',
'Orlando',// removed shorts
'Gainesville',
'Jacksonville',
'Frostproof']
},
"Southeast":{"cities": ['Lexington',
'Asheville',
'Nashville',
'Louisville',
'Miami',
'Richmond',
'Charlotte',
'Huntsville',
'Frostproof',
'Herndon',
'Tampa',
'Atlanta',
'Raleigh',
'Bowling Green',
'Gainesville',
'Birmingham',
'Sanford']},
"Southwest":{"cities": ['Tucson',
'Las Vegas',
//'Santa Cruz',// removed shorts
//'Eureka',// removed shorts
'San Diego',
'Mammoth Lakes',
'Phoenix',
'Los Angeles',
'Salt Lake City',
'Sacramento']},
"Northwest":{"cities": ['Portland',
'Medford',
'Laramie',
'Spokane',
'Eugene',
'Seattle',
'Billings',
'Sammamish',
'Missoula',
'Bozeman',
'Ellensburg',
'Federal Way',
'Richland',
'Sheridan',
'Cheyenne',
'Boise']},
"Midwest":{"cities": [
'Kansas City',
'Des Moines',
'Cedar Rapids',
//'Omaha',// removed shorts
'Wichita',
'Minneapolis',
//'Mankato',// removed shorts
'Fargo',
'Topeka',
'St. Louis']},
"Great Lakes":{"cities": ['Grand Rapids',
'Fort Wayne',
'Chicago',
'Champaign',
'Flint',
'Indianapolis',
'Lansing',
'Detroit',
'Milwaukee',,
'Cleveland',
'Columbus',
'Madison',
'Traverse City',
'Muncie',
'Marquette',
'Cincinnati']},
"Germany":{"cities": ['Karlsruhe',
'Kiel',
'Berlin',
'Jena',
'Kipfenberg',
'Munich',
'Dortmund',
'Bremen',
'Hamburg',
'Leipzig',
'Saarbrücken',
'Memmingen',
'Osnabrück',
'Cologne',
'Schneeberg',
'Aachen']},
"Poland":{"cities": [
//'Łódź', // removed shorts
'Warsaw',
'Wrocław',
"Olsztyn",
"Kraków",
"Lublin",
"Poznań",
'Gdańsk',
'Katowice',
'Białystok',
'Tarnów',
'Płock']},
"Italy":{"cities": [
'Bari',
'Catania',
'Rome',
'Cagliari',
'Milan',
'Florence',
'Genoa',]},
"South America":{"cities": [
'Santiago',
'Lima',
'Quito',
'Caracas',
'Porto Alegre']},
"Finland":{"cities": ["Helsinki", "Oulu"]},
"Middle East":{"cities":['Ankara',
'Izmir',
"Istanbul",
'Dubai',
'Kuwait City',
'Yerevan',
'Tbilisi',
"Baku",
//'Haifa',
'Beşiktaş',
'Tel Aviv',
'Tehran',
'Cairo']},
"Mexico":{"cities": ['Mexico City',
'Irapuato',
'Monterrey',
'Colima',
"Cancún",
"Los Mochis",
//'Querétaro',
'Tijuana',
'Guadalajara',
'Tampico']},
"Switzerland":{"cities": ["Zurich"]},
"United Kingdom":{"cities": ['Birmingham',
//'Liverpool',// removed shorts
'Edinburgh',
'Aberdeen',
"Newcastle upon Tyne",
'London',
'Glasgow',
//'Leeds',// removed shorts
'Ipswich',
//'Norwich',// removed shorts
'Brighton']
},
"South": {"cities": ['Plano',
//'Austin',// removed shorts
'New Orleans',
'Houston',
'San Antonio',
'El Paso',
'Tulsa',
'Amarillo',
'Albuquerque',
'Little Rock',
'Baton Rouge']}};

let power_views = 
{"California": {"cities": ["Los Angeles",  "San Diego", "Fresno"]},
"Norway": {"cities":['Oslo',
'Bergen',
'Trondheim',
'Mo i Rana',
'Jessheim',
'Fredrikstad',
'Sogndal',
'Stavanger',
'Askim',
'Hønefoss']},
"Central America" : {"cities":['San José',
'Tegucigalpa',
'San Salvador',
'Guatemala City',
'Managua',
'Panama City',
'San Pedro Sula']},
"Sweden": {"cities": ['Stockholm',
'Umeå',
'Bålsta',
'Helsingborg',
//'Borås',
//'Gothenburg',
//'Karlskrona', // removed shorts
'Kristinehamn',
'Luleå',
//'Bollnäs',// remoced shorts
//'Falun', // removed shorts
'Linköping',
'Örebro',
'Karlstad']},
"Scandinavia": {"cities": ["Stockholm", "Oslo", "Copenhagen", "Helsinki"]},
"South Asia": {"cities": ['Bengaluru',
'New Delhi',
'Guwahati',
'Astana',
'Kathmandu',
"Bangalore",
'Kolkata',
'Karachi',
'Rawalpindi',
'Lahore',
'Almaty',
'Chattogram',
'Colombo',
'Ashgabat City']},
"Africa": {"cities": [
'Cape Town',
'Gqeberha',
'Cairo',
"Port Elizabeth",
'Casablanca',
'Nairobi',
'Harare',
'Tunis',
'Tripoli',
'Beau Bassin-Rose Hill',
'Kelibia',
'Somerset West',
'Algiers']},
"Northeast":{"cities": ['Brookhaven',
'Buffalo',
'New York City',
'Rochester',
'Pittsburgh',
'Hartford',
'Philadelphia']},
"Florida": {"cities": ['Tampa',
'Sarasota',
'Orlando',
'Gainesville',
'Jacksonville',
'Frostproof']
},
"Southeast":{"cities": ['Lexington',
'Asheville',
'Nashville',
'Louisville',
'Miami',
'Richmond',
'Charlotte',
'Huntsville',
'Frostproof',
'Herndon',
'Tampa',
'Atlanta',
'Raleigh',
'Bowling Green',
'Gainesville',
'Birmingham',
'Sanford']},
"Southwest":{"cities": ['Los Angeles',
'Las Vegas',
//'San Jose',
'San Diego',
'Phoenix',
'Coachella',
'Sacramento',
'Salt Lake City',
'Chula Vista',
//'San Francisco',
'Flagstaff',
'Tucson']},
"Northwest":{"cities": ['Portland',
'Medford',
'Laramie',
'Spokane',
'Eugene',
'Seattle',
'Billings',
'Sammamish',
'Missoula',
'Bozeman',
'Ellensburg',
'Federal Way',
'Richland',
'Sheridan',
'Cheyenne',
'Boise']},
"Midwest":{"cities": [
'Kansas City',
'Des Moines',
'Cedar Rapids',
'Omaha',
'Wichita',
'Minneapolis',
'Mankato',
'Fargo',
'Topeka',
'St. Louis']},
"Great Lakes":{"cities": ['Grand Rapids',
'Fort Wayne',
'Chicago',
'Champaign',
'Flint',
'Indianapolis',
'Lansing',
'Detroit',
'Milwaukee',,
'Cleveland',
'Columbus',
'Madison',
'Traverse City',
'Muncie',
'Marquette',
'Cincinnati']},
"Germany":{"cities": ['Duisburg',
'Hamburg',
'Dortmund',
'Nuremberg',
//'Hanover',// removed shorts
'Krefeld',
'Frankfurt',
'Berlin',
'Saarbrücken',
'Karlsruhe',
'Esslingen am Neckar',
'Vogtei',
'Munich']},
"Poland":{"cities": ['Łódź',
'Warsaw',
'Wrocław',
"Olsztyn",
"Kraków",
"Lublin",
"Poznań",
'Gdańsk',
'Katowice',
'Białystok',
'Tarnów',
'Płock']},
"Italy":{"cities": [
'Bari',
'Catania',
'Rome',
'Cagliari',
'Milan',
'Florence',
'Genoa',]},
"South America":{"cities": [
'Santiago',
'Lima',
'Quito',
'Caracas',
'Porto Alegre']},
"Finland":{"cities": ["Helsinki", "Oulu"]},
"Middle East":{"cities":['Ankara',
'Izmir',
"Istanbul",
'Dubai',
'Kuwait City',
'Yerevan',
'Tbilisi',
"Baku",
//'Haifa',
'Beşiktaş',
'Tel Aviv',
'Tehran',
'Cairo']},
"Mexico":{"cities": ['Mexico City',
'Irapuato',
'Monterrey',
'Colima',
"Cancún",
"Los Mochis",
//'Querétaro',
'Tijuana',
'Guadalajara',
'Tampico']},
"Switzerland":{"cities": ["Zurich"]},
"United Kingdom":{"cities": ['Birmingham',
'Liverpool',
'Edinburgh',
'Aberdeen',
"Newcastle upon Tyne",
'London',
'Glasgow',
'Leeds',
'Ipswich',
'Norwich',
'Brighton']
},
"South": {"cities": ['Houston',
'San Antonio',
'New Orleans',
'Santa Fe',
'Austin',
'Baton Rouge',
'Dallas',
'Oklahoma City',
'Brownsville',
'El Paso',
'Tulsa']}};

let heavy_views = 
{"California": {"cities": ["Los Angeles",  
"San Diego",
"Sacramento"
]},
"Norway": {"cities":['Oslo',
'Bergen',
'Trondheim',
'Mo i Rana',
'Jessheim',
'Fredrikstad',
'Sogndal',
'Stavanger',
'Askim',
'Hønefoss']},
"Brazil": {"cities":[
'São Paulo',
'Belo Horizonte',
'Porto Alegre',
'Curitiba',
'Recife',
'Rio de Janeiro',
//'Campinas',
'Belém',
'Salvador',
'Peixoto de Azevedo',
//'Petrópolis'
]},
"Central America" : {"cities":['San José',
'Tegucigalpa',
'San Salvador',
'Guatemala City',
'Managua',
'Panama City',
'San Pedro Sula']},
"Sweden": {"cities": ['Stockholm',
'Gothenburg',
'Örebro',
'Visby',
'Helsingborg',
'Linköping',
'Fors',
'Gamleby',
'Sandviken']},
"Scandinavia": {"cities": ["Stockholm", "Oslo", "Copenhagen", "Helsinki"]},
"South Asia": {"cities": ['Bengaluru',
'New Delhi',
'Guwahati',
'Astana',
'Kathmandu',
"Bangalore",
'Kolkata',
'Karachi',
'Rawalpindi',
'Lahore',
'Almaty',
'Chattogram',
'Colombo',
'Ashgabat City']},
"Africa": {"cities": [
'Cape Town',
'Gqeberha',
'Cairo',
"Port Elizabeth",
'Casablanca',
'Nairobi',
'Harare',
'Tunis',
'Tripoli',
'Beau Bassin-Rose Hill',
'Kelibia',
'Somerset West',
'Algiers']},
"Northeast":{"cities": [
'New York City',
'Pittsburgh',
//'Albany', // removed shorts
//'Rochester',// removed shorts
//'Syracuse',// removed shorts
'Boston',
'Philadelphia']},
"Florida": {"cities": ['Tampa',
'Sarasota',
'Orlando',
'Gainesville',
'Jacksonville',
'Frostproof']
},
"Southeast":{"cities": ['Lexington',
'Asheville',
'Nashville',
'Louisville',
'Miami',
'Richmond',
'Charlotte',
'Huntsville',
'Frostproof',
'Herndon',
'Tampa',
'Atlanta',
'Raleigh',
'Bowling Green',
'Gainesville',
'Birmingham',
'Sanford']},
"Southwest":{"cities": ['Tucson',
'Las Vegas',
'Santa Cruz',
'Eureka',
'San Diego',
'Mammoth Lakes',
'Phoenix',
'Los Angeles',
'Salt Lake City',
'Sacramento']},
"Northwest":{"cities": ['Portland',
'Medford',
'Laramie',
'Spokane',
'Eugene',
'Seattle',
'Billings',
'Sammamish',
'Missoula',
'Bozeman',
'Ellensburg',
'Federal Way',
'Richland',
'Sheridan',
'Cheyenne',
'Boise']},
"Midwest":{"cities": [
'Kansas City',
'Des Moines',
'Cedar Rapids',
'Omaha',
'Wichita',
'Minneapolis',
'Mankato',
'Fargo',
'Topeka',
'St. Louis']},
"Great Lakes":{"cities": ['Grand Rapids',
'Fort Wayne',
'Chicago',
'Champaign',
'Flint',
'Indianapolis',
'Lansing',
'Detroit',
'Milwaukee',,
'Cleveland',
'Columbus',
'Madison',
'Traverse City',
'Muncie',
'Marquette',
'Cincinnati']},
"Germany":{"cities": [
//'Hanover',// removed shorts
'Gelsenkirchen',
'Bochum',
'Lappersdorf',
'Attendorn',
'Hamburg',
'Frankfurt',
'Berlin',
'Siegen',
//'Bielefeld',// removed shorts
'Willebadessen',
//'Ulm',// removed shorts
'Stuttgart']},
"Poland":{"cities": ['Łódź',
'Warsaw',
'Wrocław',
"Olsztyn",
"Kraków",
"Lublin",
"Poznań",
'Gdańsk',
'Katowice',
'Białystok',
'Tarnów',
'Płock']},
"Italy":{"cities": [
'Bari',
'Catania',
'Rome',
'Cagliari',
'Milan',
'Florence',
'Genoa',]},
"South America":{"cities": [
'Santiago',
'Lima',
'Quito',
'Caracas',
'Porto Alegre']},
"Finland":{"cities": ["Helsinki", "Oulu"]},
"Middle East":{"cities":['Ankara',
'Izmir',
"Istanbul",
'Dubai',
'Kuwait City',
'Yerevan',
'Tbilisi',
"Baku",
//'Haifa',
'Beşiktaş',
'Tel Aviv',
'Tehran',
'Cairo']},
"Mexico":{"cities": ['Mexico City',
'Irapuato',
'Monterrey',
'Colima',
"Cancún",
"Los Mochis",
//'Querétaro',
'Tijuana',
'Guadalajara',
'Tampico']},
"Switzerland":{"cities": ["Zurich"]},
"United Kingdom":{"cities": ['Birmingham',
'Edinburgh',
//'Nottingham', // removed shorts
"Newcastle upon Tyne",
'London',
'Glasgow',
//'Manchester',// removed shorts
'Belfast',
//'Bradford'// removed shorts
]
},
"South": {"cities": ['Houston',
'San Antonio',
'New Orleans',
'Santa Fe',
'Austin',
'Baton Rouge',
'Dallas',
'Oklahoma City',
'Brownsville',
'El Paso',
'Tulsa']}};

let speed_views = 
{"California": {"cities": ["Los Angeles",  "San Diego", "Fresno"]},
"Norway": {"cities":['Oslo',
'Bergen',
'Trondheim',
'Mo i Rana',
'Jessheim',
'Fredrikstad',
'Sogndal',
'Stavanger',
'Askim',
'Hønefoss']},
"Central America" : {"cities":['San José',
'Tegucigalpa',
'San Salvador',
'Guatemala City',
'Managua',
'Panama City',
'San Pedro Sula']},
"Sweden": {"cities": ['Stockholm',
'Gothenburg',
'Örebro',
'Visby',
'Helsingborg',
'Linköping',
'Fors',
'Gamleby',
'Sandviken']},
"Scandinavia": {"cities": ["Stockholm", "Oslo", "Copenhagen", "Helsinki"]},
"South Asia": {"cities": ['Bengaluru',
'New Delhi',
'Guwahati',
'Astana',
'Kathmandu',
"Bangalore",
'Kolkata',
'Karachi',
'Rawalpindi',
'Lahore',
'Almaty',
'Chattogram',
'Colombo',
'Ashgabat City']},
"Africa": {"cities": [
'Cape Town',
'Gqeberha',
'Cairo',
"Port Elizabeth",
'Casablanca',
'Nairobi',
'Harare',
'Tunis',
'Tripoli',
'Beau Bassin-Rose Hill',
'Kelibia',
'Somerset West',
'Algiers']},
"Northeast":{"cities": ['Brookhaven',
'Buffalo',
'New York City',
'Rochester',
'Pittsburgh',
'Hartford',
'Philadelphia']},
"Florida": {"cities": ['Tampa',
'Sarasota',
'Orlando',
'Gainesville',
'Jacksonville',
'Frostproof']
},
"Southeast":{"cities": ['Lexington',
'Asheville',
'Nashville',
'Louisville',
'Miami',
'Richmond',
'Charlotte',
'Huntsville',
'Frostproof',
'Herndon',
'Tampa',
'Atlanta',
'Raleigh',
'Bowling Green',
'Gainesville',
'Birmingham',
'Sanford']},
"Southwest":{"cities": ['Tucson',
'Las Vegas',
'Santa Cruz',
'Eureka',
'San Diego',
'Mammoth Lakes',
'Phoenix',
'Los Angeles',
'Salt Lake City',
'Sacramento']},
"Northwest":{"cities": ['Portland',
'Medford',
'Laramie',
'Spokane',
'Eugene',
'Seattle',
'Billings',
'Sammamish',
'Missoula',
'Bozeman',
'Ellensburg',
'Federal Way',
'Richland',
'Sheridan',
'Cheyenne',
'Boise']},
"Midwest":{"cities": [
'Kansas City',
'Des Moines',
'Cedar Rapids',
'Omaha',
'Wichita',
'Minneapolis',
'Mankato',
'Fargo',
'Topeka',
'St. Louis']},
"Great Lakes":{"cities": ['Grand Rapids',
'Fort Wayne',
'Chicago',
'Champaign',
'Flint',
'Indianapolis',
'Lansing',
'Detroit',
'Milwaukee',,
'Cleveland',
'Columbus',
'Madison',
'Traverse City',
'Muncie',
'Marquette',
'Cincinnati']},
"Germany":{"cities": ['Karlsruhe',
'Kiel',
'Berlin',
'Jena',
'Kipfenberg',
'Munich',
'Dortmund',
'Bremen',
'Hamburg',
'Leipzig',
'Saarbrücken',
'Memmingen',
'Osnabrück',
'Cologne',
'Schneeberg',
'Aachen']},
"Poland":{"cities": ['Łódź',
'Warsaw',
'Wrocław',
"Olsztyn",
"Kraków",
"Lublin",
"Poznań",
'Gdańsk',
'Katowice',
'Białystok',
'Tarnów',
'Płock']},
"Italy":{"cities": [
'Bari',
'Catania',
'Rome',
'Cagliari',
'Milan',
'Florence',
'Genoa',]},
"South America":{"cities": [
'Santiago',
'Lima',
'Quito',
'Caracas',
'Porto Alegre']},
"Finland":{"cities": ["Helsinki", "Oulu"]},
"Middle East":{"cities":['Ankara',
'Izmir',
"Istanbul",
'Dubai',
'Kuwait City',
'Yerevan',
'Tbilisi',
"Baku",
//'Haifa',
'Beşiktaş',
'Tel Aviv',
'Tehran',
'Cairo']},
"Mexico":{"cities": ['Mexico City',
'Irapuato',
'Monterrey',
'Colima',
"Cancún",
"Los Mochis",
//'Querétaro',
'Tijuana',
'Guadalajara',
'Tampico']},
"Switzerland":{"cities": ["Zurich"]},
"United Kingdom":{"cities": ['Birmingham',
'Liverpool',
'Edinburgh',
'Aberdeen',
"Newcastle upon Tyne",
'London',
'Glasgow',
'Leeds',
'Ipswich',
'Norwich',
'Brighton']
},
"South": {"cities": ['Houston',
'San Antonio',
'New Orleans',
'Santa Fe',
'Austin',
'Baton Rouge',
'Dallas',
'Oklahoma City',
'Brownsville',
'El Paso',
'Tulsa']}};