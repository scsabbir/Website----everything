// CONFIG: Mood Levels
const moodConfig = {
    1: { color: "#ff4757", shadow: "rgba(255, 71, 87, 0.4)", label: "Terrible", icon: "fa-face-angry" },
    2: { color: "#ffa502", shadow: "rgba(255, 165, 2, 0.4)", label: "Bad", icon: "fa-face-frown" },
    3: { color: "#ffd32a", shadow: "rgba(255, 211, 42, 0.4)", label: "Okay", icon: "fa-face-meh" },
    4: { color: "#00b894", shadow: "rgba(0, 184, 148, 0.4)", label: "Good", icon: "fa-face-smile" },
    5: { color: "#6c5ce7", shadow: "rgba(108, 92, 231, 0.4)", label: "Excellent!", icon: "fa-face-grin-stars" }
};

const slider = document.getElementById('feedback-slider');
const iconContainer = document.getElementById('icon-container');
const moodText = document.getElementById('mood-text');
const root = document.documentElement;

let currentLevel = 3;

function updateUI(value) {
    // Logic: Evenly distributed 5 steps (0-19, 20-39, 40-59, 60-79, 80-100)
    let level = 1;
    if (value >= 20) level = 2;
    if (value >= 40) level = 3;
    if (value >= 60) level = 4;
    if (value >= 80) level = 5;

    // Update Slider Gradient Track
    const percentage = value + '%';
    slider.style.backgroundSize = `${percentage} 100%`;

    // Only update DOM elements if the mood level changed (performance)
    if (level !== currentLevel || !iconContainer.innerHTML) {
        currentLevel = level;
        const data = moodConfig[level];

        // Update CSS Variables for global theming
        root.style.setProperty('--theme-color', data.color);
        root.style.setProperty('--theme-shadow', data.shadow);

        // Update Text
        moodText.innerText = data.label;

        // Update Icon with fresh animation
        iconContainer.innerHTML = '';
        const iconEl = document.createElement('i');
        iconEl.className = `fa-solid ${data.icon} pop-anim`;
        iconContainer.appendChild(iconEl);
    }
}

// --- Event Listeners ---

// 1. Slider Move
slider.addEventListener('input', (e) => updateUI(e.target.value));

// 2. Submit Button
document.getElementById('submit-btn').addEventListener('click', (e) => {
    e.preventDefault(); // Safety: prevent default form actions

    // Log for debugging
    console.log(`Feedback Submitted: Level ${currentLevel} / 5`);

    // Trigger Success View
    document.getElementById('success-view').classList.add('active');
});

// Initialize at 50% (Okay)
updateUI(50);
