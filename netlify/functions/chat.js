// Вариант 1: С библиотекой OpenAI (если она установлена)
/*
import OpenAI from "openai";

export async function handler(event, context) {
  // CORS заголовки для всех ответов
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Content-Type": "application/json"
  };

  // Обработка preflight запросов
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers,
      body: ""
    };
  }

  // Проверяем метод запроса
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: "Method not allowed" })
    };
  }

  try {
    // Проверяем наличие API ключа
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      console.error("OPENAI_API_KEY не найден в переменных окружения");
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ 
          role: "assistant",
          content: "I'm sorry, the chat service is not properly configured. Please contact support." 
        })
      };
    }

    // Парсим тело запроса
    const { messages } = JSON.parse(event.body);
    console.log("Получен запрос с", messages.length, "сообщениями");

    // Создаем клиент OpenAI
    const openai = new OpenAI({
      apiKey: apiKey,
    });

    // Делаем запрос к OpenAI
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: messages,
      temperature: 0.7,
      max_tokens: 200, // Ограничиваем для скорости
    });

    console.log("Ответ от OpenAI получен");

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(completion.choices[0].message)
    };

  } catch (error) {
    console.error("Ошибка:", error.message);
    console.error("Стек:", error.stack);
    
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        role: "assistant",
        content: "I apologize, but I'm having technical difficulties. Please try again in a moment." 
      })
    };
  }
}
*/

// Вариант 2: Без библиотеки OpenAI (более надежный)
export async function handler(event, context) {
  // CORS заголовки
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Content-Type": "application/json"
  };

  // Обработка OPTIONS запроса
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  // Только POST запросы
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: "Method not allowed" })
    };
  }

  try {
    // Проверяем API ключ
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      console.error("API key missing");
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          role: "assistant",
          content: "Chat service is not configured. Please check environment variables."
        })
      };
    }

    // Парсим запрос
    const { messages } = JSON.parse(event.body);
    console.log(`Processing request with ${messages.length} messages`);

    // Запрос к OpenAI API напрямую
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: messages,
        temperature: 0.7,
        max_tokens: 200,
        // Добавляем таймаут для ускорения ответа
        stream: false
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`OpenAI API error: ${response.status} - ${errorText}`);
      
      // Специальная обработка разных ошибок
      if (response.status === 401) {
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({
            role: "assistant",
            content: "Authentication error. Please check the API key configuration."
          })
        };
      } else if (response.status === 429) {
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({
            role: "assistant",
            content: "Rate limit exceeded. Please try again in a few moments."
          })
        };
      }
      
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    console.log("Successfully received OpenAI response");
    
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(data.choices[0].message)
    };

  } catch (error) {
    console.error("Function error:", error.message);
    
    // Возвращаем пользователю понятное сообщение
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        role: "assistant",
        content: "I'm experiencing technical difficulties. Please try again shortly."
      })
    };
  }
}