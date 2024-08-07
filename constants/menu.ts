export type Item = {
  name: string;
  slug: string;
};

export const menus: { name: string; items: Item[] }[] = [
  {
    name: "메뉴이름 1",
    items: [
      { name: "하위메뉴1", slug: "/auth" },
      { name: "하위메뉴2", slug: "/auth" },
      { name: "하위메뉴3", slug: "/auth" },
      { name: "하위메뉴4", slug: "/auth" },
    ],
  },
  {
    name: "메뉴이름 2",
    items: [
      { name: "하위메뉴1", slug: "/auth" },
      { name: "하위메뉴2", slug: "/auth" },
      { name: "하위메뉴3", slug: "/auth" },
      { name: "하위메뉴4", slug: "/auth" },
      { name: "하위메뉴5", slug: "/auth" },
    ],
  },
  {
    name: "메뉴이름 3",
    items: [
      { name: "하위메뉴1", slug: "/auth" },
      { name: "하위메뉴2", slug: "/auth" },
      { name: "하위메뉴3", slug: "/auth" },
    ],
  },
  {
    name: "메뉴이름 4",
    items: [
      { name: "하위메뉴1", slug: "/auth" },
      { name: "하위메뉴2", slug: "/auth" },
      { name: "하위메뉴3", slug: "/auth" },
      { name: "하위메뉴4", slug: "/auth" },
      { name: "하위메뉴5", slug: "/auth" },
      { name: "하위메뉴6", slug: "/auth" },
    ],
  },
];
