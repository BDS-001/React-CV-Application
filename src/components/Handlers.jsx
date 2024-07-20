export function HandleInputChange (id, field, val, func) {
    func((prev) =>
        prev.map((entry) =>
            entry.id === id ? { ...entry, [field]: val } : entry
        )
      );
}

export function HandleFadeOut(id, keyword, handleRemove) {
    const element = document.getElementById(`${keyword}-${id}`);
    if (element) {
        element.classList.add('fade-out');
        element.addEventListener('animationend', () => {
            element.style.display = 'none'; // Set display to none to remove it from layout
            handleRemove(id);
        }, { once: true }); // Ensure the event listener is removed after being called once
    }
}