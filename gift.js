const noBtn = document.getElementById("no-btn");
const yesBtn = document.getElementById("yes-btn");

let moveTimeout;

let originalX, originalY;

window.onload = () => {
    const rect = noBtn.getBoundingClientRect();
    originalX = rect.left;
    originalY = rect.top;
};

noBtn.addEventListener("mouseover", () => {
    clearTimeout(moveTimeout);

    const maxX = window.innerWidth - noBtn.clientWidth - 50;
    const maxY = window.innerHeight - noBtn.clientHeight - 50;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.position = "absolute";
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;

    moveTimeout = setTimeout(() => {
        noBtn.style.left = `${originalX}px`;
        noBtn.style.top = `${originalY}px`;
    }, 3000);
});

const popup = document.getElementById("custom-popup");
const closePopup = document.getElementById("close-popup");

yesBtn.addEventListener("click", () => {
    popup.style.display = "block"; 
});

giftContainer.style.display = "none";
giftBox.style.pointerEvents = "none";

yesBtn.addEventListener("click", () => {
    popup.style.display = "block";
    setTimeout(() => {
        giftContainer.style.display = "block"; 
        giftBox.style.pointerEvents = "auto"; 
    }, 500);
});

closePopup.addEventListener("click", () => {
    popup.style.display = "none"; 
});



function createStars() {
    const starsContainer = document.getElementById('stars');
    const starCount = 150;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        const size = Math.random() * 2 + 1;
        star.style.width = size + 'px';
        star.style.height = size + 'px';

        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = Math.random() * 100 + 'vh';

        star.style.animationDelay = Math.random() * 5 + 's';

        starsContainer.appendChild(star);
    }
}

function createFallingPetals() {
    const petalCount = 10; 

    for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement('div');
        petal.classList.add('falling-petal');

        // Ngẫu nhiên kích thước cánh hoa
        const size = Math.random() * 15 + 20;
        petal.style.width = size + 'px';
        petal.style.height = size + 'px';

        petal.style.left = Math.random() * 100 + 'vw';
        petal.style.top = '-10vh'; 

        petal.style.animationDuration = (Math.random() * 5 + 5) + 's';
        petal.style.animationDelay = Math.random() * 3 + 's';

        document.body.appendChild(petal);

        setTimeout(() => {
            petal.remove();
        }, 20000);
    }
}

function openGift() {
    const main = document.querySelector('.main');
    const giftBox = document.getElementById('giftBox');
    const giftLid = document.getElementById('giftLid');
    const heartIcon = document.getElementById('heartIcon');
    const messageContainer = document.getElementById('messageContainer');
    const recipientImage = document.getElementById('recipientImage');
    const messageText = document.getElementById('messageText');
    const specialMessage = document.getElementById('specialMessage');
    const restartButton = document.getElementById('restartButton');
    const giftOpenSound = document.getElementById('giftOpenSound');

    // Play sound
    giftOpenSound.play();

    giftLid.style.transformOrigin = 'bottom';
    giftLid.style.animation = 'openLid 1s forwards';

    setTimeout(() => {
        giftBox.style.transform = 'scale(0.1)';
        giftBox.style.opacity = '0';

        setTimeout(() => {
            main.style.display = 'none';
            giftBox.style.display = 'none';
            messageContainer.style.display = 'block';

            heartIcon.style.animation = 'heartFloat 2s forwards';

            setTimeout(() => {
                recipientImage.style.animation = 'fadeUp 1.5s forwards';

                setTimeout(() => {
                    const children = messageText.children;
                    for (let i = 0; i < children.length; i++) {
                        const element = children[i];
                        element.style.opacity = '1';
                        const text = element.textContent;
                        element.textContent = '';
                        let index = 0;

                        function typeWriter() {
                            if (index < text.length) {
                                element.textContent += text.charAt(index);
                                index++;
                                setTimeout(typeWriter, 50);
                            } else if (i === children.length - 1) {
                                setTimeout(bloomFlowers, 500);
                            }
                        }

                        setTimeout(() => {
                            typeWriter();
                        }, i * 1000);
                    }
                }, 1000);
            }, 1500);
        }, 300);
    }, 1000);
}




function bloomFlowers() {
    const flowerTypes = [
        'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="%23FF69B4"/><circle cx="50" cy="50" r="30" fill="%23FF1493"/><circle cx="50" cy="50" r="20" fill="%23FFB6C1"/><circle cx="50" cy="50" r="10" fill="%23FFC0CB"/></svg>',
        'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M50,10 C30,20 10,30 10,50 C10,70 30,80 50,90 C70,80 90,70 90,50 C90,30 70,20 50,10 Z" fill="%23FF69B4"/><circle cx="50" cy="50" r="15" fill="%23FFFF00"/></svg>',
        'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M50,0 L60,40 L100,50 L60,60 L50,100 L40,60 L0,50 L40,40 Z" fill="%23FF69B4"/></svg>'
    ];

    const flowerBloomSound = document.getElementById('flowerBloomSound');
    flowerBloomSound.play();

    let flowerCount = 0;
    const maxFlowers = 300; 

    function createFlower() {
        if (flowerCount >= maxFlowers) {
            showSpecialMessage();
            return;
        }

        for (let i = 0; i < 5; i++) {
            const flower = document.createElement('div');
            flower.classList.add('flower');

            flower.style.left = Math.random() * 100 + 'vw';
            flower.style.top = Math.random() * 100 + 'vh';

            const size = Math.random() * 120 + 40;
            flower.style.width = size + 'px';
            flower.style.height = size + 'px';

            const randomType = flowerTypes[Math.floor(Math.random() * flowerTypes.length)];
            flower.style.backgroundImage = `url('${randomType}')`;
            flower.style.backgroundSize = 'contain';
            flower.style.backgroundRepeat = 'no-repeat';

            flower.style.animation = `bloom 0.8s forwards`;

            document.body.appendChild(flower);
            flowerCount++;
        }

        setTimeout(createFlower, 50);
    }

    createFlower();
}

function showSpecialMessage() {
    setTimeout(() => {
        const specialMessage = document.getElementById('specialMessage');
        specialMessage.style.animation = 'fadeUp 1.5s forwards';

        setTimeout(() => {
            const restartButton = document.getElementById('restartButton');
            restartButton.style.display = 'inline-block';
            restartButton.style.animation = 'fadeUp 1s forwards';
        }, 1500);
    }, 500);
}

// Toggle music function
function toggleMusic() {
    const backgroundMusic = document.getElementById('backgroundMusic');
    const musicControl = document.getElementById('musicControl');

    if (backgroundMusic.paused) {
        backgroundMusic.play();
        musicControl.style.backgroundColor = 'rgba(255, 102, 153, 0.4)';
    } else {
        backgroundMusic.pause();
        musicControl.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
    }
}

function restartAnimation() {
    location.reload();
}

window.onload = function () {
    createStars();
    createFallingPetals();
    setInterval(createFallingPetals, 3000);

    setTimeout(() => {
        const backgroundMusic = document.getElementById('backgroundMusic');
        backgroundMusic.volume = 0.3;
        backgroundMusic.play().catch(e => {
            console.log('Auto-play prevented. User needs to interact first.');
        });
    }, 1000);
};