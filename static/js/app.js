// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");
var filterCommander = d3.select("#filter-btn");
var dateForm = d3.select("#datetime");

tableData.forEach(function(record){
    var row= tbody.append("tr");
    //console.log(record.datetime);
    Object.entries(record).forEach(function([key, value]){
        var cell = row.append("td");
        cell.text(value);
    });
});


filterCommander.on("click", function(){
    input_date = document.getElementById("datetime").value; 
    var dataFiltered = tableData.filter(filterData)
    var tbody = d3.select("tbody");
    tbody.html("")  //reset the content of the Table Body to empty HTML
    
    dataFiltered.forEach(function(record)
    {
        console.log(record);
        var row= tbody.append("tr");
        Object.entries(record).forEach(function([key, value])
        {
            var cell = row.append("td");
            cell.text(value);
        })
    });
  });


function filterData(record){
    return record.datetime === input_date
};
