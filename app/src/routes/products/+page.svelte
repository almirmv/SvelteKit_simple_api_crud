<script>
    //obj "data" sempre é retornado da função "load"
    export let data;
    const products = data.products;
</script>
<div class="container">
    <h1 class="text-center">{data.title}</h1>
    <ul class="list-group">
        {#each products as product}
        <li class="list-group-item">{product.title} - {product.description}</li>
        {/each}
    </ul>
</div>
