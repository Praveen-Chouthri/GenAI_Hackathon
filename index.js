const { useState, useEffect, useRef } = React;

const initialProducts = [
  {
    id: "product1",
    name: "Nike Structure 26 Shoes",
    desc: [
      "Weight: 321g approx. (men's size 9)",
      "Heel-to-toe drop: 10mm",
      "Design details: Reflective",
      "Usage: Not intended for use as personal protective equipment (PPE)",
      "Colour Shown: Total Orange",
      "Style: HJ1102-800",
      "Country/Region of Origin: Indonesia"
    ],
    cart_desc: "Men's running shoes with responsive cushioning and a stable ride.",
    price: ["200"],
    image: "images/shoes.png",
    tags: ["New", "Popular"]
  },
  {
    id: "product2",
    name: "Black Customized - NY Sports Cap",
    desc: [
      "Fit: Adjustable snapback closure",
      "Material: 100% Cotton twill",
      "Design details: Embroidered NY logo, curved brim",
      "Usage: Ideal for casual wear and light outdoor activity",
      "Colour Shown: Jet Black",
      "Style: NYCAP-BLK-CST",
      "Country/Region of Origin: Bangladesh"
    ],
    cart_desc: "A cool hat for fiery sports.",
    price: ["190"],
    image: "images/hat.png",
    tags: ["Sale"]
  },
  {
    id: "product3",
    name: "Titan 1713BM02 Analog Watch",
    desc: [
      "Case Diameter: 38mm",
      "Strap Material: Stainless steel, dual-tone",
      "Design details: Roman numeral markers, mineral glass",
      "Movement: Quartz analog",
      "Water Resistance: 50 metres",
      "Colour Shown: Silver-Gold",
      "Style: 1713BM02",
      "Country/Region of Origin: India"
    ],
    cart_desc: "Classic wrist watch for all occasions.",
    price: ["1,000"],
    image: "images/watch.png",
    tags: ["Trending"]
  },
  {
    id: "product4",
    name: "Daredevil Backpack 45 L_Blue",
    desc: [
      "Capacity: 45 Litres",
      "Material: Water-resistant polyester",
      "Design details: Padded shoulder straps, ventilated back panel",
      "Compartments: 3 main, 2 side mesh",
      "Usage: Suitable for hiking, school, or travel",
      "Colour Shown: Navy Blue",
      "Style: DD-BP45L-BLUE",
      "Country/Region of Origin: Vietnam"
    ],
    cart_desc: "Spacious backpack for travel and daily use.",
    price: ["699"],
    image: "images/backpack.png",
    tags: ["New"]
  },
  {
    id: "product5",
    name: "Ray-Ban UV Protected Grey Lens Sunglasses",
    desc: [
      "Frame Material: Acetate",
      "Lens Features: UV400 protection, gradient tint",
      "Fit: Standard fit, unisex design",
      "Colour Shown: Black frame with Grey lenses",
      "Style: RB2132-601/8G",
      "Country/Region of Origin: Italy"
    ],
    cart_desc: "Stylish sunglasses with UV protection.",
    price: ["399"],
    image: "images/sunglasses.png",
    tags: ["Popular"]
  },
  {
    id: "product6",
    name: "CODE with Black T-Shirt",
    desc: [
      "Material: 100% Cotton, 180 GSM",
      "Fit: Regular fit",
      "Design details: \"CODE\" printed across chest",
      "Usage: Everyday casual wear",
      "Colour Shown: Pure Black",
      "Style: CODE-TSHIRT-BLK",
      "Country/Region of Origin: India"
    ],
    cart_desc: "Comfortable cotton t-shirt.",
    price: ["259"],
    image: "images/t-shirt.png",
    tags: ["Sale"]
  },
  {
    id: "product7",
    name: "HP Spectre x360 Laptop",
    desc: [
      "Display: 13.5-inch diagonal, 2880 x 1920 resolution, 120Hz refresh rate",
      "Processor: Intel Core i7-1260P",
      "Memory: 16GB LPDDR5",
      "Storage: 1TB SSD",
      "Graphics: Intel Iris Xe Graphics",
      "Battery: Up to 18 hours",
      "Colour Shown: Silver",
      "Style: Spectre-x360-13.5",
      "Country/Region of Origin: China"
    ],
    cart_desc: "Powerful laptop for work and play.",
    price: ["89,999"],
    image: "images/laptop.png",
    tags: ["Trending"]
  },
  {
    id: "product8",
    name: "Samsung Galaxy S25 Ultra Smartphone",
    desc: [
      "Display: 6.8-inch Dynamic AMOLED 2X, 1440 x 3200 resolution",
      "Processor: Qualcomm Snapdragon 8 Gen 3",
      "Memory: 12GB LPDDR5X",
      "Storage: 512GB UFS 4.0",
      "Camera: 200MP main, 10MP telephoto, 10MP ultrawide",
      "Battery: 5000mAh, 45W fast charging",
      "Colour Shown: Phantom Black",
      "Style: SM-S928U"
    ],
    cart_desc: "Feature-rich smartphone with great camera.",
    price: ["6,999"],
    image: "images/smartphone.png",
    tags: ["New"]
  },
  {
    id: "product9",
    name: "Canon EOS 5D Mark IV DSLR Camera",
    desc: [
      "Sensor: 30.4MP full-frame CMOS sensor",
      "Lens: EF 24-105mm f/4L IS II USM",
      "Video: 4K UHD at 30p, 1080p Full HD at 60p",
      "Features: Dual Pixel CMOS AF, 45-point autofocus system",
      "Colour Shown: Black",
      "Style: 5D-MK4-BODY",
      "Country/Region of Origin: Japan"
    ],
    cart_desc: "DSLR camera for stunning photos.",
    price: ["49,999"],
    image: "images/camera.png",
    tags: ["Popular"],
    imageFit: "contain"
  },
  {
    id: "product10",
    name: "boAt Rockerz 650 Pro Headphones",
    desc: [
      "Driver Size: 40mm",
      "Frequency Response: 20Hz-20kHz",
      "Impedance: 32 Ohms",
      "Sensitivity: 105dB",
      "Colour Shown: Black",
      "Style: Rockerz-650Pro",
      "Country/Region of Origin: India"
    ],
    cart_desc: "Wireless headphones with noise cancellation.",
    price: ["1,499"],
    image: "images/headphones.png",
    tags: ["Sale"]
  },
  // New sample product 1
  {
    id: "product11",
    name: "Brown Time Designer Ceramic Coffee Mug ",
    desc: [
      "Capacity: 350 ml",
      "Material: High-quality ceramic",
      "Design details: Glossy finish, ergonomic handle",
      "Microwave Safe: Yes",
      "Usage: Ideal for hot beverages",
      "Colour Shown: Rich Chocolate Brown",
      "Style: TD-MUG-CR-BRN",
      "Country/Region of Origin: India"
    ]
    ,
    cart_desc: "Ceramic mug for hot and cold drinks.",
    price: ["149"],
    image: "images/coffee-mug.png",
    tags: ["Gift", "Popular"]
  },
  // New sample product 2
  {
    id: "product12",
    name: "BoAt Stone 358 Pro Bluetooth Speaker",
    desc: [
      "Output: 20W RMS",
      "Battery Life: Up to 12 hours playback",
      "Design details: IPX7 waterproof, rugged build",
      "Connectivity: Bluetooth v5.0, AUX, TF card",
      "Charging: Type-C fast charging",
      "Colour Shown: Charcoal Black",
      "Style: Stone-358Pro",
      "Country/Region of Origin: China"
    ],
    cart_desc: "Portable Bluetooth speaker with deep bass.",
    price: ["2,499"],
    image: "images/bluetooth-speaker.png",
    tags: ["Trending", "New"],
    
  },
];

// useLocalStorage hook: always sync cart to localStorage and load from it
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue]);
  return [storedValue, setStoredValue];
}

function ProductCard({ product, onClick }) {
  return (
    <div className="col-12 col-md-6 col-lg-4 d-flex align-items-stretch mb-4">
      <div
        className="card shadow-sm h-100 w-100 animate__animated animate__fadeInUp d-flex flex-column"
        style={{ cursor: "pointer" }}
        onClick={onClick}
      >
        <img src={product.image} className="card-img-top" alt={product.name} style={{ height: 180, objectFit: 'cover' }} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{product.name}</h5>
          <div className="mb-2">
            {product.tags && product.tags.map(tag => (
              <span key={tag} className="badge bg-primary me-1">{tag}</span>
            ))}
          </div>
          {/* Description hidden on home page */}
          <div className="d-flex justify-content-between align-items-center mt-2">
            <span className="fw-bold">₹{product.price}</span>
            <button className="btn btn-outline-primary btn-sm" onClick={e => { e.stopPropagation(); onClick(); }}>View</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductList({ products, onSelect, search, setSearch }) {
  return (
    <div className="container-fluid py-4 px-4">
      <div className="row mb-4">
        <div className="col-12 col-md-8 mx-auto">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search products..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="row g-4">
        {products.length === 0 ? (
          <div className="col-12 text-center text-muted animate__animated animate__fadeIn">
            <p>No products found.</p>
          </div>
        ) : (
          products.map(product => (
            <ProductCard key={product.id} product={product} onClick={() => onSelect(product)} />
          ))
        )}
      </div>
    </div>
  );
}

function ProductDetail({ product, onAddToCart, onClose }) {
  const [closing, setClosing] = React.useState(false);
  const [imgFit, setImgFit] = React.useState('cover');
  const imgContainerRef = React.useRef(null);
  function handleImgLoad(e) {
    const img = e.target;
    const container = imgContainerRef.current;
    if (!img || !container) return;
    const imgRatio = img.naturalWidth / img.naturalHeight;
    const contRatio = container.offsetWidth / container.offsetHeight;
    // If aspect ratios differ a lot, use contain
    if (imgRatio / contRatio > 1.35 || contRatio / imgRatio > 1.35) {
      setImgFit('contain');
    } else {
      setImgFit('cover');
    }
  }
  React.useEffect(() => {
    setImgFit('cover');
  }, [product]);
  if (!product) return null;
  // Handler for overlay click
  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) handleClose();
  }
  function handleClose() {
    setClosing(true);
    setTimeout(() => {
      setClosing(false);
      onClose();
    }, 300); // match animation duration
  }
  // Use product.imageFit if present, else use smart logic
  const objectFit = product.imageFit || imgFit;
  return (
    <div
      className={`fixed inset-0 z-[5000] flex items-center justify-center animate__animated ${closing ? 'animate__zoomOut animate__faster' : 'animate__zoomIn animate__faster'}`}
      style={{ background: 'rgba(0,0,0,0.12)' }}
      onClick={handleOverlayClick}
    >
      <div
        className={`relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-2 max-h-[90vh] h-[70vh] flex flex-col p-0 animate__animated ${closing ? 'animate__zoomOut animate__faster' : 'animate__zoomIn animate__faster'}`}
        onClick={e => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-gray-400 text-2xl focus:outline-none z-10 close-btn"
          onClick={handleClose}
          aria-label="Close product detail"
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <div className="flex flex-row h-full" style={{ height: '100%' }}>
          {/* Image on the left - fill left side, visually rich */}
          <div ref={imgContainerRef} className="flex flex-col items-center justify-center p-0 w-1/2 min-w-[200px] max-w-[360px] h-full" style={{ height: '100%' }}>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full rounded-l-2xl border-0"
              style={{ height: '100%', width: '100%', objectFit, display: 'block' }}
              onLoad={handleImgLoad}
            />
          </div>
          {/* Details on the right */}
          <div className="flex flex-col flex-1 p-6 pt-4 pb-0 h-full relative">
            <h2 className="font-extrabold text-2xl mb-2 text-gray-900">{product.name}</h2>
            <div className="text-gray-700 text-sm pr-2 mb-4">
              {Array.isArray(product.desc) ? (
                <ul className="list-disc pl-5">
                  {product.desc.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              ) : (
                <span>{product.desc || 'No description available.'}</span>
              )}
            </div>
            <div style={{ height: 20 }} />
            <div className="w-full flex justify-center items-center pb-6 pt-2">
              <button
                className="btn btn-success btn-lg w-3/4 max-w-xs font-bold py-3 rounded-full shadow-lg animate__animated animate__pulse animate__infinite"
                onClick={() => { onAddToCart(product); onClose(); }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// OrderSuccessModal: GPay-style animated success popup
function OrderSuccessModal({ onDone }) {
  React.useEffect(() => {
    const timer = setTimeout(onDone, 2000);
    return () => clearTimeout(timer);
  }, [onDone]);
  // Generate confetti pieces
  const confetti = Array.from({ length: 18 }).map((_, i) => {
    const left = Math.random() * 80 + 10;
    const delay = Math.random() * 0.5;
    const color = [
      '#FFD700', '#FF69B4', '#00CFFF', '#52FF90', '#FF6B00', '#A259FF', '#FF3B30', '#34C759', '#FF9500'
    ][i % 9];
    return (
      <div
        key={i}
        className="order-confetti"
        style={{
          left: `${left}%`,
          background: color,
          animationDelay: `${delay}s`,
        }}
      />
    );
  });
  return (
    <div className="fixed inset-0 z-[6000] flex items-center justify-center animate__animated animate__fadeIn" style={{ background: 'rgba(0,0,0,0.18)' }}>
      <div className="relative bg-white rounded-2xl shadow-2xl flex flex-col items-center justify-center p-8 min-w-[320px] min-h-[260px] max-w-xs animate__animated animate__zoomIn animate__faster" style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.18)' }}>
        {/* Confetti */}
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 2 }}>{confetti}</div>
        {/* Tick with 3D rotation */}
        <div className="flex items-center justify-center mb-4" style={{ zIndex: 3 }}>
          <svg className="order-tick" width="72" height="72" viewBox="0 0 72 72" fill="none">
            <circle cx="36" cy="36" r="36" fill="#34C759" />
            <path d="M22 38.5L32.5 49L50 31.5" stroke="#fff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="text-center text-xl font-bold text-gray-800" style={{ zIndex: 3 }}>
          Your order has been confirmed
        </div>
      </div>
    </div>
  );
}

function CartIcon({ count, onClick }) {
  return (
    <div
      className="cart-icon-fixed"
      style={{ position: 'fixed', top: '1rem', right: '2rem', zIndex: 3000 }}
    >
      <button
        className="btn btn-lg position-relative shadow d-flex align-items-center justify-content-center p-0"
        style={{ borderRadius: '50%', width: 64, height: 64, minWidth: 64, minHeight: 64, background: '#fff' }}
        onClick={onClick}
        aria-label="View cart"
      >
        <img src="images/cart-icon.png" alt="Cart" style={{ width: 64, height: 64, objectFit: 'contain', display: 'block', borderRadius: '50%' }} />
        {count > 0 && (
          <span
            className="position-absolute bg-danger d-flex align-items-center justify-content-center"
            style={{
              top: 6,
              right: 6,
              width: 28,
              height: 28,
              borderRadius: '50%',
              color: '#fff',
              fontWeight: 700,
              fontSize: 15,
              boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
              border: '2px solid #fff',
              zIndex: 2,
              padding: 0,
              transform: 'translate(30%, -30%)',
            }}
          >
            {count}
          </span>
        )}
      </button>
    </div>
  );
}

function HeroHeader({ visible }) {
  return (
    <header
      className={`bg-dark text-white py-5 mb-4 shadow animate__animated ${visible ? 'header-visible' : 'header-hidden'}`}
      style={{ width: '100%', position: 'relative', zIndex: 1000 }}
    >
      <div className="container-fluid text-center px-0">
        <h1 className="display-4 fw-bold mb-2">GenAI Shop</h1>
        <p className="lead mb-0">Discover, shop, and enjoy the best products at a site made just with prompts.</p>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-auto animate__animated animate__fadeInUp" style={{ width: '100%' }}>
      <div>© {new Date().getFullYear()} GenAI Shop. All rights reserved.</div>
    </footer>
  );
}

// Restore previous CartModal design, but keep OrderSuccessModal and checkout logic
function CartModal({ cart, onClose, setCart, onOrderSuccess }) {
  const [closing, setClosing] = React.useState(false);
  // Calculate subtotal
  const subtotal = cart.reduce((sum, item) => {
    const priceNum = Number(String(item.price).replace(/,/g, ''));
    return sum + priceNum * item.count;
  }, 0);
  // Shipping: free if subtotal > 500, else 5% of subtotal
  const shipping = subtotal > 500 ? 0 : Math.round(subtotal * 0.05 * 100) / 100;
  // Sales tax: 10%
  const salesTax = Math.round(subtotal * 0.10 * 100) / 100;
  const grandTotal = Math.round((subtotal + shipping + salesTax) * 100) / 100;

  // Handlers
  const handleQuantity = (idx, delta) => {
    setCart(prev => {
      const updated = [...prev];
      updated[idx].count = Math.max(1, updated[idx].count + delta);
      return updated;
    });
  };
  const handleRemove = idx => {
    setCart(prev => prev.filter((_, i) => i !== idx));
  };

  // Handler for overlay click
  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) handleClose();
  }
  function handleClose() {
    setClosing(true);
    setTimeout(() => {
      setClosing(false);
      onClose();
    }, 300);
  }
  function handleCheckout() {
    if (onOrderSuccess) onOrderSuccess();
  }
  // If cart is empty, show only a centered message
  if (cart.length === 0) {
    return (
      <div
        className={`fixed inset-0 z-[5000] flex items-center justify-center animate__animated ${closing ? 'animate__zoomOut animate__faster' : 'animate__zoomIn animate__faster'}`}
        style={{ background: 'rgba(0,0,0,0.12)' }}
        onClick={handleOverlayClick}
      >
        <div
          className={`relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl mx-2 max-h-[90vh] overflow-y-auto p-6 flex flex-col items-center justify-center min-h-[300px] animate__animated ${closing ? 'animate__zoomOut animate__faster' : 'animate__zoomIn animate__faster'}`}
          onClick={e => e.stopPropagation()}
        >
          <button
            className="absolute top-4 right-4 text-gray-400 text-2xl focus:outline-none close-btn"
            onClick={handleClose}
            aria-label="Close cart"
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <div className="flex flex-col items-center justify-center h-full w-full">
            <i className="fas fa-shopping-cart text-5xl text-gray-300 mb-4"></i>
            <h2 className="text-xl font-bold text-gray-700 mb-2">Your cart is empty.</h2>
            <p className="text-gray-500">Looks like you haven't added anything yet.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`fixed inset-0 z-[5000] flex items-center justify-center animate__animated ${closing ? 'animate__zoomOut animate__faster' : 'animate__zoomIn animate__faster'}`}
      style={{ background: 'rgba(0,0,0,0.12)' }}
      onClick={handleOverlayClick}
    >
      <div
        className={`relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl mx-2 max-h-[90vh] overflow-y-auto p-6 animate__animated ${closing ? 'animate__zoomOut animate__faster' : 'animate__zoomIn animate__faster'}`}
        onClick={e => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-gray-400 text-2xl focus:outline-none close-btn"
          onClick={handleClose}
          aria-label="Close cart"
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <main className="max-w-6xl mx-auto">
          <h1 className="text-center font-extrabold text-xl mb-8">
            Your Cart ({cart.reduce((sum, item) => sum + item.count, 0)} items)
          </h1>
          <section className="w-full">
            <div className="grid grid-cols-12 gap-4 border-b border-gray-300 pb-2 mb-4 text-xs font-semibold text-gray-900">
              <div className="col-span-6">Item</div>
              <div className="col-span-2 text-right">Price</div>
              <div className="col-span-2 text-center">Quantity</div>
              <div className="col-span-2 text-right">Total</div>
            </div>
            {cart.map((item, idx) => (
              <div key={item.id + idx} className="grid grid-cols-12 gap-4 border-b border-gray-300 py-4 items-center">
                <div className="col-span-6 flex gap-4 items-start">
                  <img
                    alt={item.name}
                    className="w-14 h-14 object-cover flex-shrink-0 rounded-lg border"
                    src={item.image}
                    width={60}
                    height={60}
                    style={{ objectFit: 'cover', width: '56px', height: '56px', display: 'block' }}
                  />
                  <div>
                    <h2 className="font-extrabold text-base leading-tight text-gray-900">
                      {item.name}
                    </h2>
                    {item.cart_desc ? (
                      <p className="text-xs text-gray-700 leading-tight mb-1">{item.cart_desc}</p>
                    ) : item.desc ? (
                      <p className="text-xs text-gray-700 leading-tight mb-1">{Array.isArray(item.desc) ? item.desc[0] : item.desc}</p>
                    ) : null}
                  </div>
                </div>
                <div className="col-span-2 text-right text-sm">
                  ₹{item.price}
                </div>
                <div className="col-span-2 flex justify-center">
                  <div className="flex border border-black rounded-sm overflow-hidden w-24 h-8">
                    <button
                      aria-label="Decrease quantity"
                      className="w-8 h-full flex justify-center items-center border-r border-black text-lg font-semibold select-none"
                      onClick={() => handleQuantity(idx, -1)}
                      disabled={item.count <= 1}
                    >
                      −
                    </button>
                    <div className="w-8 h-full flex justify-center items-center text-sm font-semibold cart_item_quantity" style={{ lineHeight: '1.5' }}>
                      {item.count}
                    </div>
                    <button
                      aria-label="Increase quantity"
                      className="w-8 h-full flex justify-center items-center border-l border-black text-lg font-semibold select-none"
                      onClick={() => handleQuantity(idx, 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="col-span-2 text-right font-extrabold text-sm">
                  ₹{(Number(String(item.price).replace(/,/g, '')) * item.count).toLocaleString()}
                </div>
                <div
                  className="pl-2 text-gray-500 cursor-pointer text-xs select-none"
                  onClick={() => handleRemove(idx)}
                  title="Remove item"
                >
                  ×
                </div>
              </div>
            ))}
            {/* Row below cart items: left image, right payment details */}
            <div className="flex flex-row w-full mt-8 gap-6">
              <div className="flex-1 flex items-end justify-start overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
                <img src="images/transaction.png" alt="Decorative" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 max-w-md ml-auto space-y-4 text-sm text-gray-900">
                <div className="flex justify-between border-b border-gray-300 pb-2">
                  <span className="font-semibold">Subtotal:</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between border-b border-gray-300 pb-2">
                  <span className="font-semibold">Sales Tax (10%):</span>
                  <span>₹{salesTax.toLocaleString()}</span>
                </div>
                <div className="flex justify-between border-b border-gray-300 pb-2 items-center">
                  <span className="font-semibold">Shipping (5%):</span>
                  <span>{shipping === 0 ? 'Free' : `₹${shipping.toLocaleString()}`}</span>
                </div>
                <div className="flex justify-between border-b border-gray-300 pb-2 text-lg font-extrabold">
                  <span>Grand total:</span>
                  <span className="text-3xl">₹{grandTotal.toLocaleString()}</span>
                </div>
                {shipping === 0 && (
                  <div className="flex items-center space-x-2 text-xs text-gray-700">
                    <div className="flex-1">
                      Congrats, you’re eligible for <span className="font-extrabold">Free Shipping</span>
                      <div className="border-b border-green-600 mt-1"></div>
                    </div>
                    <i className="fas fa-truck text-gray-700"></i>
                  </div>
                )}
                <button
                  className="w-full py-3 mt-4 checkout-btn"
                  style={{ fontSize: '1.35rem', lineHeight: 1.1 }}
                  type="button"
                  onClick={handleCheckout}
                >
                  Check out
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

function App() {
  const [products] = useState(initialProducts);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);
  const [cart, setCart] = useLocalStorage("cart", []);
  const [showCart, setShowCart] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const lastScrollY = useRef(window.scrollY);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    let ticking = false;
    const threshold = 20;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          if (currentScrollY <= 0) {
            setHeaderVisible(true);
          } else if (
            currentScrollY - lastScrollY.current > threshold
          ) {
            setHeaderVisible(false); // scrolled down
          } else if (
            lastScrollY.current - currentScrollY > threshold
          ) {
            setHeaderVisible(true); // scrolled up
          }
          lastScrollY.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredProducts = products.filter(p => {
    const words = p.name.toLowerCase().split(/[^a-z0-9]+/);
    const searchTerm = search.toLowerCase();
    return words.some(word => word.startsWith(searchTerm));
  });

  function handleAddToCart(product) {
    setCart(prev => {
      const idx = prev.findIndex(item => item.name === product.name);
      if (idx !== -1) {
        const updated = [...prev];
        updated[idx].count += 1;
        return updated;
      }
      return [...prev, { ...product, count: 1 }];
    });
  }

  // Called by CartModal on successful checkout
  function handleOrderSuccess() {
    setShowSuccess(true);
    setCart([]);
    setTimeout(() => {
      setShowSuccess(false);
      setShowCart(false);
    }, 2000);
  }

  return (
    <div className="d-flex flex-column min-vh-100 bg-light" style={{ width: '100vw', overflowX: 'hidden' }}>
      <CartIcon count={cart.reduce((sum, item) => sum + item.count, 0)} onClick={() => setShowCart(true)} />
      <div className={selected || showCart ? "blurred" : ""}>
        <HeroHeader visible={headerVisible} />
        <div className="flex-grow-1 w-100">
          <ProductList
            products={filteredProducts}
            onSelect={setSelected}
            search={search}
            setSearch={setSearch}
          />
        </div>
        <Footer />
      </div>
      {selected && (
        <ProductDetail
          product={selected}
          onAddToCart={handleAddToCart}
          onClose={() => setSelected(null)}
        />
      )}
      {showCart && <CartModal cart={cart} onClose={() => setShowCart(false)} setCart={setCart} onOrderSuccess={handleOrderSuccess} />}
      {showSuccess && <OrderSuccessModal onDone={() => setShowSuccess(false)} />}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

