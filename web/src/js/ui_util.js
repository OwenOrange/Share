	function showAsCircle(id, img_src) {
		var image = new Image();
		image.src = img_src;
		var canvas = document.getElementById(id);
		if (canvas == null) {
			return;
		}

		var context = canvas.getContext("2d");
		image.onload = function() {
			context.beginPath();
			context.arc(canvas.clientLeft + canvas.clientWidth / 2,
					canvas.clientTop + canvas.clientHeight / 2,
					canvas.clientHeight / 2, 0, 2 * Math.PI);

			context.closePath();
			context.clip();
			context.drawImage(image, 0, 0, canvas.clientWidth,
					canvas.clientHeight);
		}
	}