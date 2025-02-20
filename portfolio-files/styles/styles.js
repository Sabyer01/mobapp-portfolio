import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 20 },
  bio: {marginTop:10,textAlign:'center',fontSize:16},
  profileImage: { width: 120, height: 120, borderRadius: 60, marginBottom: 10,marginTop: 70 },
  name: { fontSize: 24, fontWeight: 'bold' },
  text: { fontSize: 16 },
  card: { 
    width: '100%', padding: 15, borderRadius: 10, marginVertical: 5, 
    borderWidth: 1, shadowColor: "#000", shadowOpacity: 0.1, elevation: 2 
  },
  button: { padding: 10, borderRadius: 5, marginTop: 10, color: '#00d169'},
  buttonText: { fontSize: 16, color: 'white', fontWeight: 'bold' },
  toggleContainer: { flexDirection: 'row', alignItems: 'center', marginTop: 20 },

  // Phone Icon and Number Styling
  phoneContainer: { flexDirection: 'row', alignItems: 'center', marginTop: 10 },
  phoneIcon: { width: 20, height: 20, marginRight: 8 },

  projectCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#DDD',
    marginVertical: 8,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    width: 390,
  },
  
  projectLogoContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    overflow: 'hidden',
    marginRight: 15,
  },
  
  projectLogo: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  
  projectInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  
  projectTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  
  projectDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  
  projectLink: {
    fontSize: 14,
    color: '#00a84f',
    textDecorationLine: 'underline',
  },
  
});
