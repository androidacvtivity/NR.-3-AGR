function sumCap1196_Rind010() {
    var rowIDs = [
    {id: "77632", rind: "010-1"},
    {id: "77614", rind: "010-2"},
    {id: "77696", rind: "010-3"},
    {id: "77640", rind: "010-4"},
    {id: "77601", rind: "010-5"},
    {id: "77669", rind: "010-6"},
    {id: "77657", rind: "010-7"},
    {id: "77633", rind: "010-8"},
    {id: "77602", rind: "010-9"},
    {id: "77721", rind: "010-10"},
    {id: "77670", rind: "010-11"},
    {id: "77723", rind: "010-12"},
    {id: "77727", rind: "010-13"},
    {id: "77728", rind: "010-14"},
    {id: "77729", rind: "010-15"},
    {id: "77730", rind: "010-16"},
    {id: "77731", rind: "010-17"},
    {id: "77732", rind: "010-18"},
    {id: "77733", rind: "010-19"},
    {id: "77734", rind: "010-20"},
    {id: "77740", rind: "010-21"},
    {id: "77741", rind: "010-22"},
    {id: "77742", rind: "010-23"},
    {id: "77743", rind: "010-24"},
    {id: "77744", rind: "010-25"},
    {id: "77745", rind: "010-26"},
    {id: "77746", rind: "010-27"},
    {id: "77747", rind: "010-28"},
    {id: "77748", rind: "010-29"},
    {id: "77749", rind: "010-30"},
    {id: "77750", rind: "010-31"},
    {id: "77751", rind: "010-32"},
    {id: "77752", rind: "010-33"},
    {id: "77753", rind: "010-34"},
    {id: "77754", rind: "010-35"},
    {id: "77755", rind: "010-36"},
    {id: "77756", rind: "010-37"},
    {id: "77757", rind: "010-38"},
    {id: "77758", rind: "010-39"},
    {id: "77759", rind: "010-40"},
    {id: "77760", rind: "010-41"},
    {id: "77771", rind: "010-42"},
    {id: "77772", rind: "010-43"},
    {id: "77773", rind: "010-44"},
    {id: "77774", rind: "010-45"},
    {id: "77775", rind: "010-46"},
    {id: "77776", rind: "010-47"},
    {id: "77777", rind: "010-48"},
    {id: "77778", rind: "010-49"},
    {id: "77779", rind: "010-50"},
    {id: "77782", rind: "010-51"},
    {id: "77788", rind: "010-52"},
    {id: "77787", rind: "010-53"},
    {id: "77786", rind: "010-54"},
    {id: "77785", rind: "010-55"},
    {id: "77784", rind: "010-56"},
    {id: "77783", rind: "010-57"},
    {id: "77781", rind: "010-58"},
    {id: "77780", rind: "010-59"},
    {id: "77726", rind: "010-60"}
];
    var sumCol1 = 0.0;
    var sumCol2 = 0.0;
    var sumCol3 = 0.0;
    var sumCol4 = 0.0;
    var sumCol5 = 0.0;
    // Calculate the sums
    rowIDs.forEach(function (row) {
        var col1Val = parseFloat($("#73_1196_" + row.id + "_" + row.rind + "_3").val()) || 0.0;
        sumCol1 += col1Val;
        var col2Val = parseFloat($("#73_1196_" + row.id + "_" + row.rind + "_4").val()) || 0.0;
        sumCol2 += col2Val;
        var col3Val = parseFloat($("#73_1196_" + row.id + "_" + row.rind + "_5").val()) || 0.0;
        sumCol3 += col3Val;
        var col4Val = parseFloat($("#73_1196_" + row.id + "_" + row.rind + "_6").val()) || 0.0;
        sumCol4 += col4Val;
        var col5Val = parseFloat($("#73_1196_" + row.id + "_" + row.rind + "_7").val()) || 0.0;
        sumCol5 += col5Val;
});

    
    // Apply rounding and set the values
    var rind010Col1 = $("#73_1196_77597_010_3");
    var rind010Col2 = $("#73_1196_77597_010_4");
    var rind010Col3 = $("#73_1196_77597_010_5");
    var rind010Col4 = $("#73_1196_77597_010_6");
    var rind010Col5 = $("#73_1196_77597_010_7");

    rind010Col1.val(sumCol1 !== 0 ? sumCol1.toFixed(1) : ""); // Assign empty string if sum is 0
    rind010Col2.val(sumCol2 !== 0 ? sumCol2.toFixed(1) : ""); // Assign empty string if sum is 0
    rind010Col3.val(sumCol3 !== 0 ? sumCol3.toFixed(1) : ""); // Assign empty string if sum is 0
    rind010Col4.val(sumCol4 !== 0 ? sumCol4.toFixed(1) : ""); // Assign empty string if sum is 0
    rind010Col5.val(sumCol5 !== 0 ? sumCol5.toFixed(1) : ""); // Assign empty string if sum is 0

    // Make Rind.010 columns read-only
    rind010Col1.prop("readonly", true);
    rind010Col2.prop("readonly", true);
    rind010Col3.prop("readonly", true);
    rind010Col4.prop("readonly", true);
    rind010Col5.prop("readonly", true);
//-------------------------------------------------------------------------------------------------


    //--------------------------------------------------------------------

        var rowIDs_080 = [
            { id: "77597", rind: "010" },
            { id: "77667", rind: "020" },
            { id: "77656", rind: "030" },
            { id: "77598", rind: "040" },
            { id: "77714", rind: "050" },
            { id: "77639", rind: "060" },
            { id: "77599", rind: "070" }
            
        ];

        var sumCol2_080 = 0.0;
        var sumCol3_080 = 0.0;
        var sumCol4_080 = 0.0;
        var sumCol5_080 = 0.0;

   
    // Calculate the sums
    rowIDs_080.forEach(function (row) {
        var col2Val080 = parseFloat($("#73_1196_" + row.id + "_" + row.rind + "_4").val()) || 0.0;
        sumCol2_080 += col2Val080;
        var col3Val080 = parseFloat($("#73_1196_" + row.id + "_" + row.rind + "_5").val()) || 0.0;
        sumCol3_080 += col3Val080;
        var col4Val080 = parseFloat($("#73_1196_" + row.id + "_" + row.rind + "_6").val()) || 0.0;
        sumCol4_080 += col4Val080;
        var col5Val080 = parseFloat($("#73_1196_" + row.id + "_" + row.rind + "_7").val()) || 0.0;
        sumCol5_080 += col5Val080;

    });


    // Apply rounding and set the values
    var rind080Col2 = $("#73_1196_77722_080_4");
    var rind080Col3 = $("#73_1196_77722_080_5");
    var rind080Col4 = $("#73_1196_77722_080_6");
    var rind080Col5 = $("#73_1196_77722_080_7");
    
    rind080Col2.val(sumCol2_080 !== 0 ? sumCol2_080.toFixed(1) : ""); // Assign empty string if sum is 0
    rind080Col3.val(sumCol3_080 !== 0 ? sumCol3_080.toFixed(1) : ""); // Assign empty string if sum is 0
    rind080Col4.val(sumCol4_080 !== 0 ? sumCol4_080.toFixed(1) : ""); // Assign empty string if sum is 0
    rind080Col5.val(sumCol5_080 !== 0 ? sumCol5_080.toFixed(1) : ""); // Assign empty string if sum is 0




    // Make Rind.080 columns read-only
    rind080Col2.prop("readonly", true);
    rind080Col3.prop("readonly", true);
    rind080Col4.prop("readonly", true);
    rind080Col5.prop("readonly", true);


}


function f_Capitol_1196() {
    // Execute the custom functions
    sumCap1196_Rind010();

    
 }

var from = "";
// Ensure f_Capitol_1196 is called on document ready and input changes as per original code
$(document).ready(function () {

    // Initialize form variable
    from = $("#formDenShort").val();
    f_Capitol_1196();
    $("input:not([type='button']):not([readonly]):not([disabled])").on("change", f_Capitol_1196);
    $(document).on("change", "input:not([type='button']):not([readonly]):not([disabled])", f_Capitol_1196);
});
