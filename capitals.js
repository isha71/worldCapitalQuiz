const capitals = [
    {
        "id": 1,
        "country": "Afghanistan",
        "capital": "Kabul"
    },
    {
        "id": 2,
        "country": "Aland Islands",
        "capital": "Mariehamn"
    },
    {
        "id": 3,
        "country": "Albania",
        "capital": "Tirana"
    },
    {
        "id": 4,
        "country": "Algeria",
        "capital": "Algiers"
    },
    {
        "id": 5,
        "country": "American Samoa",
        "capital": "Pago Pago"
    },
    {
        "id": 6,
        "country": "Andorra",
        "capital": "Andorra la Vella"
    },
    {
        "id": 7,
        "country": "Angola",
        "capital": "Luanda"
    },
    {
        "id": 8,
        "country": "Anguilla",
        "capital": "The Valley"
    },
    {
        "id": 9,
        "country": "Antarctica",
        "capital": ""
    },
    {
        "id": 10,
        "country": "Antigua And Barbuda",
        "capital": "St. John's"
    },
    {
        "id": 11,
        "country": "Argentina",
        "capital": "Buenos Aires"
    },
    {
        "id": 12,
        "country": "Armenia",
        "capital": "Yerevan"
    },
    {
        "id": 13,
        "country": "Aruba",
        "capital": "Oranjestad"
    },
    {
        "id": 14,
        "country": "Australia",
        "capital": "Canberra"
    },
    {
        "id": 15,
        "country": "Austria",
        "capital": "Vienna"
    },
    {
        "id": 16,
        "country": "Azerbaijan",
        "capital": "Baku"
    },
    {
        "id": 18,
        "country": "Bahrain",
        "capital": "Manama"
    },
    {
        "id": 19,
        "country": "Bangladesh",
        "capital": "Dhaka"
    },
    {
        "id": 20,
        "country": "Barbados",
        "capital": "Bridgetown"
    },
    {
        "id": 21,
        "country": "Belarus",
        "capital": "Minsk"
    },
    {
        "id": 22,
        "country": "Belgium",
        "capital": "Brussels"
    },
    {
        "id": 23,
        "country": "Belize",
        "capital": "Belmopan"
    },
    {
        "id": 24,
        "country": "Benin",
        "capital": "Porto-Novo"
    },
    {
        "id": 25,
        "country": "Bermuda",
        "capital": "Hamilton"
    },
    {
        "id": 26,
        "country": "Bhutan",
        "capital": "Thimphu"
    },
    {
        "id": 27,
        "country": "Bolivia",
        "capital": "Sucre"
    },
    {
        "id": 155,
        "country": "Bonaire, Sint Eustatius and Saba",
        "capital": "Kralendijk"
    },
    {
        "id": 28,
        "country": "Bosnia and Herzegovina",
        "capital": "Sarajevo"
    },
    {
        "id": 29,
        "country": "Botswana",
        "capital": "Gaborone"
    },
    {
        "id": 30,
        "country": "Bouvet Island",
        "capital": ""
    },
    {
        "id": 31,
        "country": "Brazil",
        "capital": "Brasilia"
    },
    {
        "id": 32,
        "country": "British Indian Ocean Territory",
        "capital": "Diego Garcia"
    },
    {
        "id": 33,
        "country": "Brunei",
        "capital": "Bandar Seri Begawan"
    },
    {
        "id": 34,
        "country": "Bulgaria",
        "capital": "Sofia"
    },
    {
        "id": 35,
        "country": "Burkina Faso",
        "capital": "Ouagadougou"
    },
    {
        "id": 36,
        "country": "Burundi",
        "capital": "Bujumbura"
    },
    {
        "id": 37,
        "country": "Cambodia",
        "capital": "Phnom Penh"
    },
    {
        "id": 38,
        "country": "Cameroon",
        "capital": "Yaounde"
    },
    {
        "id": 39,
        "country": "Canada",
        "capital": "Ottawa"
    },
    {
        "id": 40,
        "country": "Cape Verde",
        "capital": "Praia"
    },
    {
        "id": 41,
        "country": "Cayman Islands",
        "capital": "George Town"
    },
    {
        "id": 42,
        "country": "Central African Republic",
        "capital": "Bangui"
    },
    {
        "id": 43,
        "country": "Chad",
        "capital": "N'Djamena"
    },
    {
        "id": 44,
        "country": "Chile",
        "capital": "Santiago"
    },
    {
        "id": 45,
        "country": "China",
        "capital": "Beijing"
    },
    {
        "id": 46,
        "country": "Christmas Island",
        "capital": "Flying Fish Cove"
    },
    {
        "id": 47,
        "country": "Cocos (Keeling) Islands",
        "capital": "West Island"
    },
    {
        "id": 48,
        "country": "Colombia",
        "capital": "Bogotá"
    },
    {
        "id": 49,
        "country": "Comoros",
        "capital": "Moroni"
    },
    {
        "id": 50,
        "country": "Congo",
        "capital": "Brazzaville"
    },
    {
        "id": 52,
        "country": "Cook Islands",
        "capital": "Avarua"
    },
    {
        "id": 53,
        "country": "Costa Rica",
        "capital": "San Jose"
    },
    {
        "id": 54,
        "country": "Cote D'Ivoire (Ivory Coast)",
        "capital": "Yamoussoukro"
    },
    {
        "id": 55,
        "country": "Croatia",
        "capital": "Zagreb"
    },
    {
        "id": 56,
        "country": "Cuba",
        "capital": "Havana"
    },
    {
        "id": 249,
        "country": "Curaçao",
        "capital": "Willemstad"
    },
    {
        "id": 57,
        "country": "Cyprus",
        "capital": "Nicosia"
    },
    {
        "id": 58,
        "country": "Czech Republic",
        "capital": "Prague"
    },
    {
        "id": 51,
        "country": "Democratic Republic of the Congo",
        "capital": "Kinshasa"
    },
    {
        "id": 59,
        "country": "Denmark",
        "capital": "Copenhagen"
    },
    {
        "id": 60,
        "country": "Djibouti",
        "capital": "Djibouti"
    },
    {
        "id": 61,
        "country": "Dominica",
        "capital": "Roseau"
    },
    {
        "id": 62,
        "country": "Dominican Republic",
        "capital": "Santo Domingo"
    },
    {
        "id": 63,
        "country": "East Timor",
        "capital": "Dili"
    },
    {
        "id": 64,
        "country": "Ecuador",
        "capital": "Quito"
    },
    {
        "id": 65,
        "country": "Egypt",
        "capital": "Cairo"
    },
    {
        "id": 66,
        "country": "El Salvador",
        "capital": "San Salvador"
    },
    {
        "id": 67,
        "country": "Equatorial Guinea",
        "capital": "Malabo"
    },
    {
        "id": 68,
        "country": "Eritrea",
        "capital": "Asmara"
    },
    {
        "id": 69,
        "country": "Estonia",
        "capital": "Tallinn"
    },
    {
        "id": 70,
        "country": "Ethiopia",
        "capital": "Addis Ababa"
    },
    {
        "id": 71,
        "country": "Falkland Islands",
        "capital": "Stanley"
    },
    {
        "id": 72,
        "country": "Faroe Islands",
        "capital": "Torshavn"
    },
    {
        "id": 73,
        "country": "Fiji Islands",
        "capital": "Suva"
    },
    {
        "id": 74,
        "country": "Finland",
        "capital": "Helsinki"
    },
    {
        "id": 75,
        "country": "France",
        "capital": "Paris"
    },
    {
        "id": 76,
        "country": "French Guiana",
        "capital": "Cayenne"
    },
    {
        "id": 77,
        "country": "French Polynesia",
        "capital": "Papeete"
    },
    {
        "id": 78,
        "country": "French Southern Territories",
        "capital": "Port-aux-Francais"
    },
    {
        "id": 79,
        "country": "Gabon",
        "capital": "Libreville"
    },
    {
        "id": 80,
        "country": "Gambia The",
        "capital": "Banjul"
    },
    {
        "id": 81,
        "country": "Georgia",
        "capital": "Tbilisi"
    },
    {
        "id": 82,
        "country": "Germany",
        "capital": "Berlin"
    },
    {
        "id": 83,
        "country": "Ghana",
        "capital": "Accra"
    },
    {
        "id": 84,
        "country": "Gibraltar",
        "capital": "Gibraltar"
    },
    {
        "id": 85,
        "country": "Greece",
        "capital": "Athens"
    },
    {
        "id": 86,
        "country": "Greenland",
        "capital": "Nuuk"
    },
    {
        "id": 87,
        "country": "Grenada",
        "capital": "St. George's"
    },
    {
        "id": 88,
        "country": "Guadeloupe",
        "capital": "Basse-Terre"
    },
    {
        "id": 89,
        "country": "Guam",
        "capital": "Hagatna"
    },
    {
        "id": 90,
        "country": "Guatemala",
        "capital": "Guatemala City"
    },
    {
        "id": 91,
        "country": "Guernsey and Alderney",
        "capital": "St Peter Port"
    },
    {
        "id": 92,
        "country": "Guinea",
        "capital": "Conakry"
    },
    {
        "id": 93,
        "country": "Guinea-Bissau",
        "capital": "Bissau"
    },
    {
        "id": 94,
        "country": "Guyana",
        "capital": "Georgetown"
    },
    {
        "id": 95,
        "country": "Haiti",
        "capital": "Port-au-Prince"
    },
    {
        "id": 96,
        "country": "Heard Island and McDonald Islands",
        "capital": ""
    },
    {
        "id": 97,
        "country": "Honduras",
        "capital": "Tegucigalpa"
    },
    {
        "id": 98,
        "country": "Hong Kong S.A.R.",
        "capital": "Hong Kong"
    },
    {
        "id": 99,
        "country": "Hungary",
        "capital": "Budapest"
    },
    {
        "id": 100,
        "country": "Iceland",
        "capital": "Reykjavik"
    },
    {
        "id": 101,
        "country": "India",
        "capital": "New Delhi"
    },
    {
        "id": 102,
        "country": "Indonesia",
        "capital": "Jakarta"
    },
    {
        "id": 103,
        "country": "Iran",
        "capital": "Tehran"
    },
    {
        "id": 104,
        "country": "Iraq",
        "capital": "Baghdad"
    },
    {
        "id": 105,
        "country": "Ireland",
        "capital": "Dublin"
    },
    {
        "id": 106,
        "country": "Israel",
        "capital": "Jerusalem"
    },
    {
        "id": 107,
        "country": "Italy",
        "capital": "Rome"
    },
    {
        "id": 108,
        "country": "Jamaica",
        "capital": "Kingston"
    },
    {
        "id": 109,
        "country": "Japan",
        "capital": "Tokyo"
    },
    {
        "id": 110,
        "country": "Jersey",
        "capital": "Saint Helier"
    },
    {
        "id": 111,
        "country": "Jordan",
        "capital": "Amman"
    },
    {
        "id": 112,
        "country": "Kazakhstan",
        "capital": "Astana"
    },
    {
        "id": 113,
        "country": "Kenya",
        "capital": "Nairobi"
    },
    {
        "id": 114,
        "country": "Kiribati",
        "capital": "Tarawa"
    },
    {
        "id": 248,
        "country": "Kosovo",
        "capital": "Pristina"
    },
    {
        "id": 117,
        "country": "Kuwait",
        "capital": "Kuwait City"
    },
    {
        "id": 118,
        "country": "Kyrgyzstan",
        "capital": "Bishkek"
    },
    {
        "id": 119,
        "country": "Laos",
        "capital": "Vientiane"
    },
    {
        "id": 120,
        "country": "Latvia",
        "capital": "Riga"
    },
    {
        "id": 121,
        "country": "Lebanon",
        "capital": "Beirut"
    },
    {
        "id": 122,
        "country": "Lesotho",
        "capital": "Maseru"
    },
    {
        "id": 123,
        "country": "Liberia",
        "capital": "Monrovia"
    },
    {
        "id": 124,
        "country": "Libya",
        "capital": "Tripolis"
    },
    {
        "id": 125,
        "country": "Liechtenstein",
        "capital": "Vaduz"
    },
    {
        "id": 126,
        "country": "Lithuania",
        "capital": "Vilnius"
    },
    {
        "id": 127,
        "country": "Luxembourg",
        "capital": "Luxembourg"
    },
    {
        "id": 128,
        "country": "Macau S.A.R.",
        "capital": "Macao"
    },
    {
        "id": 130,
        "country": "Madagascar",
        "capital": "Antananarivo"
    },
    {
        "id": 131,
        "country": "Malawi",
        "capital": "Lilongwe"
    },
    {
        "id": 132,
        "country": "Malaysia",
        "capital": "Kuala Lumpur"
    },
    {
        "id": 133,
        "country": "Maldives",
        "capital": "Male"
    },
    {
        "id": 134,
        "country": "Mali",
        "capital": "Bamako"
    },
    {
        "id": 135,
        "country": "Malta",
        "capital": "Valletta"
    },
    {
        "id": 136,
        "country": "Man (Isle of)",
        "capital": "Douglas, Isle of Man"
    },
    {
        "id": 137,
        "country": "Marshall Islands",
        "capital": "Majuro"
    },
    {
        "id": 138,
        "country": "Martinique",
        "capital": "Fort-de-France"
    },
    {
        "id": 139,
        "country": "Mauritania",
        "capital": "Nouakchott"
    },
    {
        "id": 140,
        "country": "Mauritius",
        "capital": "Port Louis"
    },
    {
        "id": 141,
        "country": "Mayotte",
        "capital": "Mamoudzou"
    },
    {
        "id": 142,
        "country": "Mexico",
        "capital": "Ciudad de México"
    },
    {
        "id": 143,
        "country": "Micronesia",
        "capital": "Palikir"
    },
    {
        "id": 144,
        "country": "Moldova",
        "capital": "Chisinau"
    },
    {
        "id": 145,
        "country": "Monaco",
        "capital": "Monaco"
    },
    {
        "id": 146,
        "country": "Mongolia",
        "capital": "Ulan Bator"
    },
    {
        "id": 147,
        "country": "Montenegro",
        "capital": "Podgorica"
    },
    {
        "id": 148,
        "country": "Montserrat",
        "capital": "Plymouth"
    },
    {
        "id": 149,
        "country": "Morocco",
        "capital": "Rabat"
    },
    {
        "id": 150,
        "country": "Mozambique",
        "capital": "Maputo"
    },
    {
        "id": 151,
        "country": "Myanmar",
        "capital": "Nay Pyi Taw"
    },
    {
        "id": 152,
        "country": "Namibia",
        "capital": "Windhoek"
    },
    {
        "id": 153,
        "country": "Nauru",
        "capital": "Yaren"
    },
    {
        "id": 154,
        "country": "Nepal",
        "capital": "Kathmandu"
    },
    {
        "id": 156,
        "country": "Netherlands",
        "capital": "Amsterdam"
    },
    {
        "id": 157,
        "country": "New Caledonia",
        "capital": "Noumea"
    },
    {
        "id": 158,
        "country": "New Zealand",
        "capital": "Wellington"
    },
    {
        "id": 159,
        "country": "Nicaragua",
        "capital": "Managua"
    },
    {
        "id": 160,
        "country": "Niger",
        "capital": "Niamey"
    },
    {
        "id": 161,
        "country": "Nigeria",
        "capital": "Abuja"
    },
    {
        "id": 162,
        "country": "Niue",
        "capital": "Alofi"
    },
    {
        "id": 163,
        "country": "Norfolk Island",
        "capital": "Kingston"
    },
    {
        "id": 115,
        "country": "North Korea",
        "capital": "Pyongyang"
    },
    {
        "id": 129,
        "country": "North Macedonia",
        "capital": "Skopje"
    },
    {
        "id": 164,
        "country": "Northern Mariana Islands",
        "capital": "Saipan"
    },
    {
        "id": 165,
        "country": "Norway",
        "capital": "Oslo"
    },
    {
        "id": 166,
        "country": "Oman",
        "capital": "Muscat"
    },
    {
        "id": 167,
        "country": "Pakistan",
        "capital": "Islamabad"
    },
    {
        "id": 168,
        "country": "Palau",
        "capital": "Melekeok"
    },
    {
        "id": 169,
        "country": "Palestinian Territory Occupied",
        "capital": "East Jerusalem"
    },
    {
        "id": 170,
        "country": "Panama",
        "capital": "Panama City"
    },
    {
        "id": 171,
        "country": "Papua new Guinea",
        "capital": "Port Moresby"
    },
    {
        "id": 172,
        "country": "Paraguay",
        "capital": "Asuncion"
    },
    {
        "id": 173,
        "country": "Peru",
        "capital": "Lima"
    },
    {
        "id": 174,
        "country": "Philippines",
        "capital": "Manila"
    },
    {
        "id": 175,
        "country": "Pitcairn Island",
        "capital": "Adamstown"
    },
    {
        "id": 176,
        "country": "Poland",
        "capital": "Warsaw"
    },
    {
        "id": 177,
        "country": "Portugal",
        "capital": "Lisbon"
    },
    {
        "id": 178,
        "country": "Puerto Rico",
        "capital": "San Juan"
    },
    {
        "id": 179,
        "country": "Qatar",
        "capital": "Doha"
    },
    {
        "id": 180,
        "country": "Reunion",
        "capital": "Saint-Denis"
    },
    {
        "id": 181,
        "country": "Romania",
        "capital": "Bucharest"
    },
    {
        "id": 182,
        "country": "Russia",
        "capital": "Moscow"
    },
    {
        "id": 183,
        "country": "Rwanda",
        "capital": "Kigali"
    },
    {
        "id": 184,
        "country": "Saint Helena",
        "capital": "Jamestown"
    },
    {
        "id": 185,
        "country": "Saint Kitts And Nevis",
        "capital": "Basseterre"
    },
    {
        "id": 186,
        "country": "Saint Lucia",
        "capital": "Castries"
    },
    {
        "id": 187,
        "country": "Saint Pierre and Miquelon",
        "capital": "Saint-Pierre"
    },
    {
        "id": 188,
        "country": "Saint Vincent And The Grenadines",
        "capital": "Kingstown"
    },
    {
        "id": 189,
        "country": "Saint-Barthelemy",
        "capital": "Gustavia"
    },
    {
        "id": 190,
        "country": "Saint-Martin (French part)",
        "capital": "Marigot"
    },
    {
        "id": 191,
        "country": "Samoa",
        "capital": "Apia"
    },
    {
        "id": 192,
        "country": "San Marino",
        "capital": "San Marino"
    },
    {
        "id": 193,
        "country": "Sao Tome and Principe",
        "capital": "Sao Tome"
    },
    {
        "id": 194,
        "country": "Saudi Arabia",
        "capital": "Riyadh"
    },
    {
        "id": 195,
        "country": "Senegal",
        "capital": "Dakar"
    },
    {
        "id": 196,
        "country": "Serbia",
        "capital": "Belgrade"
    },
    {
        "id": 197,
        "country": "Seychelles",
        "capital": "Victoria"
    },
    {
        "id": 198,
        "country": "Sierra Leone",
        "capital": "Freetown"
    },
    {
        "id": 199,
        "country": "Singapore",
        "capital": "Singapur"
    },
    {
        "id": 250,
        "country": "Sint Maarten (Dutch part)",
        "capital": "Philipsburg"
    },
    {
        "id": 200,
        "country": "Slovakia",
        "capital": "Bratislava"
    },
    {
        "id": 201,
        "country": "Slovenia",
        "capital": "Ljubljana"
    },
    {
        "id": 202,
        "country": "Solomon Islands",
        "capital": "Honiara"
    },
    {
        "id": 203,
        "country": "Somalia",
        "capital": "Mogadishu"
    },
    {
        "id": 204,
        "country": "South Africa",
        "capital": "Pretoria"
    },
    {
        "id": 205,
        "country": "South Georgia",
        "capital": "Grytviken"
    },
    {
        "id": 116,
        "country": "South Korea",
        "capital": "Seoul"
    },
    {
        "id": 206,
        "country": "South Sudan",
        "capital": "Juba"
    },
    {
        "id": 207,
        "country": "Spain",
        "capital": "Madrid"
    },
    {
        "id": 208,
        "country": "Sri Lanka",
        "capital": "Colombo"
    },
    {
        "id": 209,
        "country": "Sudan",
        "capital": "Khartoum"
    },
    {
        "id": 210,
        "country": "Suriname",
        "capital": "Paramaribo"
    },
    {
        "id": 211,
        "country": "Svalbard And Jan Mayen Islands",
        "capital": "Longyearbyen"
    },
    {
        "id": 212,
        "country": "Swaziland",
        "capital": "Mbabane"
    },
    {
        "id": 213,
        "country": "Sweden",
        "capital": "Stockholm"
    },
    {
        "id": 214,
        "country": "Switzerland",
        "capital": "Bern"
    },
    {
        "id": 215,
        "country": "Syria",
        "capital": "Damascus"
    },
    {
        "id": 216,
        "country": "Taiwan",
        "capital": "Taipei"
    },
    {
        "id": 217,
        "country": "Tajikistan",
        "capital": "Dushanbe"
    },
    {
        "id": 218,
        "country": "Tanzania",
        "capital": "Dodoma"
    },
    {
        "id": 219,
        "country": "Thailand",
        "capital": "Bangkok"
    },
    {
        "id": 17,
        "country": "The Bahamas",
        "capital": "Nassau"
    },
    {
        "id": 220,
        "country": "Togo",
        "capital": "Lome"
    },
    {
        "id": 221,
        "country": "Tokelau",
        "capital": ""
    },
    {
        "id": 222,
        "country": "Tonga",
        "capital": "Nuku'alofa"
    },
    {
        "id": 223,
        "country": "Trinidad And Tobago",
        "capital": "Port of Spain"
    },
    {
        "id": 224,
        "country": "Tunisia",
        "capital": "Tunis"
    },
    {
        "id": 225,
        "country": "Turkey",
        "capital": "Ankara"
    },
    {
        "id": 226,
        "country": "Turkmenistan",
        "capital": "Ashgabat"
    },
    {
        "id": 227,
        "country": "Turks And Caicos Islands",
        "capital": "Cockburn Town"
    },
    {
        "id": 228,
        "country": "Tuvalu",
        "capital": "Funafuti"
    },
    {
        "id": 229,
        "country": "Uganda",
        "capital": "Kampala"
    },
    {
        "id": 230,
        "country": "Ukraine",
        "capital": "Kyiv"
    },
    {
        "id": 231,
        "country": "United Arab Emirates",
        "capital": "Abu Dhabi"
    },
    {
        "id": 232,
        "country": "United Kingdom",
        "capital": "London"
    },
    {
        "id": 233,
        "country": "United States",
        "capital": "Washington"
    },
    {
        "id": 234,
        "country": "United States Minor Outlying Islands",
        "capital": ""
    },
    {
        "id": 235,
        "country": "Uruguay",
        "capital": "Montevideo"
    },
    {
        "id": 236,
        "country": "Uzbekistan",
        "capital": "Tashkent"
    },
    {
        "id": 237,
        "country": "Vanuatu",
        "capital": "Port Vila"
    },
    {
        "id": 238,
        "country": "Vatican City State (Holy See)",
        "capital": "Vatican City"
    },
    {
        "id": 239,
        "country": "Venezuela",
        "capital": "Caracas"
    },
    {
        "id": 240,
        "country": "Vietnam",
        "capital": "Hanoi"
    },
    {
        "id": 241,
        "country": "Virgin Islands (British)",
        "capital": "Road Town"
    },
    {
        "id": 242,
        "country": "Virgin Islands (US)",
        "capital": "Charlotte Amalie"
    },
    {
        "id": 243,
        "country": "Wallis And Futuna Islands",
        "capital": "Mata Utu"
    },
    {
        "id": 244,
        "country": "Western Sahara",
        "capital": "El-Aaiun"
    },
    {
        "id": 245,
        "country": "Yemen",
        "capital": "Sanaa"
    },
    {
        "id": 246,
        "country": "Zambia",
        "capital": "Lusaka"
    },
    {
        "id": 247,
        "country": "Zimbabwe",
        "capital": "Harare"
    }
]

export default capitals;