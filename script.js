fetch("https://jsonplaceholder.typicode.com/users").then(result =>  result.json()).then((res) => 
{
console.log(res[0].username);
let tableData="";
res.map((values)=>{
    tableData += `<tr>
    <td>${values.name}</td>
    <td>${values.username}</td>
    <td>${values.email}</td>
</tr>`;
});
document.getElementById("table_body").innerHTML=tableData;
});