// src/components/AdminPanel.tsx
import React, { useState, useEffect } from 'react'
import { 
  MessageSquare, 
  Users, 
  Plus, 
  Trash2, 
  Edit, 
  Save,
  X,
  Download,
  Search,
  Filter
} from 'lucide-react'

// Импортируем данные из нашей базы
// В реальном приложении это были бы API запросы
interface ChatbotResponse {
  key: string
  response: string
}

interface UnknownQuestion {
  question: string
  timestamp: Date
  userId: string
}

interface UserContact {
  name?: string
  email?: string
  phone?: string
  timestamp: Date
  source: string
}

const AdminPanel: React.FC = () => {
  // Состояния для управления данными
  const [responses, setResponses] = useState<ChatbotResponse[]>([])
  const [unknownQuestions, setUnknownQuestions] = useState<UnknownQuestion[]>([])
  const [contacts, setContacts] = useState<UserContact[]>([])
  
  // Состояния для UI
  const [activeTab, setActiveTab] = useState<'responses' | 'questions' | 'contacts'>('responses')
  const [editingId, setEditingId] = useState<string | null>(null)
  const [newResponse, setNewResponse] = useState({ key: '', response: '' })
  const [searchTerm, setSearchTerm] = useState('')
  const [isAddingNew, setIsAddingNew] = useState(false)

  // Загрузка данных при монтировании
  useEffect(() => {
    loadData()
  }, [])

  const loadData = () => {
    // В реальном приложении здесь были бы API запросы
    // Сейчас загружаем из localStorage для демонстрации
    const savedResponses = localStorage.getItem('chatbotResponses')
    const savedQuestions = localStorage.getItem('unknownQuestions')
    const savedContacts = localStorage.getItem('userContacts')

    if (savedResponses) setResponses(JSON.parse(savedResponses))
    if (savedQuestions) setUnknownQuestions(JSON.parse(savedQuestions))
    if (savedContacts) setContacts(JSON.parse(savedContacts))
  }

  const saveData = () => {
    // Сохраняем в localStorage (в реальном приложении - API запрос)
    localStorage.setItem('chatbotResponses', JSON.stringify(responses))
    localStorage.setItem('unknownQuestions', JSON.stringify(unknownQuestions))
    localStorage.setItem('userContacts', JSON.stringify(contacts))
  }

  // Управление ответами бота
  const addResponse = () => {
    if (newResponse.key && newResponse.response) {
      setResponses([...responses, { ...newResponse }])
      setNewResponse({ key: '', response: '' })
      setIsAddingNew(false)
      saveData()
    }
  }

  const updateResponse = (key: string, newText: string) => {
    setResponses(responses.map(r => 
      r.key === key ? { ...r, response: newText } : r
    ))
    setEditingId(null)
    saveData()
  }

  const deleteResponse = (key: string) => {
    if (confirm('Are you sure you want to delete this response?')) {
      setResponses(responses.filter(r => r.key !== key))
      saveData()
    }
  }

  // Конвертация неизвестного вопроса в ответ
  const convertQuestionToResponse = (question: UnknownQuestion) => {
    const key = prompt('Enter a key for this response (e.g., "product info"):')
    const response = prompt('Enter the response for this question:')
    
    if (key && response) {
      setResponses([...responses, { key, response }])
      setUnknownQuestions(unknownQuestions.filter(q => q.question !== question.question))
      saveData()
    }
  }

  // Экспорт контактов
  const exportContacts = () => {
    const csvContent = 'data:text/csv;charset=utf-8,' 
      + 'Name,Email,Phone,Date,Source\n'
      + contacts.map(c => 
          `${c.name || ''},${c.email || ''},${c.phone || ''},${new Date(c.timestamp).toLocaleDateString()},${c.source}`
        ).join('\n')
    
    const encodedUri = encodeURI(csvContent)
    const link = document.createElement('a')
    link.setAttribute('href', encodedUri)
    link.setAttribute('download', 'contacts.csv')
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // Фильтрация по поиску
  const filteredResponses = responses.filter(r => 
    r.key.toLowerCase().includes(searchTerm.toLowerCase()) ||
    r.response.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
            Chatbot Admin Panel
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage responses, review questions, and export contacts
          </p>
        </div>

        {/* Tabs */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md mb-6">
          <div className="flex border-b dark:border-gray-700">
            <button
              onClick={() => setActiveTab('responses')}
              className={`flex-1 px-6 py-4 flex items-center justify-center space-x-2 transition ${
                activeTab === 'responses'
                  ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-b-2 border-blue-600'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              <MessageSquare size={20} />
              <span>Responses ({responses.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('questions')}
              className={`flex-1 px-6 py-4 flex items-center justify-center space-x-2 transition ${
                activeTab === 'questions'
                  ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-b-2 border-blue-600'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              <Filter size={20} />
              <span>Unknown Questions ({unknownQuestions.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('contacts')}
              className={`flex-1 px-6 py-4 flex items-center justify-center space-x-2 transition ${
                activeTab === 'contacts'
                  ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-b-2 border-blue-600'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              <Users size={20} />
              <span>Contacts ({contacts.length})</span>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          {/* Responses Tab */}
          {activeTab === 'responses' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <div className="flex-1 max-w-md">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      placeholder="Search responses..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </div>
                </div>
                <button
                  onClick={() => setIsAddingNew(true)}
                  className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2"
                >
                  <Plus size={20} />
                  <span>Add Response</span>
                </button>
              </div>

              {/* Add New Response Form */}
              {isAddingNew && (
                <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h3 className="font-semibold mb-3">Add New Response</h3>
                  <div className="space-y-3">
                    <input
                      type="text"
                      placeholder="Key (e.g., 'pricing', 'contact')"
                      value={newResponse.key}
                      onChange={(e) => setNewResponse({ ...newResponse, key: e.target.value })}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                    <textarea
                      placeholder="Response text..."
                      value={newResponse.response}
                      onChange={(e) => setNewResponse({ ...newResponse, response: e.target.value })}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white h-24"
                    />
                    <div className="flex space-x-2">
                      <button
                        onClick={addResponse}
                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center space-x-2"
                      >
                        <Save size={16} />
                        <span>Save</span>
                      </button>
                      <button
                        onClick={() => {
                          setIsAddingNew(false)
                          setNewResponse({ key: '', response: '' })
                        }}
                        className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 flex items-center space-x-2"
                      >
                        <X size={16} />
                        <span>Cancel</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Responses List */}
              <div className="space-y-3">
                {filteredResponses.map((response) => (
                  <div key={response.key} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">
                          {response.key}
                        </h4>
                        {editingId === response.key ? (
                          <textarea
                            value={response.response}
                            onChange={(e) => {
                              setResponses(responses.map(r => 
                                r.key === response.key ? { ...r, response: e.target.value } : r
                              ))
                            }}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                            rows={3}
                          />
                        ) : (
                          <p className="text-gray-700 dark:text-gray-300">{response.response}</p>
                        )}
                      </div>
                      <div className="flex space-x-2 ml-4">
                        {editingId === response.key ? (
                          <>
                            <button
                              onClick={() => updateResponse(response.key, response.response)}
                              className="p-2 text-green-600 hover:bg-green-100 dark:hover:bg-green-900/20 rounded"
                            >
                              <Save size={16} />
                            </button>
                            <button
                              onClick={() => setEditingId(null)}
                              className="p-2 text-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600 rounded"
                            >
                              <X size={16} />
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              onClick={() => setEditingId(response.key)}
                              className="p-2 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/20 rounded"
                            >
                              <Edit size={16} />
                            </button>
                            <button
                              onClick={() => deleteResponse(response.key)}
                              className="p-2 text-red-600 hover:bg-red-100 dark:hover:bg-red-900/20 rounded"
                            >
                              <Trash2 size={16} />
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Unknown Questions Tab */}
          {activeTab === 'questions' && (
            <div>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                These are questions users asked that the bot couldn't answer. Convert them to responses to improve the bot.
              </p>
              <div className="space-y-3">
                {unknownQuestions.length === 0 ? (
                  <p className="text-center text-gray-500 py-8">No unknown questions yet!</p>
                ) : (
                  unknownQuestions.map((question, index) => (
                    <div key={index} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <p className="font-medium text-gray-800 dark:text-white mb-1">
                            "{question.question}"
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Asked by: {question.userId} • {new Date(question.timestamp).toLocaleString()}
                          </p>
                        </div>
                        <button
                          onClick={() => convertQuestionToResponse(question)}
                          className="ml-4 px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
                        >
                          Convert to Response
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {/* Contacts Tab */}
          {activeTab === 'contacts' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <p className="text-gray-600 dark:text-gray-400">
                  User contacts collected through the chatbot
                </p>
                <button
                  onClick={exportContacts}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center space-x-2"
                >
                  <Download size={20} />
                  <span>Export CSV</span>
                </button>
              </div>
              
              {contacts.length === 0 ? (
                <p className="text-center text-gray-500 py-8">No contacts collected yet!</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b dark:border-gray-700">
                        <th className="text-left py-3 px-4">Name</th>
                        <th className="text-left py-3 px-4">Email</th>
                        <th className="text-left py-3 px-4">Phone</th>
                        <th className="text-left py-3 px-4">Date</th>
                        <th className="text-left py-3 px-4">Source</th>
                      </tr>
                    </thead>
                    <tbody>
                      {contacts.map((contact, index) => (
                        <tr key={index} className="border-b dark:border-gray-700">
                          <td className="py-3 px-4">{contact.name || '-'}</td>
                          <td className="py-3 px-4">{contact.email || '-'}</td>
                          <td className="py-3 px-4">{contact.phone || '-'}</td>
                          <td className="py-3 px-4">{new Date(contact.timestamp).toLocaleDateString()}</td>
                          <td className="py-3 px-4">{contact.source}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AdminPanel