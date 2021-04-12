$(document).ready(function(){

	//accordion
	$( "#accordion" ).accordion({
		collapsible: true
	});

	//autocomplete
    var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });

    //button
    $( ".widget button" )
      .eq( 0 ).button()
      .end().eq( 1 ).button( {
        icon: "ui-icon-gear",
        showLabel: false
      } ).end().eq( 2 ).button( {
        icon: "ui-icon-gear"
      } ).end().eq( 3 ).button( {
        icon: "ui-icon-gear",
        iconPosition: "end"
      } ).end().eq( 4 ).button( {
        icon: "ui-icon-gear",
        iconPosition: "top"
      } ).end().eq( 5 ).button( {
        icon: "ui-icon-gear",
        iconPosition: "bottom"
      } );

      //checkbox
      $( "input" ).checkboxradio();

      //datepicker
      $( "#datepicker" ).datepicker({
      showOtherMonths: true,
      selectOtherMonths: true
    });

      //dialog
      $( "#dialog" ).dialog();
});