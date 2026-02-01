(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/lib/firebase.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "db",
    ()=>db
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/node_modules/firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/node_modules/@firebase/app/dist/esm/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
;
;
// TODO: Replace with your Firebase Configuration
// You can find this in the Firebase Console -> Project Settings -> General
const firebaseConfig = {
    apiKey: "AIzaSyBs15tX_VBrS9IvPN2rbJAbB9nRkDijNgk",
    authDomain: "aoe4-dashboard.firebaseapp.com",
    projectId: "aoe4-dashboard",
    storageBucket: "aoe4-dashboard.firebasestorage.app",
    messagingSenderId: "1064938687552",
    appId: "1:1064938687552:web:18becedde33a6557c4a3a5",
    measurementId: "G-57TVF82TDK"
};
// Initialize Firebase (Singleton pattern)
const app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApps"])().length === 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initializeApp"])(firebaseConfig) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApps"])()[0];
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFirestore"])(app);
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/Leaderboard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Leaderboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/lib/firebase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.454.0_react@19.0.0/node_modules/lucide-react/dist/esm/icons/crown.js [app-client] (ecmascript) <export default as Crown>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Leaderboard() {
    _s();
    const [players, setPlayers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Leaderboard.useEffect": ()=>{
            loadPlayers();
        }
    }["Leaderboard.useEffect"], []);
    const loadPlayers = async ()=>{
        try {
            const playersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "players");
            const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(playersRef, (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderBy"])("stats.points", "desc"));
            const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
            const playersList = snapshot.docs.map((doc)=>({
                    id: doc.id,
                    ...doc.data()
                }));
            setPlayers(playersList);
        } catch (error) {
            console.error("Erro ao carregar jogadores:", error);
        } finally{
            setLoading(false);
        }
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "classificacao",
            className: "min-h-screen bg-stone-950 text-stone-100 p-8 font-sans flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-16 h-16 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/Leaderboard.tsx",
                        lineNumber: 51,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-stone-400",
                        children: "Carregando classificação..."
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/Leaderboard.tsx",
                        lineNumber: 52,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/Leaderboard.tsx",
                lineNumber: 50,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/Leaderboard.tsx",
            lineNumber: 49,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "classificacao",
        className: "min-h-screen bg-stone-950 text-stone-100 p-8 font-sans flex items-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-5xl mx-auto w-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl md:text-6xl font-bold font-cinzel text-transparent bg-clip-text bg-gradient-to-b from-yellow-200 to-yellow-600 mb-4",
                            children: "Tabela de Classificação"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/Leaderboard.tsx",
                            lineNumber: 63,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-stone-400 text-lg",
                            children: "Quem dominará o império?"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/Leaderboard.tsx",
                            lineNumber: 66,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/Leaderboard.tsx",
                    lineNumber: 62,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-stone-900/50 border border-stone-800 rounded-xl overflow-hidden backdrop-blur-sm",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    className: "bg-stone-900/80 border-b border-stone-800",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-6 py-4 text-left text-xs font-semibold text-stone-400 uppercase tracking-wider",
                                                children: "Posição"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/Leaderboard.tsx",
                                                lineNumber: 77,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-6 py-4 text-left text-xs font-semibold text-stone-400 uppercase tracking-wider",
                                                children: "Jogador"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/Leaderboard.tsx",
                                                lineNumber: 80,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-6 py-4 text-center text-xs font-semibold text-stone-400 uppercase tracking-wider",
                                                children: "Pontos"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/Leaderboard.tsx",
                                                lineNumber: 83,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-6 py-4 text-center text-xs font-semibold text-stone-400 uppercase tracking-wider",
                                                children: "Vitórias"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/Leaderboard.tsx",
                                                lineNumber: 86,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-6 py-4 text-center text-xs font-semibold text-stone-400 uppercase tracking-wider",
                                                children: "Partidas"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/Leaderboard.tsx",
                                                lineNumber: 89,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-6 py-4 text-center text-xs font-semibold text-stone-400 uppercase tracking-wider",
                                                children: "Taxa de Vitória"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/Leaderboard.tsx",
                                                lineNumber: 92,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/Leaderboard.tsx",
                                        lineNumber: 76,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/Leaderboard.tsx",
                                    lineNumber: 75,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    className: "divide-y divide-stone-800",
                                    children: players.map((player, index)=>{
                                        const winRate = player.stats.matchesPlayed > 0 ? (player.stats.wins / player.stats.matchesPlayed * 100).toFixed(0) : "0";
                                        const isTopPlayer = index === 0 && player.stats.points > 0;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "hover:bg-stone-800/50 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            isTopPlayer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__["Crown"], {
                                                                className: "w-5 h-5 text-yellow-500 animate-pulse"
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/Leaderboard.tsx",
                                                                lineNumber: 113,
                                                                columnNumber: 57
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `text-2xl font-bold font-cinzel ${index === 0 ? "text-yellow-500" : index === 1 ? "text-stone-300" : index === 2 ? "text-amber-700" : "text-stone-500"}`,
                                                                children: [
                                                                    index + 1,
                                                                    "º"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/Leaderboard.tsx",
                                                                lineNumber: 115,
                                                                columnNumber: 53
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/Leaderboard.tsx",
                                                        lineNumber: 111,
                                                        columnNumber: 49
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/Leaderboard.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 45
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: player.avatar_url,
                                                                alt: player.name,
                                                                className: "w-10 h-10 rounded-full ring-2 ring-yellow-700/50"
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/Leaderboard.tsx",
                                                                lineNumber: 126,
                                                                columnNumber: 53
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-semibold text-lg",
                                                                children: player.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/Leaderboard.tsx",
                                                                lineNumber: 131,
                                                                columnNumber: 53
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/Leaderboard.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 49
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/Leaderboard.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 45
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-4 text-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-2xl font-bold font-cinzel text-yellow-500",
                                                        children: player.stats.points
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/Leaderboard.tsx",
                                                        lineNumber: 135,
                                                        columnNumber: 49
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/Leaderboard.tsx",
                                                    lineNumber: 134,
                                                    columnNumber: 45
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-4 text-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-lg font-semibold text-stone-300",
                                                        children: player.stats.wins
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/Leaderboard.tsx",
                                                        lineNumber: 140,
                                                        columnNumber: 49
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/Leaderboard.tsx",
                                                    lineNumber: 139,
                                                    columnNumber: 45
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-4 text-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-lg text-stone-400",
                                                        children: player.stats.matchesPlayed
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/Leaderboard.tsx",
                                                        lineNumber: 145,
                                                        columnNumber: 49
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/Leaderboard.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 45
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-4 text-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-center gap-1",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-lg font-semibold text-stone-300",
                                                            children: [
                                                                winRate,
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/Leaderboard.tsx",
                                                            lineNumber: 151,
                                                            columnNumber: 53
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/Leaderboard.tsx",
                                                        lineNumber: 150,
                                                        columnNumber: 49
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/Leaderboard.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 45
                                                }, this)
                                            ]
                                        }, player.id, true, {
                                            fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/Leaderboard.tsx",
                                            lineNumber: 106,
                                            columnNumber: 41
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/Leaderboard.tsx",
                                    lineNumber: 97,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/Leaderboard.tsx",
                            lineNumber: 74,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/Leaderboard.tsx",
                        lineNumber: 73,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/Leaderboard.tsx",
                    lineNumber: 72,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/Leaderboard.tsx",
            lineNumber: 60,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/Leaderboard.tsx",
        lineNumber: 59,
        columnNumber: 9
    }, this);
}
_s(Leaderboard, "V9eRvumG4+yL534O37gC6hhYu1A=");
_c = Leaderboard;
var _c;
__turbopack_context__.k.register(_c, "Leaderboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/MatchHistory.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MatchHistory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/lib/firebase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.454.0_react@19.0.0/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.454.0_react@19.0.0/node_modules/lucide-react/dist/esm/icons/trophy.js [app-client] (ecmascript) <export default as Trophy>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function MatchHistory() {
    _s();
    const [matches, setMatches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MatchHistory.useEffect": ()=>{
            loadMatches();
        }
    }["MatchHistory.useEffect"], []);
    const loadMatches = async ()=>{
        try {
            const matchesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "matches");
            const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(matchesRef, (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderBy"])("date", "desc"));
            const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
            // Get player names
            const playersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "players");
            const playersSnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(playersRef);
            const playersMap = new Map(playersSnapshot.docs.map((doc)=>[
                    doc.id,
                    doc.data().name
                ]));
            const matchesList = snapshot.docs.map((doc)=>{
                const data = doc.data();
                return {
                    id: doc.id,
                    date: data.date,
                    notes: data.notes,
                    results: data.results.map((r)=>({
                            ...r,
                            playerName: playersMap.get(r.playerId) || "Desconhecido"
                        })).sort((a, b)=>a.rank - b.rank)
                };
            });
            setMatches(matchesList);
        } catch (error) {
            console.error("Erro ao carregar partidas:", error);
        } finally{
            setLoading(false);
        }
    };
    const formatDate = (timestamp)=>{
        if (!timestamp) return "Data desconhecida";
        const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
        return new Intl.DateTimeFormat('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        }).format(date);
    };
    const getRankEmoji = (rank)=>{
        switch(rank){
            case 1:
                return "🥇";
            case 2:
                return "🥈";
            case 3:
                return "🥉";
            case 4:
                return "4️⃣";
            default:
                return "";
        }
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "partidas",
            className: "min-h-screen bg-stone-950 text-stone-100 p-8 font-sans flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-16 h-16 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/MatchHistory.tsx",
                        lineNumber: 88,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-stone-400",
                        children: "Carregando histórico..."
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/MatchHistory.tsx",
                        lineNumber: 89,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/MatchHistory.tsx",
                lineNumber: 87,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/MatchHistory.tsx",
            lineNumber: 86,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "partidas",
        className: "min-h-screen bg-stone-950 text-stone-100 p-8 font-sans flex items-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto w-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl md:text-6xl font-bold font-cinzel text-transparent bg-clip-text bg-gradient-to-b from-yellow-200 to-yellow-600 mb-4",
                            children: "Histórico de Partidas"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/MatchHistory.tsx",
                            lineNumber: 100,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-stone-400 text-lg",
                            children: "Todas as batalhas registradas"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/MatchHistory.tsx",
                            lineNumber: 103,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/MatchHistory.tsx",
                    lineNumber: 99,
                    columnNumber: 17
                }, this),
                matches.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-16 bg-stone-900/50 border border-stone-800 rounded-xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                            className: "w-16 h-16 text-stone-600 mx-auto mb-4"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/MatchHistory.tsx",
                            lineNumber: 111,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-stone-400 text-lg mb-6",
                            children: "Nenhuma partida registrada ainda."
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/MatchHistory.tsx",
                            lineNumber: 112,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#adicionar",
                            className: "inline-block px-6 py-3 bg-yellow-700 hover:bg-yellow-600 rounded-lg transition-colors font-semibold",
                            children: "+ Adicionar Primeira Partida"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/MatchHistory.tsx",
                            lineNumber: 115,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/MatchHistory.tsx",
                    lineNumber: 110,
                    columnNumber: 21
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6 max-h-[600px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-stone-700 scrollbar-track-stone-900",
                    children: matches.map((match)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-stone-900/50 border border-stone-800 rounded-xl p-6 backdrop-blur-sm hover:border-yellow-700/50 transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 text-stone-400 text-sm mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/MatchHistory.tsx",
                                            lineNumber: 131,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: formatDate(match.date)
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/MatchHistory.tsx",
                                            lineNumber: 132,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/MatchHistory.tsx",
                                    lineNumber: 130,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: match.results.map((result, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `flex items-center justify-between p-3 rounded-lg ${result.rank === 1 ? "bg-yellow-900/20 border border-yellow-700/30" : "bg-stone-800/30"}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-2xl",
                                                            children: getRankEmoji(result.rank)
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/MatchHistory.tsx",
                                                            lineNumber: 146,
                                                            columnNumber: 49
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-semibold text-lg",
                                                                    children: result.playerName
                                                                }, void 0, false, {
                                                                    fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/MatchHistory.tsx",
                                                                    lineNumber: 148,
                                                                    columnNumber: 53
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-stone-500",
                                                                    children: [
                                                                        result.rank,
                                                                        "º Lugar"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/MatchHistory.tsx",
                                                                    lineNumber: 149,
                                                                    columnNumber: 53
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/MatchHistory.tsx",
                                                            lineNumber: 147,
                                                            columnNumber: 49
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/MatchHistory.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 45
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-right",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-2xl font-bold font-cinzel text-yellow-500",
                                                            children: [
                                                                "+",
                                                                result.points
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/MatchHistory.tsx",
                                                            lineNumber: 153,
                                                            columnNumber: 49
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-stone-500",
                                                            children: "pontos"
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/MatchHistory.tsx",
                                                            lineNumber: 156,
                                                            columnNumber: 49
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/MatchHistory.tsx",
                                                    lineNumber: 152,
                                                    columnNumber: 45
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/MatchHistory.tsx",
                                            lineNumber: 138,
                                            columnNumber: 41
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/MatchHistory.tsx",
                                    lineNumber: 136,
                                    columnNumber: 33
                                }, this),
                                match.notes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 pt-4 border-t border-stone-800",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-stone-400 italic",
                                        children: [
                                            "📝 ",
                                            match.notes
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/MatchHistory.tsx",
                                        lineNumber: 165,
                                        columnNumber: 41
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/MatchHistory.tsx",
                                    lineNumber: 164,
                                    columnNumber: 37
                                }, this)
                            ]
                        }, match.id, true, {
                            fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/MatchHistory.tsx",
                            lineNumber: 125,
                            columnNumber: 29
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/MatchHistory.tsx",
                    lineNumber: 123,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/MatchHistory.tsx",
            lineNumber: 97,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/MatchHistory.tsx",
        lineNumber: 96,
        columnNumber: 9
    }, this);
}
_s(MatchHistory, "o79dFCsnn+DOg+6kO09X1xc6308=");
_c = MatchHistory;
var _c;
__turbopack_context__.k.register(_c, "MatchHistory");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/AddMatchForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AddMatchForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/lib/firebase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.454.0_react@19.0.0/node_modules/lucide-react/dist/esm/icons/trophy.js [app-client] (ecmascript) <export default as Trophy>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function AddMatchForm() {
    _s();
    const [players, setPlayers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedPlayers, setSelectedPlayers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [date, setDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Date().toISOString().slice(0, 16));
    const [notes, setNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [success, setSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AddMatchForm.useEffect": ()=>{
            loadPlayers();
        }
    }["AddMatchForm.useEffect"], []);
    const loadPlayers = async ()=>{
        const playersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "players");
        const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(playersRef);
        const playersList = snapshot.docs.map((doc)=>({
                id: doc.id,
                ...doc.data()
            }));
        setPlayers(playersList);
    };
    const togglePlayer = (player)=>{
        const isSelected = selectedPlayers.find((p)=>p.id === player.id);
        if (isSelected) {
            setSelectedPlayers(selectedPlayers.filter((p)=>p.id !== player.id));
        } else {
            if (selectedPlayers.length >= 4) {
                alert("Máximo de 4 jogadores por partida!");
                return;
            }
            setSelectedPlayers([
                ...selectedPlayers,
                {
                    ...player,
                    rank: selectedPlayers.length + 1
                }
            ]);
        }
    };
    const movePlayer = (index, direction)=>{
        const newPlayers = [
            ...selectedPlayers
        ];
        const targetIndex = direction === "up" ? index - 1 : index + 1;
        if (targetIndex < 0 || targetIndex >= newPlayers.length) return;
        [newPlayers[index], newPlayers[targetIndex]] = [
            newPlayers[targetIndex],
            newPlayers[index]
        ];
        // Update ranks
        newPlayers.forEach((p, i)=>p.rank = i + 1);
        setSelectedPlayers(newPlayers);
    };
    const calculatePoints = (rank)=>{
        switch(rank){
            case 1:
                return 3;
            case 2:
                return 2;
            case 3:
                return 1;
            case 4:
                return 0;
            default:
                return 0;
        }
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (selectedPlayers.length < 3) {
            alert("Selecione pelo menos 3 jogadores!");
            return;
        }
        setLoading(true);
        try {
            // Create match document
            const matchData = {
                date: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Timestamp"].fromDate(new Date(date)),
                notes: notes || null,
                results: selectedPlayers.map((p)=>({
                        playerId: p.id,
                        rank: p.rank,
                        points: calculatePoints(p.rank)
                    }))
            };
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "matches"), matchData);
            // Update player stats
            for (const player of selectedPlayers){
                const playerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "players", player.id);
                const points = calculatePoints(player.rank);
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])(playerRef, {
                    "stats.points": (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["increment"])(points),
                    "stats.matchesPlayed": (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["increment"])(1),
                    "stats.wins": player.rank === 1 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["increment"])(1) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["increment"])(0)
                });
            }
            setSuccess(true);
            setSelectedPlayers([]);
            setNotes("");
            setDate(new Date().toISOString().slice(0, 16));
            setTimeout(()=>{
                setSuccess(false);
                window.location.href = "#classificacao";
                window.location.reload();
            }, 2000);
        } catch (error) {
            console.error("Erro ao adicionar partida:", error);
            alert("Erro ao adicionar partida. Tente novamente.");
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "adicionar",
        className: "min-h-screen bg-stone-950 text-stone-100 p-8 font-sans flex items-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-3xl mx-auto w-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl md:text-6xl font-bold font-cinzel text-transparent bg-clip-text bg-gradient-to-b from-yellow-200 to-yellow-600 mb-4",
                            children: "Adicionar Partida"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/AddMatchForm.tsx",
                            lineNumber: 137,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-stone-400 text-lg",
                            children: "Registre os resultados da batalha"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/AddMatchForm.tsx",
                            lineNumber: 140,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/AddMatchForm.tsx",
                    lineNumber: 136,
                    columnNumber: 17
                }, this),
                success ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-green-900/20 border border-green-700/50 rounded-xl p-8 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                            className: "w-16 h-16 text-green-500 mx-auto mb-4"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/AddMatchForm.tsx",
                            lineNumber: 147,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-2xl font-bold text-green-400 mb-2",
                            children: "Partida Registrada!"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/AddMatchForm.tsx",
                            lineNumber: 148,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-stone-300",
                            children: "Indo para a classificação..."
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/AddMatchForm.tsx",
                            lineNumber: 149,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/AddMatchForm.tsx",
                    lineNumber: 146,
                    columnNumber: 21
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "space-y-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-stone-900/50 border border-stone-800 rounded-xl p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-semibold text-stone-400 mb-2 uppercase tracking-wider",
                                    children: "📅 Data e Hora"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/AddMatchForm.tsx",
                                    lineNumber: 155,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "datetime-local",
                                    value: date,
                                    onChange: (e)=>setDate(e.target.value),
                                    className: "w-full bg-stone-800 border border-stone-700 rounded-lg px-4 py-3 text-stone-100 focus:outline-none focus:ring-2 focus:ring-yellow-700",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/AddMatchForm.tsx",
                                    lineNumber: 158,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/AddMatchForm.tsx",
                            lineNumber: 154,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-stone-900/50 border border-stone-800 rounded-xl p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-semibold text-stone-400 mb-4 uppercase tracking-wider",
                                    children: "Selecione os Jogadores (3-4)"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/AddMatchForm.tsx",
                                    lineNumber: 169,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 md:grid-cols-3 gap-3",
                                    children: players.map((player)=>{
                                        const isSelected = selectedPlayers.find((p)=>p.id === player.id);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>togglePlayer(player),
                                            className: `p-4 rounded-lg border-2 transition-all ${isSelected ? "border-yellow-700 bg-yellow-900/20" : "border-stone-700 bg-stone-800/50 hover:border-stone-600"}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: player.avatar_url,
                                                    alt: player.name,
                                                    className: "w-12 h-12 rounded-full mx-auto mb-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/AddMatchForm.tsx",
                                                    lineNumber: 185,
                                                    columnNumber: 45
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-semibold text-center",
                                                    children: player.name
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/AddMatchForm.tsx",
                                                    lineNumber: 190,
                                                    columnNumber: 45
                                                }, this),
                                                isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-yellow-500 text-center mt-1",
                                                    children: "Selecionado"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/AddMatchForm.tsx",
                                                    lineNumber: 192,
                                                    columnNumber: 49
                                                }, this)
                                            ]
                                        }, player.id, true, {
                                            fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/AddMatchForm.tsx",
                                            lineNumber: 176,
                                            columnNumber: 41
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/AddMatchForm.tsx",
                                    lineNumber: 172,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/AddMatchForm.tsx",
                            lineNumber: 168,
                            columnNumber: 25
                        }, this),
                        selectedPlayers.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-stone-900/50 border border-stone-800 rounded-xl p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-semibold text-stone-400 mb-4 uppercase tracking-wider",
                                    children: [
                                        "Ordem de Classificação (1º ao ",
                                        selectedPlayers.length,
                                        "º)"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/AddMatchForm.tsx",
                                    lineNumber: 205,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: selectedPlayers.map((player, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-4 p-4 bg-stone-800/50 rounded-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>movePlayer(index, "up"),
                                                            disabled: index === 0,
                                                            className: "text-stone-400 hover:text-stone-200 disabled:opacity-30",
                                                            children: "▲"
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/AddMatchForm.tsx",
                                                            lineNumber: 215,
                                                            columnNumber: 49
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>movePlayer(index, "down"),
                                                            disabled: index === selectedPlayers.length - 1,
                                                            className: "text-stone-400 hover:text-stone-200 disabled:opacity-30",
                                                            children: "▼"
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/AddMatchForm.tsx",
                                                            lineNumber: 223,
                                                            columnNumber: 49
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/AddMatchForm.tsx",
                                                    lineNumber: 214,
                                                    columnNumber: 45
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-3xl font-bold font-cinzel text-yellow-500 w-12",
                                                    children: [
                                                        index + 1,
                                                        "º"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/AddMatchForm.tsx",
                                                    lineNumber: 233,
                                                    columnNumber: 45
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: player.avatar_url,
                                                    alt: player.name,
                                                    className: "w-10 h-10 rounded-full"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/AddMatchForm.tsx",
                                                    lineNumber: 237,
                                                    columnNumber: 45
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold flex-1",
                                                    children: player.name
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/AddMatchForm.tsx",
                                                    lineNumber: 243,
                                                    columnNumber: 45
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-yellow-500 font-bold",
                                                    children: [
                                                        "+",
                                                        calculatePoints(index + 1),
                                                        " pts"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/AddMatchForm.tsx",
                                                    lineNumber: 245,
                                                    columnNumber: 45
                                                }, this)
                                            ]
                                        }, player.id, true, {
                                            fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/AddMatchForm.tsx",
                                            lineNumber: 210,
                                            columnNumber: 41
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/AddMatchForm.tsx",
                                    lineNumber: 208,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/AddMatchForm.tsx",
                            lineNumber: 204,
                            columnNumber: 29
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-stone-900/50 border border-stone-800 rounded-xl p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-semibold text-stone-400 mb-2 uppercase tracking-wider",
                                    children: "Observações (Opcional)"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/AddMatchForm.tsx",
                                    lineNumber: 256,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: notes,
                                    onChange: (e)=>setNotes(e.target.value),
                                    placeholder: "Ex: Partida épica no mapa Black Forest...",
                                    className: "w-full bg-stone-800 border border-stone-700 rounded-lg px-4 py-3 text-stone-100 focus:outline-none focus:ring-2 focus:ring-yellow-700 resize-none",
                                    rows: 3
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/AddMatchForm.tsx",
                                    lineNumber: 259,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/AddMatchForm.tsx",
                            lineNumber: 255,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            disabled: loading || selectedPlayers.length < 3,
                            className: "w-full px-6 py-4 bg-yellow-700 hover:bg-yellow-600 disabled:bg-stone-700 disabled:cursor-not-allowed rounded-lg transition-colors font-semibold text-lg",
                            children: loading ? "Salvando..." : "⚔️ Registrar Partida"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/AddMatchForm.tsx",
                            lineNumber: 269,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/AddMatchForm.tsx",
                    lineNumber: 152,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/AddMatchForm.tsx",
            lineNumber: 134,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/AddMatchForm.tsx",
        lineNumber: 133,
        columnNumber: 9
    }, this);
}
_s(AddMatchForm, "wC2qAzIUOqU1ng55dUP+911gyfE=");
_c = AddMatchForm;
var _c;
__turbopack_context__.k.register(_c, "AddMatchForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/Navigation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.454.0_react@19.0.0/node_modules/lucide-react/dist/esm/icons/crown.js [app-client] (ecmascript) <export default as Crown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scroll$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.454.0_react@19.0.0/node_modules/lucide-react/dist/esm/icons/scroll.js [app-client] (ecmascript) <export default as Scroll>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.454.0_react@19.0.0/node_modules/lucide-react/dist/esm/icons/circle-plus.js [app-client] (ecmascript) <export default as PlusCircle>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Navigation() {
    _s();
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("hero");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navigation.useEffect": ()=>{
            const handleScroll = {
                "Navigation.useEffect.handleScroll": ()=>{
                    const sections = [
                        "hero",
                        "classificacao",
                        "partidas",
                        "adicionar"
                    ];
                    const scrollPosition = window.scrollY + window.innerHeight / 2;
                    for (const section of sections){
                        const element = document.getElementById(section);
                        if (element) {
                            const { offsetTop, offsetHeight } = element;
                            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                                setActiveSection(section);
                                break;
                            }
                        }
                    }
                }
            }["Navigation.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll);
            return ({
                "Navigation.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["Navigation.useEffect"];
        }
    }["Navigation.useEffect"], []);
    const navItems = [
        {
            id: "hero",
            label: "Início",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__["Crown"]
        },
        {
            id: "classificacao",
            label: "Classificação",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__["Crown"]
        },
        {
            id: "partidas",
            label: "Histórico",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scroll$3e$__["Scroll"]
        },
        {
            id: "adicionar",
            label: "Adicionar",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__["PlusCircle"]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "fixed top-0 left-0 right-0 z-50 bg-stone-950/95 backdrop-blur-md border-b border-stone-800",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between h-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#hero",
                        className: "flex items-center gap-2 group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__["Crown"], {
                                className: "w-6 h-6 text-yellow-500 group-hover:text-yellow-400 transition-colors"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/Navigation.tsx",
                                lineNumber: 43,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold font-cinzel text-lg text-yellow-500 group-hover:text-yellow-400 transition-colors hidden sm:block",
                                children: "AOE4 Ranking"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/Navigation.tsx",
                                lineNumber: 44,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/Navigation.tsx",
                        lineNumber: 42,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-1",
                        children: navItems.map((item)=>{
                            const Icon = item.icon;
                            const isActive = activeSection === item.id;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: `#${item.id}`,
                                className: `flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${isActive ? "bg-yellow-700 text-stone-100" : "text-stone-400 hover:text-stone-200 hover:bg-stone-800"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/Navigation.tsx",
                                        lineNumber: 64,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$AOE4__Ranking$2f$aoe4$2d$ranking$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hidden md:block font-semibold text-sm",
                                        children: item.label
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/Navigation.tsx",
                                        lineNumber: 65,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, item.id, true, {
                                fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/Navigation.tsx",
                                lineNumber: 56,
                                columnNumber: 33
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/Navigation.tsx",
                        lineNumber: 50,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/Navigation.tsx",
                lineNumber: 40,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/Navigation.tsx",
            lineNumber: 39,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneDrive/Documentos/AOE4 Ranking/aoe4-ranking/components/Navigation.tsx",
        lineNumber: 38,
        columnNumber: 9
    }, this);
}
_s(Navigation, "n4RB2kB3bMrhHioxIg63VLqN7s0=");
_c = Navigation;
var _c;
__turbopack_context__.k.register(_c, "Navigation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=OneDrive_Documentos_AOE4%20Ranking_aoe4-ranking_b4f3d2d5._.js.map