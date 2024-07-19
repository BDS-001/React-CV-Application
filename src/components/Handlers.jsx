export function HandleInputChange (id, field, val, func) {
    func((prev) =>
        prev.map((entry) =>
            entry.id === id ? { ...entry, [field]: val } : entry
        )
      );
}

export function HandleFadeOut(id, keyword, handleRemove) {
    const element = document.getElementById(`${keyword}-${id}`);
    element.classList.add('fade-out');
    element.addEventListener('animationend', () => handleRemove(id));
}