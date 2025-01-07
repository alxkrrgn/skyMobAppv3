import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Animated, Easing } from 'react-native';
import styles from './CardContainer.styles';

const CardContainer = () => {
  const [flipped, setFlipped] = useState({});

  const toggleFlip = (index) => {
    setFlipped((prevFlipped) => ({
      ...prevFlipped,
      [index]: !prevFlipped[index],
    }));
  };

  const cardData = [
    {
      frontTitle: 'Sound Investments',
      frontSubtitle: 'Based on Research',
      backText: 'And Market Analysis',
    },
    {
      frontTitle: 'Market Research',
      frontSubtitle: 'Comprehensive Insights',
      backText: 'For Smarter Investments',
    },
    {
      frontTitle: 'Winning Strategies',
      frontSubtitle: 'Powered by AI',
      backText: 'To Outperform Markets',
    },
    {
      frontTitle: 'Risk Management',
      frontSubtitle: 'Hedge Strategies',
      backText: 'For Downside Protection',
    },
  ];

  return (
    <View style={styles.cardContainer}>
      {cardData.map((card, index) => {
        const flipAnimation = flipped[index]
          ? { transform: [{ rotateY: '180deg' }] }
          : { transform: [{ rotateY: '0deg' }] };

        return (
          <View key={index} style={styles.card}>
            <Animated.View style={[styles.cardInner, flipAnimation]}>
              <View style={styles.cardFront}>
                <Text style={styles.heading}>{card.frontTitle}</Text>
                <Text style={styles.subHeading}>{card.frontSubtitle}</Text>
                <Text>{card.backText}</Text>
                <TouchableOpacity style={styles.button} onPress={() => toggleFlip(index)}>
                  <Text style={styles.buttonText}>Learn More</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.cardBack}>
                <Text style={styles.heading}>{card.frontTitle}</Text>
                <Text style={styles.subHeading}>{card.backText}</Text>
                <TouchableOpacity style={styles.button} onPress={() => toggleFlip(index)}>
                  <Text style={styles.buttonText}>Go Back</Text>
                </TouchableOpacity>
              </View>
            </Animated.View>
          </View>
        );
      })}
    </View>
  );
};

export default CardContainer;
