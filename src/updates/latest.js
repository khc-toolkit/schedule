// constants
import ROUTES from "../constants/routes";

const lastUpdateAt = "2026-11-26T09:02:52.169Z"

export const listTypes = {
  text: "text",
  img: "img",
  link: "link",
};

const updates = {
  lastUpdateAt,
  versions: [
    {
      version: "1.22.1",
      list: [
        [
          listTypes.text,
          "Ավելացվել է անհատական աշխատանքների համար նախատեսված էջ",
        ],
        [listTypes.link, [ROUTES.TASKS, "Բացել էջը"]],
      ],
    },
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
  ],
};

export default updates;
