'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "0d3ab8e234320a705d704cdf85c68baf",
"version.json": "8d57863acad3b8adae9b36f500e242dd",
"index.html": "aeb64b5b6c0fb5d69b0ca0a139cbc23c",
"/": "aeb64b5b6c0fb5d69b0ca0a139cbc23c",
"main.dart.js": "819ffdc4dec358e3ecf0aa82d969e5b5",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b8e0dcb0eebb498816272715f541f38b",
"assets/resources/content/vocabulary.json": "58b54133eefaeda2920f690548a62089",
"assets/resources/content/kanji.json": "5da540b75926f4f073903eed423a5182",
"assets/resources/img/thanks.jpeg": "66d0a57ed0ebe600fd92139d7f1f914d",
"assets/resources/img/minigames.jpeg": "bbc8060f194473b83df4c15ffaa6a65c",
"assets/resources/img/city.jpeg": "1d97eca8d45a6e80dd185433babaeeda",
"assets/resources/img/maneki-neko.jpeg": "4ad6078a125a2e8d81b9f875ea42b3eb",
"assets/resources/img/screenshots/practice.png": "5b985df6d64083eac9a2c4b5ecd219e0",
"assets/resources/img/screenshots/kanji-drawer.png": "f764bea3f32c37f5807fbeeddce6221a",
"assets/resources/img/screenshots/flappy-neko.png": "2a2252433a53e6e6e89ddb34d12db43e",
"assets/resources/img/screenshots/guess-number.png": "931acc5ab31b9b2ed29a6327b390bbcf",
"assets/resources/img/screenshots/quiz.png": "3f9500e706cae18f2e278011a6bb87ef",
"assets/resources/img/logo-round.png": "6a10863b58f0244049af87ce24e63783",
"assets/resources/img/food.jpeg": "c7757707d92195721eb56a5b103454e1",
"assets/resources/img/office-material.jpeg": "ccb1b515cafc792c87b09db84222fcfc",
"assets/resources/img/content-manager.jpeg": "4cbdd77ec882510af0ee93f2f0a3cb75",
"assets/resources/img/searcher.jpeg": "aa48b57dc015b6ff0dc466965edd2b7d",
"assets/resources/img/transports.jpeg": "51b875a232a561a2355b0f3b0bef9c0e",
"assets/resources/img/pagoda-temple.jpeg": "7c57970ce487f38248b09b2c49b2bb24",
"assets/resources/img/jisho/jisho-logo.png": "3dc25fae57939e54c288a4c36ce8b0a8",
"assets/resources/img/acknowledgement.jpeg": "8d3f86462b3260da5b8602970b4f41bd",
"assets/resources/img/landing-page-image.png": "c451a60ffcfc215bd922ed56e2385d85",
"assets/resources/img/panda.jpeg": "89c7d0d99343307a6f1121ce95ee6eb9",
"assets/resources/img/colorful-city.jpeg": "a6d7ad5936e6965fe1f19f063474def9",
"assets/resources/img/university.jpeg": "ac63cd9368d3b4b32765fd6cef014307",
"assets/resources/img/kanji-drawing.jpeg": "1dcb067e1e52b13f9193daec6f129582",
"assets/resources/img/landing-page-image-2.png": "9979a4e2f551a8362b5a457bf17c8b2a",
"assets/resources/img/calendar.jpeg": "c164d5bc8016bfcece4f95f1c3272121",
"assets/resources/img/carps.jpeg": "0035bb8a7e70fb8f4c2e3f53265e3440",
"assets/resources/img/village.jpeg": "5a0237e70c21779d21c4cc9f9c8d379a",
"assets/resources/img/landing-page-image-6.png": "582fc1dd7b68b7ed7e4d396ff2307513",
"assets/resources/img/flappy_neko/background/trees_nearest.png": "114c0681ccb0817ec770e5c42b163007",
"assets/resources/img/flappy_neko/background/mountains_far.png": "b742aad37d8146667efe215f43fc146b",
"assets/resources/img/flappy_neko/background/mountains_farest.png": "46ccb70af650e80a73424427674af883",
"assets/resources/img/flappy_neko/background/mountains_near.png": "579729f53c7b581736e5d99da06ab2c3",
"assets/resources/img/flappy_neko/buttons/settings_button_pressed.png": "eb0fcdeceedbeef75472122640b41138",
"assets/resources/img/flappy_neko/buttons/question_button_idle.png": "af932ffcb03a9fd16f4852c013154a07",
"assets/resources/img/flappy_neko/buttons/question_button_pressed.png": "0d79baa2d30c26b4fe0ac808ae48c6e8",
"assets/resources/img/flappy_neko/buttons/trophy_button_pressed.png": "11d8786f2932f0d4a3cf963fa6b9a97c",
"assets/resources/img/flappy_neko/buttons/settings_button_idle.png": "b44ae52c6a5a335909f55c97c902c1ea",
"assets/resources/img/flappy_neko/buttons/trophy_button_idle.png": "c0fc732f22176300830bde56dd46e6f8",
"assets/resources/img/flappy_neko/life/life.png": "1a651684b060c78884c9cab30fa2de8b",
"assets/resources/img/flappy_neko/neko/neko_idle.png": "800783923c1be97a2cb37b01a5178386",
"assets/resources/img/flappy_neko/neko/neko_down.png": "d6b88ab177a24fb1ea80a2c4ecb482a7",
"assets/resources/img/flappy_neko/neko/neko_up.png": "c5ab44b958f820002e471af0e62147b1",
"assets/resources/img/flappy_neko/seagull/seagull_down.png": "d7bac982c4f0a2c8b4aa1e7ac5c7c7cd",
"assets/resources/img/flappy_neko/seagull/seagull_idle.png": "ec689055a5916709b716b233c94d475e",
"assets/resources/img/flappy_neko/seagull/seagull_up.png": "fd183c8663f24d255c80691139e5a5dd",
"assets/resources/img/flappy_neko/cover/flappy_neko_cover.jpg": "4142b2e74aad0d3976d42aea4f554a82",
"assets/resources/img/forge.jpeg": "41864d5ef501d12311390c6478396d03",
"assets/resources/img/hanami.jpeg": "3a05672906d93037a5b825819b20df2f",
"assets/resources/img/syllabus.jpeg": "15d997b05e340ec7ed23d0f4bb659ef3",
"assets/resources/img/world-globe.jpeg": "964b7c9b4e8d6b6e4a6146b4019a560b",
"assets/resources/img/months.jpeg": "e591968520ff3f4fd7e9ab707ae96439",
"assets/resources/img/verbs.jpeg": "a0a4c2ba019d0ca202d3666bda5984f9",
"assets/resources/img/days-of-week.jpeg": "97034fe18914aedd8469ed9fce2d547c",
"assets/resources/img/badges/adult-face-3d.png": "65c1b7abce17c4167ef3d45bec7ff631",
"assets/resources/img/badges/first-aid-kit-3d.png": "737cfd38d105464d8104210810fa7db8",
"assets/resources/img/badges/ambulance-3d.png": "8817231b862cef28780324676049605b",
"assets/resources/img/badges/wise-face-3d.png": "2736d6832d3e874013b75504bea8599b",
"assets/resources/img/badges/teenager-face-3d.png": "4e6ef84232e0b7ef507c56d14f1fe180",
"assets/resources/img/badges/toolbox.png": "3aa8304055bf0fb92c583b4dab4cd144",
"assets/resources/img/badges/emerald-chalice-3d-2.png": "5ba429500defb7530fab82e4e1c2097f",
"assets/resources/img/badges/rocket-3d-4.png": "3c4cf5983323a045d05983ae69fad283",
"assets/resources/img/badges/king-of-numbers-3d.png": "35590112ddf2f6f057bdeac8f34cef20",
"assets/resources/img/badges/trophy-3d.png": "88762605d7c3992c331514d6de2440a7",
"assets/resources/img/badges/baby-face-3d.png": "112b760d8b34f84132f365f9fcd9862d",
"assets/resources/img/house-indoor.jpeg": "9ee77ead5c9e4f48936e7c47dfff9bc9",
"assets/resources/img/abacus.jpeg": "74eea03f0de9a3734ff6cb35748992e5",
"assets/resources/img/play-store-logo.png": "217b3ca828b0668cb272e8eef6290cec",
"assets/resources/lang/es_ES.json": "f1e8557d4db850c33eb3b82a941d0289",
"assets/resources/lang/en_US.json": "d97ed9f6d6e842e88ce52133c562779d",
"assets/resources/kanjis/03064.svg": "d17a658def4ef2594ebabf1695b9c758",
"assets/resources/kanjis/03070.svg": "7bc2fa2823cd20bba18173b457ce47fe",
"assets/resources/kanjis/030aa.svg": "6c2d46886eae4acf30f19233d3a6e96b",
"assets/resources/kanjis/03058.svg": "6ee7040523623b376898e61136dd22fc",
"assets/resources/kanjis/0306b.svg": "d79fe88015df06aa6032653aed170ce5",
"assets/resources/kanjis/0307f.svg": "cd2ca56575b318f466c2079bc18255d9",
"assets/resources/kanjis/030a7.svg": "ad505ff224917ca5f2941a6afce29434",
"assets/resources/kanjis/0516b.svg": "7ba99d606c20ec27a7f57aa21242acbc",
"assets/resources/kanjis/030a6.svg": "83c7a3eead51cb4e674f58d4408784ca",
"assets/resources/kanjis/0306c.svg": "bf6207effc56ee5ea96311b3d98e7557",
"assets/resources/kanjis/03059.svg": "2f4f16abe66fce1a35d8deaa7da9aae5",
"assets/resources/kanjis/03071.svg": "1ba889a6f8d928be6dabf3ab158e2480",
"assets/resources/kanjis/081ea.svg": "ebda5b77aa654cec74f61b9a95607153",
"assets/resources/kanjis/03065.svg": "b347440b8497c9761dc927b7b3d71ffe",
"assets/resources/kanjis/05206.svg": "3630d6b7e45d7b551e70d3d9e664031c",
"assets/resources/kanjis/04f11.svg": "74e30bac01bf8b9a80f7bb23f1799ba5",
"assets/resources/kanjis/0672c.svg": "277ea820cf28c386e99a9ac9b3cb1055",
"assets/resources/kanjis/030b8.svg": "fc3cbccb2fed0cbc3472b55b5907c6b1",
"assets/resources/kanjis/030ab.svg": "8724eda23a0c5ab433ff7fab63e5fe1b",
"assets/resources/kanjis/03073.svg": "df74497f607f033cbf8a46fdbbb1ad86",
"assets/resources/kanjis/03067.svg": "4220447fa6533436dad2a28e85d98bd1",
"assets/resources/kanjis/030a4.svg": "4f7d82fe750dba10adeedc893bf69330",
"assets/resources/kanjis/0540d.svg": "b22fef0365e62d5c9bb79982d8e54827",
"assets/resources/kanjis/0307e.svg": "d21d5b96276235fc6fdd2553341d0c0d",
"assets/resources/kanjis/0306a.svg": "502a6b84177a0bc3ca43dbcb7cd80b5d",
"assets/resources/kanjis/05f8c.svg": "4efc920fff5fb4d58ddeaffb34354238",
"assets/resources/kanjis/030a5.svg": "b596cc8de56b6c9d7b3922265a27fec3",
"assets/resources/kanjis/0307d.svg": "f570d57006fdcd26605f274f21b2b521",
"assets/resources/kanjis/03066.svg": "ff1510c7382ac2003bd57a37bcb38742",
"assets/resources/kanjis/030ac.svg": "c1062e940cc82a2496bedd5d2fbeec3e",
"assets/resources/kanjis/030b9.svg": "c42c5f8d2b1e6447f5751ffbf1391baf",
"assets/resources/kanjis/03072.svg": "1684f4b9eb5492f1d3fd7e7caea297f3",
"assets/resources/kanjis/05e30.svg": "78e951fb9e03e71bb000b240fb014f87",
"assets/resources/kanjis/096f6.svg": "289ed09efccae4d742ad31767f27a4bc",
"assets/resources/kanjis/065e5.svg": "bfb26b9f4337f56bcfe7e4d9a148c24b",
"assets/resources/kanjis/06708.svg": "0fd7f0cde5c2f96eaae874288b74dee8",
"assets/resources/kanjis/03089.svg": "7fc12cfbd1dd31865c03c7f41ccec464",
"assets/resources/kanjis/030a1.svg": "27ec6962fbe4a5893cbe300ddedd06d9",
"assets/resources/kanjis/0306d.svg": "7d1337e84e43e222adbd3dc5958b7f84",
"assets/resources/kanjis/03076.svg": "93cf49d920be844002d4c448e227481c",
"assets/resources/kanjis/030c9.svg": "3da584f16144ad0e0b737668cb7d9610",
"assets/resources/kanjis/03062.svg": "59a860d2cdbcab4247258ca46c43042c",
"assets/resources/kanjis/056fd.svg": "668e0d8597b687f1113de4afa707b350",
"assets/resources/kanjis/0516d.svg": "931abb7f0f522b34a72d140283c3edfb",
"assets/resources/kanjis/030c8.svg": "384831dde9164d7094cf246559afbdd5",
"assets/resources/kanjis/03077.svg": "60169b485724590fa4d5266d4ac5d8f5",
"assets/resources/kanjis/030af.svg": "59aceb48212bc4aaa252ebedcd237a15",
"assets/resources/kanjis/05348.svg": "0330268c2e265ea87681bd3ec14aa183",
"assets/resources/kanjis/0306e.svg": "837dde6950b83b7b67fa4b02746bc2d7",
"assets/resources/kanjis/0307a.svg": "44e4fb21183ab08fc764ebbc8fff6d88",
"assets/resources/kanjis/03088.svg": "6782e10eebd2e0b6b1d93fe1a7ccfc7d",
"assets/resources/kanjis/04f1a.svg": "eb4227a1a6a88cbeaaeade28c74a2ef4",
"assets/resources/kanjis/030a2.svg": "d36a1c4ea74374c639662369f1f80d9a",
"assets/resources/kanjis/0307c.svg": "e5aa60c5e868e4415f482c9ede50c6fc",
"assets/resources/kanjis/03061.svg": "00ff332985b0c141f84e97647d2aeec3",
"assets/resources/kanjis/030ad.svg": "c1f6a48b75d4ff1cd6154e6062951ad8",
"assets/resources/kanjis/03075.svg": "8885337f3f29ae0e9ee3584539a3d044",
"assets/resources/kanjis/05148.svg": "5f4f3f6819e12d9bcd743a6cd7b06c0b",
"assets/resources/kanjis/030ae.svg": "dcafef3aab6ee7edccc2ea87c5b4f276",
"assets/resources/kanjis/03074.svg": "4611c7a399dc5085156cc3e7259971de",
"assets/resources/kanjis/03060.svg": "0249975b0469e91c74ebb18d29eaa618",
"assets/resources/kanjis/030a3.svg": "3b74c2cdc8a4da2a5d8050be3e3550ac",
"assets/resources/kanjis/03048.svg": "0dd88c4e251a6a4e4807deb501aa8f71",
"assets/resources/kanjis/0307b.svg": "69d467c92092339b371ceefc58074428",
"assets/resources/kanjis/0306f.svg": "37f90a3fcd6047ff9220dd12203fcd53",
"assets/resources/kanjis/06642.svg": "e5eb3705b1ca792e0631d71932811f90",
"assets/resources/kanjis/05927.svg": "8817abf58ebe44097f0eb49aafbd64e4",
"assets/resources/kanjis/030d8.svg": "bffe706ff1e077843a5bb022a35f5ed5",
"assets/resources/kanjis/030f0.svg": "30786a3140aa83e61769b88046476f25",
"assets/resources/kanjis/030f1.svg": "61da5b6ff6d6ee05621083e62f402588",
"assets/resources/kanjis/030d9.svg": "2fe983121f9ab6c0c86c91f95d988c4d",
"assets/resources/kanjis/0751f.svg": "824194acedf01d2025382b9e84327545",
"assets/resources/kanjis/030f3.svg": "8fb3402c2266a14d336ed67848c0c33a",
"assets/resources/kanjis/04e07.svg": "645404b4ee500c94ffbb66d58696b73c",
"assets/resources/kanjis/030f2.svg": "32b67263f791f921952d9b1f18483204",
"assets/resources/kanjis/066f8.svg": "81a2d64f47070905ddae128b5d43bcc5",
"assets/resources/kanjis/0767e.svg": "8257430ede73c55eb6d671c90e2a2270",
"assets/resources/kanjis/030f6.svg": "d8c52897c4d45c565d9fa34349bdf34c",
"assets/resources/kanjis/04e03.svg": "c59f14d644532a887ce243f960e5a6e1",
"assets/resources/kanjis/0706b.svg": "8825a943c29db96fdd267cd6bf5e1ef9",
"assets/resources/kanjis/030fa.svg": "c9b7204faa0994b1dfb5d2bdd9c65f19",
"assets/resources/kanjis/030f7.svg": "4a442487e1d0979b008b8a096aae6a59",
"assets/resources/kanjis/030f5.svg": "bec2f81771d58f65510a59a189f29e71",
"assets/resources/kanjis/030e9.svg": "4dd246ca7695f748f98d9d56938072d3",
"assets/resources/kanjis/0793e.svg": "7739d2c7395af7c5d2ba4c62f4b9d379",
"assets/resources/kanjis/04e00.svg": "5dadc5b0bfdeaf1419d367c38c1367b6",
"assets/resources/kanjis/030e8.svg": "07e9ccb4e5b3f7628201abc6e7c9bc21",
"assets/resources/kanjis/030f4.svg": "7939451f14824f98c9532badf6866881",
"assets/resources/kanjis/0571f.svg": "60bb713337d0a03a6f8939a12b9cae62",
"assets/resources/kanjis/065b9.svg": "361e15f256a12c9d871380139b4584e4",
"assets/resources/kanjis/030ec.svg": "d51a607e76afbf6d80c2eef47f28cf0e",
"assets/resources/kanjis/030f9.svg": "87359949c2aafe04c44426950f74d701",
"assets/resources/kanjis/030d1.svg": "85198347c399a5b943675c29a4fd0fc6",
"assets/resources/kanjis/030e5.svg": "af62210274dfcf20018fd79de30c9b11",
"assets/resources/kanjis/030e4.svg": "cfcb22e56b830a4163e76d017e78f317",
"assets/resources/kanjis/030d0.svg": "f0053eb1a772e8911a578cb1515f8c52",
"assets/resources/kanjis/030f8.svg": "71f197cd278c85a700a7c0c8916cc4e1",
"assets/resources/kanjis/030eb.svg": "b2798565c12ed42391c018715d8cdbf2",
"assets/resources/kanjis/030df.svg": "188f3192362a65a30c085deeb8ebb783",
"assets/resources/kanjis/06765.svg": "bb7bfc238d1b4d51e78f060923fd227d",
"assets/resources/kanjis/091d1.svg": "be5585299289adfbe78e9e0919452f61",
"assets/resources/kanjis/030dd.svg": "e3371d49a3967e0efc5bc8cc5157b040",
"assets/resources/kanjis/030e6.svg": "36626ade95b0f6a34edb55189f77d41e",
"assets/resources/kanjis/030d2.svg": "010fdd304b56eabc48ba7180d33064ae",
"assets/resources/kanjis/030d3.svg": "15c8337417ccb8396f59e1a30922a542",
"assets/resources/kanjis/030e7.svg": "c749d5880b1184448df1e9ebf15ad81e",
"assets/resources/kanjis/030de.svg": "4b84a8abce89c04c84468ee104c90583",
"assets/resources/kanjis/030ea.svg": "243032703add7133079bbf5ce047e045",
"assets/resources/kanjis/06821.svg": "9e3deb40a30d117dc43e86fca1072dd0",
"assets/resources/kanjis/030e3.svg": "d9e19b6cdf030824b113a2392a09b423",
"assets/resources/kanjis/030d7.svg": "5c1c4766e5fa700453ba328c33dd49d6",
"assets/resources/kanjis/030ee.svg": "2a03d3c74fd77410037c44b96a32644a",
"assets/resources/kanjis/030da.svg": "81fbdb66d3a90d1c76fc7e96be50fd60",
"assets/resources/kanjis/06c34.svg": "b8aafe6ce5160fc95f7d354e0ae0a645",
"assets/resources/kanjis/030ed.svg": "fb58b64b2e42633ae71bb41dfcc29d9f",
"assets/resources/kanjis/030d6.svg": "02c979305bec6183da85d9f415652d73",
"assets/resources/kanjis/030e2.svg": "1de998838a3a6bc1fcd6f934a31eff40",
"assets/resources/kanjis/0524d.svg": "6a1adca2fc3e1d56fe9192f954efba43",
"assets/resources/kanjis/04f55.svg": "9788562a9111010d1a5347dd0c0a1df9",
"assets/resources/kanjis/06bce.svg": "a21b0afa235ed57b6074af9c93c4b5f3",
"assets/resources/kanjis/030d4.svg": "5491a64d8ec8741db7c0fceda8ce7091",
"assets/resources/kanjis/030e0.svg": "c362e119080690d157ff63e6ff9e7b09",
"assets/resources/kanjis/030db.svg": "59363732b7e31dd7968c7bb51753e513",
"assets/resources/kanjis/030ef.svg": "4f1278779c3d322a2a48fb41ea0af0bc",
"assets/resources/kanjis/04e09.svg": "1928691397bbcfdfc59c843dedf00f48",
"assets/resources/kanjis/030dc.svg": "f6b5f2aa0214dece9d09e691d04794d6",
"assets/resources/kanjis/030e1.svg": "1a90da492f03b41190a81f7e5d1c6deb",
"assets/resources/kanjis/030d5.svg": "b46881ac055c7d0fdccc794fee803b5a",
"assets/resources/kanjis/05e74.svg": "9479ae9ab50bbf10faca99bf7f85929a",
"assets/resources/kanjis/03086.svg": "9e520297638aca650f9d1e77fdbe76fa",
"assets/resources/kanjis/03092.svg": "959985d034949d1ee0b6479cf9e75eab",
"assets/resources/kanjis/0884c.svg": "4047fcbda9fda62f8c82de4ec343bbed",
"assets/resources/kanjis/030bd.svg": "ea93c802c886bdc4931ac8f7026c91c2",
"assets/resources/kanjis/03051.svg": "9477da718ded10196a8ef49729a0edd7",
"assets/resources/kanjis/030b2.svg": "afc781bc8851568e5f0ca7138bcd7327",
"assets/resources/kanjis/03079.svg": "de650df210833c7f5e9a6e26baaaba4e",
"assets/resources/kanjis/0304c.svg": "dfda94d2b8f8faa1d9d11e6f697f4684",
"assets/resources/kanjis/030c6.svg": "fa18c89bde8bf7d97bb39cccb474cfc8",
"assets/resources/kanjis/09031.svg": "126754a95754f478a1171f9f8d86ce55",
"assets/resources/kanjis/056db.svg": "61dd1501e3a652221b74fce2b5f38244",
"assets/resources/kanjis/04e5d.svg": "ac95e07f7409f8ea5c6951b76aee7f2a",
"assets/resources/kanjis/05186.svg": "19a5e8ba15ede3c91023f6bcd57cad28",
"assets/resources/kanjis/0305f.svg": "8da19cab3857152379b4371d695ba8e3",
"assets/resources/kanjis/0534a.svg": "b688e8415ebdd6b1fc17bb7aa042aee8",
"assets/resources/kanjis/030c7.svg": "740c928966a1f84cad5d396f7e83559e",
"assets/resources/kanjis/030b3.svg": "fb4a1c8c8f6455c05a2857c224dce47e",
"assets/resources/kanjis/0304b.svg": "e7be3f2122e9e1204019e08cf4f3df8c",
"assets/resources/kanjis/03078.svg": "038b2114c9978fccdc7be4bd110a0125",
"assets/resources/kanjis/03050.svg": "12fb8fad1e10eb5f141c63d70309d0f8",
"assets/resources/kanjis/030ca.svg": "5f00f54956af5a57dc985571ca3bdc60",
"assets/resources/kanjis/030be.svg": "7ae3adc0be6ab3da6e5355b41561424d",
"assets/resources/kanjis/03044.svg": "ef21f52fafc103cb485223d7a22f6670",
"assets/resources/kanjis/053cb.svg": "98ed597d64bc21c8af62fcedbd122cdc",
"assets/resources/kanjis/0308a.svg": "98418cca0dbd313768af92b8ea981e11",
"assets/resources/kanjis/03093.svg": "6175989f7eb967972f748751d0cfff55",
"assets/resources/kanjis/08eca.svg": "4248e5a55d3db981c038ed2f22171ea8",
"assets/resources/kanjis/0308c.svg": "f60ba17c06c935d0e80b008684c61140",
"assets/resources/kanjis/030cc.svg": "5bc6dab4f0381c95f2110b226d99e618",
"assets/resources/kanjis/03052.svg": "12d32d4e07a7577458a92e5b9ad9eb41",
"assets/resources/kanjis/03046.svg": "0d15448e5a69408cbbf551efd95d3c8f",
"assets/resources/kanjis/030c5.svg": "ce961a26f7a64740f6dc9f6f467d7104",
"assets/resources/kanjis/0305d.svg": "b1b0755e94b0c42c962c91a050a5969b",
"assets/resources/kanjis/030b1.svg": "a2c3737c776c64c8a5dae539d5524812",
"assets/resources/kanjis/04eca.svg": "7447b0ed810f40394c126f464b35557e",
"assets/resources/kanjis/0304a.svg": "4a9de7791539ed36a2b7c088f4df468f",
"assets/resources/kanjis/030b0.svg": "205c4d99dec3ae9e7ff5d80930517267",
"assets/resources/kanjis/030c4.svg": "e41416273eed46bd24e5ba2418ec9824",
"assets/resources/kanjis/0305e.svg": "b3df7781a7ad12d5e2f1d8908cba5ded",
"assets/resources/kanjis/030bf.svg": "557f4c9c5a78c0a87b0eb4fc691c4aef",
"assets/resources/kanjis/030cb.svg": "ecaa53e73f5d699bcf5db71a80cb1023",
"assets/resources/kanjis/03053.svg": "035e675388a6b6114d929f884cc6f99c",
"assets/resources/kanjis/0308b.svg": "e5edda25dc8f2ce0785ec752e442889a",
"assets/resources/kanjis/03084.svg": "8f9bdf60205bc5bf412c7f62006ed7b0",
"assets/resources/kanjis/0308f.svg": "23885b50644130d561bbae42d61d3bfc",
"assets/resources/kanjis/03080.svg": "6d2d17a8c111f23df74772873739dac0",
"assets/resources/kanjis/0305a.svg": "9addf3891205a14f51515b2fb6db74d3",
"assets/resources/kanjis/030c0.svg": "27441782137d4f00fda09c85bae23813",
"assets/resources/kanjis/030b4.svg": "e6f4f1fca8640b0773b93df22415a8b6",
"assets/resources/kanjis/0304e.svg": "146a599590551462814bdcee9f8941d7",
"assets/resources/kanjis/03057.svg": "02671686ea13522e359c2f78dc140f6d",
"assets/resources/kanjis/030cf.svg": "f89fe47fa12836dd4fd37a8f753a8954",
"assets/resources/kanjis/030bb.svg": "bac48676976e09c3bbc736bc872f187f",
"assets/resources/kanjis/030a8.svg": "5d830aec4f635e7789f29fe63c4e08d1",
"assets/resources/kanjis/04eba.svg": "b990234a8abbadb8ed521692965d89c3",
"assets/resources/kanjis/030a9.svg": "76e704328e6e9cd973b5d60b0483f471",
"assets/resources/kanjis/030bc.svg": "fac021b1b7e9fc91af6499ace101e23d",
"assets/resources/kanjis/03042.svg": "03ca47211318d64ee184626569f8d53d",
"assets/resources/kanjis/03056.svg": "1e63b022a7dae75f80b02ca52a3029a2",
"assets/resources/kanjis/05341.svg": "f751040fb67ab1bf7615222c5b786477",
"assets/resources/kanjis/030b5.svg": "b9f3505c85ba998838af532dcf7627d5",
"assets/resources/kanjis/0304d.svg": "4eed2ef47713599e8ab59b5b8cfa1130",
"assets/resources/kanjis/030c1.svg": "a06c01b71f1271e7044f124d4e482dc5",
"assets/resources/kanjis/03081.svg": "7461c53aa04e83f5abf560d63c1e2d9d",
"assets/resources/kanjis/06728.svg": "3a4982ee04e1bbd6639232bcde0ca6b8",
"assets/resources/kanjis/05b66.svg": "00af5f2431ab18e167e92c84618ab9b7",
"assets/resources/kanjis/0304f.svg": "b07a2c9fcbee1810cd889de0e709be0e",
"assets/resources/kanjis/030b7.svg": "3a45c73313d57f75e289547f5e5c10e6",
"assets/resources/kanjis/030c3.svg": "85082c2a13ba66bf8fc070d15f9e2727",
"assets/resources/kanjis/0305b.svg": "8a7653d2391283e618c55600613ef79b",
"assets/resources/kanjis/03068.svg": "58e8b6bf1b14458a5081844b75b51c77",
"assets/resources/kanjis/030ba.svg": "3513ef66f68ecfcfd11c625f209945ab",
"assets/resources/kanjis/030ce.svg": "273944f87727003174a4a85a54674139",
"assets/resources/kanjis/05343.svg": "05e4106bb87b65d848bc842dbcf0c9be",
"assets/resources/kanjis/03054.svg": "ef82d911f0448de19eaf1c557a4a726e",
"assets/resources/kanjis/04e94.svg": "3bf78edef2be33a7d5bbb456971a567d",
"assets/resources/kanjis/030cd.svg": "dd42b729b1e1d20c0651e78520a92bc2",
"assets/resources/kanjis/03055.svg": "9a9705bf2e746f353d944e394d9c1092",
"assets/resources/kanjis/030c2.svg": "b9030977e0e87293d734b2b2052a99a4",
"assets/resources/kanjis/03069.svg": "7915533bbfa0d1c93e39a5c27b1b8490",
"assets/resources/kanjis/0305c.svg": "ae781feaa4f4940c415ec4c346509f08",
"assets/resources/kanjis/030b6.svg": "30dfabfaa72e74f28d84076f9cfb1275",
"assets/resources/kanjis/03082.svg": "0d22b759eea60c4bfe9c7a4847029e89",
"assets/resources/kanjis/0308d.svg": "685becb11a3059b7583f168014c78e14",
"assets/resources/animations/trophy.riv": "130c6ec766b058a3e8fa119628e33d04",
"assets/AssetManifest.json": "af1c3a6e5b6df31eca159f1563c59f5a",
"assets/NOTICES": "c7da0594a9548d7ccae63b3ce349ce38",
"assets/FontManifest.json": "e024588c84b5d20cb7869d6f908130e8",
"assets/AssetManifest.bin.json": "e7c6bc39171cb536f300453a2ccb81a1",
"assets/packages/line_icons/lib/assets/fonts/LineIcons.ttf": "bcaf3ba974cf7900b3c158ca593f4971",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "8801a3ec0e13f4b0ee88c5e6096fbf34",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "48c9b35ba8b8679e9f05d61257c2b8b1",
"assets/fonts/MaterialIcons-Regular.otf": "dcb5db03c0860ee8e3414b6cbed531f4",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
