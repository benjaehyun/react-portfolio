import React from 'react'

export default function FigmaEmbed() {
    const figmaEmbedUrl = "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fj8dPEgun1sb3OeDAWSEWJw%2FFoodSquad%3Ftype%3Ddesign%26node-id%3D1-6%26t%3DB8VKjx23rwkuZp1X-1%26scaling%3Dscale-down%26page-id%3D0%253A1%26mode%3Ddesign" 
  return (
    <div className="flex justify-center items-center w-full">
        <iframe
            className="w-full max-w-xs h-[740px] border border-gray-200 rounded-lg shadow-lg" // Adjust height as needed; max-w-xs approximates a mobile width
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fj8dPEgun1sb3OeDAWSEWJw%2FFoodSquad%3Ftype%3Ddesign%26node-id%3D1-6%26t%3DB8VKjx23rwkuZp1X-1%26scaling%3Dscale-down%26page-id%3D0%253A1%26mode%3Ddesign"
            allowFullScreen
        ></iframe>
    </div>

  )
}
