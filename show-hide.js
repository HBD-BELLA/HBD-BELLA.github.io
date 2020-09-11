$(".silly").hide()        
$("#silly-switch").click(function() {
    if ( $("#silly-switch").hasClass("serious-mode") ) {
        $(".silly").show("slow")
        $(".serious").hide("slow")
        $("#silly-switch").removeClass("serious-mode")
        $("#silly-switch").addClass   ("silly-mode")
    }
    else {
        $(".serious").show("slow")
        $(".silly").hide("slow")
        $("#silly-switch").removeClass("silly-mode")
        $("#silly-switch").addClass   ("serious-mode")
    }
})
