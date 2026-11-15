// images
import panel7Img from "../assets/img/updates/panel7.png";
import themesZImg from "../assets/img/updates/themes-z.png";
import panel6Img from "../assets/img/updates/panel-6.png";
import themeMatrixImg from "../assets/img/updates/theme-matrix.png";
import themeGoldBlackImg from "../assets/img/updates/theme-goldblack.png";
import panel5Img from "../assets/img/updates/panel-5.png";
import panel4Img from "../assets/img/updates/panel-4.png";
import panel3Img from "../assets/img/updates/panel-3.png";
import themesImg from "../assets/img/updates/themes.png";
import theme3Img from "../assets/img/updates/theme-3.png";
import lessonCardImg from "../assets/img/updates/lesson-card.png";
import weekComponentImg from "../assets/img/updates/week-component.png";
import theme2Img from "../assets/img/updates/theme-2.png";
import themeImg from "../assets/img/updates/theme.png";
import lessonCard2Img from "../assets/img/updates/lesson-card-2.png";
import themeMoonImg from "../assets/img/updates/theme-moon.png";
import artemis2Img from "../assets/img/updates/theme-artemis_ii.png";
import modeImg from "../assets/img/updates/mode.png";
import eventsImg from "../assets/img/updates/events.png";

import { listTypes } from "./latest";

const updates = [
  {
    version: "1.19.1",
    list: [[listTypes.text, "Ուղղվել է ժամանակաչափի սխալը։"]],
  },
  {
    version: "1.19.0",
    list: [
      [listTypes.text, "Թարմացվել է դասացուցակը։"],
      [listTypes.text, "Հեռացվել է հավելվածի ռեժիմը փոխելու հնարավորությունը։"],
    ],
  },
  {
    version: "1.18.0",
    list: [
      [
        listTypes.text,
        "Միջոցառումների էջում այժմ ցուցադրվում է, թե որքան ժամանակ է մնացել մինչև միջոցառման մեկնարկը։",
      ],
      [listTypes.text, "Վերամշակվել է միջոցառումների էջի UI/UX-ը։"],
      [listTypes.img, eventsImg],
    ],
  },
  {
    version: "1.17.0",
    list: [
      [
        listTypes.text,
        "Կարգավորումների էջում ավելացվել են հավելվածի ռեժիմը փոխելու կոճակներ։",
      ],
      [listTypes.img, modeImg],
    ],
  },
  {
    version: "1.16.2",
    list: [
      [
        listTypes.text,
        "Տեղեկությունների էջում «Տեսնել ավելին» կոճակի բարձրությունը մեծացվել է։",
      ],
      [
        listTypes.text,
        "Տվյալների էջի դասավորությունը թարմացվել է․ տվյալներն այժմ հավասարեցվում են ձախ և աջ եզրերին։",
      ],
      [
        listTypes.text,
        "Ուղղվել է նավիգացիայի վահանակում նորությունների կարմիր ցուցիչի թափանցիկության խնդիրը։",
      ],
    ],
  },
  {
    version: "1.16.1",
    list: [
      [
        listTypes.text,
        "Թարմացվել են Artemis II, Moon և Glass թեմաների ակցենտային գույները։",
      ],
      [listTypes.text, "Ուղղվել են տարբեր սխալներ։"],
    ],
  },
  {
    version: "1.16.0",
    list: [
      [listTypes.text, "Ավելացվել է Artemis II նոր թեման։"],
      [listTypes.img, artemis2Img],
    ],
  },
  {
    version: "1.15.0",
    list: [
      [listTypes.text, "Ավելացվել է Moon նոր թեման։"],
      [listTypes.img, themeMoonImg],
    ],
  },
  {
    version: "1.14.0",
    list: [
      [listTypes.text, "Հավելվածը տեղափոխվել է նոր դոմեն։"],
      [
        listTypes.text,
        "Ավելացվել է թարմացումների պատմությունը դիտելու հնարավորություն։",
      ],
    ],
  },
  {
    version: "1.13.0",
    list: [
      [
        listTypes.text,
        "Ավելացվել է localStorage-ում պահվող տվյալները դիտելու հնարավորություն։",
      ],
    ],
  },
  {
    version: "1.12.0",
    list: [
      [listTypes.text, "Կարգավորումների բաժինը բաժանվել է առանձին էջերի։"],
      [listTypes.text, "Թարմացվել են ակտիվ օրվա ոճերը։"],
      [listTypes.text, "Թարմացվել են թեմաների ակցենտային գույները։"],
      [listTypes.text, "Թարմացվել են անջատիչների ոճերը։"],
    ],
  },
  {
    version: "1.11.0",
    list: [
      [
        listTypes.text,
        "Էջերի անվանումներն այժմ ցուցադրվում են վերնագրի հատվածում։",
      ],
    ],
  },
  {
    version: "1.10.0",
    list: [[listTypes.text, "Ավելացվել է տվյալների կարգավորման գործառույթ։"]],
  },
  {
    version: "1.9.0",
    list: [
      [listTypes.text, "Ավելացվել է լսարանի համարը ցուցադրելու կարգավորում։"],
    ],
  },
  {
    version: "1.8.0",
    list: [
      [listTypes.text, "Բարելավվել է նավիգացիայի UI/UX-ը։"],
      [listTypes.img, panel7Img],
    ],
  },
  {
    version: "1.7.0",
    list: [
      [listTypes.text, "Ավելացվել է Testet նոր թեման։"],
      [listTypes.text, "Ավելացվել է Cyber Slate նոր թեման։"],
      [listTypes.img, themesZImg],
    ],
  },
  {
    version: "1.6.0",
    list: [[listTypes.text, "Ավելացվել է «Միջոցառումներ» (Events) էջը։"]],
  },
  {
    version: "1.5.0",
    list: [
      [listTypes.text, "Վերափոխվել է նավիգացիայի UI/UX-ը։"],
      [listTypes.img, panel6Img],
    ],
  },
  {
    version: "1.4.1",
    list: [
      [listTypes.text, "Ավելացվել է Matrix նոր թեման։"],
      [listTypes.img, themeMatrixImg],
    ],
  },
  {
    version: "1.4.0",
    list: [
      [listTypes.text, "Թեմայի նախադիտման քարտում ավելացվել է աջ եզրագիծ։"],
    ],
  },
  {
    version: "1.3.0",
    list: [
      [listTypes.text, "Ավելացվել է Gold & Black նոր թեման։"],
      [listTypes.img, themeGoldBlackImg],
    ],
  },
  {
    version: "1.2.0",
    list: [
      [listTypes.text, "Ներդրվել է նավիգացիայի նոր ձևավորում։"],
      [listTypes.img, panel5Img],
    ],
  },
  {
    version: "1.1.0",
    list: [
      [listTypes.text, "Ավելացվել է «Կարգավորումներ» էջը։"],
      [listTypes.img, panel4Img],
    ],
  },
  {
    version: "1.0.0",
    list: [
      [listTypes.text, "Հավելվածի առաջին պաշտոնական թողարկումը։"],
      [listTypes.text, "Վերափոխվել է նավիգացիայի UI/UX-ը։"],
      [listTypes.img, panel3Img],
    ],
  },
  {
    version: "0.3.4",
    list: [
      [listTypes.text, "Ավելացվել է «Թեմաներ» էջը։"],
      [listTypes.img, themesImg],
    ],
  },
  {
    version: "0.3.3",
    list: [
      [listTypes.text, "Ավելացվել է Glass նոր թեման։"],
      [listTypes.img, theme3Img],
    ],
  },
  {
    version: "0.3.2",
    list: [
      [listTypes.text, "Ուղղվել են մի շարք սխալներ։"],
      [listTypes.text, "Փոխվել է Space թեմայի ֆոնը։"],
      [listTypes.text, "Հեռացվել են ավարտված դասերը։"],
    ],
  },
  {
    version: "0.3.1",
    list: [
      [listTypes.text, "Ավելացվել են համարիչի և հայտարարի կոճակները։"],
      [listTypes.text, "Թարմացվել է դասացուցակը։"],
    ],
  },
  {
    version: "0.3.0",
    list: [
      [listTypes.text, "Հավելվածը թարգմանվել է հայերեն։"],
      [listTypes.text, "Թարմացվել է Lesson բաղադրիչի UI/UX-ը։"],
      [listTypes.img, lessonCard2Img],
    ],
  },
  {
    version: "0.2.3",
    list: [
      [listTypes.text, "Բարելավվել է Lesson բաղադրիչի UI/UX-ը։"],
      [listTypes.img, lessonCardImg],
    ],
  },
  {
    version: "0.2.2",
    list: [[listTypes.text, "Ավելացվել են իրական դասեր։"]],
  },
  {
    version: "0.2.1",
    list: [[listTypes.text, "Թարմացվել են բետա հրավերի նամակի ոճերը։"]],
  },
  {
    version: "0.2.0",
    list: [
      [listTypes.text, "Թարմացվել է բոլոր կոճակների UI/UX-ը։"],
      [listTypes.text, "Ավելացվել է ամբողջ շաբաթվա դասացուցակը։"],
      [listTypes.text, "Ավելացվել են նոր թեմաներ։"],
      [listTypes.img, weekComponentImg],
      [listTypes.img, theme2Img],
    ],
  },
  {
    version: "0.1.0",
    list: [
      [listTypes.text, "Ստեղծվել է նախագծի հիմնական տեսքը։"],
      [listTypes.text, "Ավելացվել է թեմայի ընտրության ընտրացանկը։"],
      [listTypes.img, themeImg],
    ],
  },
];

export default updates;
