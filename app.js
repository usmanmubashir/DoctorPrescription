// Eco Part

// eco.html

let pationtName=document.querySelector('#ptName');
let ecoNumber=document.querySelector('#ecoNumber');
let sonOrWife=document.querySelector('#sonOrWife');
let age=document.querySelector('#age');
let sex=document.querySelector('#sex');
let consultant=document.querySelector('#consultant');

let height=document.querySelector('#height');
let wight=document.querySelector('#weight');
let hr=document.querySelector('#hr');

let dopler=document.querySelector('#colorDopler');
let colorDopler=document.querySelector('#colorDopler');

let aroticRoot=document.querySelector('#aorticRoot');
let annulus=document.querySelector('#annulus');
let la=document.querySelector('#la');
let laArea=document.querySelector('#laArea');
let rv=document.querySelector('#rv');
let tapse=document.querySelector('#tapse');
let lvisd=document.querySelector('#lvisd');
let lvpwd=document.querySelector('#lvpwd');
let lvidd=document.querySelector('#lvidd');
let lvids=document.querySelector('#lvids');
let ef=document.querySelector('ef');
let fs=document.querySelector('#fs');


let report=document.querySelector('#finalReprt');
let conclusion=document.querySelector('#finalConclusion');


// Buttons
let doneBtn=document.getElementById('ecobtn');



// eco Result .html


// Eco report box for complete print
let ecoReport=document.querySelector('#ecoReort');


let infoBox=document.querySelector('#infoBox');
let dimensionBox=document.querySelector('#dimensonBox');
let reportBox=document.querySelector('#reprtBox');
let conclusionBox=document.querySelector('#conclusionBox');


// Buttons
let ecoPrintBtn=document.querySelector('#ecoBtnPrint');



// Date 

let aDate=new Date();
let bDate=aDate.toDateString();
// console.log(bDate);


// Function side

doneBtn.addEventListener('click', function(){
    window.open('ecoResult.html', '_blank');

    infoBox.innerHTML=`
<table style="width: 375px; border-collapse: collapse; margin: 20px; font-size: 6.5px; font-family: Arial, Helvetica, sans-serif;">
<tr style="height: 25%; border: 1px solid #000;">
    <th style="width: 25%; border: 1px solid #000;">Patient Name</th>
    <td style="width: 25%; border: 1px solid #000;">${pationtName.value}</td>
    <th style="width: 25%; border: 1px solid #000;">Age/Gender</th>
    <td style="width: 25%; border: 1px solid #000;">${age.value} : ${sex.value}</td>
</tr>
<tr style="height: 25%; border: 1px solid #000;">
    <th style="border: 1px solid #000;">S/W Of</th>
    <td style="border: 1px solid #000;">${sonOrWife.value}</td>
    <th style="border: 1px solid #000;">Consultant</th>
    <td style="border: 1px solid #000;">${consultant.value}</td>
</tr>
<tr style="height: 25%; border: 1px solid #000;">
    <th style="border: 1px solid #000;">Echo#</th>
    <td style="border: 1px solid #000;">${ecoNumber.value}</td>
    <th style="border: 1px solid #000;">Date</th>
    <td style="border: 1px solid #000;">${bDate}</td>
</tr>
<tr style="height: 25%; border: 1px solid #000;">
    <th style="border: 1px solid #000;">Height</th>
    <td style="border: 1px solid #000;">${height.value}</td>
    <th style="border: 1px solid #000;">Weight</th>
    <td style="border: 1px solid #000;">${wight.value}</td>
</tr>
</table>
`;







dimensionBox.innerHTML=`
<table style="width: 380px; border-collapse: collapse; margin: 20px; font-size: 6.5px; font-family: Arial, Helvetica, sans-serif;">
        <!-- First Row -->
        <tr style="height: 11.5px; border: 1px solid #000;">
            <th colspan="6" style="border: 1px solid #000;">B/M MODE DIMENSION</th>
            <th style="border: 1px solid #000;">DOPPLER</th>
        </tr>

        <!-- Rows 2 to 8 -->
        <!-- Each row has 6 normal columns and the last column has rowspan="8" -->
        <tr style="height: 11.5px; border: 1px solid #000;">
            <th style="border: 1px solid #000;">Parameter</th>
            <th style="border: 1px solid #000;">Normal</td>
            <th style="border: 1px solid #000;">Result</th>
            <th style="border: 1px solid #000;">Parameter</th>
            <th style="border: 1px solid #000;">Normal</th>
            <th style="border: 1px solid #000;">Result</th>
            <td rowspan="8" style="border: 1px solid #000;">${dopler.value}</td>
        </tr>

        <tr style="height: 11.5px; border: 1px solid #000;">
            <td style="border: 1px solid #000;">AORTIC ROOT</td>
            <td style="border: 1px solid #000;">20-40 mm</td>
            <td style="border: 1px solid #000;">${aroticRoot.value}</td>
            <td style="border: 1px solid #000;">LVISD</td>
            <td style="border: 1px solid #000;">8-12 mm</td>
            <td style="border: 1px solid #000;">${lvisd.value}</td>
        </tr>


        <tr style="height: 11.5px; border: 1px solid #000;">
            <td style="border: 1px solid #000;">ANNULUS AO/PV</td>
            <td style="border: 1px solid #000;"></td>
            <td style="border: 1px solid #000;">${annulus.value}</td>
            <td style="border: 1px solid #000;">LVPWD</td>
            <td style="border: 1px solid #000;">7-11 mm</td>
            <td style="border: 1px solid #000;">${lvpwd.value}</td>
        </tr>


        <tr style="height: 11.5px; border: 1px solid #000;">
            <td style="border: 1px solid #000;">LA</td>
            <td style="border: 1px solid #000;">19-39 mm</td>
            <td style="border: 1px solid #000;">${la.value}</td>
            <td style="border: 1px solid #000;">LVIDD</td>
            <td style="border: 1px solid #000;">36-56 mm</td>
            <td style="border: 1px solid #000;">${lvidd.value}</td>
        </tr>


        <tr style="height: 11.5px; border: 1px solid #000;">
            <td style="border: 1px solid #000;">LA AREA</td>
            <td style="border: 1px solid #000;"> cm<sup>2</sup></td>
            <td style="border: 1px solid #000;">${laArea.value}</td>
            <td style="border: 1px solid #000;">LVIDS</td>
            <td style="border: 1px solid #000;">25-41 mm</td>
            <td style="border: 1px solid #000;">${lvidd.value}</td>
        </tr>


        <tr style="height: 11.5px; border: 1px solid #000;">
            <td style="border: 1px solid #000;">RV</td>
            <td style="border: 1px solid #000;">7-25 mm</td>
            <td style="border: 1px solid #000;">${rv.value}</td>
            <td style="border: 1px solid #000;">EF</td>
            <td style="border: 1px solid #000;">(50-70)%</td>
            <td style="border: 1px solid #000;">${ef.value}</td>
        </tr>

        <tr style="height: 11.5px; border: 1px solid #000;">
            <td style="border: 1px solid #000;">TAPSE</td>
            <td style="border: 1px solid #000;"> mm</td>
            <td style="border: 1px solid #000;">${tapse.value}</td>
            <td style="border: 1px solid #000;">F.S</td>
            <td style="border: 1px solid #000;">(29-37)%</td>
            <td style="border: 1px solid #000;">${fs.value}</td>
        </tr>
        <!-- Rows 3 to 8 (similar structure) -->

        <!-- Last Row -->
        <tr style="height: 11.5px; border: 1px solid #000;">
            <th colspan="6" style="border: 1px solid #000;">COLOR DOPPLER: ${colorDopler.value}</th>
        </tr>
    </table>
`;





reportBox.innerHTML=`
<ul style="list-style-type: none; padding: 0; font-size: 6.5px;">
<li>
${report.value}
</li>

</ul>
`;





conclusionBox.innerHTML=`
<ul style="list-style-type: none; padding: 0; font-size: 6.5px;">
<li>
${conclusion.value}
</li>

</ul>
`;



})












