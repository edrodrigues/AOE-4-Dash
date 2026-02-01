import { db } from "../lib/firebase";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

const PLAYERS = ["Ed", "Zeca", "Ian", "Jorge", "Samuka"];

async function seedPlayers() {
    console.log("🌱 Starting Seeding Process...");

    const playersRef = collection(db, "players");

    for (const name of PLAYERS) {
        // Check if player already exists to avoid duplicates
        const q = query(playersRef, where("name", "==", name));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            console.log(`- Player ${name} already exists. Skipping.`);
            continue;
        }

        try {
            await addDoc(playersRef, {
                name,
                avatar_url: `https://ui-avatars.com/api/?name=${name}&background=random`,
                stats: {
                    wins: 0,
                    points: 0,
                    matchesPlayed: 0
                }
            });
            console.log(`+ Created player: ${name}`);
        } catch (error) {
            console.error(`Error creating ${name}:`, error);
        }
    }

    console.log("✅ Seeding Complete!");
    process.exit(0);
}

seedPlayers();
