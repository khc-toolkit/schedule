// images
import themeFrost from "../assets/img/updates/theme-frost.png";

const lastUpdateAt = "2026-11-16T08:15:16.996Z"

export const listTypes = {
  text: "text",
  img: "img",
};

const updates = {
  lastUpdateAt,
  versions: [
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
    {
      version: "1.19.2",
      list: [
        [listTypes.text, "Ավելացվել է Frost նոր թեման։"],
        [listTypes.img, themeFrost],
      ],
    },
  ],
};

export default updates;
