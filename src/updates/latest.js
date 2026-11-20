const lastUpdateAt = "2026-11-20T08:12:43.339Z"

export const listTypes = {
  text: "text",
  img: "img",
};

const updates = {
  lastUpdateAt,
  versions: [
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
    {
      version: "1.20.0",
      list: [
        [listTypes.text, "Դասի քարտում ավելացվել են պատկերակներ։"],
        [listTypes.text, "Ավելացվել է պատկերակներն անջատելու կարգավորում։"],
        [listTypes.text, "Ավելացվել է «Ընդհանուր տեղեկություն» էջը։"],
      ],
    },
  ],
};

export default updates;
