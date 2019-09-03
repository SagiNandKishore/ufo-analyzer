// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

tableData.forEach(function(record){
    var row= tbody.append("tr");
    Object.entries(record).forEach(function([key, value]){
        //console.log(key, value)
        var cell = row.append("td");
        cell.text(value);
    });
});
