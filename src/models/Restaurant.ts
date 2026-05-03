class Restaurant {
    description: string;
    image: string;
    nota: number;
    image2: string;
    infos: string[];
    title: string;
    id: number;

    constructor(description: string, image: string, image2: string, nota: number, infos: string[], title: string, id: number) {
        this.description = description;
        this.image = image;
        this.nota = nota;
        this.image2 = image2;
        this.infos = infos;
        this.title = title;
        this.id = id;
    }
}

export default Restaurant;

