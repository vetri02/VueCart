var app = new Vue({
  el: "#app",
  data: {
    product: "Shoes",
    description: "A pair of warm, fuzzy socks",
    href: "www.google.com",
    image: "/src/vmSocks-green-onWhite.jpg",
    inStock: true,
    onSale: true,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green"
      },
      {
        variantId: 2235,
        variantColor: "blue"
      }
    ]
  }
});
