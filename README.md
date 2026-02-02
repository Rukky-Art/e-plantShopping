# 🌿 Paradise Nursery

A simple React + Redux shopping cart application for an online plant store. Users can browse plants by category, add them to a cart, update quantities, remove items, and see real-time price calculations.

---

## 🚀 Features

* Browse plants grouped by categories
* Add plants to cart
* Prevent duplicate cart items (quantity increases instead)
* Increment / decrement item quantity
* Remove items from cart
* Automatically remove item when quantity reaches zero
* Real-time updates for:

  * Item quantity
  * Item subtotal
  * Total cart amount
  * Total cart item count (cart icon)
* Smooth navigation between Products and Cart

---

## 🧠 Tech Stack

* **React** – UI rendering
* **Redux Toolkit** – Global state management
* **React Redux** – Connecting React to Redux
* **CSS** – Styling

---

## 📁 Project Structure

```
src/
│── components/
│   ├── ProductList.jsx
│   ├── CartItem.jsx
│   ├── CartSlice.jsx
│   ├── ProductList.css
│   └── CartItem.css
│
│── store/
│   └── store.js
│
│── App.jsx
│── index.js
```

---

## 🛒 Redux Cart Logic

### Cart State Shape

```js
{
  cart: {
    items: [
      {
        name: "Snake Plant",
        image: "...",
        cost: "$15",
        quantity: 2
      }
    ]
  }
}
```

---

## ⚙️ Redux Actions

### `addItem`

* Adds a new item to the cart
* If item already exists, increments its quantity

### `updateQuantity`

* Updates quantity of a specific item

### `removeItem`

* Removes an item completely from the cart

---

## 🧮 Calculations

### Total Cart Amount

* Uses `Array.reduce()` to sum all item subtotals

```js
total += price * quantity
```

### Item Subtotal

* Cost string converted using `parseFloat(item.cost.substring(1))`

---

## 🔁 Component Communication

* `ProductList` owns navigation state (`showCart`)
* `CartItem` receives callback via props
* Child components trigger parent state updates using function props

---

## 🛍️ User Flow

1. User views plant categories
2. Clicks **Add to Cart**
3. Cart icon updates quantity count
4. User opens cart
5. Adjusts quantities or removes items
6. Cart totals update instantly
7. Clicks **Continue Shopping** to return to products

---

## 📌 Key React Concepts Used

* `useState`
* `useSelector`
* `useDispatch`
* Props drilling
* Event handling
* Conditional rendering
* Immutable state updates

---

## 🧪 Possible Improvements

* Add unique IDs for cart items
* Persist cart with localStorage
* Disable "Add to Cart" button once added
* Improve mobile responsiveness
* Add checkout flow

---


## 👤 Author

**ART**
Akorede Rukayat Toluwanimi

Front-End Developer | React & Redux Enthusiast

---

## 📄 License

This project is for learning and demonstration purposes.

Happy coding 🌱
