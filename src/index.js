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
        variantColor: "green",
        variantImage:
          "https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg"
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage:
          "https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg"
      }
    ],
    cart: 0
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    updateImage(image) {
      this.image = image;
    },
    removeFromCart() {
      this.cart = this.cart - 1;
      if (this.cart <= 0) {
        this.cart = 0;
      }
    }
  }
});
