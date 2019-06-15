$.getJSON("./populaPagina.js", function (data, textStatus, jqXHR) {
        for(let d of data)    
            console.log(d)
    }
);