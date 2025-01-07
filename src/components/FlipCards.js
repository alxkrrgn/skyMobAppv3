import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './FlipCards.styles'; // Import the new styles

const FlipCards = () => {
  const [flippedCards, setFlippedCards] = useState({}); // Track flip states for cards by index

  const toggleFlip = (index) => {
    setFlippedCards((prevFlipped) => ({
      ...prevFlipped,
      [index]: !prevFlipped[index], // Toggle the flip state for the specific card
    }));
  };

  const cardData = [
    {
      frontTitle: "Invest Better",
      frontSubtitle: "With Confidence",
      backText:
        "We leverage mathematical and statistical methods, quantitative analysis, and artificial intelligence in both the design and execution of our investment programs.",
    },
    {
      frontTitle: "Better Investing",
      frontSubtitle: "Through Research",
      backText:
        "Our dedicated research efforts help uncover opportunities and manage risks for consistent performance.",
    },
    {
      frontTitle: "Sound Strategies",
      frontSubtitle: "By Analytics & AI",
      backText:
        "We use cutting-edge analytics and AI tools to develop strategies for optimal results.",
    },
    {
      frontTitle: "Risk Assessment",
      frontSubtitle: "Technical Analysis",
      backText:
        "Our technical analysis provides critical insights into market trends and risk management.",
    },
  ];

  return (
    <View style={styles.cardContainer}>
      {cardData.map((card, index) => (
        <View
          key={index}
          style={[
            styles.card,
            flippedCards[index] && styles.cardFlipped,
          ]}
        >
          <View style={styles.cardInner}>
            <View style={styles.cardFront}>
              <Text>{card.frontTitle}</Text>
              <Text>{card.frontSubtitle}</Text>
              <TouchableOpacity style={styles.button} onPress={() => toggleFlip(index)}>
                <Text style={styles.buttonText}>Learn More</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.cardBack}>
              <Text>{card.backText}</Text>
              <TouchableOpacity style={styles.button} onPress={() => toggleFlip(index)}>
                <Text style={styles.buttonText}>Go Back</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

export default FlipCards;


