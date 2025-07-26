document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.getElementById('generateButton');
    const complimentText = document.getElementById('complimentText');
    const memeImage = document.getElementById('memeImage');

    // Array of glitchy sound effects (replace with your actual paths)
    // You can generate 8-bit sounds using tools like sfxr.me [1]
    const glitchSounds = [
        './sounds/glitch_short_1.mp3',
        './sounds/glitch_short_2.mp3',
        './sounds/static_burst.mp3',
        './sounds/digital_blip.mp3'
    ];

    let currentAudio = null; // To manage single audio playback [2]

    // Function to play a random glitch sound [3, 4]
    function playRandomGlitchSound() {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0; // Reset playback to start
        }
        const randomIndex = Math.floor(Math.random() * glitchSounds.length);
        currentAudio = new Audio(glitchSounds[randomIndex]);
        currentAudio.play().catch(e => console.error("Error playing sound:", e));
    }

    // Function to apply and remove glitch classes
    function applyGlitchEffect() {
        complimentText.classList.add('glitch-active');
        memeImage.classList.add('glitch-active');

        // Remove glitch classes after a short delay to make it a "flash" [5]
        setTimeout(() => {
            complimentText.classList.remove('glitch-active');
            memeImage.classList.remove('glitch-active');
        }, 300); // Adjust duration as needed for the desired "flash"
    }

    // Function to fetch compliment and meme from backend [6, 7]
    async function fetchGlitchyCompliment() {
        playRandomGlitchSound();
        applyGlitchEffect();

        complimentText.textContent = "Processing... Expecting a compliment, but who knows what will come out!";
        memeImage.src = "https://via.placeholder.com/400x300?text=Loading..."; // Loading state for image

        try {
            // Assuming your backend is running on the same host,
            // and the endpoint is /api/generate-glitch-compliment
            const response = await fetch('/api/generate-glitch-compliment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                // You can send a simple body if your backend expects it, e.g., an empty object
                body: JSON.stringify({}) 
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log("Received data:", data);

            // Update UI with glitched compliment and meme image
            complimentText.textContent = data.compliment |

| "Error: Compliment missing!";
            memeImage.src = data.memeImageUrl |

| "https://via.placeholder.com/400x300?text=Image+Error!";
            memeImage.alt = "Generated Meme";

        } catch (error) {
            console.error('Failed to fetch glitchy compliment:', error);
            complimentText.textContent = "ERROR: System malfunction. Please try again. Or don't. Who cares?";
            memeImage.src = "https://via.placeholder.com/400x300?text=CRITICAL+ERROR!";
            // Play a more severe error sound if you have one
            if (currentAudio) {
                currentAudio.pause();
                currentAudio.currentTime = 0;
            }
            new Audio('./sounds/error_buzz.mp3').play().catch(e => console.error("Error playing error sound:", e));
        }
    }

    // Attach event listener to the button
    generateButton.addEventListener('click', fetchGlitchyCompliment);

    // Initial load: set data-text attribute for CSS glitch
    complimentText.setAttribute('data-text', complimentText.textContent);
});