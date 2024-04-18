const myObject = {
    js : "javascript",
    html : "html",
    css : "css",
    jsx : "jsx",
    vue : "vue",
    angular : "angular",
    rb : "ruby",
}

for(const key in myObject) {
    console.log(`${key} shortcut for ${myObject[key]}`);
}

/**
 * Difference B/w Forof and Forin Loop 
 * Forof is not work on Object and it returns value 
 * but In Forin , loop it work on both objects as well as array but it returns key not value like forof
 */