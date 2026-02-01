const zodiacSigns = [
    {
      "id": 1,
      "name": "Aries",
      "symbol": "♈",
      "dateRange": "March 21 - April 19",
      "element": "Fire",
      "rulingPlanet": "Mars",
      "traits": {
        "positive": ["Confident", "Energetic", "Brave"],
        "negative": ["Impulsive", "Short-tempered"]
      },
      "dailyHoroscope": {
        "prediction": "Today is a good day to take initiative and trust yourself.",
        "luckyNumber": 9,
        "luckyColor": "Red",
        "mood": "Motivated"
      },
      "compatibility": {
        "bestMatch": ["Leo", "Sagittarius"],
        "worstMatch": ["Cancer"]
      }
    },
    {
      "id": 2,
      "name": "Taurus",
      "symbol": "♉",
      "dateRange": "April 20 - May 20",
      "element": "Earth",
      "rulingPlanet": "Venus",
      "traits": {
        "positive": ["Reliable", "Patient", "Loyal"],
        "negative": ["Stubborn", "Possessive"]
      },
      "dailyHoroscope": {
        "prediction": "Focus on stability and avoid unnecessary arguments.",
        "luckyNumber": 6,
        "luckyColor": "Green",
        "mood": "Calm"
      },
      "compatibility": {
        "bestMatch": ["Virgo", "Capricorn"],
        "worstMatch": ["Aquarius"]
      }
    },
    {
      "id": 3,
      "name": "Gemini",
      "symbol": "♊",
      "dateRange": "May 21 - June 20",
      "element": "Air",
      "rulingPlanet": "Mercury",
      "traits": {
        "positive": ["Adaptable", "Communicative", "Curious"],
        "negative": ["Indecisive", "Restless"]
      },
      "dailyHoroscope": {
        "prediction": "Communication will open new doors today.",
        "luckyNumber": 5,
        "luckyColor": "Yellow",
        "mood": "Cheerful"
      },
      "compatibility": {
        "bestMatch": ["Libra", "Aquarius"],
        "worstMatch": ["Pisces"]
      }
    },
    {
      "id": 4,
      "name": "Cancer",
      "symbol": "♋",
      "dateRange": "June 21 - July 22",
      "element": "Water",
      "rulingPlanet": "Moon",
      "traits": {
        "positive": ["Caring", "Emotional", "Protective"],
        "negative": ["Moody", "Over-sensitive"]
      },
      "dailyHoroscope": {
        "prediction": "Spend time with loved ones for emotional balance.",
        "luckyNumber": 2,
        "luckyColor": "White",
        "mood": "Emotional"
      },
      "compatibility": {
        "bestMatch": ["Scorpio", "Pisces"],
        "worstMatch": ["Aries"]
      }
    },
    {
      "id": 5,
      "name": "Leo",
      "symbol": "♌",
      "dateRange": "July 23 - August 22",
      "element": "Fire",
      "rulingPlanet": "Sun",
      "traits": {
        "positive": ["Confident", "Leader", "Generous"],
        "negative": ["Egoistic", "Dominating"]
      },
      "dailyHoroscope": {
        "prediction": "Your confidence will attract positive attention.",
        "luckyNumber": 1,
        "luckyColor": "Gold",
        "mood": "Bold"
      },
      "compatibility": {
        "bestMatch": ["Aries", "Sagittarius"],
        "worstMatch": ["Taurus"]
      }
    },
    {
      "id": 6,
      "name": "Virgo",
      "symbol": "♍",
      "dateRange": "August 23 - September 22",
      "element": "Earth",
      "rulingPlanet": "Mercury",
      "traits": {
        "positive": ["Analytical", "Practical", "Helpful"],
        "negative": ["Overcritical", "Perfectionist"]
      },
      "dailyHoroscope": {
        "prediction": "Pay attention to details to avoid mistakes.",
        "luckyNumber": 4,
        "luckyColor": "Brown",
        "mood": "Focused"
      },
      "compatibility": {
        "bestMatch": ["Taurus", "Capricorn"],
        "worstMatch": ["Sagittarius"]
      }
    },
    {
      "id": 7,
      "name": "Libra",
      "symbol": "♎",
      "dateRange": "September 23 - October 22",
      "element": "Air",
      "rulingPlanet": "Venus",
      "traits": {
        "positive": ["Balanced", "Charming", "Fair"],
        "negative": ["Indecisive", "People-pleaser"]
      },
      "dailyHoroscope": {
        "prediction": "Seek balance in decisions today.",
        "luckyNumber": 7,
        "luckyColor": "Blue",
        "mood": "Peaceful"
      },
      "compatibility": {
        "bestMatch": ["Gemini", "Aquarius"],
        "worstMatch": ["Cancer"]
      }
    },
    {
      "id": 8,
      "name": "Scorpio",
      "symbol": "♏",
      "dateRange": "October 23 - November 21",
      "element": "Water",
      "rulingPlanet": "Pluto",
      "traits": {
        "positive": ["Passionate", "Focused", "Loyal"],
        "negative": ["Jealous", "Secretive"]
      },
      "dailyHoroscope": {
        "prediction": "Trust your intuition today.",
        "luckyNumber": 8,
        "luckyColor": "Black",
        "mood": "Intense"
      },
      "compatibility": {
        "bestMatch": ["Cancer", "Pisces"],
        "worstMatch": ["Leo"]
      }
    },
    {
      "id": 9,
      "name": "Sagittarius",
      "symbol": "♐",
      "dateRange": "November 22 - December 21",
      "element": "Fire",
      "rulingPlanet": "Jupiter",
      "traits": {
        "positive": ["Optimistic", "Adventurous", "Honest"],
        "negative": ["Careless", "Impatient"]
      },
      "dailyHoroscope": {
        "prediction": "Adventure and learning are highlighted today.",
        "luckyNumber": 3,
        "luckyColor": "Purple",
        "mood": "Excited"
      },
      "compatibility": {
        "bestMatch": ["Aries", "Leo"],
        "worstMatch": ["Virgo"]
      }
    },
    {
      "id": 10,
      "name": "Capricorn",
      "symbol": "♑",
      "dateRange": "December 22 - January 19",
      "element": "Earth",
      "rulingPlanet": "Saturn",
      "traits": {
        "positive": ["Disciplined", "Responsible", "Ambitious"],
        "negative": ["Pessimistic", "Rigid"]
      },
      "dailyHoroscope": {
        "prediction": "Hard work will bring rewards.",
        "luckyNumber": 10,
        "luckyColor": "Grey",
        "mood": "Determined"
      },
      "compatibility": {
        "bestMatch": ["Taurus", "Virgo"],
        "worstMatch": ["Aries"]
      }
    },
    {
      "id": 11,
      "name": "Aquarius",
      "symbol": "♒",
      "dateRange": "January 20 - February 18",
      "element": "Air",
      "rulingPlanet": "Uranus",
      "traits": {
        "positive": ["Innovative", "Independent", "Humanitarian"],
        "negative": ["Detached", "Unpredictable"]
      },
      "dailyHoroscope": {
        "prediction": "New ideas may bring exciting opportunities.",
        "luckyNumber": 11,
        "luckyColor": "Sky Blue",
        "mood": "Creative"
      },
      "compatibility": {
        "bestMatch": ["Gemini", "Libra"],
        "worstMatch": ["Taurus"]
      }
    },
    {
      "id": 12,
      "name": "Pisces",
      "symbol": "♓",
      "dateRange": "February 19 - March 20",
      "element": "Water",
      "rulingPlanet": "Neptune",
      "traits": {
        "positive": ["Compassionate", "Artistic", "Intuitive"],
        "negative": ["Over-emotional", "Escapist"]
      },
      "dailyHoroscope": {
        "prediction": "Follow your intuition and avoid negativity.",
        "luckyNumber": 12,
        "luckyColor": "Sea Green",
        "mood": "Dreamy"
      },
      "compatibility": {
        "bestMatch": ["Cancer", "Scorpio"],
        "worstMatch": ["Gemini"]
      }
    }
  ]