function extract(content) {
    const contentElement = document.getElementById(content);
    const matches = contentElement.textContent.matchAll(/\(([a-zA-Z ]+)\)/g);

    const result = Array.from(matches)
                        .map(match => match[1])
                        .join('; ');
    
    return result;
}