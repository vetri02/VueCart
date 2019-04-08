Vue.component("product-details", {
  props: {
    details: {
      type: Array,
      required: true
    }
  },
  template: `<ul>
  <li v-for="detail in details">{{detail}}</li>
</ul>`
});

Vue.component("product", {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template: `<div class="product">
  <div class="product-image">
    <img v-bind:src="image" />
  </div>
  <div class="product-info">
    <div class="cart">
      Cart {{cart}}
    </div>
    <h1>
      {{title}}
      <span v-if="onSale" class="onSale">On Sale</span>
    </h1>
    <p>{{description}}</p>
    <p v-if="inStock">In Stock</p>
    <p v-else :style="{textDecoration: 'line-through'}">Out of Stock</p>
    <p>Shipping: {{shipping}}</p>
    <product-details :details="details"></product-details>

    <div
      class="color-box"
      v-for="(variant, index) in variants"
      :key="variant.variantId"
      :style="{backgroundColor: variant.variantColor}"
      @mouseover="updateProduct(index)"
    ></div>

    <button
      v-on:click="addToCart"
      :disabled="!inStock"
      :class="{disabledButton: !inStock}"
    >
      Add to cart
    </button>
    <button v-on:click="removeFromCart">Remove from cart</button>
  </div>
</div>`,
  data() {
    return {
      brand: "Vue Mastery",
      product: "Shoes",
      description: "A pair of warm, fuzzy socks",
      href: "www.google.com",
      selectedVariant: 0,
      details: ["80% cotton", "20% polyester", "Gender-neutral"],
      variants: [
        {
          variantId: 2234,
          variantColor: "green",
          variantImage:
            "https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg",
          variantQuantity: 100,
          onSale: true
        },
        {
          variantId: 2235,
          variantColor: "blue",
          variantImage:
            "https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg",
          variantQuantity: 0
        }
      ],
      cart: 0
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    updateProduct(index) {
      this.selectedVariant = index;
    },
    removeFromCart() {
      this.cart = this.cart - 1;
      if (this.cart <= 0) {
        this.cart = 0;
      }
    }
  },
  computed: {
    title() {
      return `${this.brand} ${this.product}`;
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity;
    },
    onSale() {
      return this.variants[this.selectedVariant].onSale;
    },
    shipping() {
      if (this.premium) {
        return "Free";
      } else {
        return "$2.99";
      }
    }
  }
});

var app = new Vue({
  el: "#app",
  data: {
    premium: false
  }
});
