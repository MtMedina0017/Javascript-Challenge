// from data.js
var tableData = data;
var tbody = d3.select("tbody");

for (var i = 0; i < tableData.length;i ++){
var row = tbody.append("tr")
var entry = tableData[i]
row.append ("td").text(entry.datetime);
row.append ("td").text(entry.city);
row.append ("td").text(entry.state);
row.append ("td").text(entry.country);
row.append ("td").text(entry.shape);
row.append ("td").text(entry.durationMinutes);
row.append ("td").text(entry.comments);

}

function updateData (){
tbody.html("");
    var selectedDate=d3.select("#datetime").property("value");
    var filterData=tableData;
    if (selectedDate !=""){
        filterData=filterData.filter(d=>d.datetime==selectedDate)
    }
    for (var i = 0; i < filterData.length;i ++){
        var row = tbody.append("tr")
        var entry = filterData[i]
        row.append ("td").text(entry.datetime);
        row.append ("td").text(entry.city);
        row.append ("td").text(entry.state);
        row.append ("td").text(entry.country);
        row.append ("td").text(entry.shape);
        row.append ("td").text(entry.durationMinutes);
        row.append ("td").text(entry.comments);
        
        }
}

d3.select("#filter-btn").on("click", updateData);

// YOUR CODE HERE!
