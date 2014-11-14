({
	/*
    	Sets up the RequireJS library (async load)
    */
    doInit : function(component, event, helper){
        
        if (typeof require !== "undefined") {
            var evt = $A.get("e.pets:RequireJSEvent");
		    evt.fire();
        } else {
            var head = document.getElementsByTagName('head')[0];
            var script = document.createElement('script');
            
            script.src = "/resource/RequireJS"; 
            script.type = 'text/javascript';
            script.key = "/resource/RequireJS"; 
            script.helper = this;
            script.id = "script_" + component.getGlobalId();
            var hlp = helper;
            script.onload = function scriptLoaded(){
                var evt = $A.get("e.pets:RequireJSEvent");
		        evt.fire();
            };
            head.appendChild(script);
        }
    },
    
    initJS : function(component, event, helper){
        require.config({
            //Loading jquery and bootstrap
            paths: {
                "jquery": "/resource/Resource/bootstrap3.2.0/js/jquery.min.js?",
                "bootstrap": "/resource/Resource/bootstrap3.2.0/js/bootstrap.min.js?"
            }
        });
        console.log("RequiresJS has been loaded? "+(require !== "undefined"));
        //loading libraries sequentially
        require(["jquery"], function($) {
            console.log("jQuery has been loaded? "+($ !== "undefined"));
            require(["bootstrap"], function(bootstrap) {
                console.log("bootstrap has been loaded? "+(bootstrap !== "undefined"));
                //setting carousel
                $('.carousel').carousel({
                    interval: 33000
                }) 
                //enabling previous and next button of carousel
                $('.carousel-control.left').click(function() {
                    $('.carousel').carousel('prev');
                });
                
                $('.carousel-control.right').click(function() {
                    $('.carousel').carousel('next');
                });
            });//require end
        });//require end
    }
})