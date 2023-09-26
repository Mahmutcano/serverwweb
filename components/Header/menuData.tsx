import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Anasayfa",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Hakkımızda",
    path: "/about",
    newTab: false,
  },
  // {
  //   id: 33,
  //   title: "Blog",
  //   path: "/blog",
  //   newTab: false,
  // },
  // {
  //   id: 3,
  //   title: "Support",
  //   path: "/contact",
  //   newTab: false,
  // },
  {
    "id": 3,
    "title": "Faliyetlerimiz",
    "newTab": false,
    "submenu": [
      {
        "id": 41,
        "title": "Ceza Hukuku",
        "path": "/ceza",
        "newTab": false
      },
      {
        "id": 42,
        "title": "Aile Hukuku",
        "path": "/aile",
        "newTab": false
      },
      {
        "id": 43,
        "title": "Ticaret Hukuku",
        "path": "/ticaret",
        "newTab": false
      },
      {
        "id": 44,
        "title": "Gayrimenkul Hukuku",
        "path": "/gayrimenkul",
        "newTab": false
      },
      {
        "id": 45,
        "title": "İş Hukuku",
        "path": "/is",
        "newTab": false
      },
      {
        "id": 46,
        "title": "Fikri Mülkiyet Hukuku",
        "path": "/fikri",
        "newTab": false
      },
      {
        "id": 47,
        "title": "Miras Hukuku",
        "path": "/miras",
        "newTab": false
      },
    ]
  }
  
];
export default menuData;
