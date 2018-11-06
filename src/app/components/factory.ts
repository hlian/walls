let counter = 0;
export const messages = [
  {
    left: true,
    author: "Tim",
    texts: [
      "OK I think we need some new cookware",
      "Does anybody have any preferences"
    ],
    id: counter++
  },
  {
    left: true,
    author: "Alex",
    texts: [
      "A stainless steel pot would be nice. our current one is disgusting"
    ],
    id: counter++
  },
  {
    left: false,
    texts: [
      "OK how about this one. It was on Wirecutter",
      "https://www.amazon.com/dp/B00M6C4PIS"
    ],
    author: "Hao",
    id: counter++
  },
  {
    left: true,
    author: "Giuseppe",
    texts: ["Sounds good", "I'll add it to our co.shop cart"],
    id: counter++
  },
  {
    left: true,
    author: "Turner",
    texts: ["great idea i love co.shop"],
    id: counter++
  },
  {
    left: true,
    author: "Alex",
    texts: ["Do you guys ever feel like you're in a tech demo"],
    id: counter++
  },
  {
    left: false,
    author: "Hao",
    texts: ["Lol what"],
    id: counter++
  },
  {
    left: true,
    author: "Alex",
    texts: ["nothing"],
    id: counter++
  }
];
