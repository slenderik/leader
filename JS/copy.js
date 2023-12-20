function copyToClipboard(page, anchor) {
    navigator.clipboard.writeText("https://drdvhbfd-5500.euw.devtunnels.ms/" + page + ".html#" + anchor).then(
        () => {
        /* clipboard successfully set
        maybe later i do something HERE! */
        },
        () => {
        /* clipboard write failed */
        },
    );
}