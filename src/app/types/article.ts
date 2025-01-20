interface Crop {
    height: number,
    width: number,
    ratio: string,
    path: string
}

interface Image {
    afbeelding: string,
    crops: Crop[]
}

export interface Article {
    id: string
    titel: string
    labelValue: string
    afbeelding: Image
}