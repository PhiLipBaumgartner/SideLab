function toggleInfo(index) {
    const infoSection = document.getElementById(`info-${index}`);
    
    // Toggle visibility with smooth transition
    if (infoSection.style.display === 'none' || infoSection.style.display === '') {
        infoSection.style.display = 'block';
        infoSection.classList.add('show'); // Show content with transition

        // Scroll down to the expanded info section
        infoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
        infoSection.style.display = 'none';
        infoSection.classList.remove('show'); // Hide content smoothly
    }
}
