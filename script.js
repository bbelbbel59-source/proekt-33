const colorDots = document.querySelectorAll('.color-dot');
const sizeBtns = document.querySelectorAll('.size-btn');
const shoeTitle = document.getElementById('shoeTitle');
const shoePrice = document.getElementById('shoePrice');
const shoeDesc = document.getElementById('shoeDesc');
const shoeImage = document.getElementById('shoeImage');
const viewerImage = document.getElementById('viewerImage');
const badgeText = document.getElementById('badgeText');
const glowBg = document.getElementById('glowBg');
const buyBtn = document.getElementById('buyBtn');
const wishBtn = document.getElementById('wishBtn');
const cartCountElem = document.getElementById('cartCount');
const wishlistCountElem = document.getElementById('wishlistCount');

const rotateLeftBtn = document.getElementById('rotateLeftBtn');
const rotateRightBtn = document.getElementById('rotateRightBtn');
const resetAngleBtn = document.getElementById('resetAngleBtn');
const angleText = document.getElementById('angleText');

const materialSelect = document.getElementById('materialSelect');
const soleSelect = document.getElementById('soleSelect');
const laceSelect = document.getElementById('laceSelect');
const customTotalPrice = document.getElementById('customTotalPrice');
const applyCustomBtn = document.getElementById('applyCustomBtn');

const catalogCards = document.querySelectorAll('.catalog-card');
const faqItems = document.querySelectorAll('.faq-item');
const newsletterBtn = document.getElementById('newsletterBtn');
const newsletterInput = document.getElementById('newsletterInput');

let cartCount = 0;
let wishlistCount = 0;
let currentAngle = 0;
let basePrice = 190.00;

colorDots.forEach(dot => {
    dot.addEventListener('click', () => {
        colorDots.forEach(d => d.classList.remove('active'));
        dot.classList.add('active');

        shoeImage.classList.add('animate');
        setTimeout(() => {
            const newTitle = dot.getAttribute('data-title');
            const newPrice = dot.getAttribute('data-price');
            const newDesc = dot.getAttribute('data-desc');
            const newBadge = dot.getAttribute('data-badge');
            const newImg = dot.getAttribute('data-img');
            const newGlow = dot.getAttribute('data-glow');

            shoeTitle.textContent = newTitle;
            shoePrice.textContent = newPrice;
            shoeDesc.textContent = newDesc;
            badgeText.textContent = newBadge;
            shoeImage.src = newImg;
            viewerImage.src = newImg;
            glowBg.style.background = `radial-gradient(circle, ${newGlow} 0%, rgba(11, 12, 16, 0) 70%)`;
            
            basePrice = parseFloat(newPrice.replace('$', ''));
            updateCustomPrice();

            shoeImage.classList.remove('animate');
        }, 250);
    });
});

sizeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        sizeBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

buyBtn.addEventListener('click', () => {
    cartCount++;
    cartCountElem.textContent = cartCount;
    buyBtn.textContent = "Added To Bag!";
    buyBtn.style.background = "#e02828";
    buyBtn.style.color = "#ffffff";

    setTimeout(() => {
        buyBtn.textContent = "Add To Bag";
        buyBtn.style.background = "#ff3333";
    }, 1500);
});

wishBtn.addEventListener('click', () => {
    wishlistCount++;
    wishlistCountElem.textContent = wishlistCount;
    wishBtn.textContent = "Favorited!";

    setTimeout(() => {
        wishBtn.textContent = "Favorite";
    }, 1500);
});

function updateRotation() {
    viewerImage.style.transform = `rotate(${currentAngle}deg)`;
    angleText.textContent = `Rotation: ${currentAngle}°`;
}

rotateLeftBtn.addEventListener('click', () => {
    currentAngle -= 45;
    updateRotation();
});

rotateRightBtn.addEventListener('click', () => {
    currentAngle += 45;
    updateRotation();
});

resetAngleBtn.addEventListener('click', () => {
    currentAngle = 0;
    updateRotation();
});

function updateCustomPrice() {
    const matVal = parseFloat(materialSelect.value);
    const soleVal = parseFloat(soleSelect.value);
    const laceVal = parseFloat(laceSelect.value);
    const total = basePrice + matVal + soleVal + laceVal;
    customTotalPrice.textContent = `$${total.toFixed(2)}`;
}

materialSelect.addEventListener('change', updateCustomPrice);
soleSelect.addEventListener('change', updateCustomPrice);
laceSelect.addEventListener('change', updateCustomPrice);

applyCustomBtn.addEventListener('click', () => {
    cartCount++;
    cartCountElem.textContent = cartCount;
    applyCustomBtn.textContent = "Custom Pair Added!";
    applyCustomBtn.style.background = "#e02828";

    setTimeout(() => {
        applyCustomBtn.textContent = "Add Custom Pair To Bag";
        applyCustomBtn.style.background = "#ff3333";
    }, 1500);
});

catalogCards.forEach(card => {
    const btn = card.querySelector('.quick-add');
    btn.addEventListener('click', () => {
        const title = card.getAttribute('data-title');
        const price = card.getAttribute('data-price');
        const img = card.getAttribute('data-img');

        shoeTitle.textContent = title;
        shoePrice.textContent = price;
        shoeImage.src = img;
        viewerImage.src = img;
        badgeText.textContent = "Selected Model";

        basePrice = parseFloat(price.replace('$', ''));
        updateCustomPrice();

        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});

newsletterBtn.addEventListener('click', () => {
    if (newsletterInput.value.trim() !== "") {
        newsletterBtn.textContent = "Subscribed!";
        newsletterBtn.style.background = "#e02828";
        newsletterInput.value = "";
        setTimeout(() => {
            newsletterBtn.textContent = "Sign Up";
            newsletterBtn.style.background = "#ff3333";
        }, 2000);
    }
});  