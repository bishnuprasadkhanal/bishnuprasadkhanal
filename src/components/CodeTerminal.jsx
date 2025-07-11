"use client"

import { useState } from "react"
import { Terminal, Copy, Check, Maximize2, Minimize2 } from "lucide-react"

const CodeTerminal = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [isMaximized, setIsMaximized] = useState(false)
  const [copiedIndex, setCopiedIndex] = useState(null)
  const [terminalOutput, setTerminalOutput] = useState([])
  const [currentCommand, setCurrentCommand] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const codeExamples = [
    {
      title: "Laravel API Controller",
      language: "php",
      code: `<?php

namespace App\\Http\\Controllers\\Api;

use App\\Http\\Controllers\\Controller;
use App\\Models\\User;
use Illuminate\\Http\\Request;
use Illuminate\\Http\\JsonResponse;

class UserController extends Controller
{
    /**
     * Display a listing of users with pagination
     */
    public function index(Request $request): JsonResponse
    {
        $users = User::query()
            ->when($request->search, function ($query, $search) {
                return $query->where('name', 'like', "%{$search}%")
                            ->orWhere('email', 'like', "%{$search}%");
            })
            ->paginate($request->per_page ?? 15);

        return response()->json([
            'success' => true,
            'data' => $users,
            'message' => 'Users retrieved successfully'
        ]);
    }

    /**
     * Store a newly created user
     */
    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:8|confirmed'
        ]);

        $user = User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => bcrypt($validated['password'])
        ]);

        return response()->json([
            'success' => true,
            'data' => $user,
            'message' => 'User created successfully'
        ], 201);
    }
}`,
    },
    {
      title: "React E-commerce Component",
      language: "javascript",
      code: `import React, { useState, useEffect } from 'react';
import { ShoppingCart, Heart, Star } from 'lucide-react';

const ProductCard = ({ product, onAddToCart, onToggleWishlist }) => {
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Check if product is in wishlist
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    setIsInWishlist(wishlist.includes(product.id));
  }, [product.id]);

  const handleAddToCart = () => {
    onAddToCart({
      ...product,
      quantity,
      totalPrice: product.price * quantity
    });
    
    // Show success animation
    const button = document.getElementById(\`add-to-cart-\${product.id}\`);
    button.classList.add('animate-bounce');
    setTimeout(() => button.classList.remove('animate-bounce'), 600);
  };

  const handleWishlistToggle = () => {
    setIsInWishlist(!isInWishlist);
    onToggleWishlist(product.id);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={\`w-4 h-4 \${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}\`}
      />
    ));
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
      <div className="relative overflow-hidden rounded-t-xl">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className={\`w-full h-64 object-cover transition-opacity duration-300 \${imageLoaded ? 'opacity-100' : 'opacity-0'}\`}
          onLoad={() => setImageLoaded(true)}
        />
        <button
          onClick={handleWishlistToggle}
          className={\`absolute top-4 right-4 p-2 rounded-full bg-white/80 backdrop-blur-sm transition-colors \${isInWishlist ? 'text-red-500' : 'text-gray-600'}\`}
        >
          <Heart className={\`w-5 h-5 \${isInWishlist ? 'fill-current' : ''}\`} />
        </button>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
        <div className="flex items-center mb-3">
          {renderStars(product.rating)}
          <span className="ml-2 text-sm text-gray-600">({product.reviews})</span>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-green-600">\${product.price}</span>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center"
            >
              -
            </button>
            <span className="w-8 text-center">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center"
            >
              +
            </button>
          </div>
        </div>
        
        <button
          id={\`add-to-cart-\${product.id}\`}
          onClick={handleAddToCart}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
        >
          <ShoppingCart className="w-5 h-5" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;`,
    },
    {
      title: "MySQL Database Schema",
      language: "sql",
      code: `-- E-commerce Database Schema
-- Created by Bishnu Prasad Khanal

-- Users table
CREATE TABLE users (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    email_verified_at TIMESTAMP NULL,
    password VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NULL,
    avatar VARCHAR(255) NULL,
    role ENUM('admin', 'customer', 'vendor') DEFAULT 'customer',
    status ENUM('active', 'inactive', 'suspended') DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_email (email),
    INDEX idx_role (role),
    INDEX idx_status (status)
);

-- Products table
CREATE TABLE products (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    description TEXT,
    short_description VARCHAR(500),
    sku VARCHAR(100) UNIQUE NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    sale_price DECIMAL(10,2) NULL,
    stock_quantity INT DEFAULT 0,
    category_id BIGINT UNSIGNED,
    brand_id BIGINT UNSIGNED NULL,
    status ENUM('active', 'inactive', 'draft') DEFAULT 'active',
    featured BOOLEAN DEFAULT FALSE,
    weight DECIMAL(8,2) NULL,
    dimensions VARCHAR(100) NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_slug (slug),
    INDEX idx_category (category_id),
    INDEX idx_status (status),
    INDEX idx_featured (featured),
    FULLTEXT idx_search (name, description)
);

-- Orders table
CREATE TABLE orders (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT UNSIGNED NOT NULL,
    order_number VARCHAR(50) UNIQUE NOT NULL,
    status ENUM('pending', 'processing', 'shipped', 'delivered', 'cancelled') DEFAULT 'pending',
    total_amount DECIMAL(10,2) NOT NULL,
    tax_amount DECIMAL(10,2) DEFAULT 0,
    shipping_amount DECIMAL(10,2) DEFAULT 0,
    discount_amount DECIMAL(10,2) DEFAULT 0,
    payment_status ENUM('pending', 'paid', 'failed', 'refunded') DEFAULT 'pending',
    payment_method VARCHAR(50) NULL,
    shipping_address JSON,
    billing_address JSON,
    notes TEXT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    INDEX idx_user (user_id),
    INDEX idx_status (status),
    INDEX idx_payment_status (payment_status),
    INDEX idx_created_at (created_at)
);

-- Order items table
CREATE TABLE order_items (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    order_id BIGINT UNSIGNED NOT NULL,
    product_id BIGINT UNSIGNED NOT NULL,
    quantity INT NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    total DECIMAL(10,2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
    INDEX idx_order (order_id),
    INDEX idx_product (product_id)
);

-- Create indexes for better performance
CREATE INDEX idx_users_created_at ON users(created_at);
CREATE INDEX idx_products_price ON products(price);
CREATE INDEX idx_orders_total ON orders(total_amount);

-- Create a view for order summary
CREATE VIEW order_summary AS
SELECT 
    o.id,
    o.order_number,
    u.name as customer_name,
    u.email as customer_email,
    o.total_amount,
    o.status,
    o.created_at,
    COUNT(oi.id) as total_items
FROM orders o
JOIN users u ON o.user_id = u.id
LEFT JOIN order_items oi ON o.id = oi.order_id
GROUP BY o.id;`,
    },
  ]

  const terminalCommands = [
    "php artisan make:controller ApiController",
    "composer install",
    "npm run dev",
    "php artisan migrate:fresh --seed",
    "git add . && git commit -m 'Feature: Added new API endpoints'",
    "php artisan queue:work",
    "npm run build",
    "php artisan optimize",
  ]

  const copyToClipboard = async (text, index) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedIndex(index)
      setTimeout(() => setCopiedIndex(null), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  const runCommand = (command) => {
    setIsTyping(true)
    setCurrentCommand(command)

    setTimeout(() => {
      const outputs = {
        "php artisan make:controller ApiController": "Controller created successfully.",
        "composer install":
          "Loading composer repositories with package information\nInstalling dependencies...\nPackage operations: 85 installs, 0 updates, 0 removals\n✅ Installation complete!",
        "npm run dev": "Local:   http://localhost:3000/\nNetwork: http://192.168.1.100:3000/\n✅ Server running!",
        "php artisan migrate:fresh --seed":
          "Dropped all tables successfully.\nMigration table created successfully.\nMigrating: 2024_01_01_000000_create_users_table\nMigrated:  2024_01_01_000000_create_users_table\n✅ Database seeded successfully!",
        "git add . && git commit -m 'Feature: Added new API endpoints'":
          "[main 7f8a9b2] Feature: Added new API endpoints\n 5 files changed, 127 insertions(+), 3 deletions(-)\n✅ Changes committed!",
        "php artisan queue:work":
          "Processing jobs...\n[2024-01-15 10:30:45] Processing: App\\Jobs\\SendEmailJob\n[2024-01-15 10:30:46] Processed:  App\\Jobs\\SendEmailJob\n✅ Queue worker started!",
        "npm run build":
          "Building for production...\n✓ 127 modules transformed.\ndist/index.html                   0.67 kB\ndist/assets/index-4a7c8b9e.js   143.21 kB\n✅ Build completed!",
        "php artisan optimize":
          "Configuration cache cleared!\nRoute cache cleared!\nView cache cleared!\nConfiguration cached successfully!\nRoute cached successfully!\nView cached successfully!\n✅ Application optimized!",
      }

      setTerminalOutput((prev) => [
        ...prev,
        {
          command,
          output: outputs[command] || "Command executed successfully!",
          timestamp: new Date().toLocaleTimeString(),
        },
      ])
      setIsTyping(false)
      setCurrentCommand("")
    }, 1500)
  }

  return (
    <section id="code-terminal" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Code in Action
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Interactive code examples and terminal demonstrations showcasing my{" "}
            <strong className="text-green-400">Laravel</strong> and{" "}
            <strong className="text-blue-400">Full-Stack Development</strong> expertise.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Code Editor */}
          <div
            className={`bg-gray-900/95 backdrop-blur-xl border border-gray-600/50 rounded-xl shadow-2xl overflow-hidden transition-all duration-300 ${
              isMaximized ? "lg:col-span-2" : ""
            }`}
          >
            {/* Editor Header */}
            <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 px-4 py-3 flex items-center justify-between border-b border-gray-600/50">
              <div className="flex items-center space-x-3">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-gray-300 text-sm font-mono">
                  {codeExamples[activeTab].title}.{codeExamples[activeTab].language}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => copyToClipboard(codeExamples[activeTab].code, activeTab)}
                  className="p-2 text-gray-400 hover:text-white transition-colors"
                >
                  {copiedIndex === activeTab ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => setIsMaximized(!isMaximized)}
                  className="p-2 text-gray-400 hover:text-white transition-colors"
                >
                  {isMaximized ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Code Tabs */}
            <div className="flex border-b border-gray-700/50 bg-gray-800/50">
              {codeExamples.map((example, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    activeTab === index
                      ? "bg-gray-700 text-green-400 border-b-2 border-green-400"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {example.title}
                </button>
              ))}
            </div>

            {/* Code Content */}
            <div className="p-6 font-mono text-sm overflow-auto max-h-96 bg-gray-900/50">
              <pre className="text-gray-300 leading-relaxed">
                <code className={`language-${codeExamples[activeTab].language}`}>{codeExamples[activeTab].code}</code>
              </pre>
            </div>
          </div>

          {/* Terminal */}
          <div className="bg-gray-900/95 backdrop-blur-xl border border-gray-600/50 rounded-xl shadow-2xl overflow-hidden">
            {/* Terminal Header */}
            <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 px-4 py-3 flex items-center justify-between border-b border-gray-600/50">
              <div className="flex items-center space-x-3">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <Terminal className="w-4 h-4 text-green-400" />
                <span className="text-green-400 font-mono text-sm">bishnu@dev-server</span>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="p-6 font-mono text-sm min-h-96 max-h-96 overflow-auto bg-gray-900/50">
              {/* Command Buttons */}
              <div className="mb-4">
                <div className="text-blue-400 mb-2">Quick Commands:</div>
                <div className="grid grid-cols-2 gap-2">
                  {terminalCommands.slice(0, 4).map((command, index) => (
                    <button
                      key={index}
                      onClick={() => runCommand(command)}
                      className="text-left p-2 bg-gray-800/50 hover:bg-gray-700/50 rounded text-xs text-green-400 transition-colors"
                      disabled={isTyping}
                    >
                      {command}
                    </button>
                  ))}
                </div>
              </div>

              {/* Terminal Output */}
              <div className="space-y-2">
                {terminalOutput.map((entry, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-blue-400">$</span>
                      <span className="text-green-400">{entry.command}</span>
                      <span className="text-gray-500 text-xs">[{entry.timestamp}]</span>
                    </div>
                    <div className="text-gray-300 whitespace-pre-line pl-4 text-xs">{entry.output}</div>
                  </div>
                ))}

                {/* Current typing command */}
                {isTyping && (
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-400">$</span>
                    <span className="text-green-400">{currentCommand}</span>
                    <span className="animate-pulse text-green-400">|</span>
                  </div>
                )}

                {/* Prompt */}
                <div className="flex items-center space-x-2 mt-4">
                  <span className="text-blue-400">$</span>
                  <span className="text-gray-500">Ready for next command...</span>
                  <span className="animate-pulse text-green-400">|</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Lines of Code", value: "50,000+", icon: "📝" },
            { label: "Projects Deployed", value: "25+", icon: "🚀" },
            { label: "APIs Built", value: "100+", icon: "🔗" },
            { label: "Coffee Consumed", value: "∞", icon: "☕" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-green-400/50 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-1">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CodeTerminal
