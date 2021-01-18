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
    var selectedCity=d3.select("#city").property("value");
    var selectedState=d3.select("#state").property("value");
    var selectedCountry=d3.select("#country").property("value");
    var selectedShape=d3.select("#shape").property("value");
    var filterData=tableData;
    if (selectedDate !=""){
        filterData=filterData.filter(d=>d.datetime==selectedDate)
    }
    if (selectedCity !=""){
        filterData=filterData.filter(d=>d.city==selectedCity)
    }
    if (selectedState !=""){
        filterData=filterData.filter(d=>d.state==selectedState)
    }
    if (selectedCountry !=""){
        filterData=filterData.filter(d=>d.country==selectedCountry)
    }
    if (selectedShape !=""){
        filterData=filterData.filter(d=>d.shape==selectedShape)
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