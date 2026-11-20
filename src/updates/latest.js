const lastUpdateAt = "2026-11-19T06:20:54.144Z";

export const listTypes = {
  text: "text",
  img: "img",
};

const updates = {
  lastUpdateAt,
  versions: [
    {
      version: "1.21.1",
      list: [[listTypes.text, "Միացված է ամանորյա թեման"]],
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
