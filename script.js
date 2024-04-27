const canvas = document.getElementById('snowfall');
const ctx = canvas.getContext('2d');

// Set canvas size to window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Create an array to store snowflakes
let snowflakes = [];

// Function to create a snowflake
function createSnowflake() {
    return {
        x: Math.random() * canvas.width,
        y: 0,
        radius: Math.random() * 3 + 1, // Random radius between 1 and 4
        speed: Math.random() * 2 + 1, // Random speed between 1 and 3
        opacity: Math.random() * 0.5 + 0.5 // Random opacity between 0.5 and 1
    };
}

// Function to draw snowflakes
function drawSnowflakes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';

    snowflakes.forEach(snowflake => {
        ctx.beginPath();
        ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2);
        ctx.fill();
    });
}

// Function to update snowflakes position
function updateSnowflakes() {
    snowflakes.forEach(snowflake => {
        snowflake.y += snowflake.speed;

        // If snowflake reaches bottom, reset to top
        if (snowflake.y > canvas.height) {
            snowflake.y = 0;
            snowflake.x = Math.random() * canvas.width;
        }
    });
}

// Function to animate snowflakes
function animateSnowflakes() {
    drawSnowflakes();
    updateSnowflakes();
    requestAnimationFrame(animateSnowflakes);
}

// Create initial snowflakes
for (let i = 0; i < 100; i++) {
    snowflakes.push(createSnowflake());
}

// Start animation
animateSnowflakes();
