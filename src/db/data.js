import { AiFillStar } from "react-icons/ai";

const data = [
  {
    img: "https://s3-alpha-sig.figma.com/img/24de/d5b7/0bfe6fb1b00601aa092b3a2431565ab8?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GV-gn21nddI0fhRAq4iz6lQEFGXCXT0UUkSG7mAh70wg4Fmh5G3Q4dJbYXNN4C8cbLbAElIMSqjjpyyTxru~KqR4nOajr1l0uMHMoRH-qw8mdcEy4qUIaPgAkNajyZMHTsfN6AvHXDUfK6WFPBOsw2CRRwJ3rmM~t18O5QtFf5wAcaEeRN2i3-CEnyAY5BXvdTgIdtmvytQmaGj0X396LA0QU5rGxGaY0K5vjFAWVzE7Vu2bQBUcWu2ZsA86VpxK8wLe5bJzVw8en~1O9pKlm4bBAKQQUCnfyU5TkoMsGzoPA-qe4dz1WdtIIKD7-9R8DJkSeuRunWNDu7xyj3nTtQ__",
    title: "Nike Air Monarch IV",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Nike",
    color: "white",
    category: "sneakers",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/060d/658c/b77bf58a139d6dfa3d0750b3abfea6b0?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WgI-Vydob945kBAK-yqfWsIlsoiqtFbznQ8LUQqxypDQ9pDaQiZACK~3GUKc0cOPxuk7A-6ehNPsrxr0Au9kjvk3~mEJ7yOoZufQhoYz52O2g-T7rCSn9lz0LtdFDxw69B7Iqomr60DIChU3E2Qkccu3HF4uML9X1S7qC-l5SP7XKAKrVC5ZixZ~aUipun2~99nUqFaCiY~5lz~CrAdvTUYgbKdjSSUMi2yAiqVDbNm3K5ON0m-cDBt6IQTJ4XNpGCnWMqVB4xV4EkbEOJGkUW0UU~s3dmnKHDIjcxb0~12F3IvxNtFozOwS2okwySb~XiOAD2OiSJHIWJqGBG9rKQ__",
    title: "Nike Air Vapormax Plus",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Nike",
    color: "red",
    category: "sneakers",
  },

  {
    img: "https://s3-alpha-sig.figma.com/img/1f05/2ec8/474c242763eb091c830e6d644b5c4146?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n1zeDjQT7zmtJlKoikgKUIoRefJdZBXzFuEtdKLvXdztlxTVS6kPPNhNay0~Cgwj4TCm08QYF~D1bir-7EbhORKVyF1JuQBfQzCyidGqPxaZ~b49kWcMEaSPbx2YJsm~wCC1oiDRXq-Lmkeb2lQoXlgghsBLzkVko~Tascr3DKkxjH1iwXMLzAUySmXPlW131DCbRxx9KoUL3H3hIdFBnx~xj1BDuOjdO5gmu1lMe99T3kDr1Qh2gqm28RqYjuJTqpCQ9Zf1qrh2CJKq3zaz74NrptzwjFYfT3~wOVzEGVRTQHiJS90lvLGw3Bd0rHbYS7eaF2K-tyU2J45iq7B3PA__",
    title: "Nike Waffle One",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Nike",
    color: "green",
    category: "sneakers",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/83e4/6d65/4cfac7091911ff82bc60e4986d2bc7d1?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SxcIeEeJg74HVaWXT9dURKBOkOg0GY8bZdPpRrH06DHvD2KSAZ896RR8H~ydvMROLyPKsadnZaslqG~OX9tUo8lDeM07BFauYJgrqrgCQYsPqI7ao3mlWKNxOm2I3qRLnQpXg85XlkaJ4U3z9qLO54~CtYzuVB6e0WpMAEs9na10rBhR9ty-AnSy0fKaSmr9Wc5ewYB~uLVMhGmqQp9oCbHdkDHeB1HQXMfM8fOK4EBn3~eF4XSpPLW4TPZxxByDC-ngsS3Ca526DuJCgY9IaFFBZU3cblSz2OgIIzdZr20GaCG~Ylh6T~Hb9rgvFFt6sWzSBj1HGWRMSXu32ynUbg__",
    title: "Nike Running ",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Adidas",
    color: "black",
    category: "sneakers",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/5b38/f9e3/8c76e38437010641e6314a98d51d33ed?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FTRwI4oawPO2kwKej1F28-topjYsRXFy1LWN-ohNy9eW~K-yLW4sTjtUZPvzfRIkoCtn9YMJfzt9rHnSLSrZIX8GCLR2HGBeFJjDjtQvsgZLBWvoHlUVvr~ctbTh8qQBpZza6JjCBTEGJmv0kMJqC245yQJ268KYoN~3ONyhTpHdSDv-yMyO1DHigHf3RVx5exT~g8GzdlByNWbgjrJRadTb5Yq19RVU2sD-k3hdQxizt2EL0cTsHfNIq5caFGY7GN70Z1~5iRfRinSlApzrObLGE9FAWQeE6CWVgQCk8UHSHb2ddYDLbxkQhYwZw23PH7NhEX7S0elxB7EWT3QxEQ__",
    title: "Flat Slip On Pumps",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Vans",
    color: "green",
    category: "flats",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/ecd8/5589/aa6e43d509e4554b4571e18368f33130?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nYm2XOnUs9CLr0-FJ608yGFm8WPGy9TpaaQGmURY4vBOzWvCRDV9SlDpGeUhg~XJ-OjaWcvIOwsQYgEgqiyLfRYIa7bJQ3ejrc4pg0jX5KOQ~Ez75wl0LO7m1mu7foVhiZL6mwki789A~3dx8S9Jnjq~DlXbH9FvZ6MHVL0rlEIF-hOvs2O17UsYPswdodfEzFpLIa1615LpZgl7BfGWThamjSW0COjr-HhmAabrL-2he5CophTG~9NQixn4Jct68mqcFZmGP1Oc4borL5t29ZSwc73BSR4rGH-6Mj75nNjwQL32Z5Nf8UrB1oFyvXnVPlW-ZbJdKkAv2q~~ZcWShA__",
    title: "Knit Ballet Flat",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "50",
    company: "Adidas",
    color: "black",
    category: "flats",
  },

  {
    img: "https://s3-alpha-sig.figma.com/img/ae5b/98e2/602bfd3b9e84759a3e7bebf51fc153c4?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D-GvqnUUz0wzLM2gDJwM1O-8blwnRFo3asfvSd~kIl7qCqDhM3pey41sJsGqNjL3sgDwY8YoPMyoEebs4UMmE7V0a~BaEz3YkRzELy4hUrvy~shE7s87RLMz7PXylvNDYKbtGiMVBdqXftRXmsZxqMkU~WhhEsi0~bldv-azzjGM~DiyS8H0-KovCQ3o8lTukZkX0bOLN6FIQY5HL4g7WVvmsyQTbSWvoLpgsHtHWKXFHlQGnbAZPFhi2z6JGBEE7Yd4r9ZTN9aZEaxvb5Mk~uQ57ZLD3HJu04T1sHfO~dXXjL3wMMqXtPugf51KVEfQwGSJOPhYjusQlKp5~HeGYw__",
    title: "Loafer Flats",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "50",
    company: "Vans",
    color: "white",
    category: "flats",
  },

  {
    img: "https://s3-alpha-sig.figma.com/img/2faf/4d5d/439325b3aa48e51703ab8fd15648b859?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hLQqXeTksCreqisQqa17fctBLwcsGXnqXaWP4LUpxaQ48Z8EkvxbcohLK55rpi81ySQt~CAb2iYe2Bd09LphT1brlrQRq~AtgQHmmMXeIDSFokq5NYppFt7TRZCNouZopSZktspkBheplxo1kOfyhEZmuh7HwkTbQ2b8-BoUKcxRBmLrt8sBbaOMwxYL-1PmX1M~Ypfa0WgUxJMveqGdAfnjbhouCjMbca1iZufsMxDzxmXfJDCuW2eZAYzYxGxzAnjOamL1PHLronRNyfnGkjgJ7TZYTvjzuzeaCLqhvvD0zb~EGlhtTHLPz4oBPMH-cyk50nYKvwoVGq~h60AtzQ__",
    title: "Nike Zoom Freak",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Nike",
    color: "green",
    category: "sneakers",
  },


  {
    img: "https://s3-alpha-sig.figma.com/img/24de/d5b7/0bfe6fb1b00601aa092b3a2431565ab8?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GV-gn21nddI0fhRAq4iz6lQEFGXCXT0UUkSG7mAh70wg4Fmh5G3Q4dJbYXNN4C8cbLbAElIMSqjjpyyTxru~KqR4nOajr1l0uMHMoRH-qw8mdcEy4qUIaPgAkNajyZMHTsfN6AvHXDUfK6WFPBOsw2CRRwJ3rmM~t18O5QtFf5wAcaEeRN2i3-CEnyAY5BXvdTgIdtmvytQmaGj0X396LA0QU5rGxGaY0K5vjFAWVzE7Vu2bQBUcWu2ZsA86VpxK8wLe5bJzVw8en~1O9pKlm4bBAKQQUCnfyU5TkoMsGzoPA-qe4dz1WdtIIKD7-9R8DJkSeuRunWNDu7xyj3nTtQ__",
    title: "Nike Air Monarch IV",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Nike",
    color: "white",
    category: "sneakers",
  },{
    img: "https://s3-alpha-sig.figma.com/img/24de/d5b7/0bfe6fb1b00601aa092b3a2431565ab8?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GV-gn21nddI0fhRAq4iz6lQEFGXCXT0UUkSG7mAh70wg4Fmh5G3Q4dJbYXNN4C8cbLbAElIMSqjjpyyTxru~KqR4nOajr1l0uMHMoRH-qw8mdcEy4qUIaPgAkNajyZMHTsfN6AvHXDUfK6WFPBOsw2CRRwJ3rmM~t18O5QtFf5wAcaEeRN2i3-CEnyAY5BXvdTgIdtmvytQmaGj0X396LA0QU5rGxGaY0K5vjFAWVzE7Vu2bQBUcWu2ZsA86VpxK8wLe5bJzVw8en~1O9pKlm4bBAKQQUCnfyU5TkoMsGzoPA-qe4dz1WdtIIKD7-9R8DJkSeuRunWNDu7xyj3nTtQ__",
    title: "Nike Air Monarch IV",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Nike",
    color: "white",
    category: "sneakers",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/24de/d5b7/0bfe6fb1b00601aa092b3a2431565ab8?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GV-gn21nddI0fhRAq4iz6lQEFGXCXT0UUkSG7mAh70wg4Fmh5G3Q4dJbYXNN4C8cbLbAElIMSqjjpyyTxru~KqR4nOajr1l0uMHMoRH-qw8mdcEy4qUIaPgAkNajyZMHTsfN6AvHXDUfK6WFPBOsw2CRRwJ3rmM~t18O5QtFf5wAcaEeRN2i3-CEnyAY5BXvdTgIdtmvytQmaGj0X396LA0QU5rGxGaY0K5vjFAWVzE7Vu2bQBUcWu2ZsA86VpxK8wLe5bJzVw8en~1O9pKlm4bBAKQQUCnfyU5TkoMsGzoPA-qe4dz1WdtIIKD7-9R8DJkSeuRunWNDu7xyj3nTtQ__",
    title: "Nike ",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Nike",
    color: "white",
    category: "sneakers",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/2faf/4d5d/439325b3aa48e51703ab8fd15648b859?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hLQqXeTksCreqisQqa17fctBLwcsGXnqXaWP4LUpxaQ48Z8EkvxbcohLK55rpi81ySQt~CAb2iYe2Bd09LphT1brlrQRq~AtgQHmmMXeIDSFokq5NYppFt7TRZCNouZopSZktspkBheplxo1kOfyhEZmuh7HwkTbQ2b8-BoUKcxRBmLrt8sBbaOMwxYL-1PmX1M~Ypfa0WgUxJMveqGdAfnjbhouCjMbca1iZufsMxDzxmXfJDCuW2eZAYzYxGxzAnjOamL1PHLronRNyfnGkjgJ7TZYTvjzuzeaCLqhvvD0zb~EGlhtTHLPz4oBPMH-cyk50nYKvwoVGq~h60AtzQ__",
    title: "Nike Zoom Freak",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Nike",
    color: "green",
    category: "sneakers",
  },

  {
    img: "https://s3-alpha-sig.figma.com/img/24de/d5b7/0bfe6fb1b00601aa092b3a2431565ab8?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GV-gn21nddI0fhRAq4iz6lQEFGXCXT0UUkSG7mAh70wg4Fmh5G3Q4dJbYXNN4C8cbLbAElIMSqjjpyyTxru~KqR4nOajr1l0uMHMoRH-qw8mdcEy4qUIaPgAkNajyZMHTsfN6AvHXDUfK6WFPBOsw2CRRwJ3rmM~t18O5QtFf5wAcaEeRN2i3-CEnyAY5BXvdTgIdtmvytQmaGj0X396LA0QU5rGxGaY0K5vjFAWVzE7Vu2bQBUcWu2ZsA86VpxK8wLe5bJzVw8en~1O9pKlm4bBAKQQUCnfyU5TkoMsGzoPA-qe4dz1WdtIIKD7-9R8DJkSeuRunWNDu7xyj3nTtQ__",
    title: "Nike Air Monarch IV",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Nike",
    color: "white",
    category: "sneakers",
  },
 
  {
    img: "https://s3-alpha-sig.figma.com/img/2faf/4d5d/439325b3aa48e51703ab8fd15648b859?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hLQqXeTksCreqisQqa17fctBLwcsGXnqXaWP4LUpxaQ48Z8EkvxbcohLK55rpi81ySQt~CAb2iYe2Bd09LphT1brlrQRq~AtgQHmmMXeIDSFokq5NYppFt7TRZCNouZopSZktspkBheplxo1kOfyhEZmuh7HwkTbQ2b8-BoUKcxRBmLrt8sBbaOMwxYL-1PmX1M~Ypfa0WgUxJMveqGdAfnjbhouCjMbca1iZufsMxDzxmXfJDCuW2eZAYzYxGxzAnjOamL1PHLronRNyfnGkjgJ7TZYTvjzuzeaCLqhvvD0zb~EGlhtTHLPz4oBPMH-cyk50nYKvwoVGq~h60AtzQ__",
    title: "Nike Zoom Freak",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Nike",
    color: "green",
    category: "sneakers",
  },
  
];

export default data;
