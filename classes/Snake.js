import { random } from '../utils/mathUtils'
import { MIN_SNAKE_LENGTH, MAX_SNAKE_LENGTH, SNAKE_SPEED, MIN_TURN_FRAMES, MAX_TURN_FRAMES } from '../utils/constants'

export class Snake {
    constructor(canvasWidth, canvasHeight) {
        Object.assign(this, Snake.create(canvasWidth, canvasHeight))
    }

    static create(canvasWidth, canvasHeight) {
        const edge = Math.floor(random(0, 4))
        let x, y, direction

        switch (edge) {
            case 0: // bord supérieur
                x = random(0, canvasWidth)
                y = 0
                {
                    const possible = [0, Math.PI, Math.PI / 2]
                    direction = possible[Math.floor(random(0, possible.length))]
                }
                break
            case 1: // bord droit
                x = canvasWidth
                y = random(0, canvasHeight)
                {
                    const possible = [Math.PI, -Math.PI / 2, Math.PI / 2]
                    direction = possible[Math.floor(random(0, possible.length))]
                }
                break
            case 2: // bord inférieur
                x = random(0, canvasWidth)
                y = canvasHeight
                {
                    const possible = [-Math.PI / 2, Math.PI, 0]
                    direction = possible[Math.floor(random(0, possible.length))]
                }
                break
            case 3: // bord gauche
            default:
                x = 0
                y = random(0, canvasHeight)
                {
                    const possible = [0, -Math.PI / 2, Math.PI / 2]
                    direction = possible[Math.floor(random(0, possible.length))]
                }
                break
        }

        return {
            path: [{ x, y }],
            direction,
            maxLength: random(MIN_SNAKE_LENGTH, MAX_SNAKE_LENGTH),
            speed: SNAKE_SPEED,
            turnCountdown: Math.floor(random(MIN_TURN_FRAMES, MAX_TURN_FRAMES))
        }
    }

    updateDirection() {
        if (this.direction === 0 || this.direction === Math.PI) {
            this.direction = Math.random() < 0.5 ? -Math.PI / 2 : Math.PI / 2
        } else {
            this.direction = Math.random() < 0.5 ? 0 : Math.PI
        }
        this.turnCountdown = Math.floor(random(MIN_TURN_FRAMES, MAX_TURN_FRAMES))
    }
} 