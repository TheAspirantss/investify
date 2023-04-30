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
	apiKey: "AIzaSyD1ju5_kkA_ZFxA906ttQfmrP9gdpIWjcs",
	authDomain: "hackathon-database-ab5d6.firebaseapp.com",
	projectId: "hackathon-database-ab5d6",
	storageBucket: "hackathon-database-ab5d6.appspot.com",
	messagingSenderId: "248752358735",
	appId: "1:248752358735:web:f4e2fad0c032dfd7bbb13a",
	measurementId: "G-4RKGZHZVPP",
	databaseURL: "https://hackathon-database-ab5d6-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// const analytics = firebase.getAnalytics(app);

// signUpButton.addEventListener("click", () => {
// 	container.classList.add("right-panel-active");
// });

// signInButton.addEventListener("click", () => {
// 	container.classList.remove("right-panel-active");
// });
// function save() {
// 	var createAccount_startupName = document.getElementById("signup1");
// 	var createAccount_startupemail = document.getElementById("signup2");
// 	var createAccount_startupPassword = document.getElementById("signup3");

// 	var login_email = document.getElementById("signin1");
//     var login_password = document.getElementById("signin2");

// }
const a = firebase.database().ref("Hackathon");

document
	.getElementById("startupcreateaccount")
	.addEventListener("submit", submitform);

function submitform(a) {
	a.preventDefault();
	var createAccount_startupName = getElementVal("signup1");
	var createAccount_startupemail = getElementVal("signup2");
	var createAccount_startupPassword = getElementVal("signup3");
	savedata(
		createAccount_startupName,
		createAccount_startupemail,
		createAccount_startupPassword
	);
}

const savedata = (
	createAccount_startupName,
	createAccount_startupemail,
	createAccount_startupPassword
) => {
	var b = a.push();
	b.set({
		name: createAccount_startupName,
		email: createAccount_startupemail,
		password: createAccount_startupPassword,
	});
};

const getElementVal = (id) => {
	return document.getElementById(id).value;
};
