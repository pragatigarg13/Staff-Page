import { initializeApp } from "firebase/app";

import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "firebase/auth";

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    query,
    getDocs,
    writeBatch
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCuPFnpRCf3ENFxaB0P4Bhwq5_F8_O29U",
    authDomain: "staff-app-34df2.firebaseapp.com",
    projectId: "staff-app-34df2",
    storageBucket: "staff-app-34df2.firebasestorage.app",
    messagingSenderId: "751652761008",
    appId: "1:751652761008:web:e540cafa77b84452543a75"
};

const app = initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth(app);

export const db = getFirestore(app);

export function signinwithGoogle() {
    return signInWithPopup(auth, provider);
}

export async function signupwithemailandpassword(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
}

export async function loginwithemailandpassword(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
}

export const signinAuthUserWithEmailAndPasword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
};

export async function fetchstaffdata() {
    const collectionRef = collection(db, "staff");
    const q = query(collectionRef);
    const querysnapshot = await getDocs(q);

    const staffmap = querysnapshot.docs.reduce((acc, docsnapshot) => {
        const items = docsnapshot.data();

        const name = items.name || items.title || docsnapshot.id;

        acc[name.toLowerCase()] = {
            ...items,
            name
        };

        return acc;
    }, {});

    return staffmap;
}

export async function addcollectionanddocuments(collectionkey, objectstoadd) {
    const collectionRef = collection(db, collectionkey);
    const batch = writeBatch(db);

    objectstoadd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    });

    await batch.commit();

    console.log("Staff data uploaded successfully");
}

export async function createUserDoc(userAuth, otherinfo) {
    const userDocRef = doc(db, "users", userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdat = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdat,
                ...otherinfo
            });
        } catch (error) {
            console.log("Error in creating user document:", error.message);
        }
    }

    return userDocRef;
}
