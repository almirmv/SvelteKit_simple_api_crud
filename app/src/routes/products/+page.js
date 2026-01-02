//exporta função com nome "load".
//ela estara disponivel dentro de "props" na page
export const load = async (loadEvent) => {
    console.log("Load function called in paje.js")
    const {fetch} = loadEvent; //usa o fetch do svelte no lugar do "window.fetch"
    const title = "Lista de Produtos Disponíveis";
    const response = await fetch("http://localhost:4000/products");
    const products = await response.json();
    
    return {
        title,
        products
    };
};