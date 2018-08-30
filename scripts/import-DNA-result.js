function WHOisWHO() {
    console.log(" _              _    __                ___                _   _          ___                      _                   ");
    console.log("| |_ ___   ___ | |  / _| ___  _ __    / _ \\___ _ __   ___| |_(_) ___    / _ \\___ _ __   ___  __ _| | ___   __ _ _   _ ");
    console.log("| __/ _ \\ / _ \\| | | |_ / _ \\| '__|  / /_\\/ _ \\ '_ \\ / _ \\ __| |/ __|  / /_\\/ _ \\ '_ \\ / _ \\/ _` | |/ _ \\ / _` | | | |");
    console.log("| || (_) | (_) | | |  _| (_) | |    / /_\\\\  __/ | | |  __/ |_| | (__  / /_\\\\  __/ | | |  __/ (_| | | (_) | (_| | |_| |");
    console.log(" \\__\\___/ \\___/|_| |_|  \\___/|_|    \\____/\\___|_| |_|\\___|\\__|_|\\___| \\____/\\___|_| |_|\\___|\\__,_|_|\\___/ \\__, |\\__, |");
    console.log("                                                                                                          |___/ |___/ ");
    console.log("                              _       _     _       __                   __        ___ _                       _    _ ");
    console.log("    ___ ___  _ __  _   _ _ __(_) __ _| |__ | |_     \\ \\  __ _ _ __      /__\\      / __(_)___  _____      _____| | _(_)");
    console.log("   / __/ _ \\| '_ \\| | | | '__| |/ _` | '_ \\| __|     \\ \\/ _` | '_ \\    / \\//     / /  | / __|/ _ \\ \\ /\\ / / __| |/ / |");
    console.log("  | (_| (_) | |_) | |_| | |  | | (_| | | | | |_   /\\_/ / (_| | | | |  / _  \\_   / /___| \\__ \\ (_) \\ V  V /\\__ \\   <| |");
    console.log("   \\___\\___/| .__/ \\__, |_|  |_|\\__, |_| |_|\\__|  \\___/ \\__,_|_| |_|  \\/ \\_(_)  \\____/|_|___/\\___/ \\_/\\_/ |___/_|\\_\\_|");
    console.log("            |_|    |___/        |___/                                                                                 ");
    console.log("▄▄▄        ▄▄▄▄▄        ▄▄▄▄▄        ▄▄▄▄▄        ▄▄▄▄▄        ▄▄▄▄▄        ▄▄▄▄▄        ▄▄▄▄▄        ▄▄▄▄▄        ▄▄ ");
    console.log("  ▀▀▀█▄▄█▀▀▀   ▀▀▀█▄▄█▀▀▀   ▀▀▀█▄▄█▀▀▀   ▀▀▀█▄▄█▀▀▀   ▀▀▀█▄▄█▀▀▀   ▀▀▀█▄▄█▀▀▀   ▀▀▀█▄▄█▀▀▀   ▀▀▀█▄▄█▀▀▀   ▀▀▀█▄▄█▀▀▀  ");
    console.log("▄▄█▀▀▀  ▀▀▀█▄▄▄█▀▀▀  ▀▀▀█▄▄▄█▀▀▀  ▀▀▀█▄▄▄█▀▀▀  ▀▀▀█▄▄▄█▀▀▀  ▀▀▀█▄▄▄█▀▀▀  ▀▀▀█▄▄▄█▀▀▀  ▀▀▀█▄▄▄█▀▀▀  ▀▀▀█▄▄▄█▀▀▀  ▀▀▀█▄ ");
    console.log("                                                                                                                      ");
    console.log("    ▄█     █▄     ▄█    █▄     ▄██████▄            ▄█     ▄████████           ▄█     █▄     ▄█    █▄     ▄██████▄     ");
    console.log("   ███     ███   ███    ███   ███    ███          ███    ███    ███          ███     ███   ███    ███   ███    ███    ");
    console.log("   ███     ███   ███    ███   ███    ███          ███▌   ███    █▀           ███     ███   ███    ███   ███    ███    ");
    console.log("   ███     ███  ▄███▄▄▄▄███▄▄ ███    ███          ███▌   ███                 ███     ███  ▄███▄▄▄▄███▄▄ ███    ███    ");
    console.log("   ███     ███ ▀▀███▀▀▀▀███▀  ███    ███          ███▌ ▀███████████          ███     ███ ▀▀███▀▀▀▀███▀  ███    ███    ");
    console.log("   ███     ███   ███    ███   ███    ███          ███           ███          ███     ███   ███    ███   ███    ███    ");
    console.log("   ███ ▄█▄ ███   ███    ███   ███    ███          ███     ▄█    ███          ███ ▄█▄ ███   ███    ███   ███    ███    ");
    console.log("    ▀███▀███▀    ███    █▀     ▀██████▀           █▀    ▄████████▀            ▀███▀███▀    ███    █▀     ▀██████▀     ");
    console.log("                                                                                                                      ");

}

function ILEczasuOD(T0) {
    return moment.duration((new Date()) - T0, "ms").format("h [godzin], m [minut], s [sekund] i S [milisekund]");
}

function PRZYGOTOWYWANIE_SKLADNIKOW_DO_IMPORTU() {
    function getConfig() {
        const configFile = [
            path.resolve(__dirname, "..", "config", "DNAGedcom_FTDNA_FamilyFinder.json"),
            path.resolve(__dirname, "..", "config", "DNAGedcom_GEDmatch.json"),
            path.resolve(__dirname, "..", "config", "MyHeritageDNA.json")
        ];
        let Configure = {};
        if (!fs.existsSync(configFile[0])) {
            Configure.DNAGedcom_FTDNA_FamilyFinder = null;
        } else {
            let TMP = JSON.parse(fs.readFileSync(configFile[0], "utf8"));
            // ? let TMP = JSON.parse(fs.readFileSync(this.local, "utf8"));              
            if (TMP.URL.length > 0 && TMP.KIT.length > 0) {
                Configure.DNAGedcom_FTDNA_FamilyFinder = TMP;
                Configure.DNAGedcom_FTDNA_FamilyFinder.TYP = [
                    ["Przeglad_Przypasowanych_Osob", "_Family_Finder_Matches.csv"],
                    ["Szczegoly_Przypasowanych_Osob", "_ChromosomeBrowser.csv"],
                    ["Macierz_Przypasowanych_Osob", "_ICW.csv"],
                    ["Drzewa_Przypasowanych_Osob", "_Family_Finder_Trees.csv"]
                ];
            } else {
                console.log("ERROR NIEPODANO ADRESU FOLDERU Z KITAMI, LUB ZESTAWU KITOW DO IMPORTU w \"DNAGedcom_FTDNA_FamilyFinder.json\"");
            }
        }
        return Configure;
    }

    function checkImportFiles(files) {
        function ZapiszJSON(OUT_NAZWA, DANE_OUT) {
            var NOWY = fs.createWriteStream(OUT_NAZWA, {
                flags: 'w'
            });
            NOWY.write(JSON.stringify(DANE_OUT));
            return;
        }
        let files2 = {};
        files2["importDATA"] = new Date();
        //console.log("WYBRANO NASTEPUJACE ZESTAWY DO IMPORTU");
        if (files.DNAGedcom_FTDNA_FamilyFinder != null) {
            files2["DNAGedcom_FTDNA_FamilyFinder"] = {};
            files.DNAGedcom_FTDNA_FamilyFinder.KIT.forEach(KIT => {
                let PARTs = {};
                files.DNAGedcom_FTDNA_FamilyFinder.TYP.forEach(PART => {
                    PARTs[PART[0]] = {
                        URL: path.resolve(files.DNAGedcom_FTDNA_FamilyFinder.URL, [KIT[0], PART[1]].join(""))
                    };
                    if (!fs.existsSync(PARTs[PART[0]].URL)) {
                        PARTs[PART[0]].ERROR_checkEXIST = "error PLIK NIE ISTNIEJE";
                    } else {
                        PARTs[PART[0]].ERROR_checkEXIST = null;
                        PARTs[PART[0]].SIZE = fs.statSync(PARTs[PART[0]].URL).size;
                        PARTs[PART[0]].TIME = {
                            Birth: fs.statSync(PARTs[PART[0]].URL).birthtime,
                            Access: fs.statSync(PARTs[PART[0]].URL).atime,
                            Modifed: fs.statSync(PARTs[PART[0]].URL).mtime,
                            Change: fs.statSync(PARTs[PART[0]].URL).ctime
                        };
                        PARTs[PART[0]].DECODE = {
                            columns: true,
                            trim: true
                        };
                    }
                });
                //console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
                let check = {};
                files2["DNAGedcom_FTDNA_FamilyFinder"][KIT[0]] = {};
                //let checkKIT = {ID_FTDNA: , ID_DNAGedcom_FTDNA_FF: KIT[1], PARTofKIT:[]};
                if (PARTs.Szczegoly_Przypasowanych_Osob.ERROR_checkEXIST != null) {
                    files2["DNAGedcom_FTDNA_FamilyFinder"][KIT[0]] = null;
                } else {
                    files2["DNAGedcom_FTDNA_FamilyFinder"][KIT[0]]["GMPx"] = KIT[1];
                    files2["DNAGedcom_FTDNA_FamilyFinder"][KIT[0]]["NAME"] = CSV_parse(fs.readFileSync(PARTs.Szczegoly_Przypasowanych_Osob.URL), PARTs.Szczegoly_Przypasowanych_Osob.DECODE)[0]["Profile Name"];
                    files2["DNAGedcom_FTDNA_FamilyFinder"][KIT[0]]["DATA"] = PARTs.Przeglad_Przypasowanych_Osob.TIME.Modifed;
                    files2["DNAGedcom_FTDNA_FamilyFinder"][KIT[0]]["PART"] = PARTs;

                    //console.log(
                    //    "v"+moment.utc(new Date(util.inspect(PARTs.Przeglad_Przypasowanych_Osob.TIME.Modifed))).local().format("WWdddGG_HH"),
                    //    "(FTDNA:" + KIT[0]+ " | GMPid:" + KIT[1]+")"
                    //    );
                    //
                }
                //console.log("SPRAWDZAM DANE DLA KITU FTDNA: "+KIT[0]);              
                //console.log(PARTs);

            });
            //files.DNAGedcom_FTDNA_FamilyFinder.KIT;
            //console.log();
        } else {

        }
        //let CHANGELOG;
        //if (!fs.existsSync(path.resolve(__dirname, "..", "source", "change.log"))) {
        //    tmp1 = [];
        //} else {
        //    CHANGELOG = JSON.parse(fs.readFileSync(path.resolve(__dirname, "..", "source", "change.log"), "utf8"));
        //}
        //CHANGELOG.push([new Date(), files2]);
        //ZapiszJSON(path.resolve(__dirname, "..", "source", "change.log"), CHANGELOG);

        //let data = JSON.stringify(student); 
        fs.appendFileSync(path.resolve(__dirname, "..", "source", "change.log"), "\n" + JSON.stringify(files2) + ",\n", (err) => {
            if (err) throw err;
            console.log('ZAKTUALIZOWANO WYKAZ PRZEPROWADZANYCH IMPORTOW');
        });
        //return files2;
    }
    console.log("uplynelo " + ILEczasuOD(START_WHOisWHO) + " od startu", ">>> ..trwa zbieranie informacji o poprawnosci wskazanych plikow do importu");
    let startPROCES = new Date();
    checkImportFiles(getConfig());
    console.log("uplynelo " + ILEczasuOD(START_WHOisWHO) + " od startu", ">>> zkonczono zbieranie informacji trwajace:", ILEczasuOD(startPROCES));
}

function INFORMACJA_O_BRAKU_POTRZEBY_IMPORTU() {

    // celem tego kroku jest wyswietlenie informacji o wersji juz zaimpoertowanych danych dla poszczegolnych osob/kitow
    // i pokazanie wersji tych ktore chcemy importowac, i pokazanie ktre zostana pominiete ze wzgledu na brak zmian


}

function ROZPOCZECIE_IMPORTU_DO_NOWEJ_protBAZY() {
    const logJSON = JSON.parse(["[", (fs.readFileSync(path.resolve(__dirname, "..", "source", "change.log"), "utf8")).slice(1, -2), "]"].join(""));
    const get = logJSON[logJSON.length - 1];
    const version = moment.utc(START_WHOisWHO).format("[r]GG[t]WW[d]E[g]HH[m]mm[s]ss");
    const mkdirSync = function (dirPath) {
        try {
            fs.mkdirSync(dirPath)
        } catch (err) {
            if (err.code !== 'EEXIST') throw err
        }
    }
    const openSync = function (ADRES) {
        if (!fs.existsSync(ADRES)) {
            fs.openSync(ADRES, 'w');
        }
    }
    const appendJsonTextRowSync = function (ADRES, OBIEKT) {
        fs.appendFileSync(ADRES, JSON.stringify(OBIEKT) + ",\n", (err) => {
            if (err) throw err;
            //console.log('ZAKTUALIZOWANO WYKAZ PRZEPROWADZANYCH IMPORTOW');
        });

    }
    const RAW_db_URL = path.resolve(__dirname, "..", "source", version);
    // const RAW_db_URL = path.resolve(__dirname, "..", "source", /*version*/ "r18t35d4g16m50s07");
    mkdirSync(RAW_db_URL);
    console.log("uplynelo "+ILEczasuOD(START_WHOisWHO)+" od startu", ">>> utworzylem nowy folder: "+version+", dla importowanych plikow");
    const vertex_PERSON_log     = path.resolve(RAW_db_URL, "DNAGedcom_FTDNA_PERSON.vertex.log");
    const vertex_CONTAC_log     = path.resolve(RAW_db_URL, "DNAGedcom_FTDNA_CONTACT.vertex.log");
    const vertex_SOURCE_log     = path.resolve(RAW_db_URL, "DNAGedcom_FTDNA_SOURCE.vertex.log");
    const vertex_NOTES_log      = path.resolve(RAW_db_URL, "DNAGedcom_FTDNA_NOTES.vertex.log");
    const vertex_HAPLODAD_log   = path.resolve(RAW_db_URL, "DNAGedcom_FTDNA_HAPLODAD.vertex.log");
    const vertex_HAPLOMOM_log   = path.resolve(RAW_db_URL, "DNAGedcom_FTDNA_HAPLOMOM.vertex.log");
    const edge_SOURCE_log       = path.resolve(RAW_db_URL, "DNAGedcom_FTDNA_SOURCE.edge.log");    
    const edge_MatchATDNA_log   = path.resolve(RAW_db_URL, "DNAGedcom_FTDNA_MatchATDNA.edge.log");
    openSync(vertex_PERSON_log  );
    openSync(vertex_CONTAC_log  );
    openSync(vertex_SOURCE_log  );
    openSync(vertex_NOTES_log   );
    openSync(vertex_HAPLODAD_log);
    openSync(vertex_HAPLOMOM_log);
    openSync(edge_SOURCE_log    );
    openSync(edge_MatchATDNA_log);
    //* Importowanie DNAGedcom_FTDNA_FamilyFinder
    if (get.hasOwnProperty("DNAGedcom_FTDNA_FamilyFinder")) {
        for (const KIT in get.DNAGedcom_FTDNA_FamilyFinder) {
            if (get.DNAGedcom_FTDNA_FamilyFinder.hasOwnProperty(KIT)) {
                const KIT_get = get.DNAGedcom_FTDNA_FamilyFinder[KIT];
                console.log("uplynelo "+ILEczasuOD(START_WHOisWHO)+" od startu", ">>> ..rozpoczynam import z FamilyFidera ("+KIT_get.NAME+")");
                //* INFORMACJA O BENEFICJENCIE
                //TODO  KIT_get.MAIL
                //TODO  KIT_get.SEX
                appendJsonTextRowSync(vertex_PERSON_log, {
                    ID: parseInt(KIT_get.GMPx),
                    name: {
                        full: KIT_get.NAME
                    }
                });
                appendJsonTextRowSync(vertex_SOURCE_log, {
                    ID: parseInt(KIT_get.GMPx),
                    TYPE:"FTDNA_KIT:"+KIT,
                    NAME: KIT_get.NAME,
                    UPDATE: KIT_get.DATA
                });
                appendJsonTextRowSync(edge_SOURCE_log, {
                    from_to: [["vertex_SOURCE", parseInt(KIT_get.GMPx)], ["vertex_PERSON", parseInt(KIT_get.GMPx)]],
                    TYPE: "root Person"                    
                });
                // ------------------------------------------------------------------------------------------------------------------------------------------------------
                //* Przeglad_Przypasowanych_Osob
                console.log("uplynelo "+ILEczasuOD(START_WHOisWHO)+" od startu", ">>> ..Przeglad_Przypasowanych_Osob: "+(KIT_get.PART.Przeglad_Przypasowanych_Osob.SIZE/1024).toFixed(2)+"kb");
                CSV_parse(fs.readFileSync(KIT_get.PART.Przeglad_Przypasowanych_Osob.URL), KIT_get.PART.Przeglad_Przypasowanych_Osob.DECODE)
                .forEach(ROW => {
                    appendJsonTextRowSync(vertex_PERSON_log, {
                        ID: parseInt(ROW["ResultID2"]),
                        name: {
                            full: ROW["Full Name"],
                            name: ROW["Name"]
                        }
                    });
                    appendJsonTextRowSync(vertex_CONTAC_log, {
                        ID: parseInt(ROW["ResultID2"]),
                        EMAIL: ROW["E - mail"]
                    });
                    appendJsonTextRowSync(vertex_NOTES_log, {
                        ID: parseInt(ROW["ResultID2"]),
                        ORIGINS: ROW["Ancestral"]
                    });
                    appendJsonTextRowSync(vertex_HAPLODAD_log, {
                        ID: parseInt(ROW["ResultID2"]),
                        HaploDads: ROW["YDNA Haplogroup"]
                    });                    
                    appendJsonTextRowSync(vertex_HAPLOMOM_log, {
                        ID: parseInt(ROW["ResultID2"]),
                        HaploMoms: ROW["mtDNA Haplogroup"]
                    });                   
                    appendJsonTextRowSync(edge_SOURCE_log,  {
                        from_to: [["vertex_SOURCE", parseInt(KIT_get.GMPx)], ["vertex_PERSON", parseInt(ROW["ResultID2"])]],
                        TYPE: "match Person", 
                        DATE: ROW["Match Date"]                  
                    });
                    appendJsonTextRowSync(edge_MatchATDNA_log, {
                        from_to: [["vertex_PERSON", KIT_get.GMPx], ["vertex_PERSON", parseInt(ROW["ResultID2"])]],
                        TOTALcM: ROW["Shared cM"],
                        BLOCKcM: ROW["Longest Block"],
                        RELATIONSHIP: {
                            RANGE: ROW["Relationship Range"],
                            SUGGE: ROW["Suggested Relationship"],
                            KNOWN: ROW["Known Relationship"]
                        },
                        BY: "FTDNA"
                    });
                    //* POST IMPORT GENERATE
                    // TODO let edge_toCONTACT =  {
                    // TODO     from_to: [{vertex_SOURCE: KIT_get.GMPx}, {vertex_PERSON: parseInt(ROW["ResultID2"])}],
                    // TODO     TYPE: "match Person", 
                    // TODO     DATE: ROW["Match Date"]                  
                    // TODO };
                    //!
                    //TODO edge haplogroup
                    //TODO let edge_toNOTE = {
                    //TODO     from_to: [["vertex_PERSON", KIT_get.GMPx], ["vertex_NOTES", parseInt(ROW["ResultID2"])]],                        
                    //TODO }
                });
                




                //console.log(get.DNAGedcom_FTDNA_FamilyFinder[KIT].PART.Przeglad_Przypasowanych_Osob);

            }
        }

    }

    

}
// ##############################################################################################################################################
// ##############################################################################################################################################
require("core-js");
const START_WHOisWHO = new Date(),
    fs = require("fs"),
    path = require("path"),
    util = require("util"),
    CSV_parse = require("csv-parse/lib/sync"),
    moment = require('moment'),
    momentDurationFormatSetup = require("moment-duration-format");
momentDurationFormatSetup(moment);
typeof moment.duration.fn.format === "function";
typeof moment.duration.format === "function";
WHOisWHO();
// ##############################################################################################################################################
// ##############################################################################################################################################
PRZYGOTOWYWANIE_SKLADNIKOW_DO_IMPORTU();
//INFORMACJA_O_BRAKU_POTRZEBY_IMPORTU();
ROZPOCZECIE_IMPORTU_DO_NOWEJ_protBAZY();