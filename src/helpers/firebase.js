const initFirebase = async () => {
  const firebase = await import("firebase/app");
  await Promise.all([
    import("firebase/firestore"),
    import("firebase/auth"),
    import("firebase/storage"),
  ]);
  const config = {
    apiKey: "AIzaSyAkUfua-pr7nlipSup5rj8rmgbdFNGvvKk",
    authDomain: "find-hope.firebaseapp.com",
    databaseURL: "https://find-hope.firebaseio.com",
    projectId: "find-hope",
    storageBucket: "find-hope.appspot.com",
    messagingSenderId: "750597049253",
    appId: "1:750597049253:web:bbaf1303709e5221",
  };
  firebase.initializeApp(config);
  if (firebase) {
    return firebase;
  } else {
    return Promise.reject(new Error("loading error"));
  }
};

export default initFirebase().then((firebase) => firebase);
