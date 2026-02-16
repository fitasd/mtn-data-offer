// Deal card selection (visual only)
const dealCards = document.querySelectorAll('.deal-card');

dealCards.forEach(card => {
    card.addEventListener('click', () => {
        dealCards.forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
    });
});

// Apply button - always enabled for maximum conversions
const applyBtn = document.querySelector('.apply-btn');
const btnText = document.querySelector('.btn-text');

applyBtn.addEventListener('click', () => {
    // Disable button to prevent double clicks
    applyBtn.disabled = true;
    applyBtn.classList.add('loading');
    btnText.textContent = 'Please Wait...';
    
    // Redirect immediately for CPA conversion
    setTimeout(() => {
        window.location.href = 'https://kdmjzwq.com/cl/558397a63c133baa';
    }, 1500);
});
