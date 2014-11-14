
({
    getImagesFromRecord : function(comp,evt) {
        var recId = comp.get("v.recId");
        var action = comp.get("c.getAttachments");
        
        //Pass record id as parameter
        action.setParams({
            "recId": recId
        });
        var self = this;
        action.setCallback(this, function(a) {
            if(a.state == "SUCCESS"){
                //if we get some data, set it to component attribute
                comp.set("v.images",a.getReturnValue());             
            }else{
                //show some error messages
                var errors = a.getError();
                if (errors) {
                    $A.logf("Errors", errors);
                    if (errors[0] && errors[0].message) {
                        $A.error("Error message: " +
                                 errors[0].message);
                    }
                } else {
                    $A.error("Unknown error");
                }
            } 
        });
        $A.enqueueAction(action);
        
    }
})