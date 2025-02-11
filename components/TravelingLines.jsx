"use client"

import React, { useRef, useEffect } from 'react'
import { Snake } from '../classes/Snake'
import { trimPath } from '../utils/mathUtils'
import { 
  NUM_LINES, 
  LINE_WIDTH,
  BG_COLOR_DARK,
  BG_COLOR_LIGHT,
  LINE_COLOR_DARK,
  LINE_COLOR_LIGHT
} from '../utils/constants'
import useThemeStore from '@/store/useThemeStore'

const TravelingLines = () => {
  const { isDarkMode } = useThemeStore()
  const canvasRef = useRef(null)
  const snakesRef = useRef([])

  const initSnakes = (canvasWidth, canvasHeight) => {
    return Array.from({ length: NUM_LINES }, () => new Snake(canvasWidth, canvasHeight))
  }

  const updateAndDrawSnake = (context, snake, canvasWidth, canvasHeight) => {
    const currentHead = snake.path[snake.path.length - 1]
    let newHead = {
      x: currentHead.x + Math.cos(snake.direction) * snake.speed,
      y: currentHead.y + Math.sin(snake.direction) * snake.speed,
    }

    snake.path.push(newHead)

    snake.turnCountdown--
    if (snake.turnCountdown <= 0) {
      snake.updateDirection()
    }

    snake.path = trimPath(snake.path, snake.maxLength)

    // Dessin
    context.beginPath()
    context.moveTo(snake.path[0].x, snake.path[0].y)
    for (let i = 1; i < snake.path.length; i++) {
      context.lineTo(snake.path[i].x, snake.path[i].y)
    }
    context.stroke()

    // Vérifie si le snake est complètement sorti de l'écran
    const isCompletelyOutside = snake.path.every(point => 
      point.x < -50 || 
      point.x > canvasWidth + 50 || 
      point.y < -50 || 
      point.y > canvasHeight + 50
    )

    // Si le snake est complètement sorti, on le réinitialise
    if (isCompletelyOutside) {
      Object.assign(snake, Snake.create(canvasWidth, canvasHeight))
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    // Initialise les snakes seulement s'ils n'existent pas déjà
    if (snakesRef.current.length === 0) {
      snakesRef.current = initSnakes(window.innerWidth, window.innerHeight)
    }

    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasSize()
    window.addEventListener('resize', setCanvasSize)

    let animationFrameId

    const animate = () => {
      context.fillStyle = isDarkMode ? BG_COLOR_DARK : BG_COLOR_LIGHT
      context.fillRect(0, 0, canvas.width, canvas.height)

      context.lineWidth = LINE_WIDTH
      context.strokeStyle = isDarkMode ? LINE_COLOR_DARK : LINE_COLOR_LIGHT
      context.lineCap = 'round'

      snakesRef.current.forEach(snake => 
        updateAndDrawSnake(context, snake, canvas.width, canvas.height)
      )

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', setCanvasSize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [isDarkMode])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: isDarkMode ? BG_COLOR_DARK : BG_COLOR_LIGHT,
        zIndex: 0,
        pointerEvents: 'none'
      }}
    />
  )
}

export default TravelingLines