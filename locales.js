var uiLocales = [
      "af",
      "am",
      "ar",
      "as",
      "az",
      "be",
      "bg",
      "bn",
      "bs",
      "ca",
      "cs",
      "cy",
      "da",
      "de",
      "el",
      "en-GB",
      "en-US",
      "es",
      "es-419",  // "es-MX" in iOS (Mexico vs Latin America) "es-US" on Android
      "et",
      "eu",
      "fa",
      "fi",
      "fil",  // "tl" in .xml but "fil" in TC and .pak
      "fr",
      "fr-CA",
      "gl",
      "gu",
      "he",  // "iw" in .xml and TC but "he" in .pak
      "hi",
      "hr",
      "hu",
      "hy",
      "id",  // "in" in .xml but "id" in TC and .pak
      "is",
      "it",
      "ja",
      "ka",
      "kk",
      "km",
      "kn",
      "ko",
      "ky",
      "lo",
      "lt",
      "lv",
      "mk",
      "ml",
      "mn",
      "mr",
      "ms",
      "my",
      "nb",  // "no" in TC but "nb" in .xml and .pak
      "ne",
      "nl",
      "or",
      "pa",
      "pl",
      "pt-BR",  // just "pt" in iOS
      "pt-PT",
      "ro",
      "ru",
      "si",
      "sk",
      "sl",
      "sq",
      "sr",
      "sr-Latn",  // -b+sr+Latn in .xml
      "sv",
      "sw",
      "ta",
      "te",
      "th",
      "tr",
      "uk",
      "ur",
      "uz",
      "vi",
      "zh-CN",
      "zh-HK",
      "zh-TW",
      "zu",
];

var acceptLocales = [
    "af",  // Afrikaans
    "ak",  // Twi
    "am",  // Amharic
    "an",  // Aragonese
    "ar",  // Arabic
    "as",              // Assamese
    "ast",             // Asturian
    "az",              // Azerbaijani
    "be",              // Belarusian
    "bg",              // Bulgarian
    "bn",              // Bengali
    "br",              // Breton
    "bs",              // Bosnian
    "ca",              // Catalan
    "ceb",             // Cebuano
    "chr",             // Cherokee
    "ckb",             // Kurdish (Arabic),  Sorani
    "co",              // Corsican
    "cs",              // Czech
    "cy",              // Welsh
    "da",              // Danish
    "de",              // German
    "de-AT",           // German (Austria)
    "de-CH",           // German (Switzerland)
    "de-DE",           // German (Germany)
    "de-LI",           // German (Liechtenstein)
    "ee",              // Ewe
    "el",              // Greek
    "en",              // English
    "en-AU",           // English (Australia)
    "en-CA",           // English (Canada)
    "en-GB",           // English (UK)
    "en-GB-oxendict",  // English (UK, OED spelling)
    "en-IE",           // English (Ireland)
    "en-IN",           // English (India)
    "en-NZ",           // English (New Zealand)
    "en-US",           // English (US)
    "en-ZA",  // English (South Africa)
    "eo",     // Esperanto
    "es",     // Spanish
    "es-419",  // Spanish (Latin America)
    "es-AR",   // Spanish (Argentina)
    "es-CL",   // Spanish (Chile)
    "es-CO",   // Spanish (Colombia)
    "es-CR",   // Spanish (Costa Rica)
    "es-ES",   // Spanish (Spain)
    "es-HN",   // Spanish (Honduras)
    "es-MX",   // Spanish (Mexico)
    "es-PE",   // Spanish (Peru)
    "es-US",   // Spanish (US)
    "es-UY",   // Spanish (Uruguay)
    "es-VE",   // Spanish (Venezuela)
    "et",      // Estonian
    "eu",      // Basque
    "fa",      // Persian
    "fi",      // Finnish
    "fil",     // Filipino
    "fo",      // Faroese
    "fr",      // French
    "fr-CA",   // French (Canada)
    "fr-CH",   // French (Switzerland)
    "fr-FR",   // French (France)
    "fy",      // Frisian
    "ga",      // Irish
    "gd",      // Scots Gaelic
    "gl",      // Galician
    "gn",      // Guarani
    "gu",      // Gujarati
    "ha",      // Hausa
    "haw",     // Hawaiian
    "he",      // Hebrew
    "hi",      // Hindi
    "hmn",     // Hmong
    "hr",      // Croatian
    "ht",      // Haitian Creole
    "hu",      // Hungarian
    "hy",      // Armenian
    "ia",      // Interlingua
    "id",      // Indonesian
    "ig",      // Igbo
    "is",      // Icelandic
    "it",      // Italian
    "it-CH",   // Italian (Switzerland)
    "it-IT",   // Italian (Italy)
    "ja",      // Japanese
    "jv",      // Javanese
    "ka",      // Georgian
    "kk",      // Kazakh
    "km",      // Cambodian
    "kn",      // Kannada
    "ko",      // Korean
    "kok",     // Konkani
    "kri",     // Krio
    "ku",      // Kurdish
    "ky",      // Kyrgyz
    "la",      // Latin
    "lb",      // Luxembourgish
    "lg",      // Luganda
    "ln",      // Lingala
    "lo",      // Laothian
    "lt",      // Lithuanian
    "lv",      // Latvian
    "mg",      // Malagasy
    "mi",      // Maori
    "mk",      // Macedonian
    "ml",      // Malayalam
    "mn",      // Mongolian
    "mo",      // Moldavian
    "mr",      // Marathi
    "ms",      // Malay
    "mt",      // Maltese
    "my",      // Burmese
    "nb",      // Norwegian (Bokmal)
    "ne",      // Nepali
    "nl",      // Dutch
    "nn",      // Norwegian (Nynorsk)
    "no",      // Norwegian
    "nso",     // Sepedi
    "ny",      // Nyanja
    "oc",      // Occitan
    "om",      // Oromo
    "or",      // Odia (Oriya)
    "pa",      // Punjabi
    "pl",      // Polish
    "ps",      // Pashto
    "pt",      // Portuguese
    "pt-BR",   // Portuguese (Brazil)
    "pt-PT",   // Portuguese (Portugal)
    "qu",      // Quechua
    "rm",      // Romansh
    "ro",      // Romanian
    "ru",      // Russian
    "rw",      // Kinyarwanda
    "sd",      // Sindhi
    "sh",      // Serbo-Croatian
    "si",      // Sinhalese
    "sk",      // Slovak
    "sl",      // Slovenian
    "sm",      // Samoan
    "sn",      // Shona
    "so",      // Somali
    "sq",      // Albanian
    "sr",      // Serbian
    "st",      // Sesotho
    "su",      // Sundanese
    "sv",      // Swedish
    "sw",      // Swahili
    "ta",      // Tamil
    "te",      // Telugu
    "tg",      // Tajik
    "th",      // Thai
    "ti",      // Tigrinya
    "tk",      // Turkmen
    "tn",      // Tswana
    "to",      // Tonga
    "tr",      // Turkish
    "tt",      // Tatar
    "tw",      // Twi
    "ug",      // Uyghur
    "uk",      // Ukrainian
    "ur",      // Urdu
    "uz",      // Uzbek
    "vi",      // Vietnamese
    "wa",      // Walloon
    "wo",      // Wolof
    "xh",      // Xhosa
    "yi",      // Yiddish
    "yo",      // Yoruba
    "zh",      // Chinese
    "zh-CN",   // Chinese (China)
    "zh-HK",   // Chinese (Hong Kong)
    "zh-TW",   // Chinese (Taiwan)
    "zu",      // Zulu    
];

var allLocales = [
    "aa", // Afar
    "ab", // Abkhazian
    "ace", // Achinese
    "ach", // Acoli
    "ada", // Adangme
    "ady", // Adyghe
    "ae", // Avestan
    "aeb", // Tunisian Arabic
    "af", // Afrikaans
    "afh", // Afrihili
    "agq", // Aghem
    "ain", // Ainu
    "ak", // Akan
    "akk", // Akkadian
    "akz", // Alabama
    "ale", // Aleut
    "aln", // Gheg Albanian
    "alt", // Southern Altai
    "am", // Amharic
    "an", // Aragonese
    "ang", // Old English
    "ann", // Obolo
    "anp", // Angika
    "ar", // Arabic
    "ar-001", // Modern Standard Arabic
    "arc", // Aramaic
    "arn", // Mapuche
    "aro", // Araona
    "arp", // Arapaho
    "arq", // Algerian Arabic
    "ars", // Najdi Arabic
    "arw", // Arawak
    "ary", // Moroccan Arabic
    "arz", // Egyptian Arabic
    "as", // Assamese
    "asa", // Asu
    "ase", // American Sign Language
    "ast", // Asturian
    "atj", // Atikamekw
    "av", // Avaric
    "avk", // Kotava
    "awa", // Awadhi
    "ay", // Aymara
    "az", // Azerbaijani
    "ba", // Bashkir
    "bal", // Baluchi
    "ban", // Balinese
    "bar", // Bavarian
    "bas", // Basaa
    "bax", // Bamun
    "bbc", // Batak Toba
    "bbj", // Ghomala
    "be", // Belarusian
    "bej", // Beja
    "bem", // Bemba
    "bew", // Betawi
    "bez", // Bena
    "bfd", // Bafut
    "bfq", // Badaga
    "bg", // Bulgarian
    "bgc", // Haryanvi
    "bgn", // Western Balochi
    "bho", // Bhojpuri
    "bi", // Bislama
    "bik", // Bikol
    "bin", // Bini
    "bjn", // Banjar
    "bkm", // Kom
    "bla", // Siksiká
    "blt", // Tai Dam
    "bm", // Bambara
    "bn", // Bangla
    "bo", // Tibetan
    "bpy", // Bishnupriya
    "bqi", // Bakhtiari
    "br", // Breton
    "bra", // Braj
    "brh", // Brahui
    "brx", // Bodo
    "bs", // Bosnian
    "bss", // Akoose
    "bua", // Buriat
    "bug", // Buginese
    "bum", // Bulu
    "byn", // Blin
    "byv", // Medumba
    "ca", // Catalan
    "cad", // Caddo
    "car", // Carib
    "cay", // Cayuga
    "cch", // Atsam
    "ccp", // Chakma
    "ce", // Chechen
    "ceb", // Cebuano
    "cgg", // Chiga
    "ch", // Chamorro
    "chb", // Chibcha
    "chg", // Chagatai
    "chk", // Chuukese
    "chm", // Mari
    "chn", // Chinook Jargon
    "cho", // Choctaw
    "chp", // Chipewyan
    "chr", // Cherokee
    "chy", // Cheyenne
    "cic", // Chickasaw
    "ckb", // Central Kurdish
    "clc", // Chilcotin
    "co", // Corsican
    "cop", // Coptic
    "cps", // Capiznon
    "cr", // Cree
    "crg", // Michif
    "crh", // Crimean Tatar
    "crj", // Southern East Cree
    "crk", // Plains Cree
    "crl", // Northern East Cree
    "crm", // Moose Cree
    "crr", // Carolina Algonquian
    "crs", // Seselwa Creole French
    "cs", // Czech
    "csb", // Kashubian
    "csw", // Swampy Cree
    "cu", // Church Slavic
    "cv", // Chuvash
    "cwd", // Woods Cree
    "cy", // Welsh
    "da", // Danish
    "dak", // Dakota
    "dar", // Dargwa
    "dav", // Taita
    "de", // German
    "de-AT", // Austrian German
    "de-CH", // Swiss High German
    "del", // Delaware
    "den", // Slave
    "dgr", // Dogrib
    "din", // Dinka
    "dje", // Zarma
    "doi", // Dogri
    "dsb", // Lower Sorbian
    "dtp", // Central Dusun
    "dua", // Duala
    "dum", // Middle Dutch
    "dv", // Divehi
    "dyo", // Jola-Fonyi
    "dyu", // Dyula
    "dz", // Dzongkha
    "dzg", // Dazaga
    "ebu", // Embu
    "ee", // Ewe
    "efi", // Efik
    "egl", // Emilian
    "egy", // Ancient Egyptian
    "eka", // Ekajuk
    "el", // Greek
    "elx", // Elamite
    "en", // English
    "en-AU", // Australian English
    "en-CA", // Canadian English
    "en-GB", // British English
    "en-US", // American English
    "enm", // Middle English
    "eo", // Esperanto
    "es", // Spanish
    "es-419", // Latin American Spanish
    "es-ES", // European Spanish
    "es-MX", // Mexican Spanish
    "esu", // Central Yupik
    "et", // Estonian
    "eu", // Basque
    "ewo", // Ewondo
    "ext", // Extremaduran
    "fa", // Persian
    "fa-AF", // Dari
    "fan", // Fang
    "fat", // Fanti
    "ff", // Fula
    "fi", // Finnish
    "fil", // Filipino
    "fit", // Tornedalen Finnish
    "fj", // Fijian
    "fo", // Faroese
    "fon", // Fon
    "fr", // French
    "fr-CA", // Canadian French
    "fr-CH", // Swiss French
    "frc", // Cajun French
    "frm", // Middle French
    "fro", // Old French
    "frp", // Arpitan
    "frr", // Northern Frisian
    "frs", // Eastern Frisian
    "fur", // Friulian
    "fy", // Western Frisian
    "ga", // Irish
    "gaa", // Ga
    "gag", // Gagauz
    "gan", // Gan Chinese
    "gay", // Gayo
    "gba", // Gbaya
    "gbz", // Zoroastrian Dari
    "gd", // Scottish Gaelic
    "gez", // Geez
    "gil", // Gilbertese
    "gl", // Galician
    "glk", // Gilaki
    "gmh", // Middle High German
    "gn", // Guarani
    "goh", // Old High German
    "gom", // Goan Konkani
    "gon", // Gondi
    "gor", // Gorontalo
    "got", // Gothic
    "grb", // Grebo
    "grc", // Ancient Greek
    "gsw", // Swiss German
    "gu", // Gujarati
    "guc", // Wayuu
    "gur", // Frafra
    "guz", // Gusii
    "gv", // Manx
    "gwi", // Gwichʼin
    "ha", // Hausa
    "hai", // Haida
    "hak", // Hakka Chinese
    "haw", // Hawaiian
    "hax", // Southern Haida
    "hdn", // Northern Haida
    "he", // Hebrew
    "hi", // Hindi
    "hif", // Fiji Hindi
    "hil", // Hiligaynon
    "hit", // Hittite
    "hmn", // Hmong
    "hnj", // Hmong Njua
    "ho", // Hiri Motu
    "hr", // Croatian
    "hsb", // Upper Sorbian
    "hsn", // Xiang Chinese
    "ht", // Haitian Creole
    "hu", // Hungarian
    "hup", // Hupa
    "hur", // Halkomelem
    "hy", // Armenian
    "hz", // Herero
    "ia", // Interlingua
    "iba", // Iban
    "ibb", // Ibibio
    "id", // Indonesian
    "ie", // Interlingue
    "ig", // Igbo
    "ii", // Sichuan Yi
    "ik", // Inupiaq
    "ike", // Eastern Canadian Inuktitut
    "ikt", // Western Canadian Inuktitut
    "ilo", // Iloko
    "inh", // Ingush
    "io", // Ido
    "is", // Icelandic
    "it", // Italian
    "iu", // Inuktitut
    "izh", // Ingrian
    "ja", // Japanese
    "jam", // Jamaican Creole English
    "jbo", // Lojban
    "jgo", // Ngomba
    "jmc", // Machame
    "jpr", // Judeo-Persian
    "jrb", // Judeo-Arabic
    "jut", // Jutish
    "jv", // Javanese
    "ka", // Georgian
    "kaa", // Kara-Kalpak
    "kab", // Kabyle
    "kac", // Kachin
    "kaj", // Jju
    "kam", // Kamba
    "kaw", // Kawi
    "kbd", // Kabardian
    "kbl", // Kanembu
    "kcg", // Tyap
    "kde", // Makonde
    "kea", // Kabuverdianu
    "ken", // Kenyang
    "kfo", // Koro
    "kg", // Kongo
    "kgp", // Kaingang
    "kha", // Khasi
    "kho", // Khotanese
    "khq", // Koyra Chiini
    "khw", // Khowar
    "ki", // Kikuyu
    "kiu", // Kirmanjki
    "kj", // Kuanyama
    "kk", // Kazakh
    "kkj", // Kako
    "kl", // Kalaallisut
    "kln", // Kalenjin
    "km", // Khmer
    "kmb", // Kimbundu
    "kn", // Kannada
    "ko", // Korean
    "koi", // Komi-Permyak
    "kok", // Konkani
    "kos", // Kosraean
    "kpe", // Kpelle
    "kr", // Kanuri
    "krc", // Karachay-Balkar
    "kri", // Krio
    "krj", // Kinaray-a
    "krl", // Karelian
    "kru", // Kurukh
    "ks", // Kashmiri
    "ksb", // Shambala
    "ksf", // Bafia
    "ksh", // Colognian
    "ku", // Kurdish
    "kum", // Kumyk
    "kut", // Kutenai
    "kv", // Komi
    "kw", // Cornish
    "kwk", // Kwakʼwala
    "ky", // Kyrgyz
    "la", // Latin
    "lad", // Ladino
    "lag", // Langi
    "lah", // Western Panjabi
    "lam", // Lamba
    "lb", // Luxembourgish
    "lez", // Lezghian
    "lfn", // Lingua Franca Nova
    "lg", // Ganda
    "li", // Limburgish
    "lij", // Ligurian
    "lil", // Lillooet
    "liv", // Livonian
    "lkt", // Lakota
    "lmo", // Lombard
    "ln", // Lingala
    "lo", // Lao
    "lol", // Mongo
    "lou", // Louisiana Creole
    "loz", // Lozi
    "lrc", // Northern Luri
    "lsm", // Saamia
    "lt", // Lithuanian
    "ltg", // Latgalian
    "lu", // Luba-Katanga
    "lua", // Luba-Lulua
    "lui", // Luiseno
    "lun", // Lunda
    "luo", // Luo
    "lus", // Mizo
    "luy", // Luyia
    "lv", // Latvian
    "lzh", // Literary Chinese
    "lzz", // Laz
    "mad", // Madurese
    "maf", // Mafa
    "mag", // Magahi
    "mai", // Maithili
    "mak", // Makasar
    "man", // Mandingo
    "mas", // Masai
    "mde", // Maba
    "mdf", // Moksha
    "mdr", // Mandar
    "men", // Mende
    "mer", // Meru
    "mfe", // Morisyen
    "mg", // Malagasy
    "mga", // Middle Irish
    "mgh", // Makhuwa-Meetto
    "mgo", // Metaʼ
    "mh", // Marshallese
    "mi", // Māori
    "mic", // Mi'kmaq
    "min", // Minangkabau
    "mk", // Macedonian
    "ml", // Malayalam
    "mn", // Mongolian
    "mnc", // Manchu
    "mni", // Manipuri
    "moe", // Innu-aimun
    "moh", // Mohawk
    "mos", // Mossi
    "mr", // Marathi
    "mrj", // Western Mari
    "ms", // Malay
    "mt", // Maltese
    "mua", // Mundang
    "mul", // Multiple languages
    "mus", // Muscogee
    "mwl", // Mirandese
    "mwr", // Marwari
    "mwv", // Mentawai
    "my", // Burmese
    "mye", // Myene
    "myv", // Erzya
    "mzn", // Mazanderani
    "na", // Nauru
    "nan", // Min Nan Chinese
    "nap", // Neapolitan
    "naq", // Nama
    "nb", // Norwegian Bokmål
    "nd", // North Ndebele
    "nds", // Low German
    "nds-NL", // Low Saxon
    "ne", // Nepali
    "new", // Newari
    "ng", // Ndonga
    "nia", // Nias
    "niu", // Niuean
    "njo", // Ao Naga
    "nl", // Dutch
    "nl-BE", // Flemish
    "nmg", // Kwasio
    "nn", // Norwegian Nynorsk
    "nnh", // Ngiemboon
    "no", // Norwegian
    "nog", // Nogai
    "non", // Old Norse
    "nov", // Novial
    "nqo", // N’Ko
    "nr", // South Ndebele
    "nso", // Northern Sotho
    "nus", // Nuer
    "nv", // Navajo
    "nwc", // Classical Newari
    "ny", // Nyanja
    "nym", // Nyamwezi
    "nyn", // Nyankole
    "nyo", // Nyoro
    "nzi", // Nzima
    "oc", // Occitan
    "oj", // Ojibwa
    "ojb", // Northwestern Ojibwa
    "ojc", // Central Ojibwa
    "ojg", // Eastern Ojibwa
    "ojs", // Oji-Cree
    "ojw", // Western Ojibwa
    "oka", // Okanagan
    "om", // Oromo
    "or", // Odia
    "os", // Ossetic
    "osa", // Osage
    "ota", // Ottoman Turkish
    "pa", // Punjabi
    "pag", // Pangasinan
    "pal", // Pahlavi
    "pam", // Pampanga
    "pap", // Papiamento
    "pau", // Palauan
    "pcd", // Picard
    "pcm", // Nigerian Pidgin
    "pdc", // Pennsylvania German
    "pdt", // Plautdietsch
    "peo", // Old Persian
    "pfl", // Palatine German
    "phn", // Phoenician
    "pi", // Pali
    "pis", // Pijin
    "pl", // Polish
    "pms", // Piedmontese
    "pnt", // Pontic
    "pon", // Pohnpeian
    "pqm", // Maliseet-Passamaquoddy
    "prg", // Prussian
    "pro", // Old Provençal
    "ps", // Pashto
    "pt", // Portuguese
    "pt-BR", // Brazilian Portuguese
    "pt-PT", // European Portuguese
    "qu", // Quechua
    "quc", // Kʼicheʼ
    "qug", // Chimborazo Highland Quichua
    "raj", // Rajasthani
    "rap", // Rapanui
    "rar", // Rarotongan
    "rgn", // Romagnol
    "rhg", // Rohingya
    "rif", // Riffian
    "rm", // Romansh
    "rn", // Rundi
    "ro", // Romanian
    "ro-MD", // Moldavian
    "rof", // Rombo
    "rom", // Romany
    "rtm", // Rotuman
    "ru", // Russian
    "rue", // Rusyn
    "rug", // Roviana
    "rup", // Aromanian
    "rw", // Kinyarwanda
    "rwk", // Rwa
    "sa", // Sanskrit
    "sad", // Sandawe
    "sah", // Yakut
    "sam", // Samaritan Aramaic
    "saq", // Samburu
    "sas", // Sasak
    "sat", // Santali
    "saz", // Saurashtra
    "sba", // Ngambay
    "sbp", // Sangu
    "sc", // Sardinian
    "scn", // Sicilian
    "sco", // Scots
    "sd", // Sindhi
    "sdc", // Sassarese Sardinian
    "sdh", // Southern Kurdish
    "se", // Northern Sami
    "see", // Seneca
    "seh", // Sena
    "sei", // Seri
    "sel", // Selkup
    "ses", // Koyraboro Senni
    "sg", // Sango
    "sga", // Old Irish
    "sgs", // Samogitian
    "sh", // Serbo-Croatian
    "shi", // Tachelhit
    "shn", // Shan
    "shu", // Chadian Arabic
    "si", // Sinhala
    "sid", // Sidamo
    "sk", // Slovak
    "sl", // Slovenian
    "slh", // Southern Lushootseed
    "sli", // Lower Silesian
    "sly", // Selayar
    "sm", // Samoan
    "sma", // Southern Sami
    "smj", // Lule Sami
    "smn", // Inari Sami
    "sms", // Skolt Sami
    "sn", // Shona
    "snk", // Soninke
    "so", // Somali
    "sog", // Sogdien
    "sq", // Albanian
    "sr", // Serbian
    "sr-ME", // Montenegrin
    "srn", // Sranan Tongo
    "srr", // Serer
    "ss", // Swati
    "ssy", // Saho
    "st", // Southern Sotho
    "stq", // Saterland Frisian
    "str", // Straits Salish
    "su", // Sundanese
    "suk", // Sukuma
    "sus", // Susu
    "sux", // Sumerian
    "sv", // Swedish
    "sw", // Swahili
    "sw-CD", // Congo Swahili
    "swb", // Comorian
    "syc", // Classical Syriac
    "syr", // Syriac
    "szl", // Silesian
    "ta", // Tamil
    "tce", // Southern Tutchone
    "tcy", // Tulu
    "te", // Telugu
    "tem", // Timne
    "teo", // Teso
    "ter", // Tereno
    "tet", // Tetum
    "tg", // Tajik
    "tgx", // Tagish
    "th", // Thai
    "tht", // Tahltan
    "ti", // Tigrinya
    "tig", // Tigre
    "tiv", // Tiv
    "tk", // Turkmen
    "tkl", // Tokelau
    "tkr", // Tsakhur
    "tl", // Tagalog
    "tlh", // Klingon
    "tli", // Tlingit
    "tly", // Talysh
    "tmh", // Tamashek
    "tn", // Tswana
    "to", // Tongan
    "tog", // Nyasa Tonga
    "tok", // Toki Pona
    "tpi", // Tok Pisin
    "tr", // Turkish
    "tru", // Turoyo
    "trv", // Taroko
    "trw", // Torwali
    "ts", // Tsonga
    "tsd", // Tsakonian
    "tsi", // Tsimshian
    "tt", // Tatar
    "ttm", // Northern Tutchone
    "ttt", // Muslim Tat
    "tum", // Tumbuka
    "tvl", // Tuvalu
    "tw", // Twi
    "twq", // Tasawaq
    "ty", // Tahitian
    "tyv", // Tuvinian
    "tzm", // Central Atlas Tamazight
    "udm", // Udmurt
    "ug", // Uyghur
    "uga", // Ugaritic
    "uk", // Ukrainian
    "umb", // Umbundu
    "und", // Unknown language
    "ur", // Urdu
    "uz", // Uzbek
    "vai", // Vai
    "ve", // Venda
    "vec", // Venetian
    "vep", // Veps
    "vi", // Vietnamese
    "vls", // West Flemish
    "vmf", // Main-Franconian
    "vo", // Volapük
    "vot", // Votic
    "vro", // Võro
    "vun", // Vunjo
    "wa", // Walloon
    "wae", // Walser
    "wal", // Wolaytta
    "war", // Waray
    "was", // Washo
    "wbp", // Warlpiri
    "wo", // Wolof
    "wuu", // Wu Chinese
    "xal", // Kalmyk
    "xh", // Xhosa
    "xmf", // Mingrelian
    "xog", // Soga
    "yao", // Yao
    "yap", // Yapese
    "yav", // Yangben
    "ybb", // Yemba
    "yi", // Yiddish
    "yo", // Yoruba
    "yrl", // Nheengatu
    "yue", // Cantonese
    "za", // Zhuang
    "zap", // Zapotec
    "zbl", // Blissymbols
    "zea", // Zeelandic
    "zen", // Zenaga
    "zgh", // Standard Moroccan Tamazight
    "zh", // Chinese
    "zh-Hans", // Simplified Chinese
    "zh-Hant", // Traditional Chinese
    "zu", // Zulu
    "zun", // Zuni
    "zza", // Zaza
];

var newLocales = [
    "ak",
    "as",
    "ay",
    "bho",
    "bm",
    "ckb",
    "doi",
    "dv",
    "ee",
    "gn",
    "gom",
    "ilo",
    "kri",
    "lg",
    "ln",
    "lus",
    "mai",
    "mni",
    "mni-Mtei",
    "nso",
    "om",
    "qu",
    "sa",
    "ti",
    "ts",
];

var moreLocales = [
]

var helper = {
    tag: function(tag) { return document.createElement(tag) },
    ele: function(html) {
        var t = this.tag('template');
        t.innerHTML = html.trim();
        return t.content.firstChild;
    },
    html: function(html) {
        var t = this.tag('template');
        t.innerHTML = html.trim();
        return t.content.childNodes;
    },
    
}

var $ = helper;

