import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 30,
    fontFamily: 'fantasy',
  },
  label: {
    fontSize: 18,
    color: 'white',
    marginBottom: 10,
    fontFamily: 'fantasy',
  },
  input: {
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    width: '100%',
    marginBottom: 13,
    paddingHorizontal: 20,
    borderRadius: 20,
    color: 'white',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  resultado: {
    marginTop: 40,
    alignItems: 'right',
    fontFamily: 'fantasy',
    fontWeight: 'bold',

  },
  text: {
    color: 'black',
    fontSize: 18,
    marginBottom: 10,
    fontFamily: 'fantasy',
    marginTop: 10,
    paddingLeft: 20,
  },
  titulo: {
    fontSize: 22,
    fontFamily: 'fantasy',
    fontWeight: 'bold',
    marginBottom: 30,
    alignItems: 'center',
    paddingLeft: 20,
  }
});

export default styles;
