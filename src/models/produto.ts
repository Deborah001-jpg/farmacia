import categoria from "./categoria";

export default interface Produto {


 id: number;
nome: string;
preco: number;
foto: string;
categoria?: categoria| null;

}