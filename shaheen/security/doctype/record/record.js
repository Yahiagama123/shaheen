// Copyright (c) 2023, yahia and contributors
// For license information, please see license.txt

frappe.ui.form.on('Record', {
	// refresh: function(frm) {

	// }
});

frappe.ui.form.on("tabcars", {
    return_count:function(frm,cdt,cdn){
		
        const row = locals[cdt][cdn];
        if(row.return_count!==undefined){
            frappe.model.set_value(cdt, cdn, "diff_count", row.return_count -row.exit_count);
   
        }
    }
});
