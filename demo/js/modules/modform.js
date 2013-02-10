define(function(){    
    
    var modform = {
           
        dependencies: {
            'validation': 'utils/validation'
        },
        
        validation_rules: {
            'fname': {
                'required': true,
                'minlength': 2
            },
            'lname': {
                'required': true,
                'minlength': 2
            }
        },
        
        events: {
            'submit form': 'processForm'
        },
    
        routes: {
            '' : 'renderModuleForm',
            'modone': 'renderModuleForm'
        },
    
        /**
         * Loads up this modules main view
         */
        renderModuleForm: function(){            
            // Render template
            Colt.render(this);
        },
        
        processForm: function(event){
            alert('Submitted!');
        }
        
    };
    
    return modform;
    
});