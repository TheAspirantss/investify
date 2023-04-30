import firebase from 'firebase/app';
import 'firebase/auth';


const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
	container.classList.remove("right-panel-active");
});
const firebaseConfig = {
	apiKey: "AIzaSyBPw0bptv93goXavO570ljsRl2BQVTIOTo",
	authDomain: "investor-9cb9f.firebaseapp.com",
	projectId: "investor-9cb9f",
	storageBucket: "investor-9cb9f.appspot.com",
	messagingSenderId: "1031853735445",
	appId: "1:1031853735445:web:71f7447242efc714de581c",
	measurementId: "G-PLNDL4WMJX",
	databaseURL: "https://investor-9cb9f-default-rtdb.firebaseio.com",
};
const app = firebase.initializeApp(firebaseConfig);

const a = firebase.database().ref("Investordata");

document
	.getElementById("InvestorRegisterData")
	.addEventListener("submit", submitform);

function submitform(a) {
	a.preventDefault();
	var createAccount_InvestorName = getElementVal("invsignup1");
	var createAccount_Investoremail = getElementVal("invsignup2");
	var createAccount_InvestorPassword = getElementVal("invsignup3");
	savedata(
		createAccount_InvestorName,
		createAccount_Investoremail,
		createAccount_InvestorPassword
	);
}

const savedata = (
	createAccount_InvestorName,
	createAccount_Investoremail,
	createAccount_InvestorPassword
) => {
	var b = a.push();
	b.set({
		Investor_name: createAccount_InvestorName,
		Investor_email: createAccount_Investoremail,
		Investor_password: createAccount_InvestorPassword,
	});
};

const getElementVal = (id) => {
	return document.getElementById(id).value;
};

firebase.initializeApp(firebaseConfig);

export const auth=firebase.auth();
export const provider=new firebase.auth.GoogleAuthProvider();

function authenticationmail(){
  auth.signInwithPopup(provider)
}
