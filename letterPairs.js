let pairs= ["AA", "AB", "AC", "AD", "AE", "AF", "AG", "AH", "AI", "AJ", "AK", "AX", "AM", "AN", "AO", "AL", "AP", "AR", "AS", "AT", "AU", "AW", "AZ", 
"BA", "BB", "BC", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BK", "BX", "BM", "BN", "BO", "BL", "BP", "BR", "BS", "BT", "BU", "BW", "BZ", 
"CA", "CB", "CC", "CD", "CE", "CF", "CG", "CH", "CI", "CJ", "CK", "CX", "CM", "CN", "CO", "CL", "CP", "CR", "CS", "CT", "CU", "CW", "CZ", 
"DA", "DB", "DC", "DD", "DE", "DF", "DG", "DH", "DI", "DJ", "DK", "DX", "DM", "DN", "DO", "DL", "DP", "DR", "DS", "DT", "DU", "DW", "DZ", 
"EA", "EB", "EC", "ED", "EE", "EF", "EG", "EH", "EI", "EJ", "EK", "EX", "EM", "EN", "EO", "EL", "EP", "ER", "ES", "ET", "EU", "EW", "EZ", 
"FA", "FB", "FC", "FD", "FE", "FF", "FG", "FH", "FI", "FJ", "FK", "FX", "FM", "FN", "FO", "FL", "FP", "FR", "FS", "FT", "FU", "FW", "FZ", 
"GA", "GB", "GC", "GD", "GE", "GF", "GG", "GH", "GI", "GJ", "GK", "GX", "GM", "GN", "GO", "GL", "GP", "GR", "GS", "GT", "GU", "GW", "GZ", 
"HA", "HB", "HC", "HD", "HE", "HF", "HG", "HH", "HI", "HJ", "HK", "HX", "HM", "HN", "HO", "HL", "HP", "HR", "HS", "HT", "HU", "HW", "HZ", 
"IA", "IB", "IC", "ID", "IE", "IF", "IG", "IH", "II", "IJ", "IK", "IX", "IM", "IN", "IO", "IL", "IP", "IR", "IS", "IT", "IU", "IW", "IZ", 
"JA", "JB", "JC", "JD", "JE", "JF", "JG", "JH", "JI", "JJ", "JK", "JX", "JM", "JN", "JO", "JL", "JP", "JR", "JS", "JT", "JU", "JW", "JZ", 
"KA", "KB", "KC", "KD", "KE", "KF", "KG", "KH", "KI", "KJ", "KK", "KX", "KM", "KN", "KO", "KL", "KP", "KR", "KS", "KT", "KU", "KW", "KZ", 
"XA", "XB", "XC", "XD", "XE", "XF", "XG", "XH", "XI", "XJ", "XK", "XX", "XM", "XN", "XO", "XL", "XP", "XR", "XS", "XT", "XU", "XW", "XZ", 
"MA", "MB", "MC", "MD", "ME", "MF", "MG", "MH", "MI", "MJ", "MK", "MX", "MM", "MN", "MO", "ML", "MP", "MR", "MS", "MT", "MU", "MW", "MZ", 
"NA", "NB", "NC", "ND", "NE", "NF", "NG", "NH", "NI", "NJ", "NK", "NX", "NM", "NN", "NO", "NL", "NP", "NR", "NS", "NT", "NU", "NW", "NZ", 
"OA", "OB", "OC", "OD", "OE", "OF", "OG", "OH", "OI", "OJ", "OK", "OX", "OM", "ON", "OO", "OL", "OP", "OR", "OS", "OT", "OU", "OW", "OZ", 
"LA", "LB", "LC", "LD", "LE", "LF", "LG", "LH", "LI", "LJ", "LK", "LX", "LM", "LN", "LO", "LL", "LP", "LR", "LS", "LT", "LU", "LW", "LZ", 
"PA", "PB", "PC", "PD", "PE", "PF", "PG", "PH", "PI", "PJ", "PK", "PX", "PM", "PN", "PO", "PL", "PP", "PR", "PS", "PT", "PU", "PW", "PZ", 
"RA", "RB", "RC", "RD", "RE", "RF", "RG", "RH", "RI", "RJ", "RK", "RX", "RM", "RN", "RO", "RL", "RP", "RR", "RS", "RT", "RU", "RW", "RZ", 
"SA", "SB", "SC", "SD", "SE", "SF", "SG", "SH", "SI", "SJ", "SK", "SX", "SM", "SN", "SO", "SL", "SP", "SR", "SS", "ST", "SU", "SW", "SZ", 
"TA", "TB", "TC", "TD", "TE", "TF", "TG", "TH", "TI", "TJ", "TK", "TX", "TM", "TN", "TO", "TL", "TP", "TR", "TS", "TT", "TU", "TW", "TZ", 
"UA", "UB", "UC", "UD", "UE", "UF", "UG", "UH", "UI", "UJ", "UK", "UX", "UM", "UN", "UO", "UL", "UP", "UR", "US", "UT", "UU", "UW", "UZ", 
"WA", "WB", "WC", "WD", "WE", "WF", "WG", "WH", "WI", "WJ", "WK", "WX", "WM", "WN", "WO", "WL", "WP", "WR", "WS", "WT", "WU", "WW", "WZ", 
"ZA", "ZB", "ZC", "ZD", "ZE", "ZF", "ZG", "ZH", "ZI", "ZJ", "ZK", "ZX", "ZM", "ZN", "ZO", "ZL", "ZP", "ZR", "ZS", "ZT", "ZU", "ZW", "ZZ"];

shuffleArray(pairs);

let x1 = 0;

let details = navigator.userAgent;
let regexp = /android|iphone|kindle|ipad/i;
let isMobileDevice = regexp.test(details);

if (isMobileDevice) {
    document.getElementById("result").innerHTML = "Mobile!"
} else {
    document.getElementById("result").innerHTML = "PC!"
}

/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function nextPair() {
    let result = pairs.shift();
    x1 += 1;
    document.getElementById("result").innerHTML = result;
    document.getElementById("counter").innerHTML = x1;
}
