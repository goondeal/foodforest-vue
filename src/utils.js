const changeMetaTags = (meta) => {
    document.title = meta.title ? `${meta.title} | FoodForest` : 'FoodForest'
    // document.querySelector('meta[name="og:title"]').setAttribute("content", meta['og:title']);
    // document.querySelector('meta[name="description"]').setAttribute("content", meta.description);
    // document.querySelector('meta[name="og:description"]').setAttribute("content", meta['og:description']);
    // document.querySelector('meta[name="keywords"]').setAttribute("content", meta.keywords);
}

export { changeMetaTags }
