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
    input_city = document.getElementById("city").value;
    input_state = document.getElementById("state").value;
    input_country = document.getElementById("country").value;
    input_shape = document.getElementById("shape").value;

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
    var dt_check = true;
    var city_check = true;
    var state_check = true;
    var country_check = true;
    var shape_check = true;

    if ((input_date.length > 0 ) && (record.datetime.toUpperCase() != input_date.toUpperCase()))
    {dt_check = false}

    if ((input_city.length > 0 ) && (record.city.toUpperCase() != input_city.toUpperCase()))
    {city_check = false}

    if ((input_state.length > 0 ) && (record.state.toUpperCase() != input_state.toUpperCase()))
    {city_check = false}

    if ((input_country.length > 0 ) && (record.country.toUpperCase() != input_country.toUpperCase()))
    {city_check = false}

    if ((input_shape.length > 0 ) && (record.shape.toUpperCase() != input_shape.toUpperCase()))
    {city_check = false}

    return dt_check && city_check && state_check && country_check && shape_check
};
