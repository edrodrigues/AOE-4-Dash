const { initializeApp, getApps } = require("firebase/app");
const { getFirestore, collection, getDocs, doc, updateDoc, writeBatch, query, orderBy } = require("firebase/firestore");

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBs15tX_VBrS9IvPN2rbJAbB9nRkDijNgk",
    authDomain: "aoe4-dashboard.firebaseapp.com",
    projectId: "aoe4-dashboard",
    storageBucket: "aoe4-dashboard.firebasestorage.app",
    messagingSenderId: "1064938687552",
    appId: "1:1064938687552:web:18becedde33a6557c4a3a5",
    measurementId: "G-57TVF82TDK"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);

const calculatePoints = (rank, totalPlayers) => {
    if (totalPlayers === 2) {
        switch (rank) {
            case 1: return 2;
            case 2: return 0;
            default: return 0;
        }
    } else if (totalPlayers === 4) {
        switch (rank) {
            case 1: return 4;
            case 2: return 3;
            case 3: return 2;
            case 4: return 0;
            default: return 0;
        }
    } else {
        // 3 players
        switch (rank) {
            case 1: return 3;
            case 2: return 2;
            case 3: return 1;
            default: return 0;
        }
    }
};

async function recalculatePoints() {
    console.log("🔄 Starting Points Recalculation...");
    
    try {
        // Get all matches
        const matchesRef = collection(db, "matches");
        const q = query(matchesRef, orderBy("date", "desc"));
        const matchesSnapshot = await getDocs(q);
        
        console.log(`📊 Found ${matchesSnapshot.docs.length} total matches`);
        
        // Reset player stats
        const playersRef = collection(db, "players");
        const playersSnapshot = await getDocs(playersRef);
        const playerStats = {};
        
        playersSnapshot.docs.forEach(doc => {
            playerStats[doc.id] = { wins: 0, points: 0, matchesPlayed: 0 };
        });
        
        console.log(`👥 Found ${playersSnapshot.docs.length} players`);
        
        // Process each match
        let fourPlayerMatchesCount = 0;
        const batch = writeBatch(db);
        
        for (const matchDoc of matchesSnapshot.docs) {
            const match = matchDoc.data();
            const totalPlayers = match.results.length;
            
            // Only recalculate 4-player matches
            if (totalPlayers === 4) {
                fourPlayerMatchesCount++;
                const updatedResults = match.results.map(result => ({
                    ...result,
                    points: calculatePoints(result.rank, totalPlayers)
                }));
                
                // Update match document
                const matchRef = doc(db, "matches", matchDoc.id);
                batch.update(matchRef, { results: updatedResults });
                
                console.log(`✏️  Updated match ${matchDoc.id}: ${updatedResults.map(r => `Rank ${r.rank} = ${r.points}pts`).join(', ')}`);
            }
            
            // Recalculate player stats (for all matches)
            match.results.forEach(result => {
                const points = calculatePoints(result.rank, totalPlayers);
                if (playerStats[result.playerId]) {
                    playerStats[result.playerId].points += points;
                    playerStats[result.playerId].matchesPlayed += 1;
                    if (result.rank === 1) {
                        playerStats[result.playerId].wins += 1;
                    }
                }
            });
        }
        
        console.log(`\n📋 Found ${fourPlayerMatchesCount} four-player matches to update`);
        
        // Commit match updates
        await batch.commit();
        console.log("✅ Matches updated successfully!");
        
        // Update player stats
        console.log("\n📊 Updating player stats...");
        const playerBatch = writeBatch(db);
        
        for (const [playerId, stats] of Object.entries(playerStats)) {
            const playerRef = doc(db, "players", playerId);
            playerBatch.update(playerRef, {
                "stats.wins": stats.wins,
                "stats.points": stats.points,
                "stats.matchesPlayed": stats.matchesPlayed
            });
            console.log(`  - Player ${playerId}: ${stats.points} pts, ${stats.wins} wins, ${stats.matchesPlayed} matches`);
        }
        
        await playerBatch.commit();
        console.log("\n✅ All player stats updated successfully!");
        console.log("\n🎉 Points recalculation complete!");
        
    } catch (error) {
        console.error("❌ Error recalculating points:", error);
    } finally {
        process.exit(0);
    }
}

recalculatePoints();
