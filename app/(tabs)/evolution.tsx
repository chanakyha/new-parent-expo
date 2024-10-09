// Evolution.tsx
import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";


const Evolution = () => {
  // State to manage whether we are in overview or detail view
  const [selectedPeriod, setSelectedPeriod] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  // Data for weekly evolution (1st - 8th Week)
  const weeksData = [
    {
      week: 1,
      height: "45.7 - 55.5 cm",
      weight: "2.31 - 4.81 kg",
      briefDescription: "Your newborn in week 1",
      description:
        "Congratulations on the birth of your baby! The first week is all about adjusting to a new world. Your baby will be getting used to using all their senses, learning to breathe, and feeding.",
    },
    {
      week: 2,
      height: "46.9 - 56.8 cm",
      weight: "2.48 - 5.15 kg",
      briefDescription: "Your newborn in week 2",
      description:
        "In week 2, your baby is more stable and your body is recovering. Your baby might sleep more and show signs of personality. It's a good time to start establishing routines.",
    },
    {
      week: 3,
      height: "48.0 - 57.9 cm",
      weight: "2.70 - 5.53 kg",
      briefDescription: "Your newborn in week 3",
      description:
        'Your baby is now in the "fourth trimester." Their hormones are stabilizing, and they are becoming more alert. Crying is their way to communicate their needs.',
    },
    {
      week: 4,
      height: "49.2 - 59.1 cm",
      weight: "2.90 - 5.81 kg",
      briefDescription: "Your newborn in week 4",
      description:
        "By week 4, your baby's vision is improving, and they may start recognizing your face. They'll spend more time awake and start cooing as a way to communicate.",
    },
    {
      week: 5,
      height: "50.3 - 60.3 cm",
      weight: "3.10 - 6.12 kg",
      briefDescription: "Your newborn in week 5",
      description:
        "Week 5 is all about exploration. Your baby may be able to lift their head during tummy time and begin smiling at you. They are becoming more aware of their surroundings.",
    },
    {
      week: 6,
      height: "51.5 - 61.5 cm",
      weight: "3.30 - 6.44 kg",
      briefDescription: "Your newborn in week 6",
      description:
        "In week 6, your baby will be more interactive and responsive. They may track objects with their eyes and start to recognize your voice better.",
    },
    {
      week: 7,
      height: "52.6 - 62.7 cm",
      weight: "3.50 - 6.77 kg",
      briefDescription: "Your newborn in week 7",
      description:
        "Week 7 brings more social interaction. Your baby may laugh for the first time, and you might notice they are fascinated by bright colors and patterns.",
    },
    {
      week: 8,
      height: "53.8 - 63.9 cm",
      weight: "3.70 - 7.11 kg",
      briefDescription: "Your newborn in week 8",
      description:
        "By week 8, your baby is gaining more control over their movements. They may start reaching for objects and becoming curious about everything around them.",
    },
  ];

  // Data for monthly evolution (2nd - 12th Month)
  const monthsData = [
    {
      month: 1,
      height: "55.0 - 65.0 cm",
      weight: "3.90 - 7.45 kg",
      briefDescription: "Your baby in month 2",
      description:
        "In the second month, your baby will become more active and alert. They may start recognizing familiar faces and responding with smiles.",
    },
    {
      month: 2,
      height: "57.0 - 68.0 cm",
      weight: "4.50 - 8.00 kg",
      briefDescription: "Your baby in month 3",
      description:
        "By the third month, your baby may be able to lift their head and chest when on their stomach. They are also starting to babble and interact more with you.",
    },
    {
      month: 3,
      height: "59.0 - 70.0 cm",
      weight: "5.00 - 8.50 kg",
      briefDescription: "Your baby in month 4",
      description:
        "In month 4, your baby may be rolling over and using their hands to explore. They can express happiness and displeasure more clearly.",
    },
    {
      month: 4,
      height: "61.0 - 72.0 cm",
      weight: "5.50 - 9.00 kg",
      briefDescription: "Your baby in month 5",
      description:
        "Month 5 brings more mobility. Your baby may be able to sit with support and reach out to grab toys. They love playing with their hands and feet.",
    },
    {
      month: 5,
      height: "63.0 - 74.0 cm",
      weight: "6.00 - 9.50 kg",
      briefDescription: "Your baby in month 6",
      description:
        "By month 6, your baby may be starting to sit up on their own and may even begin to show signs of crawling. This is a good time to introduce solid foods.",
    },
    {
      month: 6,
      height: "65.0 - 76.0 cm",
      weight: "6.50 - 10.00 kg",
      briefDescription: "Your baby in month 7",
      description:
        'In month 7, your baby may start babbling more, saying "mama" or "dada" without knowing their meaning. They might be moving around more confidently.',
    },
    {
      month: 7,
      height: "67.0 - 78.0 cm",
      weight: "7.00 - 10.50 kg",
      briefDescription: "Your baby in month 8",
      description:
        "Month 8 brings more independence. Your baby may be pulling up to stand, crawling, and exploring their environment actively.",
    },
    {
      month: 8,
      height: "69.0 - 80.0 cm",
      weight: "7.50 - 11.00 kg",
      briefDescription: "Your baby in month 9",
      description:
        "By month 9, your baby is probably very mobile and might be walking with support. They understand simple instructions and love playing games.",
    },
    {
      month: 9,
      height: "71.0 - 82.0 cm",
      weight: "8.00 - 11.50 kg",
      briefDescription: "Your baby in month 10",
      description:
        "In month 10, your baby is developing more communication skills and may use gestures to communicate. They may also try to imitate your words.",
    },
    {
      month: 10,
      height: "73.0 - 84.0 cm",
      weight: "8.50 - 12.00 kg",
      briefDescription: "Your baby in month 11",
      description:
        "Month 11 is a time for more fine motor skill development. Your baby may try to feed themselves and show preference for certain toys.",
    },
    {
      month: 11,
      height: "75.0 - 86.0 cm",
      weight: "9.00 - 12.50 kg",
      briefDescription: "Your baby in month 12",
      description:
        "Congratulations! Your baby has completed one full year of growth and development. They might be walking and speaking a few words, and they love exploring their world!",
    },
  ];

  // Function to switch back to overview
  const handleBackToOverview = () => {
    setSelectedPeriod(null);
    setSelectedIndex(0);
  };

  return (
    <View className="flex-1 bg-white">
      {/* Conditional rendering: Overview or Detail view */}
      {!selectedPeriod ? (
        <View className="p-4">
          <Text className="text-xl font-semibold text-gray-800 mb-4">
            Evolution
          </Text>
          <View className="flex-row justify-between">
            <TouchableOpacity
              className="w-1/2 p-2 border rounded-lg border-gray-200"
              onPress={() => setSelectedPeriod("weeks")}
            >
              <Text className="text-center text-lg font-medium">
                1st - 8th Week
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="w-1/2 p-2 border rounded-lg border-gray-200"
              onPress={() => setSelectedPeriod("months")}
            >
              <Text className="text-center text-lg font-medium">
                2nd - 12th Month
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <ScrollView className="flex-1 p-4">
          {/* Back button */}
          <TouchableOpacity
            className="p-2 bg-gray-200 rounded-full mb-4"
            onPress={handleBackToOverview}
          >
            <Text className="text-xl text-center">X</Text>
          </TouchableOpacity>

          {/* Header */}
          <Text className="text-2xl font-bold text-center mb-4">
            Evolution -{" "}
            {selectedPeriod === "weeks" ? "1st - 8th Week" : "2nd - 12th Month"}
          </Text>

          {/* Week/Month Selection */}
          <View className="flex-row justify-between items-center mb-4">
            {Array.from(
              {
                length:
                  selectedPeriod === "weeks"
                    ? weeksData.length
                    : monthsData.length,
              },
              (_, index) => (
                <TouchableOpacity
                  key={index}
                  className={`w-10 h-10 rounded-full ${
                    selectedIndex === index ? "bg-blue-500" : "bg-gray-300"
                  } flex items-center justify-center`}
                  onPress={() => setSelectedIndex(index)}
                >
                  <Text
                    className={`${
                      selectedIndex === index ? "text-white" : "text-gray-700"
                    }`}
                  >
                    {selectedPeriod === "weeks" ? index + 1 : index + 2}
                  </Text>
                </TouchableOpacity>
              )
            )}
          </View>

          {/* Information Display */}
          <View className="bg-gray-100 rounded-lg p-4 mb-4">
            <Text className="text-lg font-semibold">
              {selectedPeriod === "weeks"
                ? weeksData[selectedIndex].briefDescription
                : monthsData[selectedIndex].briefDescription}
            </Text>
            <Text className="mt-2">
              Height:{" "}
              {selectedPeriod === "weeks"
                ? weeksData[selectedIndex].height
                : monthsData[selectedIndex].height}
            </Text>
            <Text className="mt-1">
              Weight:{" "}
              {selectedPeriod === "weeks"
                ? weeksData[selectedIndex].weight
                : monthsData[selectedIndex].weight}
            </Text>
          </View>

          {/* Description */}
          <Text className="text-gray-700 leading-relaxed mb-4">
            {selectedPeriod === "weeks"
              ? weeksData[selectedIndex].description
              : monthsData[selectedIndex].description}
          </Text>
        </ScrollView>
      )}
    </View>
  );
};

export default Evolution;
