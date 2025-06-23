function toggleExtra() {
    const extra = document.getElementById('extra');
    if (extra.classList.contains('hidden')) {
        extra.classList.remove('hidden');
    } else {
        extra.classList.add('hidden');
    }
}
