const pixelate = (renderer, scalar = 16) => {
    const { width, height } = renderer.domElement;
    renderer.domElement.style = `
        width: ${width * scalar}px;
        height: ${height * scalar}px;
        image-rendering: -moz-crisp-edges;
        image-rendering: -webkit-crisp-edges;
        image-rendering: pixelated;
        image-rendering: crisp-edges;
    `;
};