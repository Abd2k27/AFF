export interface postProps {
    id: number,
    title: string,
    content: string,
    date: string,
    eventype: { name: string },
    newstype: { name: string },
    participants: [{ id: number, name: string, poste: string, image: string }],
    image_events: [{ id: number, image: string }],
    image: string,
    location: string,
    time: string,
    created_at: string,
    slug: string
}

export interface projectProps {
    id: number,
    name: string,
    description: string,
    objectifs: string,
    status: string,
    image_projets: [{ id: number, image: string }]
    partenaires: [{ id: number, image: string }],
    statistiques: [{ id: number, name: string, value: number }]
}

export interface leaderProps {
    id: number,
    name: string,
    image: string,
    poste: string,

}

export interface missionProps {
    id: number,
    title: string,
    image: string,
    content: string,
}

export interface userProps {
    id: number,
    nom: string,
    prenom: string,
    pseudo: string,
    phone: string,
    email: string,
    password: string,
    profile_photo_path: string,
}
