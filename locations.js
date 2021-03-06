/*
 * List of shelter locations.
 * Data pulled from http://www.scd.hawaii.gov/documents/2013SeptHurEvacShelters.pdf
 * Format of each location: [name, [latitude, longitude], has special health needs?, is pet friendly?]
 */
var locations = [
  /* ----- Hawaii (Big Island) ----- */
  // North Kohala District
  ["Kohala High and Elementary", [20.237644, -155.818549], true, false],
  ["Kohala Intermediate", [20.230806, -155.801232], true, false],

  // South Kohala District
  ["Waikoloa Elementary", [19.945946, -155.791011], true, false],
  ["Waimea Elementary", [20.019273, -155.669859], true, false],
  ["Waimea Middle", [20.018032, -155.669784], false, false],
  ["Waimea State Office Building", [20.023837, -155.662365], false, false],

  // North Kona District
  ["Holualoa Elementary", [19.617095, -155.948395], false, false],
  ["Kahakai Elementary", [19.614163, -155.977971], true, false],
  ["Kealakehe Elementary", [19.668429, -155.982332], true, false],
  ["Kealakehe High", [19.668273, -155.998074], true, true],
  ["Kealakehe Intermediate", [19.670095, -155.984402], true, false],

  // South Kona District
  ["Hookena Elementary", [19.386820, -155.878377], false, false],
  ["Konawaena High", [19.509203, -155.916676], true, true],

  // Kau District
  ["Kau High and Pahala Elementary", [19.202717, -155.478736], true, true],

  // Hamakua District
  ["Honokaa High and Intermediate", [20.076977, -155.464116], true, true],
  ["Kalanianaole Elementary", [19.789399, -155.094221], true, true],

  // South Hilo District
  ["E B de Silva Elementary", [19.710482, -155.114645], false, false],
  ["Hilo High", [19.720738, -155.096373], true, true],
  ["Hilo Intermediate", [19.720407, -155.095859], true, false],
  ["Kaumana Elementary", [19.686045, -155.134706], true, false],
  ["Waiakea Elementary", [19.695094, -155.074660], true, false],
  ["Waiakea High", [19.698746, -155.076367], true, true],
  ["Waiakea Intermediate", [19.694790, -155.076956], true, false],
  ["Waiakea Waena Elementary", [19.683766, -155.068047], true, false],

  // Puna District
  ["Keaau Elementary", [19.613864, -155.035762], false, false],
  ["Keaau High", [19.613596, -155.031722], true, true],
  ["Keaau Middle", [19.621316, -155.037571], true, true],
  ["Keonepoko Elementary", [19.525650, -154.926493], true, false],
  ["Mountain View Elementary", [19.554326, -155.102777], true, false],
  ["Pahoa Elementary", [21.318493, -157.843938], true, false],
  ["Pahoa High and Intermediate", [19.489335, -154.942036], true, true],

  /* ----- Maui ----- */
  // Hana
  ["Hana High", [20.775666, -156.000592], false, false],

  // Kahului/Wailuku/Waihee
  ["Baldwin High", [20.890169, -156.491690], true, true],
  ["Iao Elementary", [20.884852, -156.500418], true, false],
  ["Kahului Elementary", [20.877865, -156.470595], true, false],
  ["Lihikai Elementary", [20.880518, -156.484269], true, false],
  ["Maui Community College", [20.889877, -156.476508], false, false],
  ["Maui High", [20.875297, -156.474082], true, true],
  ["Maui Waena Intermediate", [20.874355, -156.484830], true, true],
  ["Waihee Elementary", [20.934278, -156.514329], true, false],
  ["Wailuku Elementary", [20.883514, -156.505588], true, false],

  // Kihei/Makena
  ["Kamalii Elementary", [20.721361, -156.440164], true, false],
  ["Kihei Elementary", [20.747697, -156.447228], true, false],
  ["Lokelani Intermediate", [20.746224, -156.447157], true, true],

  // Lahaina (West Maui)
  ["Lahaina Intermediate", [20.885569, -156.661667], true, false],
  ["Lahainaluna High", [20.888342, -156.660441], true, false],
  ["Princess Nahienaena Elementary", [20.886394, -156.663563], true, false],

  // Upcountry
  ["Haiku Elementary", [20.928541, -156.322335], false, false],
  ["Kalama Intermediate", [20.850655, -156.320635], true, true],
  ["King Kekaulike High", [20.827238, -156.327373], true, true],
  ["Makawao Elementary", [20.856672, -156.314178], true, false],
  ["Paia Elementary", [20.900527, -156.363310], true, false],
  ["Pukalani Elementary", [20.840292, -156.344999], true, false],

  /* ----- Molokai ----- */
  ["Kaunakakai Elementary", [21.088362, -157.017683], false, false],
  ["Kualapuu Elementary", [21.158908, -157.040876], false, false],
  ["Molokai High", [21.163452, -157.04796], true, false],
  ["Kilohana Elementary", [21.088372, -157.017747], false, false],

  /* ----- Lanai ----- */
  ["Lania High", [20.826268, -156.922020], true, false],

  /* ----- Kauai ----- */
  // Central
  ["Kamakahelei Middle", [21.967724, -159.388253], true, false],
  ["Kauai Community College", [21.968699, -159.396975], false, false],
  ["Kauai High", [21.959214, -159.358414], true, true],
  ["Kauai Humane Society [pets only]", [21.964777, -159.421556], false, true],
  ["Kauai War Memorial Convention Hall", [21.973261, -159.363929], false, false],
  ["King Kaumualii Elementary", [21.995806, -159.351541], false, false],
  ["Wilcox Elementary", [21.975381, -159.364120], false, false],

  // Eastside
  ["Kapaa Elementary School", [22.090468, -159.313496], true, false],
  ["Kapaa High School", [22.091333, -159.310599], true, true],
  ["Kapaa Middle School", [22.078330, -159.327586], true, true],

  // North
  ["Kilauea Elementary School", [22.206020, -159.409026], false, false],
  ["Kilauea Neighborhood Center", [22.211009, -159.405884], true, false],

  // South
  ["Eleele Elementary School", [21.910473, -159.583808], true, true],
  ["Kalaheo Elementary School", [21.922910, -159.521173], true, true],
  ["Koloa Elementary School", [21.898437, -159.467122], true, false],

  // West
  ["Waimea Canyon Elem. and Middle", [21.961646, -159.673103], true, true],
  ["Waimea High", [21.957828, -159.668686], true, true],

  /* ----- Oahu ----- */
  // North Shore (Kaena Point to Kahuku)
  ["Waialua High and Intermediate", [21.566681, -158.125673], true, true],

  // Leeward Coast (Makua to Waipahu and Vicinity)
  ["August Ahrens Elementary", [21.393103, -158.002825], false, false],
  ["Barbers Point Elementary", [21.322408, -158.081685], false, false],
  ["Campbell High", [21.316588, -158.008460], true, true],
  ["Ewa Beach Elementary", [21.315438, -158.015239], false, false],
  ["Ewa Elementary", [21.344599, -158.034638], true, false],
  ["Holomua Elementary", [21.339197, -158.020043], false, false],
  ["Honowai Elementary", [21.383943, -158.026311], true, false],
  ["Ilima Intermediate", [21.316001, -158.011792], true, true],
  ["Kaimiloa Elementary", [21.319790, -158.008600], false, false],
  ["Kaleiopuu Elementary", [21.391832, -158.027318], false, false],
  ["Kamaile Elementary", [21.456928, -158.195097], false, false],
  ["Kanoelani Elementary", [21.416214, -157.998698], false, false],
  ["Kapolei Elementary", [21.334093, -158.064660], true, false],
  ["Kapolei High", [21.327866, -158.068416], true, false],
  ["Leihoku Elementary", [21.438860, -158.174281], false, false],
  ["Makaha Elementary", [21.470667, -158.211998], false, false],
  ["Makakilo Elementary", [21.347743, -158.087479], false, false],
  ["Mauka Lani Elementary", [21.358532, -158.083782], true, false],
  ["Nanakuli Elementary", [21.387611, -158.133721], false, false],
  ["Nanakuli High & Intermediate", [21.388106, -158.134608], true, true],
  ["Pohakea Elementary", [21.313889, -158.010227], false, false],
  ["Waianae Elementary", [21.446131, -158.184793], false, false],
  ["Waipahu Elementary", [21.384919, -158.015943], true, true],
  ["Waipahu High", [21.388374, -157.993359], true, true],
  ["Waipahu Intermediate", [21.381155, -158.014085], true, false],

  // Central Oahu (Wahiawa to Mililani and Vicinity)
  ["Hanalani Elementary", [21.440831, -158.009296], false, false],
  ["Helemano Elementary", [21.513598, -158.023156], true, false],
  ["Iliahi Elementary", [21.506065, -157.998759], false, false],
  ["Kaala Elementary", [21.494481, -158.036625], true, false],
  ["Kipapa Elementay", [21.460626, -158.011721], true, false],
  ["Leilehua High", [21.501367, -158.012702], true, true],
  ["Mililani High", [21.453073, -158.009143], true, true],
  ["Mililani Ike Elementary", [21.480115, -157.985087], false, false],
  ["Mililani Mauka Elementary", [21.471098, -158.001136], false, false],
  ["Mililani Waena Elementary", [21.455601, -158.009947], true, false],
  ["Mililani Middle", [21.475474, -157.989696], true, true],
  ["Mililani-Uka Elementary", [21.437106, -158.014751], true, false],
  ["Wahiawa Elementary", [21.504281, -158.017685], true, false],
  ["Wahiawa Middle", [21.494065, -158.019071], true, false],

  // Pearl City to Aiea and Salt Lake
  ["Aiea Elementary", [21.375815, -157.928069], true, false],
  ["Aiea Intermediate", [21.380593, -157.923547], true, false],
  ["Aiea High", [21.383964, -157.930133], true, true],
  ["Aliamanu Elementary", [21.343010, -157.914128], true, false],
  ["Aliamanu Middle", [21.342921, -157.914476], true, false],
  ["Halawa District Park", [21.373021, -157.915827], false, false],
  ["Highlands Intermediate", [21.400786, -157.962535], true, true],
  ["Lehua Elementary", [21.388563, -157.972142], true, false],
  ["Makalapa Elementary", [21.361690, -157.928142], true, false],
  ["Manana Elementary", [21.408542, -157.971406], true, false],
  ["Moanalua Elementary", [21.348987, -157.891446], true, false],
  ["Moanalua Middle", [21.349865, -157.892843], true, true],
  ["Moanalua High", [21.347104, -157.900005], true, true],
  ["Momilani Elementary", [21.413000, -157.954539], false, false],
  ["Nimitz Elementary", [21.341002, -157.935443], false, false],
  ["Palisades Elementary", [21.428596, -157.956100], true, false],
  ["Pearl City District Park", [21.401193, -157.970514], false, false],
  ["Pearl City Elementary", [21.395551, -157.971824], false, false],
  ["Pearl City High", [21.413635, -157.950908], true, true],
  ["Pearl City Highlands Elementary", [21.403316, -157.965266], true, false],
  ["Pearl Harbor Elementary", [21.346436, -157.929466], false, false],
  ["Pearl Harbor Kai Elementary", [21.348721, -157.937815], false, false],
  ["Pearlridge Elementary", [21.388809, -157.944936], true, false],
  ["Radford High", [21.359113, -157.928702], true, true],
  ["Red Hill Elementary", [21.368519, -157.899927], true, false],
  ["Salt Lake Elementary", [21.351713, -157.911540], true, false],
  ["Waiau Elementary", [21.398786, -157.953388], false, false],
  ["Waimalu Elementary", [21.390379, -157.949648], true, false],
  ["Webling Elementary", [21.381092, -157.920040], false, false],

  // Salt Lake to Punchbowl and Downtown
  ["Central Middle", [21.311379, -157.856493], true, false],
  ["Dole Middle", [21.343072, -157.871481], true, false],
  ["Farrington High", [21.330694, -157.872234], false, false],
  ["Fern Elementary", [21.338850, -157.881751], false, false],
  ["Kaahumanu Elementary", [21.302608, -157.843665], false, false],
  ["Kaewai Elementary", [21.345117, -157.869483], true, false],
  ["Kaiulani Elementary", [21.318973, -157.858848], true, false],
  ["Kalakaua Middle", [21.327643, -157.876000], true, false],
  ["Kalihi Elementary", [21.352138, -157.861032], false, false],
  ["Kalihi-Kai Elementary", [21.326086, -157.878180], true, false],
  ["Kalihi-Uka Elementary", [21.344608, -157.861265], true, false],
  ["Kalihi Valley District Park", [21.343103, -157.869090], false, false],
  ["Kalihi-Waena Elementary", [21.336158, -157.875623], true, false],
  ["Kapalama Elementary", [21.334115, -157.868881], true, false],
  ["Kauluwela Elementary", [21.318933, -157.858816], false, false],
  ["Kawananakoa Middle", [21.318476, -157.851566], true, false],
  ["Lanakila District Park", [21.327623, -157.860575], false, false],
  ["Lanakila Elementary", [21.326488, -157.860442], true, false],
  ["Likelike Elementary", [21.324833, -157.864030], false, false],
  ["Linapuni Elementary", [21.338962, -157.877501], true, false],
  ["Lincoln Elementary", [21.312914, -157.840225], false, false],
  ["Maemae Elementary", [21.328413, -157.847770], true, false],
  ["Nuuanu Elementary", [21.335997, -157.835255], false, false],
  ["Pauoa Elementary", [21.318528, -157.843895], false, false],
  ["Puuhale Elementary", [21.327433, -157.884484], true, false],
  ["Roosevelt High", [21.310479, -157.837360], true, true],
  ["Royal Elementary", [21.312261, -157.853639], true, false],
  ["Stevenson Middle", [21.310020, -157.840692], true, true],

  // Punchbowl to Waialae and Vicinity
  ["Aliiolani Elementary", [21.286644, -157.804], true, false],
  ["Anuenue Elementary", [21.304094, -157.789651], false, false],
  ["Hawaii Convention Center", [21.289797, -157.835908], true, false],
  ["Hokulani Elementary", [21.291348, -157.813163], true, false],
  ["Jarrett Middle", [21.297479, -157.797639], true, true],
  ["Kahala Elementary", [21.273529, -157.784801], true, false],
  ["Kaimuki High", [21.285998, -157.816751], true, true],
  ["Kaimuki Middle", [21.269646, -157.796103], true, true],
  ["Kuhio Elementary", [21.289071, -157.819836], false, false],
  ["Liholiho Elementary", [21.279055, -157.805914], true, false],
  ["Lunalilo Elementary", [21.292403, -157.833101], false, false],
  ["Manoa Elementary", [21.317491, -157.808486], true, false],
  ["McKinley High", [21.299006, -157.848216], true, false],
  ["Neal Blaisdell Center", [21.298886, -157.851295], true, false],
  ["Noelani Elementary", [21.305991, -157.812174], true, false],
  ["Palolo Elementary", [21.299805, -157.792163], true, false],
  ["Waialae Elementary", [21.276791, -157.792214], true, false],
  ["Waikiki Elementary", [21.268158, -157.814361], false, false],
  ["Washington Middle", [21.295807, -157.834845], true, true],
  ["Wilson Elementary", [21.282402, -157.785050], true, false],

  // Aina Haina to Hawaii Kai and Vicinity
  ["Aina Haina Elementary", [21.279322, -157.755987], true, false],
  ["Hahaione Elementary", [21.296428, -157.709916], true, false],
  ["Kaiser High", [21.285245, -157.695777], true, true],
  ["Kalani High", [21.278018, -157.774278], true, true],
  ["Kamiloiki Elementary", [21.294357, -157.685352], true, false],
  ["Koko Head Elementary", [21.274548, -157.705252], true, false],
  ["Niu Valley Middle", [21.285374, -157.739450], true, false],

  // Windward Coast (Kahuku to Waimanalo)
  ["Ahuimanu Elementary", [21.435008, -157.830845], true, false],
  ["Aikahi Elementary", [21.424784, -157.749664], false, false],
  ["Benjamin Parker Elementary", [21.413911, -157.798784], false, false],
  ["Brigham Young Unversity of Hawaii", [21.641847, -157.925387], true, false],
  ["Castle High", [21.403480, -157.793976], true, true],
  ["Enchanted Lake Elementary", [21.382974, -157.731740], true, false],
  ["Heeia Elementary", [21.417888, -157.808551], true, false],
  ["Kahaluu Elementary", [21.457088, -157.845807], true, false],
  ["Kahuku High and Intermediate", [21.674745, -157.948243], true, false],
  ["Kailua Elementary", [21.394866, -157.740803], true, false],
  ["Kailua High", [21.384488, -157.748666], true, true],
  ["Kailua Intermediate", [21.394339, -157.735973], true, false],
  ["Kainalu Elementary", [21.412991, -157.749002], false, false],
  ["Kalaheo High", [21.409122, -157.756829], true, true],
  ["Kaneohe Elementary", [21.396334, -157.796004], false, false],
  ["Kapunahala Elementary", [21.408076, -157.803493], false, false],
  ["Keolu Elementary", [21.371797, -157.735944], false, false],
  ["King Intermediate", [21.427392, -157.806278], true, true],
  ["Lanikai Elementary", [21.393747, -157.725540], true, false],
  ["Maunawili Elementary", [21.376931, -157.752053], true, false],
  ["Pope Elementary", [21.328188, -157.695010], true, false],
  ["Puohala Elementary", [21.409720, -157.790856], false, false],
  ["Waiahole Elementary", [21.483253, -157.851942], true, false],
  ["Waimanalo Elementary and Intermediate", [21.345553, -157.715006], true, true]
];

var NAME = 0;
var LAT_LNG = 1;
var HEALTH_NEEDS= 2;
var PET_FRIENDLY = 3;