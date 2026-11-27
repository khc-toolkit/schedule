// constants
import ROUTES from "../constants/routes";

const lastUpdateAt = "2026-11-26T09:20:05.660Z";

export const listTypes = {
  text: "text",
  img: "img",
  link: "link",
};

const updates = {
  lastUpdateAt,
  versions: [
    {
      version: "1.23.0",
      list: [
        [listTypes.text, "Ծրագիրն անցել է միջոցառումների ռեժիմի"],
        [
          listTypes.text,
          "Բարելավվել է «Ընդհանուր ինֆո» և «Կարգավորումներ» էջերի UI/UX-ը",
        ],
        [
          listTypes.text,
          "Տվյալների էջում ավելացվել է չօգտագործվող տվյալները ջնջելու հնարավորություն",
        ],
      ],
    },

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
  ],
};

export default updates;
