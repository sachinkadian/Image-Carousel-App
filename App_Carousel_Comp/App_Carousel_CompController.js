({
	getImages : function(component, event, helper) {
        console.log('Controller');
        
        //call method from helper to get all the images of record
		helper.getImagesFromRecord(component,event);		
	}
})