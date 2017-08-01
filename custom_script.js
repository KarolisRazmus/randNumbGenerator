var FastTyping = function () {

	const STATE_REGISTER = "register";
	const STATE_LEVEL_SELECTION = "level_select";
	const STATE_GAME = "game_start";
	const STATE_GAME_OVER = "game_over";
	var name;
	var state;


// ---------------------------         RegisterLogics        ---------------------------------


	var RegisterLogics = function () {
		
		var view = $('#register-body');

		this.show = function()
		{
			
			view.removeClass( "hidden" );
		
		}

		this.hide = function()
		{

			view.addClass( "hidden" );

		}

	}

	var register = new RegisterLogics();


// ---------------------------         LevelSelectLogics        ---------------------------------


	var LevelSelectLogics = function () {

		var view = $('#level_select-body');

		this.show = function()
		{
			
			view.removeClass( "hidden" );
		
		}

		this.hide = function()
		{

			view.addClass( "hidden" );

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

		lastState.show;

	}

	changeState(STATE_REGISTER);

}