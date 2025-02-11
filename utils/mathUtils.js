export const random = (min, max) => Math.random() * (max - min) + min

export const distance = (p1, p2) => {
    const dx = p2.x - p1.x
    const dy = p2.y - p1.y
    return Math.sqrt(dx * dx + dy * dy)
}

export const trimPath = (path, maxLength) => {
    // Si le chemin est trop court, on le retourne tel quel
    if (path.length <= 1) return path

    let total = 0
    const reversedPath = [...path].reverse() // On part de la tête
    const newPath = [reversedPath[0]]

    // On parcourt le chemin depuis la tête
    for (let i = 1; i < reversedPath.length; i++) {
        const seg = distance(reversedPath[i - 1], reversedPath[i])
        total += seg

        // Si on dépasse la longueur maximale, on interpole le dernier point
        if (total > maxLength) {
            const excess = total - maxLength
            const ratio = (seg - excess) / seg
            const curr = reversedPath[i - 1]
            const prev = reversedPath[i]
            const interp = {
                x: prev.x + (curr.x - prev.x) * ratio,
                y: prev.y + (curr.y - prev.y) * ratio,
            }
            newPath.push(interp)
            break
        }

        newPath.push(reversedPath[i])
    }

    // On retourne le chemin dans le bon sens (tête en dernier)
    return newPath.reverse()
} 