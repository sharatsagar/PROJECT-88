var canvas=new fabric.canvas(myCanvas);

ball_y=0
ball_x=0
hole_y=400
hole_x=800

block_image_width = 5;
block_image_height = 5;

function load_img(){
fabric.image.fromURL(golf-h1.png, function(ING){
	hole_obj="ING"
	hole_obj.scaletowigth(50);
	hole_obj.scaletohight(50);
	hole_obj.set({
		top:hole_y,
		left:hole_x
	});
	canvas.add(hole_obj);
})
	new_image();

function new_image()
{
		fabric.image.fromURL(ball.png, function(ING){
			ball_obj="ING"
			ball_obj.scaletowigth(50);
			ball_obj.scaletohight(50);
			ball_obj.set({
				top:ball_y,
				left:ball_x
			});
			canvas.add(ball_obj);
		})
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_x==hole_x)&&(ball_y==hole_y)){
		canvas.remove(ball_obj)
	}
	document.getElementById("hd3").innerHTML="you have hit the goal!!!";
	document.getElementById("myCanvas").style.borderColor="red";	
	
        {
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ball_y <=450){
			ball_y=ball_y+block_image_height;
			console.log("block_image_height ="+block_image_height);
			console.log("when up arrow are pressed,X ="+ball_x+", x ="ball_y);
			canvas.remove(ball_obj);
			new_image
	}

	function down()
	{
		if(ball_y <=450){
			ball_y=ball_y+block_image_height;
			console.log("block_image_height ="+block_image_height);
			console.log("when down arrow are pressed,X ="+ball_x+", y ="ball_x);
			canvas.remove(ball_obj);
			new_image
		}

	}

	function left()
	{
		if(ball_x >5)
		{
				ball_y=ball_y+block_image_height;
				console.log("block_image_height ="+block_image_height);
				console.log("when down arrow are pressed,X ="+ball_x+", x="ball_y);
				canvas.remove(ball_obj);
				new_image	
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			ball_y=ball_y+block_image_height;
			console.log("block_image_height ="+block_image_height);
			console.log("when down arrow are pressed,X ="+ball_x+", y ="ball_x);
			canvas.remove(ball_obj)
			new_image
		}
	}
	
	}	
