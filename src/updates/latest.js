const lastUpdateAt = "2026-11-24T20:32:27.510Z"

export const listTypes = {
  text: "text",
  img: "img",
};

const updates = {
  lastUpdateAt,
  versions: [
    {
      version: "1.22.0",
      list: [
        [listTypes.text, "Ինֆոյի էջը տեղափոխվել է «Ընդհանուր ինֆո» բաժին"],
        [listTypes.text, "«Ընդհանուր ինֆո» էջը բաժանվել է առանձին բաժինների"],
        [
          listTypes.text,
          "Ավելացվել է նոր էջ՝ անհատական աշխատանքի ռեսուրսների համար",
        ],
      ],
    },
    {
      version: "1.21.1",
      list: [
        [listTypes.text, "Միացված է ամանորյա թեման"],
        [listTypes.text, "Ավելացված է լույսեր"],
        [listTypes.text, "Ավելացված է ձյուն"],
        [listTypes.text, "Ավելացված է ձյունը անջատելու կարգավորում"],
        [listTypes.text, "Ավելացված է լույսեր անջատելու կարգավորում"],
      ],
    },
    {
      version: "1.21.0",
      list: [
        [listTypes.text, "Հեռացվել է թեմաները փոխելու հնարավորությունը։"],
        [listTypes.text, "Թարմացվել է մի քանի էլէմենտի ոճերը։"],
      ],
    },
  ],
};

export default updates;
