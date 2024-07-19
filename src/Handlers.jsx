export function HandleInputChange (id, field, val, func) {
    func((prev) =>
        prev.map((entry) =>
            entry.id === id ? { ...entry, [field]: val } : entry
        )
      );
}

