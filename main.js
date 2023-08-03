var json = {
               "1003": {
                   "item": "Dreamscape Map Tile",
                   "code": "II-27 Y"
               },
               "1005": {
                   "item": "Secret Fate Card",
                   "code": "I-02 I"
               },
               "1015": {
                   "item": "Dreamworld Map",
                   "code": "Echo"
               },
               "1035": {
                   "item": "Dreamscape Map Tile",
                   "code": "I-10 Setup"
               },
               "1043": {
                   "item": "Influence Card",
                   "code": "Influence Market"
               },
               "1045": {
                   "item": "Slumber Entity Tile",
                   "code": "II-38 N"
               },
               "1056": {
                   "item": "Dreamscape Map Tile",
                   "code": "II-30 Setup"
               },
               "1059": {
                   "item": "Dreamscape Secret Card",
                   "code": "I-14 A"
               },
               "1060": {
                   "item": "Dreamscape Map Tile",
                   "code": "II-29 Setup"
               },
               "1075": {
                   "item": "Dreamscape Secret Card",
                   "code": "I-21 D"
               },
               "1081": {
                   "item": "Secret Item Card",
                   "code": "II-41 J"
               },
               "1085": {
                   "item": "Dreamscape Map Tile",
                   "code": "I-04 Y"
               },
               "1086": {
                   "item": "Secret Item Card",
                   "code": "I-08 E"
               },
               "1088": {
                   "item": "Slumber Map Tile",
                   "code": "II-36 C"
               },
               "1089": {
                   "item": "Dreamscape Entity Tile",
                   "code": "II-24 X"
               },
               "1108": {
                   "item": "Secret Item Card",
                   "code": "I-16 J"
               },
               "1141": {
                   "item": "Dreamscape Entity Tile",
                   "code": "II-31 V"
               },
               "1144": {
                   "item": "Dreamscape Map Tile",
                   "code": "I-14 X"
               },
               "1148": {
                   "item": "Dreamscape Overlay Card",
                   "code": "II-28 A"
               },
               "1151": {
                   "item": "Dreamscape Map Tile",
                   "code": "I-13 Z"
               },
               "1157": {
                   "item": "Secret Item Card",
                   "code": "I-16 K"
               },
               "1160": {
                   "item": "Dreamscape Map Tile",
                   "code": "I-20 Setup"
               },
               "1168": {
                   "item": "Dreamscape Map Tile",
                   "code": "I-09 Setup"
               },
               "1189": {
                   "item": "Dreamscape Map Tile",
                   "code": "I-05 Setup"
               },
               "1205": {
                   "item": "Secret Note Card",
                   "code": "II-34 J"
               },
               "1207": {
                   "item": "Dreamscape Entity Tile",
                   "code": "I-18 Y"
               },
               "1210": {
                   "item": "Dreamscape Secret Card",
                   "code": "I-08 A"
               },
               "1224": {
                   "item": "Dreamscape Secret Card",
                   "code": "I-13 D"
               },
               "1225": {
                   "item": "Seasons Card",
                   "code": "II-41 I"
               },
               "1013": {
                   "item": "Dreamscape Map Tile",
                   "code": "II-35 B"
               },
               "1024": {
                   "item": "Secret Fate Card",
                   "code": "I-14 D"
               },
               "1054": {
                   "item": "Dreamscape Secret Card",
                   "code": "II-42 V"
               },
               "1064": {
                   "item": "Dreamscape Map Tile",
                   "code": "I-11 Y"
               },
               "1125": {
                   "item": "Dreamworld Map",
                   "code": "Horizon"
               },
               "1131": {
                   "item": "Dreamscape Map Tile",
                   "code": "I-15 Setup"
               },
               "1139": {
                   "item": "Secret Flaw Card",
                   "code": "II-42 III"
               },
               "1174": {
                   "item": "Lucid Influence Card",
                   "code": "Specialist"
               },
               "1182": {
                   "item": "Secret Fate Card",
                   "code": "I-11 I"
               },
               "1203": {
                   "item": "Dreamscape Secret Card",
                   "code": "II-24 D"
               },
               "1221": {
                   "item": "Dreamscape Map Tile",
                   "code": "I-10 Z"
               },
               "1229": {
                   "item": "Slumber Entity Tile",
                   "code": "II-37 J"
               },
               "1000": {
                   "item": "Dreamscape Secret Card",
                   "code": "I-03 E"
               },
               "1002": {
                   "item": "Lucid Influence Card",
                   "code": "Free Spirit"
               },
               "1011": {
                   "item": "Dreamscape Map Tile",
                   "code": "I-04 Setup"
               },
               "1018": {
                   "item": "Dreamscape Map Tile",
                   "code": "II-29 Setup"
               },
               "1055": {
                   "item": "Dreamscape Secret Card",
                   "code": "II-32 D"
               },
               "1078": {
                   "item": "Dreamscape Map Tile",
                   "code": "I-18 Setup"
               },
               "1094": {
                   "item": "Lucid Influence Card",
                   "code": "Free Spirit"
               },
               "1127": {
                   "item": "Dreamscape Secret Card",
                   "code": "I-12 E"
               },
               "1129": {
                   "item": "Dreamscape Map Tile",
                   "code": "II-33 Y"
               },
               "1204": {
                   "item": "Dreamscape Secret Card",
                   "code": "I-08 D"
               },
               "1216": {
                   "item": "Dreamscape Secret Card",
                   "code": "I-17 Setup"
               },
               "1217": {
                   "item": "Dreamscape Map Tile",
                   "code": "I-14 Y"
               }
           };

console.log(json["1085"]["code"].replace(/\s+/g, '').toLowerCase());

function validateSign() {
    let number = document.getElementById("number").value.replace(/\s+/g, '');
    let code = document.getElementById("code").value.replace(/\s+/g, '').toLowerCase();
    let result = "";
    if (Object.keys(json).includes(number)) {
        if (json[number]["code"].replace(/\s+/g, '').toLowerCase() == code) {
            result = "Correct!";
        }
        else {
            result = "Incorrect, keep looking!";
        }
    }
    else {
        result = "There is no sign for this script number!";
    }
    document.getElementById("result").innerHTML = result;
}
module.exports = validateSign;
