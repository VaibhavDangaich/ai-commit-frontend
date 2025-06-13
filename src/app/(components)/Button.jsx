"use client";
import React from 'react'

function Button() {
  return (
      <div>
          <button
              onClick={() => {
                  navigator.clipboard.writeText("npm install -g ai-commit-cli-vd");
                  alert("Copied to clipboard!");
              }}
              className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 shadow-lg transition-all"
          >
              Install Now
          </button>
    </div>
  )
}

export default Button