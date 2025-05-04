type Rule = {
  patterns: RegExp[];
  responses: string[];
  condition?: (input: string) => boolean;
};

// Rules for the chatbot
const rules: Rule[] = [
  // Greetings
  {
    patterns: [
      /\b(?:hi|hello|hey|greetings|howdy|sup)\b/i,
    ],
    responses: [
      "Hello there! How can I help you today?",
      "Hi! How are you doing?",
      "Hey! What can I do for you?",
      "Greetings! How may I assist you today?"
    ],
  },
  
  // Identity questions
  {
    patterns: [
      /who (?:are|r) (?:you|u)/i,
      /what (?:are|r) (?:you|u)/i,
      /your name/i,
    ],
    responses: [
      "I'm a simple rule-based chatbot created as a demonstration.",
      "I'm ChatBot, a rule-based conversational agent. I use pattern matching to respond to your queries.",
      "Just a friendly chatbot programmed to respond to certain patterns in text."
    ],
  },

  // How are you
  {
    patterns: [
      /how (?:are|r) (?:you|u)/i,
      /how(?:'re| are) you doing/i,
      /what(?:'s| is) up/i,
    ],
    responses: [
      "I'm doing great! Thanks for asking. How about you?",
      "I'm just a program, but I'm functioning well. How are you?",
      "All systems operational! How's your day going?",
      "I don't have feelings, but I'm working properly. How about yourself?"
    ],
  },
  
  // Weather
  {
    patterns: [
      /weather/i,
      /what(?:'s| is) it like outside/i,
      /temperature/i,
      /is it (?:raining|hot|cold|warm|sunny)/i,
    ],
    responses: [
      "I don't have access to real-time weather data. You might want to check a weather app or website for that information.",
      "I can't look outside to check the weather, unfortunately. Try asking a weather service!",
      "Sorry, I don't have the capability to check the weather. Maybe try looking out the window?",
      "As a simple chatbot, I don't have access to weather information. Would you like to talk about something else?"
    ],
  },
  
  // Jokes
  {
    patterns: [
      /tell (?:me )?a joke/i,
      /(?:know|got) (?:any )?jokes/i,
      /be funny/i,
      /make me laugh/i,
    ],
    responses: [
      "Why don't scientists trust atoms? Because they make up everything!",
      "What's the best thing about Switzerland? I don't know, but the flag is a big plus!",
      "Why did the scarecrow win an award? Because he was outstanding in his field!",
      "I told my wife she was drawing her eyebrows too high. She looked surprised!",
      "What do you call a fake noodle? An impasta!",
      "Why couldn't the bicycle stand up by itself? It was two tired!"
    ],
  },
  
  // Thank you
  {
    patterns: [
      /thank(?:s| you)/i,
      /appreciate it/i,
      /thx/i,
    ],
    responses: [
      "You're welcome!",
      "Happy to help!",
      "Anytime!",
      "No problem at all!",
      "My pleasure!"
    ],
  },
  
  // Goodbye
  {
    patterns: [
      /bye/i,
      /goodbye/i,
      /see you/i,
      /farewell/i,
      /later/i,
      /have (?:a )(?:good|nice) day/i,
    ],
    responses: [
      "Goodbye! Feel free to chat again anytime.",
      "See you later! Have a great day!",
      "Bye! Come back soon!",
      "Farewell! It was nice chatting with you."
    ],
  },
  
  // Help
  {
    patterns: [
      /help/i,
      /can you help/i,
      /assist/i,
      /support/i,
      /what can you do/i,
    ],
    responses: [
      "I can answer simple questions and have conversations based on predefined rules. Try asking me about myself, for a joke, or just chat!",
      "I'm programmed to respond to certain patterns in text. You can try greeting me, asking for a joke, or asking about what I can do.",
      "As a rule-based chatbot, I can respond to common questions and phrases. Feel free to experiment and see what I can understand!",
      "I can chat about several topics using pattern matching. Try asking me for a joke or about who I am!"
    ],
  },

  // Time queries
  {
    patterns: [
      /what time/i,
      /current time/i,
      /what(?:'s| is) the time/i,
    ],
    responses: [
      "I don't have access to real-time clock data. Check your device's time display!",
      "Sorry, I can't tell you the current time. I'm just a simple rule-based chatbot.",
      "I don't know what time it is where you are. Maybe check your phone or computer clock?",
      "Time queries are beyond my capabilities as a simple demo bot."
    ],
  },
  
  // How does this work
  {
    patterns: [
      /how do(?:es)? (?:this|you|it) work/i,
      /explain how you work/i,
      /(?:what|which) technology/i,
      /how (?:are|were) you (?:made|built|created|programmed|developed)/i,
    ],
    responses: [
      "I work using simple pattern matching rules. When you send a message, I check if it matches any patterns in my rule database and respond accordingly.",
      "I'm a rule-based chatbot. I use regular expressions to match your input against predefined patterns and select responses.",
      "I'm built using JavaScript/TypeScript with React. My responses are determined by pattern matching against a set of rules defined by my creator."
    ],
  },
  
  // Age
  {
    patterns: [
      /how old (?:are|r) (?:you|u)/i,
      /what(?:'s| is) your age/i,
      /when (?:were|was) (?:you|u) (?:created|made|built)/i,
    ],
    responses: [
      "I was created just for this demonstration, so I'm pretty new!",
      "I don't have an age in the traditional sense. I'm just some code running on a server.",
      "I was born when someone hit the 'build' button!",
      "Age is just a number, and in my case, it's probably measured in milliseconds since the page loaded."
    ],
  }
];

// Fallback responses when no rule matches
const fallbackResponses = [
  "I'm not sure I understand. Could you rephrase that?",
  "Hmm, I don't have a specific response for that. Is there something else I can help with?",
  "I don't know how to respond to that yet. I'm just a simple rule-based bot.",
  "That's beyond my understanding. Try asking me something else?",
  "I didn't quite catch that. Could you try asking me something different?",
  "I'm still learning! That query doesn't match any of my rules yet."
];

/**
 * Get a response for a user message based on the predefined rules
 */
export function getResponseForMessage(message: string): string {
  // Check each rule
  for (const rule of rules) {
    // Check if any pattern matches
    const isMatch = rule.patterns.some(pattern => pattern.test(message));
    
    // If there's a condition function, also check that
    const conditionMet = rule.condition ? rule.condition(message) : true;
    
    if (isMatch && conditionMet) {
      // Select a random response from the matching rule's responses
      const randomIndex = Math.floor(Math.random() * rule.responses.length);
      return rule.responses[randomIndex];
    }
  }
  
  // If no rule matched, return a random fallback response
  const randomIndex = Math.floor(Math.random() * fallbackResponses.length);
  return fallbackResponses[randomIndex];
}
