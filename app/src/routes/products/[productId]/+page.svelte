<script>
    export let data;
    const title = data.title
    const product = data.product
</script>
<div class="container">
<h1 class="text-center">{title}</h1>
<h2>{product.title} - {product.price}</h2>
<p>{product.description}</p>
</div>