const { StyleSheet } = require("react-native");

export const styled = StyleSheet.create({
  container:{
    flex: 1,
  },
  img1:{
    resizeMode: "contain",
    width: '100%',
    height: '50%',
    marginTop: 15
  },
  title:{
    marginTop: 30,
    padding: 25,
    paddingBottom: 10,
    fontSize: 45,
    fontWeight: 'bold',
    color: "#00BFDF",
    textAlign: "center",
  },
  text:{
    textAlign: "center",
    color: "#808080",
    paddingHorizontal: 25,
    fontSize: 20,
    marginTop: 20
  },
  next: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#00BFDF",
  },
  acess:{
    fontSize: 25,
    fontWeight: "bold",
    color: "#00BFDF",
  }
});

