function validate(val) {
  if (document.form1.name.value === "") {
    alert("Please enter a valid name");
    document.form1.name.focus();
    return false;
  }
  if (document.form1.email.value === "") {
    alert("Please enter a valid Email");
    document.form1.email.focus();
    return false;
  }
  if (document.form1.country.value == "0") {
    alert("Please select your country");
    document.form1.email.focus();
    return false;
  }
  if (
    document.form1.phone.value === "" ||
    isNaN(document.form1.phone.value) ||
    document.form1.phone.value.length <= 5 ||
    document.form1.phone.value.length >= 13
  ) {
    alert("Please enter a valid phone number");
    document.form1.phone.focus();
    return false;
  }
  return true;
}

// function countrycode(val) {
//     var xmlHttpReq = false;
//     if (window.XMLHttpRequest) {
//         xmlHttpReq = new XMLHttpRequest();
//     } else if (window.ActiveXObject) {
//         xmlHttpReq = new ActiveXObject("Microsoft.XMLHTTP");
//     }
//     xmlHttpReq.onreadystatechange = function() {
//         if (xmlHttpReq.readyState == 4) {
//             $('.phonecode').html(xmlHttpReq.responseText)
//         }
//     }
//     xmlHttpReq.open('GET', 'ajax_query.php?remarking=' + val, true);
//     xmlHttpReq.send(null);
// }

$("form input").one("click", function () {
  let country = {
    2: "India (+91)",
    8: "United States (+1)",
    7: "United  Kingdom (+44)",
    6: "United Arab Emirates (+971)",
    173: "Singapore (+65)",
    3: "Australia (+61)",
    4: "Canada (+1)",
    123: "Malaysia (+60)",
    108: "Kuwait (+965)",
    92: "Hong Kong (+852)",
    77: "Germany (+49)",
    168: "Saudi Arabia (+966)",
    9: "Afghanistan (+93)",
    10: "Albania (+355)",
    11: "Algeria (+213)",
    12: "American Samoa",
    13: "Andorra (+376)",
    14: "Angola (+244)",
    15: "Anguilla (+1264)",
    16: "Antigua and Barbuda (+1268)",
    17: "Argentina (+54)",
    18: "Armenia (+374)",
    19: "Austria (+43)",
    20: "Azerbaijan (+994)",
    21: "Bahamas (+1242)",
    22: "Bahrain (+973)",
    23: "Bangladesh (+880)",
    24: "Barbados (+1246)",
    25: "Belarus (+375)",
    26: "Belgium (+32)",
    27: "Belize (+501)",
    28: "Benin (+229)",
    29: "Bermuda (+1441)",
    30: "Bhutan (+975)",
    31: "Bosnia and Herzegovina (+387)",
    32: "Botswana (+267)",
    33: "Brazil (+55)",
    34: "British Virgin Islands (+1284)",
    35: "Brunei (+673)",
    36: "Bulgaria (+359)",
    37: "Burkina Faso (+226)",
    38: "Burundi (+257)",
    39: "Cambodia (+855)",
    40: "Cameroon (+237)",
    41: "Canary Islands",
    42: "Cape Verde (+238)",
    43: "Cayman Islands (+1345)",
    44: "Central African (+236)",
    45: "Chad (+235)",
    46: "Chile (+56)",
    47: "China (+86)",
    48: "Colombia (+57)",
    49: "Comoros (+269)",
    50: "Congo (+242)",
    51: "Cook Islands (+682)",
    52: "Costa Rica (+506)",
    53: "Cote Dlvoire (+225)",
    54: "Croatia (+385)",
    55: "Cuba (+53)",
    56: "Cyprus (+90392)",
    57: "Czech Republic (+42)",
    58: "Denmark (+45)",
    59: "Dominica (+1809)",
    60: "Dominican Republic (+1809)",
    61: "East Timor (+670)",
    62: "Ecuador (+593)",
    63: "Egypt (+20)",
    64: "El Salvador (+503)",
    65: "Equatorial Guinea (+240)",
    66: "Eritrea (+291)",
    67: "Estonia (+372)",
    68: "Ethiopia (+251)",
    69: "Faeroe Islands (+298)",
    70: "Fiji (+679)",
    71: "Finland (+358)",
    72: "France (+33)",
    73: "French Guiana (+594)",
    74: "French Polybesia",
    75: "Gambia (+220)",
    76: "Georgia (+7880)",
    78: "Ghana (+233)",
    79: "Gibraltar (+350)",
    80: "Greece (+30)",
    81: "Greenland (+299)",
    82: "Grenada (+299)",
    83: "Guadeloupe (+590)",
    84: "Guam (+671)",
    85: "Guatemala (+502)",
    86: "Guinea (+224)",
    87: "Guinea-Bissau (+245)",
    88: "Guyana (+592)",
    89: "Haiti (+509)",
    90: "Holland (+31)",
    91: "Honduras (+504)",
    93: "Hungary (+36)",
    94: "Iceland (+354)",
    95: "Indonesia (+62)",
    96: "Iran (+98)",
    97: "Iraq (+964)",
    98: "Ireland (+353)",
    99: "Isleof Man (+44)",
    100: "Israel (+972)",
    101: "Italy (+39)",
    102: "Jamaica (+1876)",
    103: "Japan (+81)",
    104: "Jordan (+962)",
    105: "Kazakhstan (+7)",
    106: "Kenya (+254)",
    107: "Kiribati (+686)",
    109: "Kyrgyzstan (+996)",
    110: "Laos (+856)",
    111: "Latvia (+371)",
    112: "Lebanon (+961)",
    113: "Lesotho (+266)",
    114: "Liberia (+231)",
    115: "Libya (+218)",
    116: "Liechtenstein (+417)",
    117: "Lithuania (+370)",
    118: "Luxembourg (+352)",
    119: "Macau (+853)",
    120: "Macedonia (+389)",
    121: "Madagascar (+261)",
    122: "Malawi (+265)",
    124: "Maldives (+960)",
    125: "Mali (+223)",
    126: "Malta (+356)",
    127: "Martinique (+596)",
    128: "Mauritius (+230)",
    129: "Mexico (+52)",
    130: "Moldova (+373)",
    131: "Monaco (+377)",
    132: "Mongolia (+976)",
    133: "Montenegro (+382)",
    134: "Montserrat (+1664)",
    135: "Morocco (+212)",
    136: "Mozambique (+258)",
    137: "Myanmar (+95)",
    138: "Namibia (+264)",
    139: "Nepal (+977)",
    140: "Netherlands (+31)",
    141: "Netherlands Antilles (+599)",
    142: "New Caledonia (+687)",
    143: "New Zealand (+64)",
    144: "Nicaragua (+505)",
    145: "Niger (+227)",
    146: "Nigeria (+234)",
    147: "North Korea (+850)",
    148: "Norway (+47)",
    149: "Oman (+968)",
    151: "Panama (+507)",
    152: "Papua New Guinea (+675)",
    153: "Paraguay (+595)",
    154: "Peru (+51)",
    155: "Philippines (+63)",
    156: "Poland (+48)",
    157: "Portugal (+351)",
    158: "Puerto Rico (+1787)",
    159: "Qatar (+974)",
    160: "Reunion (+262)",
    161: "Romania (+40)",
    162: "Russia (+7)",
    163: "Rwanda (+250)",
    164: "Saint Kitts (+869)",
    165: "Saint Lucia (+758)",
    166: "San Marino (+378)",
    167: "Sao Tome and Principe (+239)",
    169: "Senegal (+221)",
    170: "Serbia (+381)",
    171: "Seychelles (+248)",
    172: "Sierra Leone (+232)",
    174: "Slovakia (+421)",
    175: "Slovenia (+386)",
    176: "Solomon Islands (+677)",
    177: "Somalia (+252)",
    178: "South Africa (+27)",
    179: "South Korea (+82)",
    180: "Spain (+34)",
    181: "Sri Lanka (+94)",
    182: "Sudan (+249)",
    183: "Suriname (+597)",
    184: "Swaziland (+268)",
    185: "Sweden (+46)",
    186: "Switzerland (+41)",
    187: "Syrian Arab Republic (+963)",
    188: "Tahiti (+689)",
    189: "Taiwan (+886)",
    190: "Tajikistan (+992) ",
    191: "Tanzania (+255)",
    192: "Thailand (+66)",
    193: "Togo (+228)",
    194: "Trinidad and Tobago (+1868)",
    195: "Tunisia (+216)",
    196: "Turkey (+90)",
    197: "Turkmenistan (+993)",
    198: "Uganda (+256)",
    199: "Ukraine (+380)",
    200: "Uruguay (+598)",
    201: "Uzbekistan (+7)",
    202: "Vanuatu (+678)",
    203: "Vatican City State (+379)",
    204: "Venezuela (+58)",
    205: "Vietnam (+84)",
    206: "Wallis and Futuna (+681)",
    207: "Yemen (+969)",
    208: "Yugoslavia (+38)",
    209: "Zambia (+260)",
    210: "Zimbabwe (+263)",
    150: "Others",
  };
  for (let item in country) {
    // $(
    //   '<option value="' + country[item] + '">' + country[item] + "</option>"
    // ).appendTo(".country");
    var optionElement = document.createElement("option");
    optionElement.value = item[country];
    optionElement.add(".country");
  }
});

// function schedule_click(Event, cat, labelGta) {
//   MasterFunctionForAnalytics(Event, cat, labelGta);
// }

// function MasterFunctionForAnalytics(FirstVal, secondVal, thirdVal) {
//   //alert(FirstVal + secondVal + thirdVal);die;
//   gtag("event", FirstVal, {
//     event_category: secondVal,
//     event_action: "Click",
//     event_label: thirdVal,
//   });
// }
