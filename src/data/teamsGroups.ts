export type Member = {
    id: number;
    backgroundColor: string;
    imageUrl?: string;
};

export type Team = {
    id: number;
    name: string;
    members: Member[];
};

export const teamsGroups: Team[] = [
    { 
        id: 1, 
        name: "Dr Team", 
        members: [
            { id: 1, backgroundColor: "#417b5a", imageUrl: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_2.png" },
            { id: 2, backgroundColor: "#4b3f72", imageUrl: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_3.png" },
            { id: 3, backgroundColor: "#d0ceba", imageUrl: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_18.png" }
        ] 
    },
    { 
        id: 2, 
        name: "Mia Plays", 
        members: [
            { id: 4, backgroundColor: "#031927", imageUrl: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_4.png" },
            { id: 5, backgroundColor: "#BA1200", imageUrl: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_5.png" },
            { id: 6, backgroundColor: "#9DD1F1", imageUrl: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_21.png" }
        ] 
    },
    { 
        id: 3, 
        name: "Keoxer", 
        members: [
            { id: 7, backgroundColor: "#508AA8", imageUrl: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_7.png" },
            { id: 8, backgroundColor: "#273B09", imageUrl: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_9.png" },
            { id: 9, backgroundColor: "#C8E0F4", imageUrl: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_23.png" }
        ] 
    },
    { 
        id: 4, 
        name: "Nicknemo", 
        members: [
            { id: 10, backgroundColor: "#DBD2E0", imageUrl: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_15.png" },
            { id: 11, backgroundColor: "#51CB20", imageUrl: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_12.png" },
            { id: 12, backgroundColor: "#150578", imageUrl: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_22.png" }
        ] 
    },
    { 
        id: 5, 
        name: "Fighters", 
        members: [
            { id: 13, backgroundColor: "#A61C3C", imageUrl: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_35.png" },
            { id: 14, backgroundColor: "#02394A", imageUrl: "	https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_34.png" },
            { id: 15, backgroundColor: "#F26DF9", imageUrl: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_33.png" }
        ] 
    },
    { 
        id: 6, 
        name: "Shooterats", 
        members: [
            { id: 16, backgroundColor: "#F4AC45", imageUrl: "	https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_32.png" },
            { id: 17, backgroundColor: "#694A38", imageUrl: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_31.png" },
            { id: 18, backgroundColor: "#92BFB1", imageUrl: "	https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_30.png" }
        ] 
    }
];