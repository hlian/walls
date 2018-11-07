let counter = 0;
export const messages = [
  {
    left: true,
    author: "Tim",
    texts: ["OK I think we need some new cookware", "Does anybody have any preferences"],
    id: counter++
  },
  {
    left: true,
    author: "Alex",
    texts: ["A stainless steel pot would be nice. our current one is disgusting"],
    id: counter++
  },
  {
    left: false,
    texts: ["OK how about this one. It was on Wirecutter", "https://www.amazon.com/dp/B00M6C4PIS"],
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
  },
  {
    left: false,
    author: "Hao",
    texts: ["We need spoons too", "...", "I'm sorry about what happened to the last spoon", "http://www.amazon.com/dp/B00C8H6EH6/"],
    id: counter++
  },
  {
    left: true,
    author: "Turner",
    texts: ["spoongate 2018", "about which nothing more will be mentioned"],
    id: counter++
  },
  {
    left: true,
    author: "Tim",
    texts: ["do we need anything else? about to put an order in"],
    id: counter++
  }
];

export const goods = [
  {
    id: counter++,
    name: "Tramontina 80116/567DS Stainless Steel Tri-Ply Clad Cookware Set, 12-Piece",
    quantity: 1,
    price: 250.42,
    img: "https://www.ceramiccookwarereviews.org/wp-content/uploads/tramontina-nonstick-cookware-set.jpg"
  },
  {
    id: counter++,
    img: "https://d1b5h9psu9yexj.cloudfront.net/05w-flatware-alessi-knifeforkspoon-630.jpg",
    name: "Alessi/Jasper Morrison Knifeforkspoon",
    quantity: 1,
    price: 53.39
  }
];

export const secret = {
  id: counter++,
  name: "Extra Long Professional Silicone Oven Mitt - 1 Pair - Oven Mitts with Quilted Liner - Red - Homwe",
  img: "https://d1b5h9psu9yexj.cloudfront.net/20732/Homwe-Extra-Long-Professional-Silicone-Oven-Mitt_20171027-005926_fullsize.jpg",
  quantity: 1,
  price: 11.97
};
