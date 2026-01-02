export const load = async (loadEvent) => {
    //const {fetch, params, url, route} = loadEvent; //url, route tambem estao disponiveis
    const {fetch, params} = loadEvent;
    const {productId} = params
    const title = "Detalhes do Produto";
    const response = await fetch(`http://localhost:4000/products/${productId}`);
    const product = await response.json();
    
    return {
        title,
        product
    };
};