class Product {
    id: number;
    image: string;
    image2?: string;
    title: string;
    description: string;

    constructor(id: number, image: string, image2: string, title: string, description: string) {
        this.id = id;
        this.image = image;
        this.image2 = image2;
        this.title = title;
        this.description = description;
    }   
}

export default Product;