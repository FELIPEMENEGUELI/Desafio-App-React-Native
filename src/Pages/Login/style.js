const { StyleSheet } = require("react-native");

export const styled = StyleSheet.create({
  logo: {
    resizeMode: "contain",
    marginTop: 100,
    width: 288,
    height: 130,
    alignSelf: "center",
  },
    inputArea: {
    flexDirection: "row",
    alignItems: "center",
    width: 275,
    height: 68,
    alignSelf: "center",
    marginBottom: 15,
    marginTop: 15,
  },
  inputUsuario: {
    fontSize: 18,
    padding: 10,
    width: "85%",
    height: 45,
  },
  inputArea1: {
    flexDirection: "row",
    alignItems: "center",
    width: 275,
    height: 68,
    alignSelf: "center",
    marginBottom: 15,
    marginTop: 2,
  },
  inputSenha: { 
    fontSize: 18,
    padding: 10,
    width: "85%",
    height: 45,
    
  },
  icon: {
    width: "15%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },

  btnFundo: {
    width: '70%',
    alignSelf: "center"
  },
  btn: {
    paddingTop: 9,
    width: "100%",
    height: 45,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    color: "#000",
    fontWeight: "bold",
    fontSize: 18,
    backgroundColor: "#C0C0C0",
    marginTop: 30
  },
  direction: {
    flexDirection: "row",
  },
  iconC: {
    marginLeft: 110,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  
    textM: {
      fontSize: 18,
      color: "#000",
      textAlign: "center",
      marginTop: 3,
    },
  
});
