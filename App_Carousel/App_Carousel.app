<aura:application>
    <!-- Loading Libraries i.e Bootstrap and jquery-->
    
    <meta name="viewport" content="width=device-width, initial-scale=1" />
	<link href='/resource/Resource/bootstrap3.2.0/css/bootstrap.min.css' rel="stylesheet"/>
    <aura:handler event="pets:requireJSEvent" action="{!c.initJS}"/>
    <aura:registerEvent type="pets:RequireJSEvent" name="requireJSEvent"/>
    <aura:handler name="init" value="{!this}" action="{!c.doInit}" />
    <script src="/resource/RequireJS" ></script> 
    
    <aura:attribute name="recId" type="String"/>
    
    <!-- load the main component -->
    <div class="container main-container mainDiv">
    	<pets:App_Carousel_Comp recId="{!v.recId}"></pets:App_Carousel_Comp>
    </div>
</aura:application>