

function ProductDetails({imgSrc, name, price, discountPrice}) {
    return (
        <div>
            <img src={imgSrc} width="50"></img>
            <p>{name}</p>
            {!discountPrice ? <p>Price: ${price}</p> : <del>Price: ${price}</del>}
            {discountPrice && <p>Discount price: ${discountPrice}</p>}
            <button>Add to Cart</button>
        </div>
    );
}

function App() {
    return (
        <>
            <ProductDetails 
                imgSrc="https://supersimple.dev/images/cotton-socks.png"
                name="Cotton socks"
                price="10.00"
                discountPrice="5.00"  
            />
            <ProductDetails 
                imgSrc="https://supersimple.dev/images/tennis-balls.png"
                name="Tennis balls"
                price="6.00"    
            />
            <ProductDetails 
                imgSrc="https://supersimple.dev/images/plain-t-shirt.png"
                name="T-shirt"
                price="7.00"
            />
        </>
        
    )
}

const container1 = document.querySelector('.js-container');
ReactDOM.createRoot(container1).render(<App />);

const root = ReactDOM.createRoot(document.querySelector('.js-container1'))
setInterval(() => {
    const clock = <p>Current time: {dayjs().format('HH:mm:ss')}</p>
    root.render(clock);
}, 1000);