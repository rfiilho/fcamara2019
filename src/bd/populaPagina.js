$.getJSON("./filas.json", function (data, textStatus, jqXHR) {
        for(let d of data)    
            console.log(d)
    }
);