import React, { useState } from 'react';
import { View, Text, FlatList, Switch, Image, TouchableOpacity, Linking } from 'react-native';
import * as Clipboard from 'expo-clipboard'; // Import Clipboard API
import { styles } from './styles/styles';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  const theme = {
    background: darkMode ? '#1E1E1E' : '#F8F9FA',
    text: darkMode ? '#EAEAEA' : '#212121',
    card: darkMode ? '#2D2D2D' : '#FFFFFF',
    border: darkMode ? '#444' : '#DDD',
    accent: darkMode ? '#BB86FC' : '#6200EE',
  };

  const phoneNumber = '09958402669';
  const email = 'xavier_gelligan@dlsl.edu.ph';

  // Function to copy number to clipboard
  const copyToClipboard = (text:string) => {
    Clipboard.setStringAsync(text);
  };

  const projects = [
    { id: '1', title: 'Portfolio Website', description: 'A convenient event management planner for customers, hosts, and admin', link: 'https://github.com/jiro1106/final-project-group-2-webdevt', logo: require('./assets/xtravagala.png') },
    { id: '2', title: 'Inventory System', description: 'A fully functional inventory system for a startup business/company', link: 'https://github.com/Sabyer01/midterm-project-react', logo: require('./assets/inventory.png') },
    { id: '3', title: 'Todo App', description: 'A simple todo app reminder for personal tasks or errands', link: 'https://github.com/Sabyer01/todo-app', logo: require('./assets/task.png') },
  ];

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>

      {/* Profile Section */}
      <Image source={require('./assets/profile.jpg')} style={styles.profileImage} />
      <Text style={[styles.name, { color: theme.text }]}>Xavier Gelligan</Text>
      <Text style={[styles.bio, { color: theme.text }]}>A 20 year-old aspiring web and mobile developer. I love learning new things and experimenting with new technologies, especially pushing myself to the limit.</Text>

      {/* Skills Section Inside a Card */}
      <View style={[styles.card, { backgroundColor: theme.card, borderColor: theme.border, marginTop: 30 }]}>
        <Text style={[{ color: theme.text, textAlign: 'center', fontSize: 23, fontWeight: 'bold', marginTop: -5, marginBottom: 10 }]}>Skills</Text>
        <Text style={[styles.text, { color: theme.text }]}> Programming: Basic C++ Coding, HTML/CSS/JS</Text>
        <Text style={[styles.text, { color: theme.text }]}> Interested: ML, AI, Computer Vision, Robotics</Text>
      </View>

      {/* Contact Button */}
      <TouchableOpacity style={[styles.button, { backgroundColor: '#00a84f', width: 150, alignItems: 'center', marginBottom: 5 }]} onPress={() => setShowContact(!showContact)}>
        <Text style={styles.buttonText}>{showContact ? 'Hide Contact' : 'Show Contact'}</Text>
      </TouchableOpacity>

      {/* Contact Card */}
      {showContact && (
        <View style={[styles.card, { backgroundColor: theme.card, borderColor: theme.border }]}>
          <TouchableOpacity style={styles.phoneContainer} onPress={()=>copyToClipboard(email)}>
            <Image source={require('./assets/email.png')} style={styles.phoneIcon} />
            <Text style={[styles.text, { color: theme.text }]}> {email} </Text>
          </TouchableOpacity>

          {/* Clickable Phone Number */}
          <TouchableOpacity style={styles.phoneContainer} onPress={()=>copyToClipboard(phoneNumber)}>
            <Image source={require('./assets/phone.png')} style={styles.phoneIcon} />
            <Text style={[styles.text, { color: theme.text }]}> {phoneNumber} </Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Projects Button */}
      <TouchableOpacity style={[styles.button, { backgroundColor: '#00a84f', width: 150, alignItems: 'center', marginBottom: 7 }]} onPress={() => setShowProjects(!showProjects)}>
        <Text style={styles.buttonText}>{showProjects ? 'Hide Projects' : 'Show Projects'}</Text>
      </TouchableOpacity>

      {/* Projects List */}
      {showProjects && (
        <FlatList
          data={projects}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
            style={[styles.projectCard, { backgroundColor: theme.card, borderColor: theme.border }]} // Apply dark mode colors
              onPress={() => Linking.openURL(item.link)} // Open project link
            >
              {/* Project Logo */}
              <View style={styles.projectLogoContainer}>
                <Image source={item.logo} style={styles.projectLogo}/>
              </View>

              {/* Project Info (Title + Description + Link) */}
              <View style={styles.projectInfo}>
                <Text style={[styles.projectTitle, { color: theme.text }]}>{item.title}</Text>
                <Text style={[styles.projectDescription, { color: theme.text }]}>{item.description}</Text>
                <Text style={[styles.projectLink, { color: theme.accent }]}>Visit Project</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      )}

      {/* Theme Toggle */}
      <View style={styles.toggleContainer}>
        <Text style={[styles.text, { color: theme.text, marginRight: 5 }]}>Dark Mode</Text>
        <Switch
          value={darkMode}
          onValueChange={() => setDarkMode(!darkMode)}
          trackColor={{ false: "#767577", true: '#00a84f' }}
          thumbColor={darkMode ? '#ffffff' : "#00a84f"}
        />
      </View>

    </View>
  );
}
