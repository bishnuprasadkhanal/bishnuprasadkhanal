const FloatingElements = () => {
  const elements = [
    { text: "<?php", color: "text-purple-400", size: "text-sm" },
    { text: "Laravel", color: "text-red-400", size: "text-lg" },
    { text: "React", color: "text-blue-400", size: "text-md" },
    { text: "MySQL", color: "text-orange-400", size: "text-sm" },
    { text: "JavaScript", color: "text-yellow-400", size: "text-md" },
    { text: "PHP", color: "text-indigo-400", size: "text-lg" },
    { text: "CSS", color: "text-pink-400", size: "text-sm" },
    { text: "HTML", color: "text-green-400", size: "text-md" },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((element, index) => (
        <div
          key={index}
          className={`absolute ${element.color} ${element.size} font-mono opacity-20 animate-float`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 5}s`,
          }}
        >
          {element.text}
        </div>
      ))}
    </div>
  )
}

export default FloatingElements
