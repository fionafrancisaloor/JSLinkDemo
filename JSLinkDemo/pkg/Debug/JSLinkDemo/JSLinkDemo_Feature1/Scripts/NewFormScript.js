(function () {
  var ctx = {};
  
  ctx.OnPostRender = updateDOM;

  SPClientTemplates.TemplateManager.RegisterTemplateOverrides(ctx);
})();

function updateDOM(ctx) {
  (function ($) {
    $(document).ready(function () {
      var current = 1;

      //create a new table element which is same as current table element we want to replace
      var newTable ='<table class="ms-formtable" style="margin-top: 8px;" border="0" cellpadding="0" cellspacing="0" width="100%"><tr>';

      //loop through each td in the table
      $(".ms-formtable td").each(function (i) {
        //in the first row, I wanted only one column
        // each field is a set of 2 columns one label and other input control
        // if current column is 2, we want to start a new row similarly if it is 6(next 2 fields)
        if (current == 2 || current == 6) {
          newTable = newTable + $('<div>').append($(this).clone()).remove().html() + '</tr><tr>';
        }
        else {

          newTable = newTable + $('<div>').append($(this).clone()).remove().html();
        }
        current = current + 1;
      });
      newTable = newTable + '</tr></table>';

      // replace the html of existing table with the one we created.
      $(".ms-formtable").html(newTable);
    });
  })(jQuery);
}