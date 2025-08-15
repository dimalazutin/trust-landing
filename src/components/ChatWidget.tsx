// src/components/ChatWidget.tsx
import React, { useState, useEffect, useRef } from 'react'
import { MessageCircle, X, Send, User, ChevronLeft, HelpCircle } from 'lucide-react'
import { 
  findResponse, 
  unknownQuestions, 
  userContacts, 
  questionCategories, 
  popularQuestions 
} from '../data/chatbotData'

interface ChatMessage {
  role: 'user' | 'assistant' | 'system'
  content: string
  timestamp: Date
  suggestions?: string[]
}

interface UserInfo {
  name?: string
  email?: string
  phone?: string
  question?: string
}

type ChatView = 'chat' | 'categories' | 'contact'

const ChatWidget: React.FC = () => {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<ChatMessage[]>([
    { 
      role: 'assistant', 
      content: 'Hello! I\'m here to help you learn about TrustConstruct. What would you like to know?',
      timestamp: new Date(),
      suggestions: popularQuestions
    }
  ])
  const [isTyping, setIsTyping] = useState(false)
  const [currentView, setCurrentView] = useState<ChatView>('chat')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [userInfo, setUserInfo] = useState<UserInfo>({})
  const [awaitingResponse, setAwaitingResponse] = useState<string | null>(null)
  const endRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (open) {
      endRef.current?.scrollIntoView({ behavior: 'smooth' })
      inputRef.current?.focus()
    }
  }, [messages, open])

  const toggleOpen = () => {
    setOpen(v => !v)
    if (!open) {
      // Reset to initial state when opening
      setCurrentView('chat')
      setSelectedCategory(null)
    }
  }

  const simulateTyping = (callback: () => void) => {
    setIsTyping(true)
    setTimeout(() => {
      setIsTyping(false)
      callback()
    }, 800 + Math.random() * 500)
  }

  const handleSuggestionClick = (suggestion: string) => {
    // Add user message
    setMessages(prev => [...prev, { 
      role: 'user', 
      content: suggestion,
      timestamp: new Date()
    }])
    
    // Process the suggestion
    simulateTyping(() => {
      processMessage(suggestion)
    })
  }

  const processMessage = (userMessage: string) => {
    const response = findResponse(userMessage)
    
    // Check if this is an unknown question
    if (response.includes("I'm not sure I understand")) {
      unknownQuestions.push({
        question: userMessage,
        timestamp: new Date(),
        userId: userInfo.email || 'anonymous'
      })
      
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: response,
        timestamp: new Date()
      }])
      
      // Automatically show contact form after unknown question
      setTimeout(() => {
        setCurrentView('contact')
        setUserInfo(prev => ({ ...prev, question: userMessage }))
      }, 1500)
    } else {
      // Add response with related suggestions
      const relatedQuestions = getRelatedQuestions(userMessage)
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: response,
        timestamp: new Date(),
        suggestions: relatedQuestions.length > 0 ? relatedQuestions : undefined
      }])
    }
  }

  const getRelatedQuestions = (question: string): string[] => {
    // Find related questions based on the current topic
    const lowercaseQ = question.toLowerCase()
    const related: string[] = []
    
    // Find which category this question might belong to
    for (const [category, questions] of Object.entries(questionCategories)) {
      for (const q of questions) {
        if (q.toLowerCase().includes(lowercaseQ) || lowercaseQ.includes(q.toLowerCase())) {
          // Add other questions from the same category
          related.push(...questions.filter(item => item !== q).slice(0, 2))
          break
        }
      }
    }
    
    return [...new Set(related)].slice(0, 3)
  }

  const handleContactSubmit = () => {
    if (!userInfo.name || !userInfo.email) {
      return
    }

    // Save contact
    userContacts.push({
      ...userInfo,
      timestamp: new Date(),
      source: 'chatbot'
    })

    // Show success message
    setMessages(prev => [...prev, {
      role: 'system',
      content: `Thank you, ${userInfo.name}! We've received your information and will contact you at ${userInfo.email} within 24 hours.`,
      timestamp: new Date()
    }])

    // Reset
    setCurrentView('chat')
    setUserInfo({})
    
    // Log for demo
    console.log('Contact collected:', userInfo)
  }

  const sendMessage = () => {
    const text = input.trim()
    if (!text) return

    // Add user message
    setMessages(prev => [...prev, { 
      role: 'user', 
      content: text,
      timestamp: new Date()
    }])
    setInput('')

    // Process with typing simulation
    simulateTyping(() => {
      processMessage(text)
    })
  }

  const renderCategoryView = () => (
    <div className="flex-1 p-4 overflow-y-auto">
      <button
        onClick={() => setCurrentView('chat')}
        className="flex items-center text-blue-600 hover:text-blue-700 mb-4"
      >
        <ChevronLeft size={16} className="mr-1" />
        Back to chat
      </button>
      
      <h3 className="font-semibold text-lg mb-4">Choose a topic:</h3>
      
      {Object.entries(questionCategories).map(([category, questions]) => (
        <div key={category} className="mb-4">
          <h4 className="font-medium text-gray-700 mb-2">{category}</h4>
          <div className="space-y-2">
            {questions.map((q, i) => (
              <button
                key={i}
                onClick={() => {
                  setCurrentView('chat')
                  handleSuggestionClick(q)
                }}
                className="w-full text-left px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition text-sm"
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  )

  const renderContactView = () => (
    <div className="flex-1 p-4 overflow-y-auto">
      <button
        onClick={() => setCurrentView('chat')}
        className="flex items-center text-blue-600 hover:text-blue-700 mb-4"
      >
        <ChevronLeft size={16} className="mr-1" />
        Back to chat
      </button>
      
      <h3 className="font-semibold text-lg mb-2">Get Personal Help</h3>
      <p className="text-gray-600 text-sm mb-4">
        Leave your contact information and our team will reach out to you within 24 hours.
      </p>
      
      {userInfo.question && (
        <div className="mb-4 p-3 bg-blue-50 rounded-lg">
          <p className="text-sm text-gray-700">
            <span className="font-medium">Your question:</span> {userInfo.question}
          </p>
        </div>
      )}
      
      <div className="space-y-3">
        <input
          type="text"
          placeholder="Your name"
          value={userInfo.name || ''}
          onChange={e => setUserInfo(prev => ({ ...prev, name: e.target.value }))}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Your email"
          value={userInfo.email || ''}
          onChange={e => setUserInfo(prev => ({ ...prev, email: e.target.value }))}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="tel"
          placeholder="Phone number (optional)"
          value={userInfo.phone || ''}
          onChange={e => setUserInfo(prev => ({ ...prev, phone: e.target.value }))}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleContactSubmit}
          disabled={!userInfo.name || !userInfo.email}
          className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Submit
        </button>
      </div>
    </div>
  )

  const renderChatView = () => (
    <>
      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50">
        {messages.map((m, i) => (
          <div key={i}>
            <div
              className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[75%] px-4 py-2 rounded-lg ${
                  m.role === 'user'
                    ? 'bg-blue-600 text-white'
                    : m.role === 'system'
                    ? 'bg-green-100 text-green-800 border border-green-200'
                    : 'bg-white text-gray-800 border border-gray-200'
                }`}
              >
                <p className="text-sm whitespace-pre-line">{m.content}</p>
                <p className={`text-xs mt-1 ${
                  m.role === 'user' ? 'text-blue-100' : 'text-gray-500'
                }`}>
                  {m.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
            
            {/* Suggestions */}
            {m.suggestions && m.suggestions.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-2 ml-12">
                {m.suggestions.map((suggestion, j) => (
                  <button
                    key={j}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="text-xs px-3 py-1 bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
        
        {/* Typing indicator */}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white px-4 py-2 rounded-lg border border-gray-200">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={endRef} />
      </div>

      {/* Input */}
      <div className="px-4 py-3 border-t bg-white">
        <div className="flex space-x-2">
          <button
            onClick={() => setCurrentView('categories')}
            className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition"
            title="Browse topics"
          >
            <HelpCircle size={20} />
          </button>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && sendMessage()}
            className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type your message..."
          />
          <button
            onClick={sendMessage}
            disabled={!input.trim()}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            <Send size={18} />
          </button>
        </div>
        <button
          onClick={() => setCurrentView('contact')}
          className="w-full mt-2 text-xs text-gray-500 hover:text-gray-700 transition"
        >
          Need personalized help? Leave your contact info
        </button>
      </div>
    </>
  )

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open ? (
        <div className="flex flex-col w-96 h-[600px] bg-white shadow-2xl rounded-lg overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-blue-600 text-white">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle size={16} />
              </div>
              <div>
                <p className="font-semibold">TrustConstruct Assistant</p>
                <p className="text-xs opacity-90">Always here to help</p>
              </div>
            </div>
            <button onClick={toggleOpen} className="hover:bg-white/20 p-1 rounded transition">
              <X size={20} />
            </button>
          </div>

          {/* Content based on current view */}
          {currentView === 'chat' && renderChatView()}
          {currentView === 'categories' && renderCategoryView()}
          {currentView === 'contact' && renderContactView()}
        </div>
      ) : (
        // Floating button with pulse animation
        <button
          onClick={toggleOpen}
          className="relative p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all hover:scale-110 flex items-center justify-center"
        >
          <MessageCircle size={28} />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
        </button>
      )}
    </div>
  )
}

export default ChatWidget