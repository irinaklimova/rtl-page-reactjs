interface Image {
    afbeelding: string,
    crops: []
}

export interface Article {
    id: string
    titel: string
    labelValue: string
    afbeelding: Image
}