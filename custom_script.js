var FastTyping = function () {

	const STATE_REGISTER = "register";
	const STATE_LEVEL_SELECTION = "level_select";
	const STATE_GAME = "game_start";
	const STATE_GAME_OVER = "game_over";
	var name;
	var state;
	var lastState;
	var level;


// ---------------------------         RegisterLogics        ---------------------------------


	var RegisterLogics = function () {
		
		var view = $('#register-body');
		var input = $('#register-input');
		var button = $('#register-button');
		button.prop('disabled', true);

		this.show = function()
		{
			
			view.removeClass( "hidden" );
		
			enable();
		}

		this.hide = function()
		{

			view.addClass( "hidden" );

		}

		function enable() 
		{

			input.keyup(function(){
        		if(input.val().length >= 3)
        			button.prop('disabled', false);
        		else
        			button.prop('disabled', true);

    		});

    		button.click(function () {
    			name = input.val();

				input.unbind();
				button.unbind();
				input.val('');

    			changeState(STATE_LEVEL_SELECTION);
    		});

		}

	}

	var register = new RegisterLogics();


// ---------------------------         LevelSelectLogics        ---------------------------------


	var LevelSelectLogics = function () {

		var view = $('#level_select-body');
		var radio = $('input:radio');
		var button = $('#level-button');
		button.prop('disabled', true);

		this.show = function()
		{
			
			view.removeClass( "hidden" );

			enable();
	
		}

		this.hide = function()
		{

			view.addClass( "hidden" );

		}

		function enable() 
		{

			radio.change(function(){
				if (radio.is(':checked')) {
					var radioChecked = $('input[name=optradio]:checked');
            		level = radioChecked.val();
            		button.prop('disabled', false);
		        } else {
		        	button.prop('disabled', true);
		  		}
		    });


    // 		button.click(function () {
    // 			name = input.val();

				// input.unbind();
				// button.unbind();
				// input.val('');

    // 			changeState(STATE_LEVEL_SELECTION);
    // 		});

		}

	}

	var level_select = new LevelSelectLogics();


// ---------------------------         GameStartLogics        ---------------------------------


	var GameStartLogics = function () {

		var view = $('#game_start-body');

		this.show = function()
		{
			
			view.removeClass( "hidden" );
		
		}

		this.hide = function()
		{

			view.addClass( "hidden" );

		}

	}

	var game_start = new GameStartLogics();


// ---------------------------         GameOverLogics        ---------------------------------


	var GameOverLogics = function () {

		var view = $('#game_over-body');

		this.show = function()
		{
			
			view.removeClass( "hidden" );
		
		}

		this.hide = function()
		{

			view.addClass( "hidden" );

		}

	}


	var game_over = new GameOverLogics();


// ---------------------------         changeState        ---------------------------------


	function changeState(value)
	{
		if(lastState)
			lastState.hide();

			switch(value) {
			    case STATE_REGISTER:
			        lastState = register;
			        break;
			    case STATE_LEVEL_SELECTION:
			        lastState = level_select;
			        break;
			    case STATE_GAME:
			        lastState = game_start;
			        break;
			    case STATE_GAME_OVER:
					lastState = game_over;
			        break;		        
			    default:
			        
			}

		lastState.show();

	}

	changeState(STATE_REGISTER);

}