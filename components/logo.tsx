import React from 'react'

export const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="w-8 h-8 bg-brand-orange rounded-lg flex items-center justify-center">
        <span className="text-white font-bold text-lg">AI</span>
      </div>
      <span className="text-xl font-bold text-foreground">学习社团</span>
    </div>
  )
}